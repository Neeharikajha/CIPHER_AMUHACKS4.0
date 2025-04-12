import pandas as pd

# Load the dataset
df = pd.read_csv("filipino_data.csv")

# Preview the dataset
# print("Columns:", df.columns)
# print(df.head())
columns_to_drop=['Region','Agricultural Household indicator','Imputed House Rental Value','Crop Farming and Gardening expenses',
                  'Household Head Sex',
       'Household Head Age', 'Household Head Marital Status',    
       'Household Head Highest Grade Completed',
       'Household Head Job or Business Indicator', 'Household Head Occupation',
       'Household Head Class of Worker', 'Type of Household',    
       'Total Number of Family members',
       'Members with age less than 5 year old',
       'Members with age 5 - 17 years old',
       'Total number of family members employed', 'Type of Building/House',
       'Type of Roof', 'Type of Walls', 'House Floor Area', 'House Age',
       'Number of bedrooms', 'Tenure Status', 'Toilet Facilities',
       'Electricity', 'Main Source of Water Supply', 'Number of Television',
       'Number of CD/VCD/DVD', 'Number of Component/Stereo set', 
       'Number of Refrigerator/Freezer', 'Number of Washing Machine',
       'Number of Airconditioner', 'Number of Car, Jeep, Van',   
       'Number of Landline/wireless telephones', 'Number of Cellular phone',
'Gas Range',
       'Number of Motorized Banca', 'Number of Motorcycle/Tricycle']
df = df.drop(columns=columns_to_drop, errors='ignore')
# print(df.head())

exp_cols=['Total Food Expenditure', 'Bread and Cereals Expenditure', 'Total Rice Expenditure',
       'Meat Expenditure', 'Total Fish and  marine products Expenditure',
       'Fruit Expenditure', 'Vegetables Expenditure',
       'Restaurant and hotels Expenditure', 'Alcoholic Beverages Expenditure',
       'Tobacco Expenditure', 'Clothing, Footwear and Other Wear Expenditure',
       'Housing and water Expenditure', 'Medical Care Expenditure', 'Transportation Expenditure',
       'Communication Expenditure', 'Education Expenditure',
       'Miscellaneous Goods and Services Expenditure',
       'Special Occasions Expenditure' ]
df["total_exp"]=df[exp_cols].sum(axis=1)
# print(df["total_exp"])

income_cols=['Total Household Income','Main Source of Income','Total Income from Entrepreneurial Acitivites']
for col in income_cols:
    df[col] = pd.to_numeric(df[col], errors='coerce')
df["total_inc"]=df[income_cols].sum(axis=1)
# print(df["total_inc"])
df["savings"] = df["total_inc"] - df["total_exp"]
# print(df["savings"])


# 1. Select features and target
X = df[["total_inc", "total_exp"]]
y = df["savings"]

# 2. Split the data
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Train the model
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)

# 4. Save the model
import joblib
joblib.dump(model, "savings_model.pkl")

# 5. Optional: print accuracy
print("Model R² score:", model.score(X_test, y_test))
