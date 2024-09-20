
const signIn = document.querySelector(".signIn")
const signUp = document.querySelector(".signUp")


document.querySelector(".log-in").addEventListener("click", function() {
    signIn.classList.add("active-dx");
    signUp.classList.add("inactive-sx");
    signUp.classList.remove("active-sx");
    signIn.classList.remove("inactive-dx");
});

document.querySelector(".sign-up").addEventListener("click", function() {
    signUp.classList.add("active-sx");
    signIn.classList.add("inactive-dx");
    signIn.classList.remove("active-dx");
    signUp.classList.remove("inactive-sx");
});

const container = document.querySelector('.container')

function toggleLogin() {
    var loginPopup = document.querySelector(".container");
    loginPopup.style.display = (loginPopup.style.display === "flex") ? "none" : "flex";
    loginPopup.style.animation = "appearance .5s forwards"
}

function toggleDislogin() {
    var loginPopup = document.querySelector(".container");
    loginPopup.style.animation = "disappearance .5s forwards";
    setTimeout(() => {
        loginPopup.style.display = (loginPopup.style.display === "flex") ? "none" : "flex";
    }, 500);
}

function myFunction() {
    var x = document.getElementById("password");
    var c = document.querySelector(".eye ion-icon")
    if (x.type === "password") {
        x.type = "text";
        c.style.animation = "appearance1 .5s forwards"
        setTimeout(()=>{
            c.setAttribute("name", "eye-outline");
        }, 100)


    } else {
        x.type = "password";
        c.style.animation = "appearance2 .5s forwards"
        setTimeout(()=>{
            c.setAttribute("name", "eye-off-outline")
        }, 100)

    }
  }

  function myFunction2() {
    var x = document.getElementById("password2");
    var c = document.querySelector(".eye2 ion-icon")
    if (x.type === "password") {
        x.type = "text";
        c.style.animation = "appearance1 .5s forwards"
        setTimeout(()=>{
            c.setAttribute("name", "eye-outline");
        }, 100)


    } else {
        x.type = "password";
        c.style.animation = "appearance2 .5s forwards"
        setTimeout(()=>{
            c.setAttribute("name", "eye-off-outline")
        }, 100)

    }
  }

  function myFunction3() {
    var x = document.getElementById("password3");
    var c = document.querySelector(".eye3 ion-icon")
    if (x.type === "password") {
        x.type = "text";
        c.style.animation = "appearance1 .5s forwards"
        setTimeout(()=>{
            c.setAttribute("name", "eye-outline");
        }, 100)
    }
    else {
        x.type = "password";
        c.style.animation = "appearance2 .5s forwards"
        setTimeout(()=>{
            c.setAttribute("name", "eye-off-outline")
        }, 100)

    }
  }