import { Container, Row, Col } from "react-bootstrap";
import { CRow } from "@coreui/react";
import { WorkCard } from "./WorkCard";
import proj1Img1 from "../assets/filmer_pic1.png";
import proj1Img2 from "../assets/filmer_pic2.png";
import proj1Img3 from "../assets/filmer_pic3.png";
import proj1Img4 from "../assets/filmer_pic4.png";
import proj2Img1 from "../assets/customer_support_bot_pic1.jpg";
import proj2Img2 from "../assets/customer_support_bot_pic2.png";
import proj2Img3 from "../assets/customer_support_bot_pic3.png";
import proj2Img4 from "../assets/customer_support_bot_pic4.png";
import proj3Img1 from "../assets/step3-1.png";
import proj3Img2 from "../assets/step3-2.png";
import proj3Img3 from "../assets/step3-3.png";
import proj3Img4 from "../assets/step3-4.png";
import proj4Img1 from "../assets/cmpit_pic1.png"
import proj4Img2 from "../assets/cmpit_pic2.png"
import proj4Img3 from "../assets/cmpit_pic3.png"
import proj4Img4 from "../assets/cmpit_pic4.png"
import proj5Img1 from "../assets/memory-game1.png"
import proj5Img2 from "../assets/memory-game2.png"
import proj5Img3 from "../assets/memory-game3.png"
import proj5Img4 from "../assets/memory-game4.png"
import proj6Img1 from "../assets/pet_finder_pic1.jpeg"
import proj6Img2 from "../assets/pet_finder_pic2.png"
import proj6Img3 from "../assets/pet_finder_pic3.png"
import proj6Img4 from "../assets/pet_finder_pic4.png"

export const Work = () => {

  const works = [
    {
      title: "Filmer",
      description: "Discord Bot",
      imgUrl: proj1Img1,
      content: "A Discord Bot developed with Python. Born as a useful bot for a server I'm in, it became a nice idea that might be useful to others as well. The purpose of the bot is to maintain a database of movies that are to be watched or that have been watched already, moreover it also can randomly decide a film for the server to watch.",
      picture1: proj1Img2,
      picture2: proj1Img3,
      picture3: proj1Img4
    },
    {
      title: "Client Support Bot",
      description: "Telegram Bot",
      imgUrl: proj2Img1,
      content: "Telegram support Bot developed with Python. Works as a customer support service for companies and firms that work with injectors. Is able to give information (upon request) about the firm itself, about an injector and about its availability. Can also save a user's chat ID in order to notify them about an injector's availability later on, in case the injector they looked for was not available when requested.", 
      picture1: proj2Img2,
      picture2: proj2Img3,
      picture3: proj2Img4,
    },
    {
      title: "STEP3 Database", 
      description: "Android application",
      imgUrl: proj3Img1,
      content: "Android application developed with Kotlin. A Database containing information about injectors. Below, screenshots of the application in landscape mode.",
      picture1: proj3Img2,
      picture2: proj3Img3,
      picture3: proj3Img4,
     
    },
    {
      title: "Common Rail Piezo Injector Tester",
      description: "Desktop application",
      imgUrl: proj4Img4,
      content: "Windows Desktop application developed with C# and Winforms. Useful when it comes to registering tests (their values and graphics when possible) of injectors by different clients. Aside from saving test results, injectors and client information in the database, the software also allows to export a PDF with test results of an injector.",
      picture1: proj4Img1,
      picture2: proj4Img2,
      picture3: proj4Img3
    },
    {
      title: "Pepe Card Game",
      description: "Browser webpage/webgame",
      imgUrl: proj5Img1,
      content: "Browser Memory Card Game developed with HTML, CSS and JavaScript. It includes a single-player mode (with easy, medium and hard difficulties) as well as a local multi-player mode that goes up to 4 players.",
      picture1: proj5Img2,
      picture2: proj5Img3,
      picture3: proj5Img4
    },
    {
      title: "Pet Finder",
      description: "Android application",
      imgUrl: proj6Img1,
      content: "Application developed with Kotlin, useful for animal shelters and volunteers. The purpose is to save a route/walk done by the client (with geolocation) and add information about stray animals seen during that. Can be useful to monitor the life and/or problems of stray animals in the area. (To be finished)",
      picture1: proj6Img2,
      picture2: proj6Img3,
      picture3: proj6Img4
    },
  ];
  
    return (
        <section className="work" id="my-work">
          <Container>
            <Row>
              <h2 className="title">My Work</h2>
              <p className="paragraph">Below you can find some projects I've worked on, including the university ones I'm most proud of as well as my internship ones and independent projects I made for personal (and not only) usage</p>
            </Row>
            <Row>
              <Col size={12}>
                <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
                  {
                    works.map((work, index) => {
                      return (
                        <WorkCard
                          key={index}
                          {...work}
                        />
                      )
                    })
                  }
                </CRow>
              </Col>
            </Row>
          </Container>
        </section>
    )
}





