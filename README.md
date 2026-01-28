# Streamify

The backend development has been completed, and work is now progressing on the frontend.
This backend powers the Streamify application and is built using Express.js, Mongoose, and Stream Chat, providing a scalable and reliable foundation for the platform.

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB
- Stream Chat Account

### Installation

1.  Navigate to the backend directory:

    ```bash
    cd backend
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Set up environment variables:
    Create a `.env` file in the root of the `backend` folder and add the following keys:

    ```env
    PORT=5001
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET_KEY=your_jwt_secret_key

    # Stream Chat Configuration
    # Note: These exact variable names are required by the current implementation
    STEAM_API_key=your_stream_api_key
    STEAM_API_SECRET=your_stream_api_secret
    ```

    3.  Set up environment variables:
        Create a `.env` file in the root of the `backend` folder and add the following keys:

    ```env
    PORT=5001
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET_KEY=your_jwt_secret_key

    # Stream Chat Configuration
    # Note: These exact variable names are required by the current implementation
    STEAM_API_key=your_stream_api_key
    STEAM_API_SECRET=your_stream_api_secret
    ```

    Create a `.env` file in the root of the `frontend` folder and add the following keys:

    ```env
    VITE_STREAM_API_KEY=your_stream_api_key

    ```

### Running the Server

To start the server in development mode (with hot-reloading via nodemon):

```bash
npm run dev
```

The server will typically run on `http://localhost:5001`.

### Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT & Cookies
- **Real-time Chat**: Stream Chat SDK
