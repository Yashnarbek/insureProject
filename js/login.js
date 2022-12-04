let mail = document.querySelector(".login-form__user")
let password = document.querySelector(".login-form__password")
let send = document.querySelector(".login-form__btn")
let elForm = document.querySelector(".login-form")
let URL = `https://reqres.in/api/login`

if(localStorage.getItem("token")){
    window/location.replace("./index.html")
}

elForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let options = {
        "method": "POST",
        "headers": {
            "Content-type": "application/json"
        },
        "body": JSON.stringify(
            {   
                "email": mail.value,
                "password": password.value
            },
        )
    }
    async function login () {
        let response = await fetch(URL, options)
        let data = await response.json()
        window.localStorage.setItem("token", data)
        console.log(data);
        if(localStorage.getItem("token")){
            window.location.replace("./index.html")
        }
    }
    login()
})


