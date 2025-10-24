from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/tester', methods=['POST'])
def tester():
    data = request.get_json()
    return jsonify({"message": "Data received successfully!" + data})


if __name__ == "__main__":
    app.run(debug=True)

