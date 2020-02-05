import React from "react"
import Image from "../../components/image"
import styled from "styled-components"
import { Box } from "rebass"

const Container = styled(Box)({
  fontFamily: "Varela Round, sans-serif",
  display: "flex",
  flexDirection: "row",
  maxWidth: "100%",
  margin: "0 auto",
  height: "100%",
  width: "1 1/2",
  flexWrap: "wrap-reverse",
  justifyContent: "space-between",
})
const Left = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "auto",
  justifyContent: "space-around",
  alignContent: "center",
})

const Right = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  alignContent: "center",
  border: "6px dashed #7a49ff",
  borderRadius: "10px",
  padding: "10px",
})
const Heading = styled(Box)({
  fontFamily: "Montserrat",
  marginBottom: "20px",
  fontWeight: "700",
  fontSize: "50px",
  filter: `drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))`,
})

const Pic = styled(Image)({})

const Middle = () => (
  <Container>
    <Box width={[1, 1 / 2]} alignSelf="center" p={3}>
      <Heading>About...</Heading>
      <Center>
        The site is dedicated for my post.
      </Center>
    </Box>
    <Box width={[1, 1 / 2]} alignSelf="center" p={3}>
      <Left>
        <Pic filename="teaser.png" />
      </Left>
    </Box>
  </Container>
)

export default Middle
