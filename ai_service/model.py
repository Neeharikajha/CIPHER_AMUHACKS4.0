from sklearn.linear_model import LinearRegression
import numpy as np
import joblib

def train_and_save_model():
    # Dummy data
    X = np.array([[1000], [2000], [3000], [4000], [5000]])  # income
    y = np.array([200, 400, 600, 800, 1000])  # savings

    model = LinearRegression()
    model.fit(X, y)

    joblib.dump(model, "savings_model.pkl")

if __name__ == "__main__":
    train_and_save_model()
