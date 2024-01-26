from flask import Flask
from flask_cors import CORS


app = Flask(__name__) 
CORS(app) 

@app.route('/')
def home():
    return "This is my backend code"

@app.route('/api', methods=['GET'])
def api():
    return ({
        'userID': 1,
        'title': 'Your clothes',
        'completed': False
    })

if __name__ == "__main__": 
    app.run(debug = True)
    