import { Container, Row } from "react-bootstrap"
import myPDF from "../assets/CV_european_format.pdf";

export const AboutMe = () => {
    return (
        <section className="about-me" id="about-me">
            <Container>
            <Row>
                <h1 >{`A bit about me:`}</h1>
            </Row>  
                <Row className="align-items-center">
                    <div className="abme-square">
                        <h2>
                            - Graduated from Cardiff MET University in Software Engineering, and from Varna University of Management in Software Systems and Technologies;
                        </h2>
                        <h2>
                            - Worked on commercialized projects written in Kotlin (for android apps) and C# (for windows desktop apps);
                        </h2>
                        <h2>
                            - Also have an intermediate experience with Python, JavaScript and SQL (MySQL, SQLite, SQL Server).
                        </h2>
                    </div>
                </Row>
                <Row>
                    <h3 className="download"> Download my CV: </h3>
                   
                </Row>
                    <a href={myPDF} download="Maria's_CV.pdf"><button className="cv"> Curriculum Vitae</button></a>
            </Container>
        </section>
    )
}