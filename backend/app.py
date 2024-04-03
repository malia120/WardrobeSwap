from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime
from flask_migrate import Migrate
from flask import send_from_directory
import os
from flask import jsonify
from flask_bcrypt import Bcrypt


app = Flask(__name__) 

CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000", "supports_credentials": True}})
basedir = os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'instance', 'app.db')
app.config['SQLALCHEMY_BINDS'] = {
    "user": 'sqlite:///' + os.path.join(basedir, 'instance', 'user.db'),
    "listing": 'sqlite:///' + os.path.join(basedir, 'instance', 'listing.db')
}
app.config['UPLOAD_FOLDER'] = r'C:\Users\Maliha\Desktop\Website\PROJECT\frontend\src\Upload'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_POOL_SIZE'] = 20  
app.config['SQLALCHEMY_MAX_OVERFLOW'] = 5   
bcrypt = Bcrypt(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Listing(db.Model):
    """
    Represents a listing in the application.

    Attributes: 
    - id (int): The unique primary key for the listing.
    - title (str): The title of the listing.
    - description (str): The description of the listing.
    - category (str): The category to which the listing belongs.
    - price (str): The price associated with the listing.
    - date_created (datetime): The timestamp indicating when the listing was created.
    """
    __bind_key__ = 'listing'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    price = db.Column(db.String(10), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Title %r>' % self.id
    
class User(db.Model):
    __bind_key__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/')
def home():
    """
    Returns a simple message showing that the user has reached default page.

    Returns:
    str: A message showing the user how to view the database.
    """
    return "enter /api after the link to see all the items in the database"


@app.route('/api/listing', methods=['GET', 'POST'])

def Api():

    """
    Handles GET and POST requests for the '/api'.

    GET Request:
    Returns an object that has all the information about the listings.

    POST Request:
    Adds a new listing on the data provided in the sell form.

    Returns:
    - GET Request: JSON object with a list of all listings.
    - POST Request: JSON object with a confirmation message.
    """

    
    if request.method == 'GET':
        all_listing = Listing.query.all()
        list_listing = []
        for item in all_listing:
            list_listing.append ({
                'id': item.id,
                'title': item.title,
                'description': item.description,
                'category': item.category,
                'price': item.price,
                'image': item.image,
                'date_created': item.date_created.strftime('%Y-%m-%d %H:%M:%S')

        })
        return {'listings': list_listing}
    elif request.method == 'POST':
        data = request.form 
        title = data.get('Title')
        description = data.get('Description')
        category = data.get('Category')
        price = data.get('Price')
        image = request.files['Image']
        if not all([title, description, category, price, image]):
            return jsonify({'error': 'You must enter all the data in order to submit'}), 400

        new_listing = Listing(
            title=title,
            description=description,
            category=category,
            price=price,
            image=image.filename, 
            date_created=datetime.utcnow()
        )
        db.session.add(new_listing)
        db.session.commit()
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], image.filename))
        return jsonify({'message': 'Listing added successfully'}), 201
    
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/api/signup', methods=['POST', 'GET'])
def signup():
    if request.method == 'POST':
        data = request.json
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not all([username, email, password]):
            return jsonify({'error': 'Please provide all required fields'}), 400
        
        existing_user = User.query.filter_by(username=username).first()
        existing_email = User.query.filter_by(email=email).first()

        if existing_user:
            return jsonify({'error': 'Username already exists'}), 409
        elif existing_email:
            return jsonify({'error': 'Email already exists'}), 409
        
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'Signup successful'}), 201

    elif request.method == 'GET':
        all_user = User.query.all()
        user_list = []
        for user in all_user:
            user_list.append({
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'password': user.password,
                'date_created': user.date_created.strftime('%Y-%m-%d %H:%M:%S')
    })
    return jsonify({'user': user_list}), 200

@app.route('/api/login', methods=['POST'])
def login():
    if request.method == 'POST':
        print("Login request received") 
        data = request.json
        print("Data received:", data)  
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            return jsonify({'message': 'Login successful'}), 200
        else:
            return jsonify({'error': 'Invalid username or password'}), 401

if __name__ == "__main__":
    with app.app_context():
        try:
            db.drop_all()  
            db.create_all()
        except Exception as e:
            print("An error occurred while creating tables:", str(e))
    app.run(debug=True)