# SubmitX - Assignment Submission Portal
SubmitX is a backend system for managing assignment submissions, allowing users to upload assignments and admins to review them. Built using Node.js, Express.js, and MongoDB, the system is robust and easy to use

## Features

####  1.User and Admin roles with JWT-based authentication.
##### 2.  Users can:
    -->   Register and log in.
    --> Upload assignments.
    --> View a list of admins.
##### 2.  Admins can:
    --> View assignments tagged to them.
    --> Accept or reject assignments.

#### 4.Error handling and input validation for all endpoints.


### Technolgies Used:
###### Backend: Node.js, Express.js
###### Database: MongoDB (with Mongoose for ORM)
###### Authentication: JSON Web Tokens (JWT)


## Installation and Setup
#### Clone the repossitory:
```bash 
git clone https://github.com/jai1726/submitX.git
cd submitX
```

#### Backend Setup

#### Install Dependencies
```bash 
npm install
```

#### Create .env file
```bash
MONGODB_URI=your_mongodb_uri
DB_Name=your_database_name
JWT_SECRET=your_secret_key
```

#### Start the Backend Server
```bash
npm start
```

#### Access the App 
Open your browser and go to http://localhost:5000


## **API Endpoints**

### **Auth Endpoints**
| Method | Endpoint        | Description                      | Payload Example                                                                 |
|--------|-----------------|----------------------------------|---------------------------------------------------------------------------------|
| POST   | `/api/auth/signup`  | Register a user or admin         | `{ "name": "John", "email": "john@example.com", "password": "123456", "role": "user" }` |
| POST   | `/api/auth/login`   | Login a user or admin            | `{ "email": "john@example.com", "password": "123456" }`                         |

---

### **User Endpoints**
| Method | Endpoint          | Description                                        | Payload Example                                                   |
|--------|-------------------|----------------------------------------------------|-------------------------------------------------------------------|
| POST   | `/api/users/upload`   | Upload an assignment for an admin                   | `{ "task": "Complete the form", "adminName": "Alok" }`             |
| GET    | `/api/users/admins`   | Fetch all admins for assignment tagging             | N/A                                                               |

---

### **Admin Endpoints**
| Method | Endpoint                         | Description                                        | Payload Example                                                   |
|--------|----------------------------------|----------------------------------------------------|-------------------------------------------------------------------|
| GET    | `/api/admin/assignments`         | View all assignments tagged to the admin           | N/A                                                               |
| POST   | `/api/admin/assignments/:id/accept` | Accept an assignment                               | N/A                                                               |
| POST   | `/api/admin/assignments/:id/reject` | Reject an assignment                               | N/A                                                               |



## **Project Folder Structure**
```bash
.
├── controllers/              # Contains route logic (e.g., userController.js, adminController.js)
├── middleware/               # Authentication and role-based middleware (e.g., authMiddleware.js)
├── models/                   # MongoDB schemas (e.g., userModel.js, assignmentModel.js)
├── routes/                   # API route definitions (e.g., userRoutes.js, adminRoutes.js)
├── .env                      # Environment variables (e.g., JWT_SECRET_KEY, MONGO_URI)
├── app.js                    # Main application file where server is configured
├── package.json              # Project dependencies and scripts 
├── README.md                 # Documentation file 
└── config/                   # Database connection and other config files 
└── db.js                     # MongoDB connection setup
```
---


### Contributors
##### Dende Jagadeesh
jagadeeshdende@gmail.com

Linkedin:https://www.linkedin.com/in/jagadeesh-dende-67b625224/
