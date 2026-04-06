# ⚙️ Bharat Yatra - Backend

This is the backend server for the **Bharat Yatra Travel Website**.
It handles API requests, server-side logic, and future integrations like booking and payments.

---

## ✨ Features

* 🌐 REST API for handling frontend requests
* 🔐 Environment-based configuration using `.env`
* ⚡ Scalable backend structure
* 🔗 Ready for integration with frontend (Next.js)
* 💳 Payment integration support (Razorpay - if added)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* JavaScript

---

## 📁 Project Structure

```
src/
  ├── routes/
  ├── controllers/
  ├── models/
  └── server.js
```

---

## 🚀 Getting Started (Run Locally)

1. Clone the repository

```bash
git clone https://github.com/Aashi17v/BharatYatra_Backend.git
```

2. Navigate to project folder

```bash
cd BharatYatra_Backend
```

3. Install dependencies

```bash
npm install
```

4. Create `.env` file in root directory

```env
PORT=5000
MONGO_URI=your_mongodb_connection
RAZORPAY_KEY=your_key
```

5. Start the server

```bash
npm start
```

6. Server will run on

```bash
http://localhost:5000
```

---

## 🔐 Environment Variables

Make sure to add these variables in your `.env` file:

* `PORT`
* `MONGO_URI`
* `RAZORPAY_KEY`

---

## 🌐 API Usage

Example endpoint:

```bash
GET /api/
```

Frontend can connect using:

```js
fetch("http://localhost:5000/api/")
```

---

## 🎯 Purpose

This backend is built to support the Bharat Yatra travel platform by handling data, APIs, and future features like booking and payments.

---

## 📌 Future Improvements

* 🧾 Booking system implementation
* 💳 Payment gateway integration
* 🗄️ Database integration (MongoDB)
* 🔐 Authentication & authorization

---

## 👩‍💻 Author

**Aashi Verma**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
