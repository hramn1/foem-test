import React from "react";
import propTypes from "prop-types";


const Form = () => {
  return (
    <React.Fragment>
      <section className="main-form">
        <h1 className="main-form__title">Информация о сотруднике</h1>
        <form className="main-form__forma form-employee" action="post">
          <label htmlFor="surname"></label><input className="form-employee__item form-employee__item--surname" type="text" name="surname" required placeholder="Фамилия"/>
          <p className="error-mesage error-mesage--surname">Поле является обязательным</p>
          <label htmlFor="name"></label><input className="form-employee__item form-employee__item--name" type="text" name="name" required placeholder="Имя" />
          <p className="error-mesage error-mesage--name">Поле является обязательным</p>
          <label htmlFor="secondName"></label><input className="form-employee__item" type="text" name="secondName" placeholder="Отчество" />
          <fieldset className="contacts-group">
            <select className="contacts-group__item">
              <option disabled>Пол</option>
              <option>Мужской</option>
              <option>Женский</option>
            </select>
            <div>
            <label  htmlFor="date"><input type="date" name="date" className="contacts-group__item contacts-group__item--calendar" required placeholder="Дата рождения" /></label>
              <p className="error-mesage error-mesage--date">Поле является обязательным</p>
            </div>
            <div>
            <label   htmlFor="phone"><input type="tel" name="phone"  className="contacts-group__item contacts-group__item--phone" required placeholder="Мобильный телефон" /></label>
              <p className="error-mesage error-mesage--phone">Поле является обязательным</p>
            </div>
            <div>
            <label htmlFor="email"><input type="email" className="contacts-group__item contacts-group__item--email" name="email" required placeholder="Email (необязательно)" /></label>
              <p className="error-mesage error-mesage--email">Поле является обязательным</p>
            </div>
          </fieldset>
          <label htmlFor="address"></label><input className="form-employee__item" type="text" name="address" placeholder="Адрес постоянной регистрации" />
          <label htmlFor="job"></label><input className="form-employee__item" type="text" name="job" placeholder="Название работодателя" />
          <input className="form-employee__btn" value="Сохранить" type="submit"/>
        </form>
      </section>

    </React.Fragment>
  );
};
Form.propTypes = {

};
export default Form;
