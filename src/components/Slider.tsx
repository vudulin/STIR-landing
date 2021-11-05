import React from "react"
import { styled } from "@linaria/react"

import anna from "assets/png/Anna.png"
import airrack from "assets/png/Airrack.png"
import lizaKoshy from "assets/png/Liza_Koshy.png"
import peterHollens from "assets/png/Peter_Hollens.png"
import jessica from "assets/png/Jessica.png"

import Youtube from "../assets/icons/youtube.svg"
import Instagram from "../assets/icons/instagram.svg"
import Twitter from "../assets/icons/twitter.svg"
import Shopify from "../assets/icons/shopify.svg"

type DataTypes = {
  id?: number
  name: string
  profession: string
  avatar: string
  badges?: {
    tags: React.ReactNode[]
    position: "left" | "right"
  }
}

const profiles = [
  {
    id: 1,
    name: "Anna",
    profession: "Podcaster",
    avatar: anna,
    badges: {
      tags: [<Youtube />, <Instagram />],
      position: "right",
    },
  },
  {
    id: 2,
    name: "Airrack",
    profession: "Youtuber",
    avatar: airrack,
    badges: {
      tags: [<Youtube />],
      position: "right",
    },
  },
  {
    id: 3,
    name: "Liza Koshy",
    profession: "Creator",
    avatar: lizaKoshy,
    badges: {
      tags: [<Youtube />, <Instagram />, <Twitter />],
      position: "left",
    },
  },
  {
    id: 4,
    name: "Peter Hollens",
    profession: "Musician",
    avatar: peterHollens,
    badges: {
      tags: [<Youtube />, <Shopify />],
      position: "right",
    },
  },
  {
    id: 5,
    name: "Jessica",
    profession: "Streamer",
    avatar: jessica,
    badges: {
      tags: [<Youtube />, <Instagram />],
      position: "right",
    },
  },
]
export const Slider: React.FC<{}> = () => {
  return (
    <Wrapper>
      {profiles.map((profile) => {
        const { id, name, profession, avatar } = profile
        return (
          <SliderItem
            key={id}
            name={name}
            avatar={avatar}
            profession={profession}
            position={profile.badges.position}
            tags={profile.badges.tags}
          ></SliderItem>
        )
      })}
    </Wrapper>
  )
}

export const SliderItem: React.FC<
  DataTypes & { position: string; tags: React.ReactNode[] }
> = (props) => {
  const { name, avatar, profession, position, tags } = props
  return (
    <ItemWrapper>
      <Bio position={position}>
        <Name>{name}</Name>
        <Profession>{profession}</Profession>
      </Bio>
      <Avatar src={avatar} />
      <Badges position={position}>
        {tags.map((tag: React.ReactNode, index: number) => (
          <Icon key={index}>{tag}</Icon>
        ))}
      </Badges>
    </ItemWrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 324px;
  gap: 56px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: #191919;
  z-index: 20;
`
const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 60px;
  background-color: #ffffff;
`
const Bio = styled.div<{ position: string }>`
  position: absolute;
  bottom: ${(props) => (props.position === "left" ? "55px" : "")};
  right: ${(props) => (props.position === "left" ? "-24px" : "")};
  top: ${(props) => (props.position !== "left" ? "-24px" : "")};
  left: ${(props) => (props.position !== "left" ? "-24px" : "")};
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  background: #ffffff;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.1);
  border-radius: 3.99744px;
  z-index: 3;
`
const Name = styled.div`
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 13px;
`
const Profession = styled.div`
  padding-top: 8px;
  font-size: 10px;
  line-height: 10px;
  border-top: 1px solid #f7f2e4;
  box-sizing: border-box;
`

const Avatar = styled.img`
  width: 264px;
  height: 264px;
  cursor: pointer;
`
const Badges = styled.div<{ position: string }>`
  position: absolute;
  bottom: ${(props) => (props.position === "left" ? "81px" : "")};
  left: ${(props) => (props.position === "left" ? "-24px" : "")};
  bottom: ${(props) => (props.position !== "left" ? "55px" : "")};
  right: ${(props) => (props.position !== "left" ? "-24px" : "")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: #ffffff;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.1);
  border-radius: 3.99744px;
  z-index: 3;
`
const Icon = styled.div`
  display: flex;
  cursor: pointer;
`
