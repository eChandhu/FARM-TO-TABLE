import pandas as pd
import sys
import joblib

# Load saved model
model = joblib.load('model.pkl')

# Get inputs from command line
day_of_week = int(sys.argv[1])
temperature = float(sys.argv[2])
previous_demand = float(sys.argv[3])

def make_prediction(day_of_week, temperature, previous_demand):
    new_data = pd.DataFrame({
        'day_of_week': [day_of_week],
        'temperature': [temperature],
        'previous_demand': [previous_demand]
    })

    predicted_demand = model.predict(new_data)
    return predicted_demand[0]

# Output the prediction result
print(make_prediction(day_of_week, temperature, previous_demand))
