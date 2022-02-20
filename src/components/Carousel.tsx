import React, { useState } from "react"
import { styled } from "@linaria/react"

import glasses from "assets/png/glasses.png"
import cups from "assets/png/cups.png"
import camera_pair from "assets/png/camera_pair.png"
import beard from "assets/png/beard.png"

import NextIcon from "assets/icons/slider_next.svg"
import PreviousIcon from "assets/icons/slider_previous.svg"

const images = [cups, glasses, camera_pair, beard]

export const Carousel: React.FC<{}> = () => {
  const [active, setActive] = useState(1)

  const length = images.length
  const setPreviousImageIndex = active <= 0 ? length - 1 : active - 1
  const setNextImageIndex = active === length - 1 ? 0 : active + 1

  const setPreviousImage = () => {
    setActive(setPreviousImageIndex)
  }
  const setNextImage = () => {
    setActive(setNextImageIndex)
  }
  return (
    <Wrapper>
      <ItemsWrapper>
        <Item
          index={setPreviousImageIndex}
          image={images[setPreviousImageIndex]}
          length={length}
          main={false}
        />
        <Item
          index={active}
          image={images[active]}
          length={length}
          main={true}
        />
        <Item
          index={setNextImageIndex}
          image={images[setNextImageIndex]}
          length={length}
          main={false}
        />
      </ItemsWrapper>
      <NavButtons>
        <Prev onClick={setPreviousImage}>
          <PreviousIcon />
        </Prev>
        <Next onClick={setNextImage}>
          <NextIcon />
        </Next>
      </NavButtons>
    </Wrapper>
  )
}

export const Item: React.FC<{
  image: string
  index: number
  length: number
  main: boolean
}> = ({ image, index, length, main }) => {
  return (
    <ItemWrapper main={main}>
      <Image src={image} />
      <SlidePaginator>
        Slide {index + 1} from {length}
      </SlidePaginator>
    </ItemWrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: #191919;
  z-index: 20;
`
const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  margin-bottom: 92px;
  gap: 70px;
  overflow: hidden;
`
const ItemWrapper = styled.div<{ main: boolean }>`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: ${(props) => (props.main ? "752px" : "683px")};
  height: ${(props) => (props.main ? "429px" : "389px")};
`
const Image = styled.img`
  display: flex;
`
const SlidePaginator = styled.div`
  position: absolute;
  bottom: 7px;
  left: 33px;
  display: flex;
  width: 60px;
  height: 14px;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
`
const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-bottom: 100px;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Prev = styled(Button)``
const Next = styled(Button)``
