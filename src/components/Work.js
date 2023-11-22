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
import proj3Img1 from "../assets/scam_locator1.png";
import proj3Img2 from "../assets/scam_locator2.png";
import proj3Img3 from "../assets/scam_locator3.png";
import proj3Img4 from "../assets/scam_locator4.png";
import proj4Img1 from "../assets/cmpit_pic1.png";
import proj4Img2 from "../assets/cmpit_pic2.png";
import proj4Img3 from "../assets/cmpit_pic3.png";
import proj4Img4 from "../assets/cmpit_pic4.png";
import proj5Img1 from "../assets/step3-1.png";
import proj5Img2 from "../assets/step3-2.png";
import proj5Img3 from "../assets/step3-3.png";
import proj5Img4 from "../assets/step3-4.png";
import proj6Img1 from "../assets/isa_letter1.png";
import proj6Img2 from "../assets/isa_letter2.png";
import proj6Img3 from "../assets/isa_letter3.png";
import proj6Img4 from "../assets/isa_letter4.png";
import proj7Img1 from "../assets/pet_finder_pic1.jpeg";
import proj7Img2 from "../assets/pet_finder_pic2.png";
import proj7Img3 from "../assets/pet_finder_pic3.png";
import proj7Img4 from "../assets/pet_finder_pic4.png";
import proj8Img1 from "../assets/memory-game1.png";
import proj8Img2 from "../assets/memory-game2.png";
import proj8Img3 from "../assets/memory-game3.png";
import proj8Img4 from "../assets/memory-game4.png";

export const Work = () => {

  const works = [
    {
      title: "Filmer",
      description: "Discord Bot",
      imgUrl: proj1Img1,
      content: "Born as a useful bot for a server of friends, it became a nice idea that might be useful to others as well. The purpose of the bot is to maintain a database of movies that are to be watched or that have been watched already. Moreover, the bot can also randomly decide a movie for the server to watch (among the ones saved in the DB).",
      keywords: "Keywords: Discord, Python, SQLite DB (for the moment), Symmetric Key Encryption",
      picture1: proj1Img2,
      picture2: proj1Img3,
      picture3: proj1Img4
    },
    {
      title: "Client Support Bot",
      description: "Telegram Bot",
      imgUrl: proj2Img1,
      content: "Works as a customer support service for companies and firms that work with injectors and similar technical equipment. The bot is able to send information (upon request) about the firm itself, about injectors and about their availability. It can also save a user's chat ID in order to notify them about an injector's availability later on, in case the injector they looked for was not available when requested.", 
      keywords: "Keywords: Telegram, Python, SQLite DB, Machine Learning, Jupyter Notebook, Sequential Model",
      picture1: proj2Img2,
      picture2: proj2Img3,
      picture3: proj2Img4,
    },
    {
      title: "Scam Locator",
      description: "Flask webpage",
      imgUrl: proj3Img1,
      content: "Flask site where user input is checked against three different algorithms on whether it is a spam/scam or ham message. Different datasets were used in order to train a Naive-Bayes, a Logistic Regression and a Word Count algorithm, which are then imported to the back-end of the application and worked with.", 
      keywords: "Keywords: Flask, Python, Machine Learning, Jupyter Notebook, Naive-Bayes Model, Logistic Regression Model",
      picture1: proj3Img2,
      picture2: proj3Img3,
      picture3: proj3Img4,
    },
    {
      title: "Common Rail Piezo Injector Tester",
      description: "Desktop application",
      imgUrl: proj4Img4,
      content: "Software useful when it comes to registering injector tests (their values and graphs when possible) of different clients. Aside from saving test results, injectors and client information in the database, the software also allows to export a PDF with the necessary data.",
      keywords: "Keywords: C#, Winforms, SQLite DB, Generic Repository Pattern",
      picture1: proj4Img1,
      picture2: proj4Img2,
      picture3: proj4Img3
    },
    {
      title: "STEP3 Database", 
      description: "Android application",
      imgUrl: proj5Img1,
      content: "Database containing information about injectors. Below, screenshots of the application in landscape mode.",
      keywords: "Keywords: Kotlin, Room, Model-View-ViewModel pattern",
      picture1: proj5Img2,
      picture2: proj5Img3,
      picture3: proj5Img4,
     
    },
    {
      title: "Bosch ISA Letter Assignment", 
      description: "Android application",
      imgUrl: proj6Img1,
      content: "Database of different injectors with their according values and respective ISA Letters. Based on the inserted measured value, the corresponding letter is displayed. Below, screenshots of the application in landscape mode.",
      keywords: "Keywords: Kotlin, Room, Model-View-ViewModel pattern",
      picture1: proj6Img2,
      picture2: proj6Img3,
      picture3: proj6Img4,
     
    },
    {
      title: "Pet Finder",
      description: "Android application (work in progress...)",
      imgUrl: proj7Img1,
      content: "Android application possibly useful for animal shelters and volunteers. The purpose is to save a route/walk done by the user and add information about stray animals seen during it. The app can be useful to monitor the life and/or problems of stray animals in the area.",
      keywords: "Keywords: Kotlin, Room, Model-View-ViewModel pattern, Google Maps API",
      picture1: proj7Img2,
      picture2: proj7Img3,
      picture3: proj7Img4
    },
    {
      title: "Pepe Card Game",
      description: "Browser webpage/webgame",
      imgUrl: proj8Img1,
      content: "Browser Memory Card Game that includes a single-player mode (with easy, medium and hard difficulties) as well as a local multi-player mode that goes up to 4 players.",
      keywords: "Keywords: HTML, CSS, JavaScript",
      picture1: proj8Img2,
      picture2: proj8Img3,
      picture3: proj8Img4
    }
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





