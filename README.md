# Educational Plant Maintenance Platform

## Overview
This platform is designed to assist users in managing and maintaining various plants with essential resources and information. It includes a backend API built with Node.js and Express, as well as a frontend application developed using React.

## Project Structure

### Root Files
- **package.json**: Contains dependencies and scripts for the project.
- **.env.example**: Sample environment variables for backend configuration.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **README.md**: Documentation for the project (this file).

### Backend Structure
- **config/**: Contains configurations for database and environment.
- **models/**: Mongoose models for User, Course, Game, Plant, Pot, Sensor, Shop and Admin.
- **routes/**: Express routes for auth, courses, games, plants, pots, shop, admin and contact.
- **controllers/**: Contains business logic for the application.
- **middleware/**: Authentication and authorization functions.
- **utils/**: Helper functions and validators.

### Frontend Structure
- **public/**: Public files including index.html and favicon.
- **src/**: Contains the main React application.
  - **components/**: Component structure for various modules.
  - **pages/**: Pages for auth, courses, games, plant-recognition, supervision, shop, contact, and admin dashboard.
  - **services/**: Functions for API calls to the backend.
  - **context/**: Context API for state management.

## Getting Started
1. Clone the repository using: `git clone https://github.com/dorra2022/Ecomesh.git`
2. Change into the project directory.
3. Install dependencies for both backend and frontend.
4. Create a `.env` file for environment variables based on `.env.example`.
5. Run the application using appropriate commands for backend and frontend.

## Contributing
Contributions are welcome! Please create a pull request for any changes you make.

## License
This project is licensed under the MIT License.