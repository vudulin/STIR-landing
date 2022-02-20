import React from "react"
import { styled } from "@linaria/react"

import { Carousel } from "components/Carousel"

import Axios from "assets/icons/label_axios.svg"
import TheInformation from "assets/icons/label_information.svg"
import TubeFilter from "assets/icons/label_tubefilter.svg"

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
      <Carousel />
      <Footer>
        <Featured>Featured in</Featured>
        <LabelList>
          {icons.map((item) => (
            <Label key={item.id}>{item.icon}</Label>
          ))}
        </LabelList>
      </Footer>
      <Goal>
        <GoalTitle>Welcome to Stir</GoalTitle>
        <Description>
          Our goal is to make every aspect of running your creator business
          simple so you can be creative and change the world.
        </Description>
      </Goal>
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
  width: 525px;
  margin-top: 236px;
  margin-bottom: 102px;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
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
  user-select: none;
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
const Goal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 199px;
  padding-bottom: 247px;
  background-color: #fff;
  box-sizing: border-box;
`
const GoalTitle = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #ff573d;
  margin-bottom: 15px;
`
const Description = styled.div`
  display: flex;
  width: 790px;
  font-weight: bold;
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  color: #191919;
`
