import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 1.5rem;
  background: #f9f9f9;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 1rem;
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

export function PracticeAreas() {
  return (
    <Section>
      <Heading>Legal Services We provide</Heading>
      <Grid>
        {['Business Law', 'Estate & Probate', 'Civil Litigation', 'Real Estate Law'].map(area => (
          <Card key={area}>{area}</Card>
        ))}
      </Grid>
    </Section>
  );
}
