from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime
from flask_migrate import Migrate
import os


app = Flask(__name__) 

CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///listing.db'
app.config['UPLOAD_FOLDER'] = r'C:\Users\Maliha\Desktop\Website\PROJECT\frontend\src\Upload'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_POOL_SIZE'] = 20  
app.config['SQLALCHEMY_MAX_OVERFLOW'] = 5  
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
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    price = db.Column(db.String(10), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Title %r>' % self.id

@app.route('/')
def home():
    """
    Returns a simple message showing that the user has reached default page.

    Returns:
    str: A message showing the user how to view the database.
    """
    return "enter /api after the link to see all the items in the database"


@app.route('/api', methods=['GET', 'POST'])

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
    
    

if __name__ == "__main__":
    CORS(app)
    app.run(debug=True)
    