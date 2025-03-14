# predictor.py
import joblib
import numpy as np
import pymongo
import json

# Load your trained model
model = joblib.load('path_to_your_model/model.pkl')

# Connect to MongoDB
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['farmDB']
farms_collection = db['farms']


def predict(farm_id, crop_id):
    try:
        # Fetch data from MongoDB
        farm = farms_collection.find_one({"farm_id": farm_id})
        if not farm:
            return None  # Farm not found

        crop = next((crop for crop in farm['crops'] if crop['crop_id'] == crop_id), None)
        if not crop:
            return None  # Crop not found

        # Prepare the input data for prediction
        features = [
            crop['processing']['distribution']['distribution_date'],
            # Add other features required by your model
        ]
        input_data = np.array(features).reshape(1, -1)  # Adjust shape if necessary
        prediction = model.predict(input_data)
        return prediction
    except Exception as e:
        print(f"Error during prediction: {e}")
        return None
