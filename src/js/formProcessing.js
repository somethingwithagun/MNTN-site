"use strict"

const form = document.getElementById('form');
form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();

  let error = formValidate(form);
  if (error === 0) {
    form.classList.add("_sending");
    setTimeout(function rmvClass() {
      form.classList.remove("_sending");
      alert("Произошла ошибка при передаче данных!");
    }, 2000);

  } else {
    alert("Заполните обязательные поля");
  }
}
function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll('._req');

  for(let index = 0; index < formReq.length; index++) {
    const input = formReq[index];

    input.classList.remove("_error");
    if(input.value === '') {
      input.classList.add("_error");
      error++;  
    }
  }
  return error;
}