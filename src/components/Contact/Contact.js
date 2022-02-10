import "./contact.css";

import Button from "@material-ui/core/Button";

const Contact = () => {
  return (
    <div className="contactme">
      <div className="contact-header"> Contact Me! </div>
      <form action="sendConfirmation.php" name="confirmationForm" method="post">
        <label for="name-company">Full Name & Company </label>
        <input
          type="text"
          id="name-company"
          placeholder="Your Name and Company"
        />
        <label for="contactBack">How do I get back to you? </label>
        <input
          type="text"
          id="contact"
          placeholder="Your Contact Information"
        />
        <label for="message">Message Me!</label>

        <textarea
          className="message"
          placeholder="Message me!"
          height="200px"
        ></textarea>

        <Button className="contact-button">
          <input
            type="submit"
            value="Submit"
            action="mailto:gracelin3295@gmail.com"
          />
        </Button>
      </form>
    </div>
  );
};

export default Contact;
