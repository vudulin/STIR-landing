import React from "react"
import { styled } from "@linaria/react"

import Home from "../assets/icons/tabmenu_home.svg"
import Pay from "../assets/icons/tabmenu_pay.svg"
import Splits from "../assets/icons/tabmenu_splits.svg"
import Collectives from "../assets/icons/tabmenu_collectives.svg"

// type MenuItem = {
//   id: number
//   name: string
//   icon: React.ReactNode
// }

const menuItems = [
  {
    id: 1,
    name: "Home",
    icon: <Home />,
  },
  {
    id: 2,
    name: "Pay",
    icon: <Pay />,
  },
  {
    id: 3,
    name: "Splits",
    icon: <Splits />,
  },
  {
    id: 4,
    name: "Collectives",
    icon: <Collectives />,
  },
]
export const Window: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Wrapper>
      <TabMenu>
        {menuItems.map((item) => {
          const { id, name, icon } = item
          return (
            <TabMenuItem key={id}>
              {icon}
              <Name>{name}</Name>
            </TabMenuItem>
          )
        })}
      </TabMenu>
      <Content>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  top: -16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1039px;
  height: 695px;
  /* margin-top: -16px; */
  background: #7349ff;
  box-shadow: 0px -16px 64px rgba(43, 42, 53, 0.32);
  border-radius: 12px;
  box-sizing: border-box;
  z-index: 10;
`
const TabMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 26px;
  margin: 0;
  padding: 16px 0;
  list-style: none;
`
const TabMenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  list-style: none;
  cursor: pointer;
`
const Name = styled.div`
  font-size: 12px;
  line-height: 17px;
  color: #ffffff;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1027px;
  height: 640px;
  background: #ffffff;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
