import styled from "styled-components";

const Section = styled.section`
  background-color: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
`;

const SectionContainer = styled.div`
  width: 86%;
  margin: 0 auto;
  padding: 60px 0;
  
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 30px;
  width: 30%;
`;


const LegalLeft = styled.div``;
const LegalRight = styled.div`
width: 100%;

display: grid;
grid-template-columns: repeat(2, 40%);
gap: 30px;
padding-right: 12px;
`;

const StandOut = styled.img`
  width: 300px;
`

const LegalServicesSection = () => {
  return (
    <section>
      <SectionContainer>
        <Title>Legal Services We Provide</Title>
        <ContentContainer>
          <LegalLeft>
            <StandOut src="./images/standout.jpg" alt="" />
          </LegalLeft>

          <LegalRight>
            <div>
              <h1>Estate & Probe Law</h1>
            <p>At Karuiru Associate & Advocates, we undertand that your legacy is imporet to you.</p>
            </div>
            <div>
              <h1>Civil Ligigation</h1>
            <p>At Karuiru Associate & Advocates, we undertand that your legacy is imporet to you.</p>
            </div>
            <div>
              <h1>Business Law</h1>
            <p>At Karuiru Associate & Advocates, we undertand that your legacy is imporet to you.</p>
            </div>
            <div>
              <h1>Real Estate Law</h1>
            <p>At Karuiru Associate & Advocates, we undertand that your legacy is imporet to you.</p>
            </div>
          </LegalRight>
        </ContentContainer>
      </SectionContainer>
    </section>
  );
};

export default LegalServicesSection;
