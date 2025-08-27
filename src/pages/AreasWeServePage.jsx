import styled from 'styled-components';

const Section = styled.section`
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 50px;
`;

const AreasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
`;

const AreaCard = styled.div`
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(44, 62, 80, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const AreaTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 12px;
`;

const AreaDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const areas = [
  {
    title: 'Nairobi',
    description:
      'Serving clients across Nairobi with dedicated legal expertise in business law, estate planning, real estate, and civil litigation.',
  },
  {
    title: 'Nakuru',
    description:
      'Providing comprehensive legal services for Nakuru residents and businesses, with personalized support and proven results.',
  },
  {
    title: 'Kisumu',
    description:
      'Extending our trusted legal counsel to clients in Wyoming, focusing on tailored solutions for complex legal challenges.',
  },
  {
    title: 'Mombasa',
    description:
      'Helping Idaho clients navigate legal matters efficiently and confidently with our experienced team.',
  },
  // Add more areas as needed
];

const AreasWeServePage = () => {
  return (
    <Section>
      <Title>Areas We Serve</Title>
      <Subtitle>
        Proudly supporting clients in these locations with expert legal guidance and personalized service.
      </Subtitle>

      <AreasGrid>
        {areas.map((area, index) => (
          <AreaCard key={index}>
            <AreaTitle>{area.title}</AreaTitle>
            <AreaDescription>{area.description}</AreaDescription>
          </AreaCard>
        ))}
      </AreasGrid>
    </Section>
  );
};

export default AreasWeServePage;
