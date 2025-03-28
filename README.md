
# User Manager

## Introduction
**User Manager** is a React application built for the **EmployWise Assignment** that integrates with the [Reqres API](https://reqres.in/) to perform user management functions. The app allows users to log in, view a paginated list of users, and perform CRUD operations such as editing and deleting users.

## Deployment
The project is deployed at: **[Live Demo](https://user-manager-40.netlify.app/)**

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Error Handling](#error-handling)
- [Bonus Features](#bonus-features)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [License](#license)

## Features
### Level 1: Authentication Screen
- User login using email and password.
- Authentication with `POST /api/login`.
- Stores authentication token upon successful login.
- Redirects to the Users List page.

### Level 2: List All Users
- Fetches and displays a paginated list of users from `GET /api/users?page=1`.
- Displays user details (first name, last name, and avatar).
- Implements pagination or lazy loading.

### Level 3: Edit, Delete, and Update Users
- Edit user details via `PUT /api/users/{id}`.
- Delete users via `DELETE /api/users/{id}`.
- Displays success/error messages for each operation.

## Technologies Used
- **React** (Frontend framework)
- **Axios** (HTTP requests)
- **React Router** (Navigation)
- **Tailwind CSS + DaisyUI** (UI styling)
- **LocalForage** (Local storage management)
- **React Hot Toast** (Notifications)
- **Vite** (Development server)
- **ESLint** (Code quality)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/employeewise.git
   cd employeewise
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Open the application in your browser (`http://localhost:5173`).
2. Log in using:
   - **Email**: eve.holt@reqres.in
   - **Password**: cityslicka
3. Navigate to the Users List page.
4. Perform user management tasks (edit/delete users).

## API Endpoints
- **Login**: `POST /api/login`
- **Fetch Users**: `GET /api/users?page=1`
- **Update User**: `PUT /api/users/{id}`
- **Delete User**: `DELETE /api/users/{id}`

## Project Structure
```
/employeewise
│── src
│   ├── components        # Reusable UI components
│   ├── pages             # Application pages (Login, Users List, Update)
│   ├── main.jsx          # Entry point
│── public
│── package.json
│── vite.config.js
│── README.md
```

## Configuration
- **Authentication Token**: Stored in `localStorage` for session persistence.
- **API Base URL**: `https://reqres.in/`.

## Error Handling
- Displays appropriate messages for failed login, API errors, and validation issues.
- Redirects users to the login page if the token is missing or expired.

## Extra Features
- Client-side search and filtering for users.
- React Router for seamless navigation.
- Hosted on a free deployment platform ( Netlify ).



