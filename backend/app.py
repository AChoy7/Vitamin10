from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "Don't cry because it's over, smile because it happened.",
    "Be yourself; everyone else is already taken.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "No one can make you feel inferior without your consent.",
    "You gotta be odd to be number one",
    "The work instills the worth"
]

@app.route("/api/quote")
def quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == "__main__":
    app.run(debug=True)
