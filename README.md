Boomiculture
AI-powered fertilizer optimization and smart crop management platform with React frontend and Flask backend.

Setup Instructions
1. Clone the repository
bash
git clone https://github.com/your-username/boomiculture.git
cd boomiculture

2. Backend setup (Flask)
bash
cd backend

# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate  # macOS/Linux
# Or on Windows PowerShell:
# .\venv\Scripts\Activate

# Install dependencies
pip install -r requirements.txt

# Run Flask server
python app.py
Flask backend will run on: http://localhost:5000

3. Frontend setup (React + Tailwind)
bash
cd ../frontend

# Install dependencies
npm install

# Start React dev server
npm start
React app will run on: http://localhost:3000

4. Running the Full App
Make sure Flask backend is running before starting React frontend.

React fetches API data from Flask backend automatically.

Project Structure
text
boomiculture/
├── backend/          # Flask backend API
├── frontend/         # React + Tailwind frontend
├── README.md         # This file
└── .gitignore        # Git ignore rules


Feel free to open issues or reach out if you need help!