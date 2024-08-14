import profile from '../assets/profile.jpg';

function Hero() {

    return (
      <section className="hero" id="home">
        <div className="image-container">
            <div className="inner-container">
                <img src={profile} alt="Profile Picture" />
            </div>
        </div>

        <div className="intro-container">
            <div className="intro">
                <h1>
                    Arthur A. kennedy
                </h1>
                <p>
                    Recent computer science graduate, December 2023.
                </p>
                <p>
                    Explore my portfolio to see my skills and projects in action.
                </p>
            </div>
        </div>
      </section>
    )
}
  
export default Hero
  