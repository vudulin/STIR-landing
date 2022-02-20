import React from "react"
import { styled } from "@linaria/react"
import { Routes, Route, Link, useLocation } from "react-router-dom"

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
  const location = useLocation()
  const index = pages.findIndex((page) => page.path === location.pathname)
  const blackBack = index % 2 === 0
  return (
    <Wrapper blackBack={blackBack}>
      <Link
        to={`${
          index > 0 ? pages[index - 1].path : pages[pages.length - 1].path
        }`}
      >
        <Previous>
          <PreviousIcon />
        </Previous>
      </Link>
      <MainContent>
        <Routes>
          {pages.map((page: { component: any; path: string }) => (
            <Route
              key={page.path}
              path={page.path}
              element={<Container children={page.component} />}
            />
          ))}
        </Routes>
      </MainContent>
      <Link
        to={`${
          index + 1 < pages.length ? pages[index + 1].path : pages[0].path
        }`}
      >
        <Next>
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
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
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
`
const Next = styled(SlideTab)`
  top: 0;
  right: 0;
`

export default Home
