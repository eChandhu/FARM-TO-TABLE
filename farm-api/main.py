# main.py
from data_generation import generate_data
from model_training import train_model
from prediction import make_prediction

if __name__ == '__main__':
    # Generate data
    data = generate_data()

    # Train the model
    model, mse, r2, y_test, y_pred = train_model(data)
    
    # Print evaluation results
    print(f'Mean Squared Error: {mse}')
    print(f'R^2 Score: {r2}')

    # Example prediction
    predicted_demand = make_prediction(model, day_of_week=1, temperature=22, previous_demand=50)
    print(f'Predicted Demand: {predicted_demand}')
