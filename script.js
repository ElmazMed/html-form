const mail = document.getElementById('mail');
const password = document.getElementById('pass');
const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

const loginInfo = [{
    email : "mohamed@mohamed.com",
    password : "Mohamed",
}
]

btn.addEventListener('click', dataCheck);

function dataCheck(e) {
    e.preventDefault()

    if(mail.value == loginInfo[0].email) {

        msg.innerText = 'Your email is '+ mail.value

    } else if(mail.value == '' || mail.value == null) {
        e.preventDefault()
        
        msg.innerText = 'Email is required'
        
    } else if(mail.value != loginInfo[0].email) {
        msg.innerText = mail.value + ' is not correct!'
    }
}




//console.log(loginInfo[0].email)