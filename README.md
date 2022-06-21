# Social-Network-API

## Description
*An API for a social network that uses a NoSQL database so that the website can handle large amounts of unstructured data*

## Contents
* [Usage](#Usage)
* [Video-Description](#Video-Description)
* [Schema-Description](#Schema-Description)
* [Instructions](#Instructions)
* [Built With](#Built-With)
* [Credits](#Credits)

## Usage

GIVEN a social network API
- WHEN I enter the command to invoke the application
  - THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
  - THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
  - THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
  - THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


## Video Description
This application demonstrates the database for a social networking application. API routes are tested through Insomnia. Following demo's show various functionalities of the application.



## Schema Description

- User
    - `username`: 
        * String
        * Unique
        * Required
        * Trimmed

    - `email`: 
        * String
        * Required
        * Unique
        * Must match a valid email address (look into Mongoose's matching validation)

    - `thoughts`: 
        * Array of `_id` values referencing the `Thought` model

    - `friends`: 
        * Array of `_id` values referencing the `User` model (self-reference)
   
- Thought
    - `thoughtText`: 
        * String
        * Required
        * Must be between 1 and 280 characters

    - `createdAt`: 
        * Date
        * Set default value to the current timestamp
        * Use a getter method to format the timestamp on query

    - `username`: 
        * String
        * Required

    - `reactions`: 
        * Array of nested documents created with the `reactionSchema`

- Reaction
    - `reactionId`: 
        * Use Mongoose's ObjectId data type
        * Default value is set to a new ObjectId

    - `reactionBody`: 
        * String
        * Required
        * 280 character maximum

    - `username`: 
        * String
        * Required

    - `createdAt`: 
        * Date
        * Set default value to the current timestamp
        * Use a getter method to format the timestamp on query


## Instructions

In the command line, run npm start to initiate server. NOTE: This repository consists of only the backend. The routes are located in the routes/api folder and can be tested with API test clients such as Insomnia Core or Postman.

## Built With
* Express.js
* Mongoose
* MongoDB
* JavaScript


## Credits
* Created by Amir Hackett 