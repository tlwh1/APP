from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({
        "message": "안녕하세요, 김개발입니다!",
        "projects": ["프로젝트 1", "프로젝트 2"],
        "tech_stack": ["React", "Next.js", "Node.js"]
    })

if __name__ == '__main__':
    app.run(debug=True)
