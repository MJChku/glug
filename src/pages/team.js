import React from "react"
import Layout from "../components/layout"
import Card from "../components/memberCard"
import styled from "styled-components"
import {Box} from "rebass"

function getMembers(data) {
  let members = []

  let memberList = data.allMarkdownRemark.edges

  memberList.map(element => {
    return members.push(
      <Card
        username={element.node.frontmatter.username}
        full_name={element.node.frontmatter.name}
        designation={element.node.frontmatter.designation}
      />
    )
  })

  return members
}

const OutContainer = styled(Box)({
	fontFamily: "Arvo, serif",
	display: "flex",
	flexDirection: "row",
	maxWidth: "1280px",
	paddingTop:"60px",
	margin: "0 auto",
	height: "auto",
	flexWrap: "wrap",
	flexFlow:"column",
	justifyContent: "space-around",


})


const Container = styled(Box)({
	width:"100%",
	fontFamily: "Arvo, serif",
	display: "flex",
	display: "-webkit-box",
    display: "-moz-box",
    display: "-ms-flexbox",
    display: "-webkit-flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap:"wrap"
})

const Heading = styled(Box)({
	fontFamily: "Arvo",
    fontWeight: "800",
    fontSize :"50px",
    marginBottom:"20px",
    textAlign:"center",
  	filter: `drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))`,
})

const Team = ({data}) => (
	<Layout>
	<OutContainer>
	<Box width={[1]}>
	<Heading>Team</Heading>
	</Box>
	<Container  >
	<Box width={[1,1/3]} paddingLeft = {[50,0,0]} >
	
	<Card   username="cristonkrizz"
            full_name="Criston Mascarenhas"
            designation="FSMK Regional Coordinator"/>
	</Box>
	<Box width={[1,1/3]} paddingLeft = {[50,0,0]}>
	<Card   username="hyraze"
            full_name="Hanishraj B Rao"
            designation="FSMK Member"  />
	</Box>
	<Box width={[1,1/3]} paddingLeft = {[50,0,0]}>
	<Card   username="abs87"
            full_name="Akshay B Shetty "
            designation="FSMK Member"  />
	</Box>
	<Box width={[1,1/3]} paddingLeft = {[50,0,0]}>
	<Card   username="a007"
            full_name="Akshay Irodi "
            designation="FSMK Member"  />
	</Box>
	<Box width={[1,1/3]} paddingLeft = {[50,0,0]}>
	<Card   username="sbhat893"
            full_name="Sumuk Bhat"
            designation="FSMK Member"  />
	</Box>
	</Container>
</OutContainer>
	</Layout>
)

export default Team


