import React from 'react';
import '../assets/Header.css';

export default function Contact() {
  return (
    <div className="container-body">
    <div className="container">
      <h2 className="h2-body display-5 fw-bold">Contact</h2>

    <form className="needs-validation">
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Full name"/>
          <label for="floatingInput">Full name</label>
        </div>
        <div className="form-floating">
        <input type="email" className="form-control is-invalid" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Message" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Message</label>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
      
    </div>
  </div>
  );
}
