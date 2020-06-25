document.addEventListener("DOMContentLoaded", () =>{
    const $userError = document.querySelector('.user-error');
    const $loginError = document.querySelector('.login-error');
    const newUserForm = document.querySelector('.new-user-form');
    const loginForm = document.querySelector('.login');
    const createNewUserButton = document.querySelector(".create-new-user");
    const loginButton = document.querySelector(".login-button");
    

    const questionsUrl = "http://localhost:3000/questions/";
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
                    $loginError.textContent = "Please check your username or password"
                }
                return response.json()
            })
            .then(result => {
                localStorage.setItem("token", result.token);
                $loginError.textContent = ""
                // localStorage.setItem("user_id", result.id)
            })
        
        
    })


    // fetch(questionsUrl, {
    //     "Authorization": "Baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJJdWxpaWEiLCJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTIkOGFlQXNUTHp6ZHFsOHFJWHN1cmN0T09BQy9YejV6cWtTaFoxdHpnZ094OHE0SmU5bGFRcVciLCJzY29yZSI6bnVsbCwiaWF0IjoxNTkzMDMyOTc4fQ.D2lfCBmNMo0Z5wNSqHzF1IiZTfmrkTS7gHma9f1YMdI"
    // })
    //     .then(parseJSON)
    //     .then(console.log)

    // function parseJSON(response){
    //     return response.json();
    // }
})