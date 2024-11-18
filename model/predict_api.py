# model/predict_api.py
from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# Load the trained model
with open('career_predictor.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = [
        data['O_score'],
        data['C_score'],
        data['E_score'],
        data['A_score'],
        data['N_score'],
        data['Numerical Aptitude'],
        data['Spatial Aptitude'],
        data['Perceptual Aptitude'],
        data['Abstract Reason'],
        data['Verbal Reasoning']
    ]
    prediction = model.predict([features])[0]
    return jsonify({'predicted_career': prediction})

if __name__ == '__main__':
    app.run(port=5001)
