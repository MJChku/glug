import React from "react"
import { Box, Text } from "rebass"
import styled from "styled-components"

const Foot = styled(Box)({
  fontFamily: "Varela Round, sans-serif",
  width: "100%",
  flexWrap: "wrap",
  background: "white",
  boxShadow: "0 2px 10px rgba(127, 0, 255, 0.15)",
})

const Lnks = styled.span`
  color: #2d3748;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    background-color: #F650AF;
    transform-origin: bottom center;
    transform: scaleY(0);
    transition: all 0.1s ease-in-out;
  }

  &:hover::before {
    transform: scaleY(1);
    background-color: #F650AF;
  }
`

const Container = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  filter: drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3));
`

const Links = styled.a`
  display: flex;
  color: #F650AF;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1.1em;
  padding: 10px;
  text-align: center;
  transition: all 1s;
  justify-content: center;
  &:hover {
    text-shadow: 0 8px 14px rgba(127, 0, 255, 0.15);
    color: #44AAEE;
  }
`

const Column = styled.div`

    -webkit-box-flex: 1;
    -ms-flex: 1 0 290px;
      flex: 1 0 290px;
      color: #F650AF;
      padding="70px 0";
  -webkit-box-sizing: border-box;
      box-sizing: border-box;
  line-height: 1.5em;


`

const Copyright = styled(Box)({
  display: "block",
  justifyContent: "center",
  textAlign: "center",
  fontWeight: "700",
  fontFamily: "Montserrat, san-serif",
  width: "100%",
})

const Footer = ({ siteTitle }) => (
  <Foot>
    <Container>
      
      <Column>
        <Box fontSize="1.6em" padding="10px 0" margin="10px">

          <Text
            fontSize="0.8em"
            justifyContent="center"
            textAlign="center"
            fontWeight="500"
          >
            <strong>
              Love is hard
            </strong>
          </Text>
        </Box>
      </Column>
      <Copyright color="#2d3748">
        <p>
          {" "}
          Jiacheng © {new Date().getFullYear()}
         <Links href="https://github.com/MJChku">Cooper</Links>
       </p>
      </Copyright>
    </Container>
  </Foot>
)

export default Footer
