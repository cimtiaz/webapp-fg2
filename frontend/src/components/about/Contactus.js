import React from "react";

class Contactus extends React.Component {
  render() {
    return (
      <div id="Contact-us" class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 m-auto">
            <div class="contact-form">
              <h1>Get in Touch</h1>
              <form action="/examples/actions/confirmation.php" method="post">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="inputName">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="inputEmail">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputSubject">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputSubject"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputMessage">Message</label>
                  <textarea
                    class="form-control"
                    id="inputMessage"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary" id="send-btn">
                    <i class="fa fa-paper-plane"></i> Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contactus;
