import React from "react"
import { styled } from "@linaria/react"

type DataTypes = {
  id?: number
  name: string
  profession: string
  avatar: string
  badges?: {
    tags: string[]
    position: "left" | "right"
  }
}
const profiles = [
  {
    id: 1,
    name: "Ilona",
    profession: "Podcaster",
    avatar: "../assets/png/...",
    badges: {
      tags: ["youtube", "instagram"],
      position: "right",
    },
  },
  {
    id: 2,
    name: "Airrack",
    profession: "Youtuber",
    avatar: "../assets/png/...",
    badges: {
      tags: ["youtube"],
      position: "right",
    },
  },
  {
    id: 3,
    name: "Lisa Kasley",
    profession: "Creator",
    avatar: "../assets/png/...",
    badges: {
      tags: ["youtube", "instagram", "twitter"],
      position: "left",
    },
  },
  {
    id: 4,
    name: "Peter Hawkins",
    profession: "Musician",
    avatar: "../assets/png/...",
    badges: {
      tags: ["youtube", "dingding"],
      position: "right",
    },
  },
  {
    id: 5,
    name: "Jessica Cay",
    profession: "Streamer",
    avatar: "../assets/png/...",
    badges: {
      tags: ["youtube", "instagram"],
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
            tags={[...profile.badges.tags]}
          ></SliderItem>
        )
      })}
    </Wrapper>
  )
}

export const SliderItem: React.FC<
  DataTypes & { position: string; tags: string[] }
> = (props) => {
  const { name, avatar, profession, position, tags } = props
  return (
    <ItemWrapper>
      <Bio>
        <p>{name}</p>
        <p>{profession}</p>
      </Bio>
      <Avatar src={avatar}/>
      <Badges>
        {tags.map((tag:string, index:number) => (
          <Icon key={index}>{tag} position={position}</Icon>
        ))}
      </Badges>
    </ItemWrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 324px;
  margin: 0 -120px;
  background-color: #93ccce;
`
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  background-color: #ffffff;
`
const Bio = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
`
const Avatar = styled.img`
  display: flex;
  width: 100px;
  height: 100px;
`
const Badges = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 50px;
  height: 100px;
`
const Icon = styled.div`
  display: flex;
`