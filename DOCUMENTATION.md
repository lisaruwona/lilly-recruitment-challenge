# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach

1. Overview of the task at hand: I first identified what the overall task was about, which was to develop a medicine tracker for the end user (who works at lilly) to keep a record of the medicines that currently exist.

I then looked through the python backend file to analyse the given functions of what is required within the tracking application, which was:

- Get all medicines
- Create medicine
- Update medicine 
- Delete medicine

I approached the challenge by working through the objectives sequentially, starting with setting up the backend server, which involved running the given python backend using FastAPI.

External resources used: To complete the task, I utilized various external resouces, including:

- youtube videos about how I can install use a FASTAPI, as it was my first time working with one.
- Guides on using fetch() with javascript for API calles to conncet the frontend to the backend.
- Udemy web developer course that I used a while back to familiarize myself with the javascript syntax.


Once I understood the backend, I then moved onto the frontend integration, making sure thst each functionality worked as intended through testing the browser consistently.



## Objectives - Innovative Solutions
*For the challenge objectives, did you do anything in a particular way that you want to discuss? Is there anything you're particularly proud of that you want to highlight? Did you attempt some objectives multiple times, or go back and re-write particular sections of code? If so, why? Use this space to document any key points you'd like to tell us about.*

Handling missing data appropriately - I displayed placeholders like "medicine templorarily unavailable" or "price temporarily unavailable" in order to communicate with the user that data was missing from the data migration process.

Interactive features - I added a delete button to each medicine card on the frontend to allow users to remove medicines easily. I ensured the delete buttons were visually contained within each card by usong CSS Flexbox, which also improved alignment and consistency. I also added the addition of a form to add new medicines on the frontend, which allowed the application to become more interactive and gave user full control over the medicine data.

Backend enhancements - To meet the request for the quarterly reprot, I created a new backend endpoint, /average_price, which calculates the average price of all medicines and provides it as a simple report this feature adds value by providing an overview of the medicine data.

## Problems Faced
*Use this space to document and discuss any issues you faced while undertaking this challenge and how you solved them. We recommend doing this proactively as you experience and resolve the issues - make sure you don't forget! (Screenshots are helpful, though not required)*.

Backend Server Setup - I faced difficulties running the backend server due to missing dependencies such as FASTAPI and Uvicorn. This was resolved by ensuring I was in the correct virtual environment and installing all required dependencies with pip.

Data Fetching - When fetching the data, I encountered errors due to incorrect URLs and CORS issues. I resolved these by carefully reviewing the URLs and ensuring the CORS middleware was correctly configured in the FastAPI backend to allow all origins.

Delete Button Misalignment - The delete buttons initially appeared outside of their respective medicine cards. I solved this by using CSS Flexbox (as I had initially hard coded the width and the height of the box) in order to better structure the card layout and ensure that all elements were aligned correctly within each card.

## Evaluation
*How did you feel about the challenge overall? Did some parts go better than others? Did you run out of time? If you were to do this again, and were given more time, what would you do differently?*

Overall, I found the challenge to be engagin and a great opportinnity to learn more about integrating a frontend with a backend API. This was my first time working with APIs which turned out to be a success in the end as I continuously learn new aspects of my profession.

I was particularly pleased with how the backend and frontend integration turned out, especially the interactive features for adding and deleting medicines

If I were given more time, I would implement a more robust backend using a relational databse like PostgreSQL instead of a JSON file for better scalability and data integrity. 

I would've also improved the UI/UX further by using modern frontend framework like React to provide a more dynamic experience

The overall experience was a valuable learning process, and I look forward to applying these skills in future projects at Lilly.