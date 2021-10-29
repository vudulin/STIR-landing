import React from "react"
import { styled } from "@linaria/react"
import PreviousIcon from "./assets/icons/left-arrow.svg"
import NextIcon from "./assets/icons/right-arrow.svg"

import { Container } from "./Container"

const App: React.FC<any> = () => {
  return (
    <Wrapper>
      <Next>
        <NextIcon />
      </Next>
      <Header></Header>
      <MainContent>
        <Container children={"Yeahooo"} />
      </MainContent>
      <Footer></Footer>
      <Previous>
        <PreviousIcon />
      </Previous>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 100px 1fr 100px;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
`
const TabContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`
const MainContent = styled(TabContainer)`
  grid-row-start: 2;
  grid-row-end: 3;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: yellow;
`
const Header = styled(TabContainer)`
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: blue;
`
const Footer = styled(TabContainer)`
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: red;
`
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
const Next = styled(SlideTab)`
  grid-column-start: 1;
  grid-column-end: 2;
`
const Previous = styled(SlideTab)`
  grid-column-start: 3;
  grid-column-end: 4;
`

export default App
