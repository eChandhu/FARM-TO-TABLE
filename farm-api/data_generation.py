# data_generation.py
import pandas as pd
import numpy as np

def generate_data(data_size=1000):
    np.random.seed(42)  # For reproducibility
    data = {
        'day_of_week': np.random.randint(0, 7, size=data_size),  # 0: Sunday, 6: Saturday
        'temperature': np.random.uniform(15, 30, size=data_size),  # Random temperatures
        'previous_demand': np.random.randint(10, 100, size=data_size)  # Previous demand values
    }

    df = pd.DataFrame(data)
    df['demand'] = (10 + (df['day_of_week'] * 2) + (df['temperature'] * 1.5) +
                    (df['previous_demand'] * 0.5) + np.random.normal(0, 5, data_size))

    return df
