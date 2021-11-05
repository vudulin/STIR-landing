import React, { useState } from "react"
import { styled } from "@linaria/react"
import { Route, Link } from "react-router-dom"

import NextIcon from "../../assets/icons/left-arrow.svg"
import PreviousIcon from "../../assets/icons/right-arrow.svg"
import { Main } from "views/Main"
import { Trusted } from "views/Trusted"
import { StayOrganized } from "views/StayOrganized"
import { Payments } from "views/Payments"

const pages = [
  {
    path: "/",
    exact: true,
    src: "views/Main",
    component: <Main />,
  },
  {
    path: "/trusted",
    exact: false,
    src: "views/Trusted",
    component: <Trusted />,
  },
  {
    path: "/stay-organized",
    exact: false,
    src: "views/StayOrganized",
    component: <StayOrganized />,
  },
  {
    path: "/payments",
    exact: false,
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
      <Link
        to={`${
          number > 0 ? pages[number - 1].path : pages[pages.length - 1].path
        }`}
      >
        <Previous onClick={previousPage}>
          <PreviousIcon />
        </Previous>
      </Link>
      <MainContent>
        <Route path={pages[number].path}>
          <Container children={pages[number].component} />
        </Route>
      </MainContent>
      <Link
        to={`${
          number + 1 < pages.length ? pages[number + 1].path : pages[0].path
        }`}
      >
        <Next onClick={nextPage}>
          <NextIcon />
        </Next>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ blackBack: boolean }>`
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${(props) => (!props.blackBack ? "#191919" : "#ffffff")};
  color: ${(props) => (!props.blackBack ? "#ffffff" : "#000000")};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const MainContent = styled.div`
  display: flex;
`

const SlideTab = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 20%,
    rgba(129, 122, 122, 0.616) 50%,
    transparent 80%
  );
  z-index: 3;
  opacity: 0;
  transition: 0.8s;
  &:hover {
    opacity: 0.5;
  }
`
const Previous = styled(SlideTab)`
  top: 0;
  left: 0;
  /* background-color: #f55656; */
`
const Next = styled(SlideTab)`
  top: 0;
  right: 0;
  /* background-color: #59a769; */
`

export default Home
