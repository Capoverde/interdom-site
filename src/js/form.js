// ######### Name & Lname validation ##########
const personre = /^[a-zA-Z]+ [a-zA-Z]+$/

const person = document.querySelector('#person')
const personText = document.querySelector('.person-val-text')

const personValid = () => {
  if(person.value.match(personre)){
    personText.innerHTML =`poprawnie wpisane dane`
    personText.classList.add('valid')
    personText.classList.remove('invalid')
  }else{
    personText.innerHTML =`nie poprawnie wpisane dane`
    personText.classList.remove('valid')
    personText.classList.add('invalid')
  }
}

person.addEventListener('keyup', personValid)



// ########## e-mail validation ########### 

const emailre = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const mail = document.getElementById('mail')
const mailValText = document.querySelector('.mail-val-text')

console.log(mail)

const mailValid = () =>{
if (mail.value.match(emailre) || mail.vlaue === '') {
  mailValText.innerHTML = `poprawnie wpisany e-mail`
  mailValText.classList.add('valid')
  mailValText.classList.remove('invalid')
}
else{
  mailValText.innerHTML = `niepoprawnie wpisany e-mail`
  mailValText.classList.add('invalid')
  mailValText.classList.remove('valid')
 }
}

mail.addEventListener('keyup', mailValid)