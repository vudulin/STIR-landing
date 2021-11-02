import React from "react"
import { styled } from "@linaria/react"

// type MenuItem = {
//   id: number
//   name: string
//   icon: React.ReactNode
// }

// const menuItems = [
//   {
//     id: 1,
//     name: "Home",
//     icon: <Home />,
//   },
//   {
//     id: 2,
//     name: "Pay",
//     icon: <Pay />,
//   },
//   {
//     id: 3,
//     name: "Splits",
//     icon: <Splits />,
//   },
//   {
//     id: 4,
//     name: "Collectives",
//     icon: <Collectives />,
//   },
// ]

export const DashboardSnapshot: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Header>
        <Greetings></Greetings>
        <Button></Button>
        <Button></Button>
      </Header>
      <ChartTitle>
        <Revenue>
          <Title></Title>
          <ValueWrapper>
            <CurrentValue></CurrentValue>
            <PreviousPeriodValue></PreviousPeriodValue>
          </ValueWrapper>
        </Revenue>
        <Period></Period>
      </ChartTitle>
      <Chart></Chart>
      <ChartFooter>
        <ChartReviewsList></ChartReviewsList>
      </ChartFooter>
      <ChannelList></ChannelList>
      <Footer></Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 993px;
`
const Header = styled.div`
  display: flex;
`
const Greetings = styled.div`
  display: flex;
`
const Button = styled.div`
  display: flex;
`
const ChartTitle = styled.div`
  display: flex;
`
const Revenue = styled.div`
  display: flex;
`
const Title = styled.div`
  display: flex;
`
const ValueWrapper = styled.div`
  display: flex;
`
const CurrentValue = styled.div`
  display: flex;
`
const PreviousPeriodValue = styled.div`
  display: flex;
`
const Period = styled.div`
  display: flex;
`
const Chart = styled.div`
  display: flex;
`
const ChartFooter = styled.div`
  display: flex;
`
const ChartReviewsList = styled.div`
  display: flex;
`
const ChannelList = styled.div`
  display: flex;
`
const Footer = styled.div`
  display: flex;
`
