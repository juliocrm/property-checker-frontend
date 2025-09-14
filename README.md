# Property Hub Frontend

This is the frontend for the Property Hub application, a modern and responsive web app for browsing and searching real estate properties. It's built with React and Vite.

## Features

-   **Property Listing:** View a list of available properties.
-   **Advanced Filtering:** Search and filter properties by name, address, and price range.
-   **Detailed View:** Click on any property to open a modal with detailed information, including images and transaction history.
-   **Responsive Design:** The UI is designed to work seamlessly on both desktop and mobile devices.
-   **Dynamic UI:** Features smooth animations and transitions for a better user experience.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn
-   The project's backend server running.

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd PropChecker.Frontend
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Development Server

To start the Vite development server, run:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` by default.

**Note:** The application requires the backend API to be running. By default, it expects the API to be at `http://localhost:5083`.

## Project Structure

The project is organized in a modular way inside the `src/` directory:

-   `src/components/`: Contains all the React components, each in its own folder with its corresponding CSS file.
-   `src/hooks/`: Houses custom React hooks used across the application (e.g., `useProperties`, `useIsDesktop`).
-   `src/services/`: Includes modules for making API calls to the backend.
-   `src/assets/`: Stores static assets like images and icons.
-   `App.jsx`: The main application component where everything is tied together.
-   `main.jsx`: The entry point of the React application.
