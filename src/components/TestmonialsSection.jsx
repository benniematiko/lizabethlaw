import styled from "styled-components";

const Section = styled.section`
  background-color: #f9f9f9;
  padding: 80px 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 50px;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const TestimonialCard = styled.div`
  background-color: white;
  padding: 25px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const Quote = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ClientName = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: #2c3e50;
`;

const ClientDetails = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #888;
`;

const testimonials = [
  {
    quote:"Karuiru Associates & Advocates guided me through a difficult estate case with care and confidence. I’m beyond grateful for their professionalism and integrity.",
    name: "Jennifer M.",
    details: "Estate Planning Client, Nairobi",
  },
  {
    quote:"I needed business legal support fast, and they delivered. Responsive, sharp, and honest. Highly recommend to any entrepreneur.",
    name: "Derek S.",
    details: "Business Law Client, Mombasa",
  },
  {
    quote:"Their team didn’t just represent me—they fought for me. I felt heard, protected, and respected throughout my case.",
    name: "Alisha T.",
    details: "Family Law Client, Migori",
  },
];

const TestimonialsSection = () => (
  <Section>
    <Container>
      <Title>Our Clients Speak Out</Title>
      <Subtitle>
        Hear from the people we’ve proudly represented—real stories from real
        clients.
      </Subtitle>
  
      <TestimonialsGrid>

        
        {testimonials.map((t, i) => (
          <TestimonialCard key={i}>
            <Quote>"{t.quote}"</Quote>
            <ClientName>{t.name}</ClientName>
            <ClientDetails>{t.details}</ClientDetails>
          </TestimonialCard>
        ))}

      </TestimonialsGrid>
      
    </Container>
  </Section>
);

export default TestimonialsSection;
