from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

# Load model
model = joblib.load("savings_model.pkl")

app = FastAPI()

# Request models
class ForecastInput(BaseModel):
     total_inc: float
     total_exp: float

class SuggestionInput(BaseModel):
    weekly_income: float

class DurationForecastInput(BaseModel):
    weekly_income: float
    weekly_expense: float
    weeks: int

class GoalInput(BaseModel):
    weekly_income: float
    weekly_expense: float
    goal_amount: float

class RecommendationInput(BaseModel):
    weekly_income: float
    goal_amount: float
    weeks: int

@app.get("/")
def read_root():
    return {"message": "AI Service is running!"}

@app.post("/forecast")
def forecast_savings(data: ForecastInput):
    prediction = model.predict([[data.total_inc, data.total_exp]])
    return {"predicted_savings": round(prediction[0], 2)}

@app.post("/suggestion")
def savings_suggestion(data: SuggestionInput):
    # Basic logic: Suggest saving 20% of income
    suggestion = 0.2 * data.weekly_income
    return {"suggested_weekly_saving": round(suggestion, 2)}

@app.post("/forecast_duration")
def forecast_duration(data: DurationForecastInput):
    weekly_saving = data.weekly_income - data.weekly_expense
    total_saving = weekly_saving * data.weeks
    return {
        "estimated_total_saving": round(total_saving, 2),
        "weekly_saving": round(weekly_saving, 2),
        "duration_weeks": data.weeks
    }

@app.post("/savings_goal")
def savings_goal(data: GoalInput):
    weekly_saving = data.weekly_income - data.weekly_expense
    if weekly_saving <= 0:
        return {"message": "Saving goal not achievable with current income/expense"}
    weeks_needed = data.goal_amount / weekly_saving
    return {
        "weeks_needed": int(weeks_needed),
        "weekly_saving": round(weekly_saving, 2)
    }

@app.post("/recommendation")
def recommend_savings_plan(data: RecommendationInput):
    needed_weekly_saving = data.goal_amount / data.weeks
    recommended_expense = data.weekly_income - needed_weekly_saving

    if recommended_expense < 0:
        return {"message": "Goal not achievable in given time with current income"}

    return {
        "recommended_weekly_expense": round(recommended_expense, 2),
        "needed_weekly_saving": round(needed_weekly_saving, 2)
    }