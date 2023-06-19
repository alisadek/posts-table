# Posts Table

This project is a posts table with all the CRUD Operations, created using React, Redux, Sagas, Typescript, and Material-UI.

## Description

The goal of this project is to create a table of posts populated from the JSONPlaceholder API. It utilizes React to build the user interface, Redux for state management, Sagas for handling asynchronous operations, Typescript for type safety, and Material-UI for styling and UI components.

## Features

- Display a table of posts fetched from the JSONPlaceholder API.
- Search functionality to filter posts.
- Pagination to navigate through the list of posts.
- Delete functionality to remove a post.
- Edit functionality to modify a post.
- Responsive design with Material-UI components.

## Prerequisites

Before running the project, make sure you have the following:

- Node.js installed on your machine.
- Access to the internet to fetch data from the JSONPlaceholder API.

## Installation

1. Clone the repository:

```bash
    git clone https://github.com/alisadek/posts-table
```

1. Navigate to the project directory:

2. Install the dependencies

```shell
    npm install
```
4. Create a .env file in the root directory of the project and add the following line:

```shell
    REACT_APP_API_URL=https://jsonplaceholder.typicode.com
```

## Usage

To start the development server, run the following command:
```shell
    npm start
```

The application will be accessible at http://localhost:3000.

## Additional Features/Improvements (Not Implemented)

In addition to the required features, here are some additional features that could be added:
- Sorting functionality to arrange posts based on different criteria (e.g., title, author).
- User interface enhancements such as animations, tooltips, or progress indicators.
- Error handling and displaying meaningful error messages to the user.
- Unit tests and integration tests to ensure code quality and prevent regressions.
- CI/CD integration for automated testing and deployment.
- Internationalization (i18n) support for arabic and RTL.
- Customizable theme options for the application's visual appearance.
- A more organized and better-structured code base.
