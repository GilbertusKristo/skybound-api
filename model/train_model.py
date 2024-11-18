# model/train_model.py
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split # type: ignore
import pickle

# Load the dataset
data = pd.read_csv('Data_final.csv')  # Make sure this CSV file is available

# Separate features and target
X = data[['O_score', 'C_score', 'E_score', 'A_score', 'N_score', 'Numerical Aptitude', 
          'Spatial Aptitude', 'Perceptual Aptitude', 'Abstract Reason', 'Verbal Reasoning']]
y = data['Career']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the model
with open('career_predictor.pkl', 'wb') as f:
    pickle.dump(model, f)
