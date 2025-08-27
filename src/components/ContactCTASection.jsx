import styled from "styled-components";

const CTASection = styled.section`
  background-color: #f0ecec;
  color: #2c3e50;
  padding: 80px 20px;
  /* text-align: center; */
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
`;

const Heading = styled.h2`
  font-size: 2.1rem;
  margin-bottom: 20px;
  line-height: 2.7rem;
  padding: 12px 18px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Headingleft = styled.div`
  width: 100%;
`;

const Headingright = styled.div`
  width: 100%;
  background-color: #150958;
  color: #fff;
  border-radius: 4px;
  padding: 20px;
`;

const Subtext = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.6;
  color: #423f3f; 

  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.a`
  /* display: inline-block;

  background-color: #fff;
  color: #150958;
  
  color: white;
  padding: 14px 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease; */

  background-color: #fff;
  padding: 14px 30px;
  margin: 12px 30px;
  color: #150958;
  font-size: 1rem;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  

  &:hover {
    background-color: #b1aec5;
  }
`;

const ContactCTASection = () => {
  return (
    <CTASection>
      <Container>
        <Headingleft>
          <Heading>Got Legal Needs? Tell Us About Them!</Heading>
          <Subtext>
            Whether you're navigating a business dispute, planning your estate,
            or dealing with a real estate concern — we're here to help. Reach
            out for a free consultation and let us guide you forward.
          </Subtext>
        </Headingleft>

        <Headingright>
          <Heading>
            <h1>
              Contact
              
                <span style={{ color:"gold" , paddingLeft: "4px",paddingRight: "4px" }}>Karuiru Associates & Advocates </span>
              
              today!
            </h1>
          </Heading>

          <CTAButton href="/contact">Request Your Free Consultation</CTAButton>
        </Headingright>
      </Container>
    </CTASection>
  );
};

export default ContactCTASection;
