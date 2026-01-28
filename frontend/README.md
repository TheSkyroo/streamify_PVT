# Streamify Frontend

This is the frontend application for Streamify, a modern social media platform built with React and Vite.

## Tech Stack

The project uses a modern React tech stack for performance and developer experience:

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Language**: JavaScript (ES Modules)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/) components
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Real-time Features**:
  - [Stream Chat](https://getstream.io/chat/docs/sdk/react/)
  - [Stream Video](https://getstream.io/video/docs/react/)
- **HTTP Client**: Axios
- **Toasts**: React Hot Toast

## Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or the port shown in your terminal).

3.  **Set up environment variables:**
    Create a `.env` file in the root of the `frontend` folder and add the following keys:

        ```env
        VITE_STREAM_API_KEY=your_stream_api_key

        ```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## Project Structure

- `src/components`: Reusable UI components.
- `src/pages`: Application pages/views.
- `src/store`: Zustand stores for global state.
- `src/lib`: Utility functions and third-party library configurations.
- `src/constants`: app-wide constants.
