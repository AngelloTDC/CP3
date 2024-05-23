const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "logout.html"
    }else{
        alert("Digite os campos corretamente!")
    }
})

function authentication(username,password){
    if(username === "admin@email.com" && password === "admin"){
        return true
    }else{
        return false
    }
}