import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function SocialHeader() {
  return (
    <div className="container-fluid fixed socialMediaHeader">
      <div className="row">
        <div className="col-3 col-sm-3 col-lg-2 my-auto socialHeaderContacts p-0">
          <i class="fas fa-phone px-1" />
          +965-12345677
        </div>
        <div className="col-5 col-sm-4 col-lg-3 my-auto  socialHeaderContacts p-0">
          <i class="far fa-envelope pr-1 " />
          customerservice@iol.com
        </div>
        <div className="col-4 col-sm-5  col-lg-7 my-auto p-0 d-flex flex-row-reverse">
          <i className="fab fa-facebook-square m-1" />
          <i class="fab fa-linkedin m-1" />
          <i class="fab fa-instagram m-1" />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SocialHeader />, rootElement);
