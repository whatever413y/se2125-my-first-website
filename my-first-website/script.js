let usernameInput = document.querySelector('#usernameField')
let passwordInput = document.querySelector('#passwordField')
let notify = document.querySelector('#notify')

function login() {
  if (usernameInput.value === '' || passwordInput.value === '') {
    notify.innerHTML = '<span>Username and Password is required!</span>'
    throw new Error('Username and Password is required!')
  } else if (usernameInput.value < 3 || passwordInput.value.length < 3) {
    notify.innerHTML = '<span>Username or Password must not be less than 3 characters in length!</span>'
    throw new Error('Username or Password must not be less than 3 characters in length!')
  } else if (usernameInput.value === 'admin' && passwordInput.value === 'root') {
     window.location.href = "home.html"
  } else {
    notify.innerHTML = '<span>Invalid Username and password</span>'
  }
}

function openAddingWindow() {
  document.getElementById("peopleList").style.display = "none"
  document.getElementById("addingWindow").style.display = "block"
}

function closeAddingWindow() {
  document.getElementById("addingWindow").style.display = "none"
  document.getElementById("peopleList").style.display = "block"
}

function addPerson() {
  let firstName = document.querySelector('#firstnameField')
  let lastName = document.querySelector('#lastnameField')
  let fullName = firstName.value + ' ' + lastName.value
  let ul = document.querySelector('#list')
  let li = document.createElement('li')

  if(firstName.value != '' || lastName.value != '') {
    li.setAttribute('class', 'list-group-item')
    li.appendChild(document.createTextNode(fullName))
    ul.appendChild(li)
    closeAddingWindow()
  }
}