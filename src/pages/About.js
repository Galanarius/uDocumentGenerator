import React, {Component} from 'react';
import styled from 'styled-components';
import uDGLogo from '../icons/uDG.png';

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
`;

const ContentWrapper = styled.div`
  margin-top: 30px;
  display: block;
`;

const DescriptionContainer = styled.div`
  overflow-x:hidden;
  width: 80%;
  max-height: 400px;
  min-height: 50px !important;
  height: auto;
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
								{this.props.description}
							</DescriptionContainer>
						</div>
					</ContentContainer>
					<ContentContainer>
						<h1>
							Acknowledgements
						</h1>
						<div>
							<DescriptionContainer>
								{this.props.acknowledgements}
							</DescriptionContainer>
						</div>
					</ContentContainer>
				</ContentWrapper>
				<Footer>
					<GeneratedDiv> Generated by <Link href="">uDocumentGenerator</Link></GeneratedDiv>
					<UDGLogo/>
				</Footer>
			</Container>
		)
	}
}

export default About