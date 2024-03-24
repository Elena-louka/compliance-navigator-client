# Compliance Navigator App Documentation

## Overview

Compliance Navigator is a web application designed to streamline the management and assignment of compliance-related questions within an organization. Developed with React in the frontend for a dynamic user experience and styled with TailwindCSS for modern aesthetics, it leverages Express in the backend to interact with an Airtable database, ensuring data persistence and easy access.

### Database: Airtable

The database of choice for Compliance Navigator is Airtable, allowing for flexible schema designs and integration with various web technologies. It supports single select options for specific fields, such as email addresses, to ensure data validation and consistency.

## System Setup

### Frontend

- **Framework**: React
- **Styling**: TailwindCSS
- **Key Components**:
  - **CreateQuestionForm**: The submitting form with all the necessary fields for a question creation.
  - **NavBar**: Central hub for search, add, and filter actions.
  - **QuestionCard**: Displays questions with options for detailed view and edit.
  - **CreateQuestionModal**: Interface for submitting new questions.
  - **FilterModal**: Provides filtering capabilities based on specific criteria.
  - **QuestionsHeader**: Displays the header of the questions list with options to select all or perform bulk actions.

### Backend

- **Framework**: Express (Node.js)
- **Database Connection**: Airtable API for CRUD operations on questions data.

## Features and API Endpoints

- **Fetch Questions**: `GET /api/questions` - Retrieves questions with optional filters.
- **Create Question**: `POST /api/questions` - Submits a new question.
- **Update Question**: `PUT /api/questions/:id` - Modifies details of an existing question.
- **Get Question**: `GET /api/questions/:id` - Retrieves a specific question.
- **Search Question**: `GET /api/questions/search?q=searchterm` - Fuzzy search for the parameter's search term.
- **Delete Question**: `DELETE /api/questions/:id` - Deletes an existing question.

## Database Schema

- **Table**: Questions
- **Fields**:
  - `id`: Unique identifier for each question.
  - `_recordId`: Unique id for internal handling.
  - `Company Name`: The name of the company associated with the question(Single Select).
  - `Question`: The compliance question text.
  - `Answer`: The answer to the compliance question.
  - `Created At`: Timestamp of when the question was created.
  - `Updated At`: Timestamp of the last update to the question.
  - `Updated By`: Email of the user who last updated the question (Single Select).
  - `Created By`: Email of the user who created the question (Single Select).
  - `Assigned To`: Email of the user to whom the question is assigned (Single Select).
  - `Properties`: Custom properties/tags for additional categorization.

## Quick Start Guide

1. **Clone** both the ComplianceNavigator, compliance-navigator-client project repository.
2. **Install Dependencies**: Execute `npm install` in both frontend and backend project folders.
3. **Launch Application**: Use `npm start` to run both the frontend and backend locally.

## Utilizing Compliance Navigator

- Navigate through questions, add new ones, or filter existing questions directly from the **NavBar**.
- Explore question details, edit them, or expand for more information using **QuestionCards**.
- Leverage **FilterModal** to refine the question list according to assigned users or specific properties.

