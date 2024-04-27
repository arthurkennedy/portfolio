
const PortfolioCard = ({imgSrc, name, summary, githubLink, website}) => {
    return (
        <div className="vertical-card">
            <img className="logo-img" src={imgSrc} alt="Portfolio Image" />
            <div>
                <h1>{name}</h1>
                <div className="details">
                    {githubLink && (
                        <p>
                            <strong>Github Link:</strong>{' '}
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                {githubLink}
                            </a>
                        </p>
                    )}
                    {website && (
                        <p>
                            <strong>Website:</strong>{' '}
                            <a href={website} target="_blank" rel="noopener noreferrer">
                                {website}
                            </a>
                        </p>
                    )}
                    <p>
                        <strong>Summary:</strong> {summary}
                    </p>
                </div>
            </div>
        </div>
    )
}

function Portfolio() {

    return (
      <section id="portfolio" className="portfolio">
            <div className="title">
                <h1>Portfolio</h1>
            </div>

            <div className="body">
                <PortfolioCard
                    imgSrc="https://cdn-icons-png.flaticon.com/128/423/423786.png"
                    name="Data Visualization Library"
                    website="https://datavisionjs.com"
                    githubLink="https://github.com/datavisionjs/datavision.js"
                    summary="DATAVISION.JS is a robust charting library with built in support for common aggregation functions (sum, avg, min, max, count) and interactive charts (bar, line, pie & more)"
                />
                <PortfolioCard
                    imgSrc="https://cdn-icons-png.flaticon.com/128/11376/11376446.png"
                    name="Fitness Web Application"
                    githubLink="https://github.com/arthurkennedy/ufit"
                    summary="U-Fit is a web application to build healthy habits with friends."
                />
                <PortfolioCard
                    imgSrc="https://cdn-icons-png.flaticon.com/128/11376/11376446.png"
                    name="Zombies and Survivors Simulation"
                    githubLink="https://github.com/arthurkennedy/Binary"
                    summary="A game simulation of Zombies and Survivors"
                />
                <PortfolioCard
                    imgSrc="https://cdn-icons-png.flaticon.com/128/174/174881.png"
                    name="Wordpress Website (Global Ekklesia)"
                    website="https://globalekklesia.com/"
                    summary="I utilized Wordpress to design and develop this website for a non-profit."
                />
                <PortfolioCard
                    imgSrc="https://cdn-icons-png.flaticon.com/128/11376/11376446.png"
                    name="My Portfolio Website"
                    githubLink="https://github.com/arthurkennedy/portfolio"
                    summary="Utilizing React.js, I crafted this portfolio website."
                />
            </div>
      </section>
    )
}
  
export default Portfolio
  