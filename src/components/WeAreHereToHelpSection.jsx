import styled from "styled-components";

const HelpSection = styled.section`
  width: 100%;
  margin: 0 auto;
  background-color: #150958;
  padding: 50px 0;

  
`;
const HelpContainer = styled.div`
width: 60%;
margin: 0 auto;
display: grid;
  grid-template-columns: repeat(2, 1fr);

  color: white;
`

const LeftSection = styled.div`
  width: 100%;
`;
const RightSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const Heading = styled.h2`
  font-size: 2.4rem;
  /* color: #1e2a38; */
  color: white;
  /* margin-bottom: 20px; */
`;

const Button = styled.button`
  background: #fff;
  color: #150958;
  padding: 14px 25px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 30px;
`;



import React from "react";
import { Link } from "react-router-dom";

const WeAreHereToHelpSection = () => {
  return (
    <HelpSection>

      <HelpContainer>
        <LeftSection>
        <Heading>We’re Here to Help</Heading>
        <p>Ready to discuss your legal needs? Let's get stated</p>
      </LeftSection>

      <RightSection>
        <Button><Link to="contact">Call Us: +254 715 860 031</Link></Button>
        
      </RightSection>
      </HelpContainer>

    </HelpSection>
  );
};

export default WeAreHereToHelpSection;
