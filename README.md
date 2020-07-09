# Guess_movie
Guess movie by picture!

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
The game Guess Movie by Picture is a multiple choice quiz where a single shot from a movie pops up & the user can pick from 4 choices which movie it is from. 

## Intro Video
[Guess Movie By Picture on YouTube](https://www.youtube.com/watch?v=of3jMJ9isvE)

## Technologies
* Node.js - version 6.14.4
* Express.js
* Knex.js
* JavaScript 

## Setup
To run this project, install it locally by cloning the GitHub repository and typing: 
Open two command terminals. On the first one, navigate to the backend folder and run npm start.
On the second terminal, navigate to the frontend folder and run lite-server

## Code Examples
```
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
        
    const formData = new FormData(event.target);
    const userName = formData.get('username');
    const userPassword = formData.get('password');
    const loginUser = {
        username: userName,
        password: userPassword
    };

    fetch(loginUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginUser)
    })
        .then(response => {
            if(!response.ok) {
                $loginError.textContent = "Please check your username"
            }
            return response.json()
        })
        .then(result => {
            if (!result.token){
                $loginError.textContent = "Please check your password"
            } else {
                $loginError.textContent = "";
                console.log(result.user)
                localStorage.setItem("token", result.token);
                localStorage.setItem("user_id", result.user.id);
                localStorage.setItem("username", result.user.username);
                localStorage.setItem("score", result.user.score);
                window.location.href = "./gamePage.html"
            }
        })
})

```

## Features
* Create a new account
* Login if user already exists 
* Play the game (you have 60 seconds)
* See champion list
* Champion list updates based on your highest score 

## Status
Project is finished with option to expand functionality and DRY out code. 

## Inspiration
 I really like to watch movies. Sometimes I need just calm down, clear my head and play some funny game. So, for that purpose - Guess Movie By Picture.

## Contact
Created by [Iuliia Saprykina](https://www.linkedin.com/in/iuliia-saprykina-ab3351100)
