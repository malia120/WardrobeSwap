from flask import Flask, render_template, redirect, url_for
#from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__) 
#template_folder="WardrobeSwap/frontend/src")
#db = SQLAlchemy(app)
#app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"

@app.route('/')
def home():
    return "This is my backend code"

if __name__ == "__main__": 
    app.run(debug = True)