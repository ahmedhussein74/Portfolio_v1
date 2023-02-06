import '../css/Contact.css'

const Contact = () => {
  return (
    <section className="py-6" id="contact">
      <div className="top-info">
        <div className="img rounded-full mx-auto mb-6"></div>
        <h1 className="font-bold text-center my-0 py-0">Ahmed Hussein</h1>
        <p className="text-center text-white my-0 py-0">Front end Developer</p>
      </div>
      <div className="bottom-info mt-8">
        <a href=""><i className="fab fa-whatsapp"></i></a>
        <a href=""><i className="fab fa-facebook-f"></i></a>
        <a href=""><i className="far fa-envelope"></i></a>
        <a href=""><i className="fab fa-github"></i></a>
        <a href=""><i className="fab fa-telegram-plane"></i></a>
        <a href=""><i className="fab fa-linkedin-in"></i></a>
      </div>
    </section>
  )
}

export default Contact