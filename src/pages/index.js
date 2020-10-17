import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LogoCyanWhite from "../images/cyan_white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const MainContainer = styled.div`
  background-color: #0a192f;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  width: 80%;
  max-width: 420px;
`

const Skills = styled.ul`
  width: 100%;
  max-width: 220px;
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 300;
    line-height: 1.2;

    a {
      color: white;
      font-weight: 400;
    }

    &:first-child {
      font-weight: 400;
    }
  }
`

const UnderConstruction = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 2rem;
`

const Socials = styled.div`
  margin-top: 1rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="En construcción" />
    <MainContainer>
      <UnderConstruction>
        Sitio en <br /> construcción
      </UnderConstruction>
      <Logo src={LogoCyanWhite} />
      <Skills>
        <li>Joezer Gullo</li>
        <li>
          FullStack Developer @{" "}
          <a
            href="https://www.instagram.com/sonartelematicslatam/"
            target="_blank"
          >
            SonarTelematics
          </a>
        </li>
        {/* <li>Músico</li> */}
      </Skills>
      <Socials>
        <a href="https://www.instagram.com/joezerg/" target="_blank">
          <FontAwesomeIcon size="2x" color="white" icon={faInstagram} />
        </a>
      </Socials>
    </MainContainer>
  </Layout>
)

export default IndexPage
