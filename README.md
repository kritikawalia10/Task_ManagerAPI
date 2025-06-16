# 📌 Task Manager Backend API

The **Task Manager Backend API** is a secure and scalable RESTful API built with **Node.js** and **Express.js**. It allows registered users to manage their personal tasks by providing full **CRUD (Create, Read, Update, Delete)** functionality, along with secure **JWT-based authentication**, **input validation**, and **protected routes**.

This project is structured following the **MVC pattern** and is designed to be production-ready, fully documented using **Swagger**, and easily testable via **Postman**. It is a practical backend application aimed at learning and implementing real-world backend concepts including authentication, error handling, deployment, and more.

---

## 🚀 Project Features

- User Registration & Login
- JWT Authentication & Protected Routes
- CRUD Operations for User-Specific Tasks
- Input Validation (Joi or express-validator)
- Centralized Error Handling
- API Documentation using Swagger
- Environment-based Configuration
- Project Deployment (Render or similar)
- Version Control with Git & GitHub

---

## 🔧 Tech Stack

| Category        | Technology              |
|----------------|--------------------------|
| **Backend**     | Node.js, Express.js      |
| **Authentication** | JWT, bcrypt              |
| **Validation**  | Joi or express-validator |
| **Database**    | MongoDB (Mongoose)       |
| **Documentation** | Swagger                |
| **Deployment**  | Render                   |
| **Testing**     | Postman                  |
| **Version Control** | Git, GitHub            |

---


## deployed link : https://task-managerapi-1.onrender.com/



# 📬 API Endpoints
## 👤 Auth Routes (/api/auth)
Method	Endpoint	Description	Auth Required
POST	/register	Register new user	❌
POST	/login	Login existing user	❌

## ✅ Task Routes (/api/tasks) – Protected
Method	Endpoint	Description
GET	/api/tasks	Get all tasks for logged-in user
POST	/api/tasks	Create a task
GET	/api/tasks/:id	Get single task by ID
PUT	/api/tasks/:id	Update task by ID
DELETE	/api/tasks/:id	Delete task by ID

## 🧪 Testing Tasks with Token
Send Authorization: Bearer <your_token> in headers after login.

## Walkthrough Video : https://drive.google.com/file/d/11LDIRZKbu7x9E7Mz75dYy1T5EsBgV9_K/view?usp=sharing