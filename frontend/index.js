// document.addEventListener("DOMContentLoaded", () =>{
    const $userError = document.querySelector('.user-error');
    const $loginError = document.querySelector('.login-error');
    const newUserForm = document.querySelector('.new-user-form');
    const loginForm = document.querySelector('.login');
    const inputNewUserForm = document.querySelector('.new-user-form input');
    const createNewUserButton = document.querySelector(".create-new-user");
    const loginButton = document.querySelector(".login-button");
    
console.log(newUserForm)
    const usersUrl = "http://localhost:3000/users/";
    const loginUrl = "http://localhost:3000/login/";

    welcome();

    function welcome(){
        newUserForm.style.display = 'none';
    }

    createNewUserButton.addEventListener('click', displayNewUserMenu)
    loginButton.addEventListener('click', displayLoginMenu)


    function displayNewUserMenu(){
        loginForm.style.display = 'none';
        newUserForm.style.display = 'block'
    }

    function displayLoginMenu(){
        newUserForm.style.display = 'none'
        loginForm.style.display = 'block';
    }

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
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("user_id", result.user.id);
                    $loginError.textContent = "";
                    window.location.href = "./gamePage.html"
                }
            })
    })

    newUserForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const newUserUsername = formData.get("username");
        const newUserPassword = formData.get("password");
        const newUser = {
            username: newUserUsername,
            password: newUserPassword,
            score: 0
        }

        fetch(usersUrl, {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(result => {
            // console.log(result.user.id)
            $userError.textContent = "";
            localStorage.setItem("user_id", result.user.id);
            localStorage.setItem("token", result.token);
            window.location.href = "./gamePage.html"
        })
        .catch(error => {
            inputNewUserForm.textContent = ""
            $userError.textContent = "Please choose another username"
        })
    })


// })