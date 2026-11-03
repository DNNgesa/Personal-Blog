## Prerequisites

Before running this project locally, ensure you have the following installed on your machine:
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (comes packaged with Node.js)

## Local Setup Instructions

Follow these steps to get the application running on your local development environment:

### 1. Clone or Navigate to the Project Folder
Open your terminal and navigate inside the main project directory where the `package.json` file resides:
```bash
cd Personal-Blog
```

### 2. Install Project Dependencies
Install all required node packages, including React utilities and the bootstrap formatting library:
```bash
npm install
```
```bash
npm install bootstrap
```

### 3. Start the Development Server
Launch the Vite local development engine to boot up the application:
```bash
npm run dev
```

### 4. Open in Your Browser
Once the server initializes, your terminal will display a local network link. Open your preferred web browser and go to:
* **http://localhost:5173**

## Project Architecture & Core Technologies
* **React**: Compiles component-driven user interfaces.
* **Vite**: Provides lightning-fast local asset bundles and hot module reloads (HMR).
* **date-fns**: Manages strict calendar string formatting rules without heavy runtime overheads.
* **App.css**: Houses custom visual view variables including modern CSS linear gradients.


