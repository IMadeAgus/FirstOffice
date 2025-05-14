# 🏢 Rent Office Web App

*Rent Office* is a fullstack web application for renting office spaces online, with easy search functionality by city, office details, and a login-free booking system. Admins can manage data through a dashboard and provide data via REST API.

## 🔗 Links

- 🔴 **Live Demo** – *Coming Soon*


## 📌 Project Overview

- **Project Type**: Personal Project / Portfolio
- **Structure**: Fullstack – frontend and backend in separate folders
- **Development Period**: October 2024
- **Role**: Fullstack Web Developer

## 🛠️ Technologies Used

### Frontend
- **React** with **TypeScript**
- **React Router DOM** – Page routing
- **Zod** – Form validation
- **Tailwind CSS** – Responsive and modern styling
- **REST API** – Data consumption from Laravel backend

### Backend
- **Laravel 11**
- **FilamentPHP** – Admin panel
- **Laravel Sanctum** – Admin authentication
- **Laravel API Resources** – Providing data in JSON format
- **MySQL** – Relational database

## 📦 Folder Structure

```bash
📂 rent-office-project
├── 📁 frontend     # React + TS + Tailwind
└── 📁 backend      # Laravel + Filament + API
```

## ✨ Application Features
For Users
- 🔍 List of all available offices
- 🏙️ Filter offices by city
- 🧾 Office details (facilities, price, capacity)
- 📱 Book offices without login – only with phone number
- 💸 Payment through unique code (automatically generated)

For Admins
- 🔐 Login through Filament Admin
- 📋 CRUD operations for offices and cities
- 🧰 Booking Management
- 🔑 API Key Management
- 📊 Dashboard for office & booking data

## Challenges - Solutions - Impact

Challenges

- Frontend-Backend Synchronization: Ensuring smooth data communication between React and Laravel
- Data Validation: Ensuring booking data is valid before entering the database
- UI Responsiveness: Building interfaces that function optimally across various devices
- API Performance: Optimizing API responses as data volume increases

Solutions

- Use of TypeScript interfaces aligned with Laravel API Resources
- Layered validation with Zod (frontend) and Request Validation (backend)
- Leveraging Tailwind CSS with a mobile-first design approach
- Implementation of API pagination and eager loading to optimize database queries

Impact

- A user-friendly office rental platform with simplified booking process
- Reduced development time while maintaining robust data management
- Improved administrative workflow efficiency
- Optimized application performance for large datasets
- Consistent experience across desktop and mobile devices

📘 Lessons Learned

From this project, I gained valuable experience in fullstack development combining React and Laravel:

- Improved understanding of TypeScript and React for frontend development
- Mastered Laravel API Resources for structured data handling
- Learned efficient admin panel creation with FilamentPHP
- Enhanced skills in responsive design with Tailwind CSS

⚙️ Installation Guide
1️⃣ Backend (Laravel + Filament)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate 
php artisan serve
```
Ensure .env is properly configured for database connection.

## Create a admin account
You can create a new admin account with the following command:
```bash
php artisan make:filament-user
```


2️⃣ Frontend (React + TS + Tailwind)
```bash
cd frontend
npm install
npm run dev
```
Make sure VITE_API_URL is set in the frontend .env to access the backend API.

## 📲 Application Usage

1. Open the main page and view the list of offices
2. Filter by city
3. Click on an office to view details
4. Book by entering name, phone number, and booking date
5. You will receive a unique payment code that can be used for confirmation

## 🔒 Admin Login

1. Visit: /admin/login
2. Enter admin email and password
3. Easily manage office data, cities, bookings, and API keys through the Filament Admin Panel

✉️ Contact
For questions or collaborations, please contact me via email or through the contact page of this project.

Thank you for using Rent Office! 🚀

