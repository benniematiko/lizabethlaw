import React from 'react';
import styled from "styled-components";

const Section = styled.section`
  padding: 3rem 1.5rem;
  background: #f4f4f4;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.75rem;
`;

export function Team() {
  const members = [
    { name: 'Elizabeth Karuiru', role: 'Managing Associate', img: '/avatars/jane.jpg' },
    { name: 'John Smith', role: 'Associate', img: '/avatars/john.jpg' },
    // add more...
  ];

  return (
    <Section>
      <h2>Our Team</h2>
      <Grid>
        {members.map(member => (
          <Card key={member.name}>
            <Avatar src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
