import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import Thanks from "../../assets/Form/thankyou.png";

import Button from "@material-ui/core/Button";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgjpnjd");
  if (state.succeeded) {
    return <img src={Thanks} style={{ width: "100%", height: "50%" }} />;
  }

  return (
    <div className="contactme">
      <div className="contact-header"> Contact Me! </div>
      <form
        action="https://formspree.io/f/mrgjpnjd"
        method="post"
        onSubmit={handleSubmit}
      >
        <label for="name">Full Name </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          name="fullname"
          required
        />
        <label for="contactBack">How do I get back to you? </label>
        <input
          type="text"
          id="email"
          placeholder="Your E-mail Address"
          name="email"
          required
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label for="message">Message Me!</label>

        <textarea
          className="message"
          placeholder="Message me!"
          height="200px"
          name="message"
          required
        ></textarea>

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button className="contact-button">
          <input type="submit" value="Submit" disabled={state.submitting} />
        </Button>
        <div id="status" class="error">
          Success
        </div>
      </form>
    </div>
  );
};

export default Contact;
