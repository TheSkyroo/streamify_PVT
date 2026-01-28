# Streamify 🎧💬

![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey)
![Status](https://img.shields.io/badge/Frontend-In%20Progress-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

**Streamify** is a full-stack application designed with a **clean, modular architecture**, where the backend and frontend are developed and maintained independently. This structure improves scalability, readability, and long-term maintainability.

-  **Backend**: Completed and production-ready  
-  **Frontend**: Under active maintenance 

Each major component lives in its own folder with a dedicated `README.md`.  
This root document provides a high-level overview of the project.

---

## 📁 Project Structure

```text
Streamify/
│
├── backend/        # Express.js API, database, authentication, chat logic
│   └── README.md   # Backend-specific documentation
│
├── frontend/       # Client-side application
│   └── README.md   # Frontend-specific documentation
│
└── README.md       # Root project overview
```
## 🚀 Project Overview

The backend forms the backbone of **Streamify**, handling:

- Authentication and authorization
- Database operations
- Real-time chat functionality
- API endpoints for frontend consumption

The frontend is developed separately and communicates with the backend via APIs.  
This separation of concerns allows contributors to work on either side without friction and makes the codebase easier to understand and scale.

---

## 🛠 Prerequisites

Make sure you have the following installed before running the project:

- Node.js (v16 or higher recommended)
- MongoDB
- Stream Chat account

---

## 📝 Additional Notes

- Both `backend` and `frontend` folders include their own `README.md` files with setup and usage instructions.
- The modular structure improves collaboration, testing, and future feature expansion.
- Designed with real-world production practices in mind.

---

## 📌 Status

- **Backend**: Complete
- **Frontend**: Maintenance
