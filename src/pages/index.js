import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LogoCyanWhite from "../images/cyan_white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

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
  max-height: 280px;
  margin-bottom: 2rem;
`

const Skills = styled.ul`
  width: 100%;
  max-width: 280px;
  list-style: circle;
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
      list-style: none;
    }
  }
`

const Socials = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  h3 {
    color: white;
    margin-bottom: 20px;
  }
  > div {
    display: flex;
    gap: 10px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="En construcción" />
    <MainContainer>
      <Logo src={LogoCyanWhite} />
      <Skills>
        <li>
          Hi, i'm Joezer Gullo <br /> 🇻🇪 living @ 🇨🇴
        </li>
        <li>
          co-founder <br /> @
          <a href="https://www.instagram.com/muufapp/" target="_blank">
            muufapp
          </a>
        </li>
        <li>
          FullStack Dev
          <br /> @
          <a
            href="https://www.instagram.com/sonartelematicslatam/"
            target="_blank"
          >
            SonarTelematics
          </a>
        </li>
        <li>Musician 🥁 </li>
      </Skills>
      <Socials>
        <h3>Meet me at</h3>
        <div>
          <a href="https://www.instagram.com/joezerg/" target="_blank">
            <FontAwesomeIcon size="3x" color="white" icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/joezergullo" target="_blank">
            <FontAwesomeIcon size="3x" color="white" icon={faYoutube} />
          </a>
        </div>
      </Socials>
    </MainContainer>
  </Layout>
)

export default IndexPage
