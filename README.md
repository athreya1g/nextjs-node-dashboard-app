Next.js + Node Dashboard App
This is a full-stack sample app with:

Frontend: Next.js + TypeScript + Ant Design + Styled-Components

Backend: Node.js + Express (with static data)

Basic CRUD routes for users and posts

Unit tests using Jest + React Testing Library (frontend) and Jest 

Features
Responsive sidebar layout with Ant Design
Fetch user profile dynamically
Two routes: Dashboard, Blogs
View blog posts for a user
Edit blog posts with PUT request
Backend routes with static sample data
Unit tests for frontend and backend
Global error handling in the backend

Tech Stack
React / Next.js

TypeScript

Ant Design

Styled-Components

Node.js

Express

Jest

How to run from Git
1. Clone the repo
git clone <YOUR_REPO_URL>
cd nextjs-node-dashboard-app

2. Setup and run the backend
cd backend
npm install
npm start
This will start the Node server on http://localhost:5000.

Tip:
You can run backend tests:
npm test

3. Setup and run the frontend
cd qb-app
npm install
npm dev
npm run dev
This will start the Next.js app on http://localhost:3000.

Tip:
Frontend tests can be run with:
npm test

📝 Environment
Create a .env.local in the frontend folder:
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000