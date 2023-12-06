from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime


app = Flask(__name__) 
CORS(app) 


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///listing.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db =SQLAlchemy(app)

class Listing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    price = db.Column(db.String(10), nullable=False)
    completed = db.Column(db.Boolean, default=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Title %r>' % self.id

@app.route('/')
def home():
    return "This is my backend code"

@app.route('/api', methods=['GET', 'POST'])
def Api():
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
            'completed': item.completed,
        })
        return {'listings': list_listing}

    elif request.method == 'POST':
        data = request.get_json()
        new_listing = Listing(
            title=data.get('Title'),
            description=data.get('Description'),
            category=data.get('Category'),
            price=data.get('Price')
        )
        db.session.add(new_listing)
        db.session.commit()
        return jsonify({'Listing added'}), 201

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
    