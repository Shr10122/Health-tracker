# Health Tracker

## Overview

Health Challenge Tracker is a single-page application (SPA) developed using Angular 14+. This application allows users to track their workouts, manage workout data, and visualize workout progress through various features. It is designed to help users maintain their fitness goals and monitor their activities efficiently.

## Features

### User Input
- **Add User Details:** Allows users to input their name, workout type, and workout duration.
- **Workout Tracking:** Records and displays user workout data in a structured format.

### Workout List
- **Search by Name:** Quickly find users by searching their names.
- **Filter by Workout Type:** Filter the workout list based on the type of workout.
- **Pagination:** Efficiently navigate through a large list of users with pagination.

### Data Visualization
- **Workout Progress Charts:** Optionally display users' workout progress using charts for better visualization.

### Storage
- **LocalStorage:** User data is stored locally using `localStorage` for persistence.

### Responsive Design
- **Responsive UI:** The application is designed to be responsive and user-friendly, making it accessible on various devices.

## Screenshots

![](https://github.com/user-attachments/assets/add/shr1.png)
![](https://github.com/user-attachments/assets/add/shr2.png)

## Getting Started

Follow these steps to run the application locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. **Clone the Repository:**
    ```sh
    git clone https://github.com/Shr10122/Health-tracker.git
    cd Health-Challenge-Tracker
    ```

2. **Install Dependencies:**
    ```sh
    npm install
    ```

### Running the Application

1. **Start the Development Server:**
    ```sh
    ng serve
    ```
    Navigate to `http://localhost:4500/`. The application will automatically reload if you change any of the source files.

### Code Scaffolding

To generate a new component, use the following command:
```sh
ng generate component component-name
```
You can also use:
```sh
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Building the Application

To build the project, run:
```sh
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute the unit tests via [Karma](https://karma-runner.github.io), run:
```sh
ng test
```
or
```sh
npm run test
```
To execute the unit tests with coverage, run:
```sh
npm run test:cov
```

### Running End-to-End Tests

To execute end-to-end tests via a platform of your choice, run:
```sh
ng e2e
```
Ensure to add a package that implements end-to-end testing capabilities first.

### Further Help

For more help on Angular CLI, use:
```sh
ng help
```
or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


### Contact

For any questions, please contact [shreyass00210@gmail.com](shreyass00210@gmail.com).

Happy coding!
