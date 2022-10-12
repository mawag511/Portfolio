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
                            - Graduated in Software Engineering and Software Systems and Technologies from Cardiff Metropolitan University and Varna University of Management;
                        </h2>
                        <h2>
                            - Worked on commercialized projects written in Kotlin (for android apps) and C# (for windows desktop apps);
                        </h2>
                        <h2>
                            - Also have an intermediate level in python due to having used it in various bot-development projects and QA testing.
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