import React from "react"
import { styled } from "@linaria/react"
import Axios from "assets/icons/label_axios.svg"
import TheInformation from "assets/icons/label_information.svg"
import TubeFilter from "assets/icons/label_tubefilter.svg"
import Next from "assets/icons/slider_next.svg"
import Previous from "assets/icons/slider_previous.svg"

const icons = [
  {
    id: 1,
    icon: <Axios />,
  },
  {
    id: 2,
    icon: <TheInformation />,
  },
  {
    id: 3,
    icon: <TubeFilter />,
  },
]
export const Trusted: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Title>Trusted by leaders of the creative community</Title>
      <Slider></Slider>
      <NavButtons>
        <Previous />
        <Next />
      </NavButtons>
      <Footer>
        <Featured>Featured in</Featured>
        <LabelList>
          {icons.map((item) => (
            <Label key={item.id}>{item.icon}</Label>
          ))}
        </LabelList>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
const Title = styled.div`
  display: flex;
  margin-top: 236px;
  margin-bottom: 102px;
  font-size: 40px;
  line-height: 48px;
`
const Slider = styled.div`
  display: flex;
  width: 100%;
  height: 429px;
`
const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-top: 90px;
  margin-bottom: 100px;
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 160px;
`
const Featured = styled.div`
  display: flex;
  margin-bottom: 42px;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.559642px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`
const LabelList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 39px;
`
const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
