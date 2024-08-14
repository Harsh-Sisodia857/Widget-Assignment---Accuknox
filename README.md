# Widget-Assignment---Accuknox

This project is a dynamic dashboard application that allows users to add, edit, and delete widgets within various categories. The dashboard is built using React, Redux Toolkit, and Tailwind CSS for styling.

# Table of Contents
Project Overview \
Features \
Technologies Used \
Getting Started \
Installation \
Running the Application \
Component Structure\
Reusable Components\
State Management 

# Project Overview
The Widget Assignment project is designed to provide a flexible and user-friendly interface for managing widgets within a dashboard.
Each widget is associated with a specific category, and users can add or remove widgets as needed. The project demonstrates how to effectively manage state using Redux Toolkit and create reusable components in React.

# Features
Add Widgets: Users can add new widgets to existing or new categories. \
Delete Widgets: Each widget has a delete option, allowing users to remove widgets from a category.\
Dynamic Categories: Categories are dynamically created as widgets are added.\
Reusable Modal Component: A reusable modal component is implemented for adding widgets.

# Technologies Used
React: A JavaScript library for building user interfaces. \
Redux Toolkit: A toolset for efficient Redux development.\
Tailwind CSS: A utility-first CSS framework for styling.\
React Icons: For icons used in the UI.

# Getting Started 
## Installation

Clone the repository:
git clone https://github.com/Harsh-Sisodia857/Widget-Assignment---Accuknox

Navigate to the project directory 
## Install the dependencies:
npm install 

## Start the development server :
npm run dev 

## Open your browser and navigate to:
http://localhost:3000

# Component Structure 
Main: The main component that renders the dashboard and handles the logic for adding and deleting widgets. \
Card: A component that displays a category and its associated widgets. \
Modal: A reusable modal component used for adding widgets. 

### Reusable Components
Modal \
The Modal component is designed to be reusable and customizable. It accepts props such as isOpen, title, children, onClose, and onSave. This component is used for adding widgets within the application.

Card \
The Card component is used to display each category with its widgets. It includes the option to open the modal for adding widgets to the respective category.

## State Management : 
State management is handled using Redux Toolkit. The widgetSlice manages the state of widgets and categories. 

## The following actions are available:

addCategory: Adds a new category to the state. \
addWidget: Adds a widget to a specific category. \
deleteWidget: Removes a widget from a category. 
