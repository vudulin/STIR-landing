import React from "react"
import { styled } from "@linaria/react"
import LogoIcon from "../assets/icons/logo.svg"

export const Main: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Header>
        <Logo>
          <LogoIcon />
        </Logo>
        <Join>Join our team</Join>
      </Header>
      <Content>
        <Title>Where creators run their business.</Title>
        <Description>
          Meet Stir. The financial studio for collaborating, splitting revenue,
          money management and metrics—all in one place
        </Description>
        <GetStarted>
          <Input type="email" placeholder="Enter your email" />
          <Button type="submit">Get started</Button>
        </GetStarted>
      </Content>
      <Slider></Slider>
      <WindowContainer>
        <Window>asfa</Window>
      </WindowContainer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0 70px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin-top: 14px;
  padding: 5px 2px;
`
const Logo = styled.div`
  align-items: center;
`
const Join = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #222222;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 345px;
  margin: 135px 70px 60px;
`

const Title = styled.div`
  width: 825px;
  margin: -8px 0 31px;
  font-size: 64px;
  line-height: 68px;
  color: #191919;
  text-align: center;
`
const Description = styled.div`
  display: flex;
  width: 613px;
  margin-bottom: 36px;
  font-size: 20px;
  line-height: 28px;
  color: #191919;
  text-align: center;
`
const GetStarted = styled.form`
  display: flex;
`

const Input = styled.input`
  width: 476px;
  height: 56px;
  padding: 21px 180px 21px 31px;
  border: 1px solid #7352ff;
  box-sizing: border-box;
  border-radius: 21px;
  &placeholder {
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }
  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  width: 149px;
  height: 56px;
  margin-left: -149px;
  padding: 21px auto;
  background: #7352ff;
  border-radius: 21px;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  border: none;
  &:focus {
    outline: none;
  }
`

const Slider = styled.div`
  display: flex;
  align-items: center;
  height: 324px;
  margin: 0 -120px;
  background-color: #93ccce;
`
const WindowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 610px;
  overflow-y: hidden;
`
const Window = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1039px;
  height: 695px;
  background: url(.png), #7349ff;
  box-shadow: 0px -16px 64px rgba(43, 42, 53, 0.32);
  border-radius: 12px;
  box-sizing: border-box;
`
