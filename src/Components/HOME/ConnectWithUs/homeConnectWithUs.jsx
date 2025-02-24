import "./homeConnectWithUs.css"

const HomeConnectWithUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  const handleNewsletter = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  return (
    <div className="connect-section">
      <div className="connect-header">
      <div className="investment-title">
                        <hr className="title-line connectUsline" />
                        <h1 style={{ marginLeft: "110px" }}>CONNECT</h1>
                        <h1>with US</h1>
                    </div>
        <p className="connect-description">
          Stay connected with Yoglyf and take the first step toward transforming your investment goals into reality.
          Our team is here to provide expert guidance and personalized support for all your queries. Whether you're
          exploring opportunities or seeking more details, we're just a call or message away. Connect with us today and
          experience the difference of partnering with a leader in luxury resort investments.
        </p>
      </div>

      <div className="connect-container">
        <div className="message-form">
          <h3>Send Us A Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Profession" required />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>SUBSCRIBE FOR UPDATES</h3>
            <h2>Newsletter</h2>
            <p>Your journey to luxury starts here. Join our mailing list now.</p>
            <form onSubmit={handleNewsletter}>
              <div className="newsletter-input">
                <input type="email" placeholder="YOUR EMAIL" required />
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <div className="info-card">
          <div className="icon">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h4>ADDRESS</h4>
          <p>123 Wellness Street,</p>
          <p>Rishikesh, Inadia</p>
          {/* <p>Jaipur – 302019 Rajasthan</p> */}
        </div>

        <div className="info-card">
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h4>EMAIL</h4>
          <p><a href="mailto:yoglyfhelp@gmail.com" style={{color:"white"}}>yoglyfhelp@gmail.com</a></p>
        </div>

        <div className="info-card">
          <div className="icon">
            <i className="fas fa-phone"></i>
          </div>
          <h4>PHONE</h4>
          <p>+91 96671 36553</p>
        </div>

        <div className="info-card">
          <div className="icon">
            <i className="fas fa-clock"></i>
          </div>
          <h4>WORKING HOURS</h4>
          <p>Monday – Saturday</p>
          <p>10:00 am to 6:30 pm</p>
        </div>
      </div>
    </div>
  )
}

export default HomeConnectWithUs

