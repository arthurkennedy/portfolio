
const EducationCard = ({ imgSrc, school, degree, date }) => {
    return (
        <div className="vertical-card">
            <img className="logo-img" src={imgSrc} alt="School image" />
            <div>
                <h1>{school}</h1>
                <div className="details">
                    <p>Degree: {degree}</p>
                    <p>Graduation Date: {date}</p>
                </div>
            </div>
        </div>
    )
}

const ExperienceCard = ({ imgSrc, company, title, dates, summary}) => {
    return (
        <div className="vertical-card">
            <img className="logo-img" src={imgSrc} alt="School image" />
            <div>
                <h1>{title}</h1>
                <div className="details">
                    <p><strong>Company</strong>: {company}</p>
                    <p><strong>Dates</strong>: {dates}</p>
                    {summary && (
                        <p><strong>Summary</strong>: {summary}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

const TechCard = ({ imgSrc, name }) => {
    return (
        <div className="tech-card">
            <img className="logo-img" src={imgSrc} alt={name} />
            <h3>{name}</h3>
        </div>
    );
}


function About() {

    return (
        <>
            <section className="body">
                <div className="title">
                <h1>Education</h1>
                </div>

                <div className="body">
                    <EducationCard 
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQlHkEdWSY8OZl5wuCi-L6dOwl2tG_CKXbDSJVes-yg&s" 
                        school="Concordia University, St Paul" 
                        degree="Bachelor of Science in Computer Science"
                        date="December, 2023"
                    />
                    <EducationCard 
                        imgSrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQaL-d5q5MofC2hlzrY1wKHDcvAypWO5NdbFg-3zC7NFII1oo-y" 
                        school="Anoka Technical College" 
                        degree="A.S in IT Management with Software Development Emphasis"
                        date="May, 2021"
                    />
                </div>
            </section>

            <section className="body">
                <div className="title">
                <h1>Experience</h1>
                </div>

                <div className="body">
                    <ExperienceCard
                        imgSrc="https://media.licdn.com/dms/image/D560BAQGKf1lAXNGhqA/company-logo_200_200/0/1704932084483/dayton_rogers_mfg_logo?e=1722470400&v=beta&t=BUt5S-0wYu8US4qAi91krm6FpS80AwKwRVaYte9McFw" 
                        title="Software Developer - Capstone Project"
                        company="Dayton Rogers Mfg" 
                        dates="Jan 2021 - May 2021 - 5 months"
                        summary="Collaborated with a cross-functional team to implement a SharePoint site and Power App forms, automating the hiring process and simplifying PTO requests."
                    />
                </div>
            </section>

            <section className="body">
                <div className="title">
                <h1>Tech Stack</h1>
                </div>

                <div className="hr-body">
                    <TechCard
                        imgSrc="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                        name="JavaScript"
                    />
                    <TechCard
                        imgSrc="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
                        name="React.JS"
                    />
                    <TechCard
                        imgSrc="https://cdn-icons-png.flaticon.com/128/5968/5968322.png"
                        name="Node.JS"
                    />
                    <TechCard
                        imgSrc="https://cdn-icons-png.flaticon.com/128/3098/3098090.png"
                        name="Python"
                    />
                    <TechCard
                        imgSrc="https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
                        name="Java"
                    />
                    <TechCard
                        imgSrc="https://cdn-icons-png.flaticon.com/128/6132/6132222.png"
                        name="C++"
                    />
                    <TechCard
                        imgSrc="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                        name="HTML, CSS"
                    />
                    <TechCard
                        imgSrc="https://cdn-icons-png.flaticon.com/128/5968/5968332.png"
                        name="PHP"
                    />
                    <TechCard
                        imgSrc="https://cdn-icons-png.flaticon.com/128/2772/2772128.png"
                        name="SQL"
                    />
                    <TechCard
                        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png"
                        name="Rust"
                    />
                </div>
            </section>
        </>
    )
}
  
export default About
  