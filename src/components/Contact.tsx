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
        <a href="https://wa.me/qr/6VYZYWSEUQMEC1"><i className="fab fa-whatsapp"></i></a>
        <a href="https://www.facebook.com/AhmedHusein22/"><i className="fab fa-facebook-f"></i></a>
        <a href="mailto:ahmedhusseinofficial22@gmail.com"><i className="far fa-envelope"></i></a>
        <a href="https://github.com/ahmedhussein74"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/ahmed-hussein-23b95b1b8"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </section>
  )
}

export default Contact