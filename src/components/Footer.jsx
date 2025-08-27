// import React from 'react';
// import styled from 'styled-components';

// const FooterContainer = styled.footer`
//   background: #222;
//   color: #eee;
//   padding: 2rem 1rem;
//   text-align: center;
//   font-size: 0.9rem;
// `;

// const Footer = () => (
//   <FooterContainer>
//     &copy; {new Date().getFullYear()} Karuiru Associates & Advocates. All rights reserved.
//   </FooterContainer>
// );

// export default Footer;

import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #150958;
  color: #fff;
  padding: 60px 20px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
`;

const Section = styled.div``;

const SectionTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: #f1c40f;
`;

const Link = styled.a`
  display: block;
  color: #eee;
  margin-bottom: 8px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #f1c40f;
  }
`;

const ContactInfo = styled.p`
  margin: 8px 0;
  font-size: 0.95rem;
`;

const Disclaimer = styled.small`
  display: block;
  margin-top: 30px;
  font-size: 0.85rem;
  color: #bbb;
  text-align: center;
  border-bottom: 1px solid #fff;
  padding-bottom: 12px;
`;

const Copyright = styled.div`
 
  width: 86%;
  margin: 0 auto;
  padding-top: 12px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`


const CopyContentRight = styled.div`
  display: flex;
  justify-content: end;
  

  span {
    margin-right: 12px;
    cursor: pointer;

  }
  
`


const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <Section>
        <SectionTitle>Quick Links</SectionTitle>
        <Link href="/practiceareas">Practice Areas</Link>
        <Link href="/cases">Cases</Link>
        <Link href="/team">Our Team</Link>
        <Link href="/areasweserve">Areas We Serve</Link>
        <Link href="/contact">Contact Us</Link>
      </Section>

      <Section>
        <SectionTitle>Office</SectionTitle>
        <ContactInfo><strong> Nairobi:</strong> (406) 203 9303</ContactInfo>
       
        <Link href="/contact">Free Consultation</Link>
      </Section>
    </FooterContainer>

    <Disclaimer>
      Communication through this website does not establish an attorney-client relationship 
      between you and Karuiru Associates & Advocates.
    </Disclaimer>

    <Copyright>
     
        <div>@ 2025. <span style={{ color:"gold"}}>Karuiru Associated & Advocates</span>. All rights reserved
      </div>
      <CopyContentRight>
        <span><Link>Legal Disclaimer</Link></span>
        <span><Link>T&C</Link></span>
        <span><Link>Policy</Link></span>
      </CopyContentRight>
    </Copyright>
  </FooterWrapper>
);

export default Footer;



