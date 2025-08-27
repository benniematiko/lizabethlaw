import styled from "styled-components"

const WhyUsSection = styled.section`
  width: 100%;
  margin: 0 auto;


  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.6) 100%
    ),
    url("./images/naiday.jpg") center/cover no-repeat;

    min-height: 50vh;
  

  
`;
const WhyUsContainer = styled.div`
  width: 86%;
  margin: 0 auto;
 

  
`;
const Heading = styled.div`
  width: 50%;
  color: white;
  padding-bottom: 30px;
  font-size: 1.8rem;

  
`;

const WhyUsContents = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 30px;

  
`;


const ColumnContent = styled.div`
color: white;

h2 {
  padding-bottom: 12px;
}
`




const WhyUs = () => {
  return (
    <WhyUsSection>

      <WhyUsContainer>

        <Heading>
          <h1>Why Put Your Trust In Us?</h1>
        </Heading>

        <WhyUsContents>
          <ColumnContent>
            <h2>Experience</h2>

            <p>A group of lawyers with extensive experience and proven 
              track record of success
            </p>

          </ColumnContent>


          <ColumnContent>
            <h2>Approachable</h2>
            <p>A focus on results in order to get the best results
            </p>
          </ColumnContent>

          <ColumnContent>
            <h2>Affordable</h2>
            <p>Affordable and flexiable
            </p>
          </ColumnContent>

        </WhyUsContents>

      </WhyUsContainer>

    </WhyUsSection>
  )
}

export default WhyUs





