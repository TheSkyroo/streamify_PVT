# Streamify Backend

This is the backend API for Streamify, built with Node.js and Express. It handles user authentication, data management, and integration with Stream SDKs for chat and video features.

## Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time & Media**: [Stream Chat SDK](https://getstream.io/chat/docs/node/)

## Prerequisites

- Node.js
- MongoDB Instance (Local or Atlas)
- Stream API Credentials

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
JWT_SECRET_KEY=your_super_secret_jwt_key
NODE_ENV=development

# Stream API Configuration
# Note: The variable names strictly follow the codebase naming convention.
STEAM_API_key=your_stream_api_key
STEAM_API_SECRET=your_stream_api_secret
```

> [!IMPORTANT]
> Ensure you use `STEAM_API_key` and `STEAM_API_SECRET` exactly as written (with "STEAM" instead of "STREAM"), as defined in the application configuration.

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The server will start on the port specified in your `.env` file (default: 5000).

## API Routes

- **/api/auth**: Authentication routes (signup, login, logout, check-auth).
- **/api/users**: User profile management.
- **/api/chat**: Stream Chat integration endpoints.

## Project Structure

- `src/server.js`: Application entry point.
- `src/controllers`: Request handlers.
- `src/routes`: API route definitions.
- `src/models`: Mongoose database models.
- `src/middleware`: Custom middleware (auth, error handling).
- `src/lib`: Utility functions and clients (DB connection, Stream client).
