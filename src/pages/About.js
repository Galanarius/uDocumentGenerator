import React, {Component} from 'react';
import styled from 'styled-components';
import uDGLogo from '../icons/uDG.png';
import ProcessJSON from "../Processing/ProcessJSON";
import InlineCode from "../Markdown-Render/InlineCode";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../Markdown-Render/CodeBlock";

const AuthorContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: start;
  @media(max-width: 500px){ 
    h1{
      font-size: 26px;
    }
  }
`;

const CreatorCreditsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const IconCard = styled.div`
  border-radius: 3px;
  width: 32px;
  height: 32px;
  background: white url(${uDGLogo});
  background-size: cover;
  margin-left: 10px;
  -webkit-box-shadow: 0px 0px 1px rgba(0,0,0,0.26);-moz-box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.26);box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.26);
`;

const Footer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  margin-top: 25px;
  margin-bottom: 10px;
  @media(max-width: 500px){
    margin-top: 15px;
  }
`;

const UDGLogo = styled.div`
  background: url(${uDGLogo});
  background-size: cover;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 10px;
  -webkit-box-shadow: 0px 0px 1px rgba(0,0,0,0.26);-moz-box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.26);box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.26);
`;


const ContentContainer = styled.div`
  display: block;
  margin-top: 20px;
  @media(orientation: landscape) and (max-height: 1000px){
  	margin-top: 13px;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 30px;
  display: block;
  @media(orientation: landscape) and (max-height: 1000px){
  	margin-top: 13px;
  }
`;

const DescriptionContainer = styled.div`
  overflow-x:hidden;
  width: 80%;
  max-height: 400px;
  min-height: 50px !important;
  height: auto;
  -webkit-overflow-scrolling: touch;
  @media(max-width: 375px){
    height: 95px;
  }
   @media(max-width: 1000px){
   max-height: 170px;
  }
  @media(max-width: 800px){
   max-height: 150px;
  }
`;

const AcknowledgementsContainer = styled.div`
  overflow-x:hidden;
  width: 80%;
  max-height: 200px;
  min-height: 50px !important;
  height: auto;
  -webkit-overflow-scrolling: touch;
  h1{
  	font-size: 25px;
  }
  h2{
  	font-size: 20px;
  }
  @media(max-width: 375px){
    height: 95px;
  }
   @media(max-width: 1000px){
   max-height: 170px;
  }
  @media(max-width: 800px){
   max-height: 150px;
  }
  @media(orientation: landscape) and (max-height: 1000px){
  	max-height: 175px;
  }
`;

const Container = styled.div`
  width: auto;
  height: auto;
  min-height: 500px;
  opacity: 1;
  transition: all 0.2s ease-in-out;
  color: white;
  margin-left: 5%;
  display: block;
  position:absolute;
  top: 100px;
  overflow-x: hidden;
  @media(max-width: 500px){
    top: 70px;
    margin-bottom: 100px;
    height: 100%;
  }
  @media(orientation: landscape) and (max-height: 1000px){
  	min-height: 100px;
  	height: 100%;
  	padding-bottom: 150px;
  	-webkit-overflow-scrolling: touch;
  	top: 75px;
  }
  
  a{
  	color: white;
  	transition: all 0.4s !important;
  	text-decoration: underline;
  }
  a:hover{
  	font-weight: bold;
  }
`;

const AuthorName = styled.h3`
  font-weight: 200;
`;

const GeneratedDiv = styled.div`
  margin-top: 5px;
`;

const Link = styled.a`
  color:white;
  transition: all 0.2s ease;
  text-decoration: underline;
  &:hover{ 
    color:white;
    font-weight: 500;
  }
`;

const OverlayBottom = styled.div`
	display: inline-flex;
    justify-content: center;
    align-items: end;
    z-index: 20;
    font-size: 110%;
    color: white;
    width: 100%;
    position: relative;
    margin-top: 20px;
	* {
	    font-size: 1.57em !important;
	    padding: 5px 5px 10px;
	    -webkit-transition: all 0.3s ease-in-out;
	    -moz-transition: all 0.3s ease-in-out;
	    -ms-transition: all 0.3s ease-in-out;
	    -o-transition: all 0.3s ease-in-out;
	    transition: all 0.3s ease-in-out;
	    color: white;
	}

 	*:hover {
	    color: #2a2a2a;
	    background-color: white;
	}
`;

class About extends Component {

	render() {
		return (
			<Container>
				<AuthorContainer>
					<h1>
						{this.props.projName}
					</h1>
					<CreatorCreditsContainer>
						<AuthorName>Created by {this.props.authorName}</AuthorName>
						<IconCard/>
					</CreatorCreditsContainer>
				</AuthorContainer>
				<ContentWrapper>
					<ContentContainer>
						<h1>
							Description
						</h1>
						<div>
							<DescriptionContainer>
								<ReactMarkdown source={this.props.description} escapeHtml={false}/>
							</DescriptionContainer>
						</div>
					</ContentContainer>
					<ContentContainer>
						<h1>
							Acknowledgements
						</h1>
						<div>
							<AcknowledgementsContainer>
								<ReactMarkdown source={this.props.acknowledgements} escapeHtml={false}
								               renderers={{inlineCode: InlineCode, code: CodeBlock}}/>
							</AcknowledgementsContainer>
						</div>
					</ContentContainer>
				</ContentWrapper>
				<Footer>
					<GeneratedDiv> Generated by <Link href="">uDocumentGenerator</Link></GeneratedDiv>
					<UDGLogo/>
				</Footer>
				<OverlayBottom id="footer">
					<a href="https://github.com/GreatArcStudios"> <i className="fab fa-github-square fa-2x"/> </a>
					<a href="https://twitter.com/GArcStudios"> <i className="fab fa-twitter-square fa-2x"/> </a>
					<a href="mailto:ericz2241@gmail.com"> <i className="fas fa-envelope-square fa-2x"/> </a>
				</OverlayBottom>
			</Container>
		)
	}
}

export default About
