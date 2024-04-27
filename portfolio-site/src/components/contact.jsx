

import ContactForm from "./contact-form";

const SocialCard = ({ imgSrc, name, socialLink }) => {
    return (
        <a className="social-card" href={socialLink} target="_blank" rel="noopener noreferrer">
            <img src={imgSrc} alt={name} className="social-card-image" />
            <h3 className="name">{name}</h3>
        </a>
    );
};


function Contact() {

    return (
        <>
            <section className="social" id="social">
                <div className="title">
                    <h1>Social Media</h1>
                </div>

                <div className="body hr-body">
                    <SocialCard
                            imgSrc="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                            name="LinkedIn"
                            socialLink="https://www.linkedin.com/in/arthurakennedy/"
                    />
                    <SocialCard
                            imgSrc="https://cdn-icons-png.flaticon.com/128/11376/11376446.png"
                            name="GitHub"
                            socialLink="https://github.com/arthurkennedy/"
                    />
                </div>
            </section>

            <section className="contact" id="contact">
            <div className="title">
                <h1>Contact Me</h1>
            </div>

            <div className="body">
                <ContactForm />
            </div>
            </section>
        </>
    )
}
  
export default Contact
  