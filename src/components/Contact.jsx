import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1 className="TitleContact">Contacte-moi !</h1>
      <form
        className="form-style"
        name="myForm"
        action="/file.php"
        onSubmit="return validateForm()"
        method="post"
      >
        <p className="ChampsObl">* Champs obligatoires</p>
        <table className="form-style">
          <tr>
            <td>
              <label className="labelnom">
                Votre nom <span className="required">*</span>
              </label>
            </td>
            <td>
              <input type="text" name="name" className="long" />
            </td>
          </tr>
          <tr>
            <td>
              <label className="labeladresse">
                Votre adresse e-mail <span className="required">*</span>
              </label>
            </td>
            <td>
              <input type="text" name="name" className="long" />
            </td>
          </tr>
          <tr>
            <td>
              <label className="labelmessage">
                Votre Message <span className="required">*</span>
              </label>
            </td>
            <td>
              <textarea
                name="message"
                className="long field-textarea"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" value="Envoyer" />
              <input type="reset" value="Réinitialiser" />
            </td>
          </tr>
        </table>
      </form>

      <h2 className="title2">Les auteurs de ce site :</h2>

      <h3 className="title3">
        Les Zartistes de la Wild Code School de la loupe, promotion 2021.
      </h3>

      <section class="form2">
        <div class="cards">
          <div class="logopromo"></div>
          <h4 class="card-name">
            Benjamin Moneta, Marie-Hélène Trillat et Claire Francigny.
          </h4>
          <div class="card-body">
            <div class="photomédaillon1"></div>
            <div class="photomédaillon2"></div>
            <div class="photomédaillon3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
