import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import ContentBox from './ContentBox';
import ImageBox from './ImageBox';

const Main = styled.div`
font-size:13px;
grid-area:content;
background-color:white;
border: 1px solid #a7d7f9;
border-top:none;
padding: 1.5%;
font-family:sans-serif;
color:black;
h1.title{
  border-bottom:solid 1px grey;
  font-family: 'Linux Libertine','Georgia','Times',serif;
  line-height: 1.3;
  margin-bottom: 0.25em;
  padding: 0;
  font-size: 2.5em;
  color:black;
  position:relative;
  font-weight: 300;
  i{
    position:absolute;
    bottom:10px;
    right:0px
    font-size:.6em;

  }
}
a{
  color: #0645ad;
  text-decoration:none;
}
a:hover{
 color:#0b0080!important;
 border-bottom: solid 1px;
}
a:after{
 content: '\f35d';
 font-family: "Font Awesome 5 Free";
 color:blue;
 font-weight: bold;
 margin-left:2px;
 font-size:10px;
 font-style: normal;
 text-decoration:none;
}
p.fromRyy{
  font-size: 14px;
}
& > ul{
  padding-top:5px;
  margin: 0px 0px 2rem .5rem
}
ul > li{
  list-style: square inside;
  & > a{
    color:#0645ad;
  }
  margin-bottom:0px;
}
& > ul > li{
  padding:0px;
  margin:0px;
}
`;
const TopSection = styled.div`
  display:grid;
  grid-template-columns: auto auto;
  grid-auto-rows: auto;
  grid-template-areas: "bodyandnav imagebox";
  margin-bottom:2rem;
  grid-row-gap: 5px;
  @media(max-width:950px){
    grid-auto-rows:auto;auto
    grid-template-areas: "imagebox" "bodyandnav";
    grid-column-gap: 1.5rem
  }
`;
const BodyAndNav = styled.div`
  grid-area: bodyandnav;
  @media(max-width:950px){
    grid-template-columns:auto auto;
    grid-template-rows:auto;
    grid-template-areas: "body navbox"
    grid-column-gap: 1.5rem
  }
`;
const Body = styled.div`
  grid-area:body;
  font-size:15px;
  align-content:end;
  margin-bottom:10px;
  p{
    margin:0px;
  }
  ul{
    padding-bottom:5px;
    margin:0px;
  }
`;
const SectionContainer = styled.div`
display:grid;
grid-template-columns:auto;
grid-area: SectionContainer;
`;

const MainPage = ({
  contentLinks, titleBody, sections, probox, headshot,
}) => (
  <Main>
    <h1 className="title" >Ryan Creamer       <i className="fa fa-lock" /></h1>
    <p className="fromRyy">From Ryanpedia, the free Ryyclopedia</p>
    <TopSection>
      <BodyAndNav>
        <Body>
          <div dangerouslySetInnerHTML={{ __html: titleBody }} />
        </Body>
        <ContentBox links={contentLinks} />
      </BodyAndNav>
      <ImageBox probox={probox} headshot={headshot} />
    </TopSection>
    <SectionContainer>
      {sections.map(section => <Section key={section.node.frontmatter.num} data={section} />)}
    </SectionContainer>
  </Main>

);

export default MainPage;
