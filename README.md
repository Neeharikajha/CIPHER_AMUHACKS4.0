# 🪙 Gullak — Micro-Savings for the Future

**Gullak** is a smart micro-pension platform built for India’s gig workers, daily wage earners, and people in the unorganized sector who currently lack access to formal retirement plans.

With small, automatic savings triggered by income detection via UPI/SMS, Gullak helps users effortlessly build long-term financial security — ₹10 at a time.

---

## 🌟 Why Gullak?

India has over 400 million informal workers, most of whom have no retirement security.

They move jobs frequently, often live paycheck-to-paycheck, and are left out of structured pension schemes.

Gullak empowers them to save in tiny, flexible amounts whenever they earn — building a portable savings identity they can carry wherever life takes them.

---

## ✨ Features

| Module | Description |
|--------|-------------|
| **📊 Dashboard** | View total balance, monthly savings, savings rate — all in one glance |
| **📉 Savings Summary** | Visual monthly summary using interactive charts for easy tracking |
| **📜 Transaction History** | See all recent transactions and initiate one-click micro-savings |
| **💸 Razorpay Integration** | Smooth, secure payments via Razorpay |
| **📈 Analytics** | Breakdown of daily, monthly, and yearly savings patterns |
| **🔮 Forecast Tool** | Set goals or daily savings — see projected results over time |
| **🎯 Filters** | Short-term, medium-term, and long-term planning modes |
| **👤 User Profile** | View your account, login details, and savings identity |

---

## 🖼️ Screenshots

### 🔐 Login Page


### 🔐 Landing Page
![WhatsApp Image 2025-04-13 at 22 57 49_18b4d91b](https://github.com/user-attachments/assets/ea1b4317-b5af-48db-82c6-99785a683eee)

### Features :
![features](https://github.com/user-attachments/assets/d58c9a71-47ef-43d9-81ae-206a09034965)

### 🧮 Dashboard View
![image](https://github.com/user-attachments/assets/b1d728af-fb91-4e1f-b6a9-d6d53c3c0d34)

### 📈 Analytics & Forecast
![image](https://github.com/user-attachments/assets/da5bbd95-8726-45de-bfbe-3806cc3d2a29)
![image](https://github.com/user-attachments/assets/8ac66c19-fc01-44c6-ab9e-55e36d5597f5)

### 💸 Razorpay Integration
![image](https://github.com/user-attachments/assets/1c42e632-aa8c-40a3-bbe0-e45278438b72)

---

## 🛠 Tech Stack

### 🖥 Frontend
- Next.js (App Router)
- Tailwind CSS
- Chart.js / Recharts
- Razorpay JS SDK

### 🔧 Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Razorpay Webhook for payment verification

### 🧠 AI Service
- Python FastAPI
- Uvicorn
- Trained ML/AI model for insights

---

## ⚙️ Installation

### 1. Clone the Monorepo

```bash
git clone https://github.com/yourusername/gullak.git
cd gullak

. Install Dependencies
📦 Root Monorepo

bash
Copy
Edit
npm install
🤖 AI Service (Python FastAPI)

bash
Copy
Edit
cd ai_service
pip install -r requirements.txt
🚀 Running the App
Open 3 terminals (or use VSCode multi-terminal):

▶️ Frontend (Next.js)

bash
Copy
Edit
cd frontend
npm run dev
Runs at: http://localhost:3000

▶️ Backend (Express + MongoDB)

bash
Copy
Edit
cd backend
npm run start
Runs at: http://localhost:5000

Make sure MongoDB is running locally or configure your connection string in backend/.env.

▶️ AI Service (FastAPI)

bash
Copy
Edit
cd ai_service
python -m uvicorn main:app --reload
Runs at: http://localhost:8000
