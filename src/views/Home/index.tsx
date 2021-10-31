import React, { useState } from "react"
import { styled } from "@linaria/react"
// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route,
//   Switch,
//   useHistory,
// } from "react-router-dom"

import NextIcon from "../../assets/icons/left-arrow.svg"
import PreviousIcon from "../../assets/icons/right-arrow.svg"
import { Main } from "views/Main"
import { Trusted } from "views/Trusted"
import { StayOrganized } from "views/StayOrganized"
import { Payments } from "views/Payments"

const pages = [
  {
    path: "/",
    src: "views/Main",
    component: <Main />,
  },
  {
    path: "/trusted",
    src: "views/Trusted",
    component: <Trusted />,
  },
  {
    path: "/stay-organized",
    src: "views/StayOrganized",
    component: <StayOrganized />,
  },
  {
    path: "/payments",
    src: "views/Payments",
    component: <Payments />,
  },
]

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>
}

const Home: React.FC<any> = () => {
  const [number, setNumber] = useState(0)

  const blackBack = number % 2 === 0

  const nextPage = () => {
    return number + 1 < pages.length ? setNumber(number + 1) : setNumber(0)
  }
  const previousPage = () => {
    return number > 0 ? setNumber(number - 1) : setNumber(pages.length - 1)
  }

  return (
    <Wrapper blackBack={blackBack}>
      <Previous onClick={previousPage}>
        <PreviousIcon />
      </Previous>
      {/* <Header></Header> */}
      <MainContent>
        <Container children={pages[number].component} />
      </MainContent>
      {/* <Footer></Footer> */}
      <Next onClick={nextPage}>
        <NextIcon />
      </Next>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ blackBack: boolean }>`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  /* grid-template-rows: 100px 1fr 100px; */
  /* width: 100vw; */
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${(props) => (!props.blackBack ? "#191919" : "#ffffff")};
  color: ${(props) => (!props.blackBack ? "#ffffff" : "#000000")};
`

const MainContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;

  /* height: 100vh; */
`
// const Header = styled(TabContainer)`
//   grid-row-start: 1;
//   grid-row-end: 2;
//   background-color: #a5e9f1;
// `
// const Footer = styled(TabContainer)`
//   grid-row-start: 3;
//   grid-row-end: 4;
//   background-color: #f3cccc;
// `
const SlideTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to top,
    transparent 20%,
    rgba(129, 122, 122, 0.616) 50%,
    transparent 80%
  );
  grid-row-start: 1;
  grid-row-end: 4;
  z-index: 3;
  opacity: 0;
  transition: 0.8s;
  &:hover {
    opacity: 0.5;
  }
`
const Previous = styled(SlideTab)`
  grid-column-start: 1;
  grid-column-end: 2;
  /* background-color: #fff; */
`
const Next = styled(SlideTab)`
  grid-column-start: 3;
  grid-column-end: 4;
  /* background-color: #000; */
`

export default Home
