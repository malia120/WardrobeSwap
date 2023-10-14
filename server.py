from flask import Flask, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__, template_folder= "Frontend")
db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"

@app.route('/')
def home():
    return render_template('home.html')

if __name__ == "__main__":
    app.run(debug = True)