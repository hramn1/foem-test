import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default class DevScript {
  constructor() {
    this._applyFlatpickr();
    this.bind();
  }
  _applyFlatpickr(){
  const dateElementStaty = document.querySelector(`.contacts-group__item--calendar`);
  flatpickr(dateElementStaty, {
    allowInput: true,
    dateFormat: `d/m/y`,
  });
  }
  validatePhone(evt){
    if (isNaN(evt.target.value)) {
      evt.target.value = evt.target.value.replace(/[^0-9,^\+]/g, ``);
    }
  }

  validate(evt){
    evt.preventDefault();
    const nameInput = document.querySelector('.form-employee__item--surname');
    const nameSecondInput = document.querySelector('.form-employee__item--name');
    const dateInput = document.querySelector('.contacts-group__item--calendar');
    const phoneInput = document.querySelector('.contacts-group__item--phone');
    const emailInput = document.querySelector('.contacts-group__item--email');
    const validateEmail = () => {
      if(emailInput.value === '') {
        emailInput.style.border = "1px solid red"
        document.querySelector('.error-mesage--email').style.display = "block";
        document.querySelector('.error-mesage--email').textContent = "Поле является обязательным"
        return  false;
      } else if(!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emailInput.value)) {
        emailInput.style.border = "1px solid red"
        document.querySelector('.error-mesage--email').style.display = "block";
        document.querySelector('.error-mesage--email').textContent = "Введен некоректный адрес почты"
        return  false;
      } else {
        emailInput.style.border = "none"
        document.querySelector('.error-mesage--email').style.display = "none";
        return true
      }
    }
    const validateForm = () => {
      let checkInput = true;
      if(nameInput.value === ''){
        nameInput.style.border = "1px solid red"
        document.querySelector('.error-mesage--surname').style.display = "block";
        checkInput = false;
      } else {
        nameInput.style.border = "none"
        document.querySelector('.error-mesage--surname').style.display = "none";
      }
      if(nameSecondInput.value === ''){
        nameSecondInput.style.border = "1px solid red"
        document.querySelector('.error-mesage--name').style.display = "block";
        checkInput = false;
      } else {
        nameSecondInput.style.border = "none"
        document.querySelector('.error-mesage--name').style.display = "none";
      }
      if(dateInput.value === ''){
        dateInput.style.border = "1px solid red"
        document.querySelector('.error-mesage--date').style.display = "block";
        checkInput = false;
      } else {
        dateInput.style.border = "none"
        document.querySelector('.error-mesage--date').style.display = "none";
      }
      if(phoneInput.value === ''){
        phoneInput.style.border = "1px solid red"
        document.querySelector('.error-mesage--phone').style.display = "block";
        checkInput = false;
      } else {
        phoneInput.style.border = "none"
        document.querySelector('.error-mesage--phone').style.display = "none";
      }
      return checkInput;
    }
    const checkFirst = validateEmail();
    const  checkSecond = validateForm();
    if (checkFirst && checkSecond  ){
      alert('Форма Валидна отправляется запрос')
    }
  }
  bind() {
    document.querySelector('.form-employee__btn').addEventListener('click', this.validate)
    document.querySelector('.contacts-group__item--phone').addEventListener('input', this.validatePhone)
  }
}

