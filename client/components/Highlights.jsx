import React from 'react';
import styled from 'styled-components';

const HighlightsContainer = styled.div`
  margin-left: 17%;
  width: 35%;
`;
const Message = styled.div`
  padding-bottom: 3%;
  color: #767676;
  font-size: 17px; 
  font-weight: 700;
`;

const Label = styled.span`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px; 
  font-weight: 600;
`;

const Description = styled.span`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  font-weight: 400; 
`;

const Highlights = () => (
    <HighlightsContainer>
      <div class="ui message message_container">
        <Message class="header">
          HOME HIGHLIGHTS
        </Message>
        <p> <Label>Self check-in · </Label><Description>Easily check yourself in with the smartlock.</Description></p>
        <p><Label>Great check-in experience · </Label><Description>94% of recent guests gave this home’s check-in process a 5-star rating.</Description></p>
        <p><Label>Great location · </Label> <Description>94% of recent guests gave this home’s location a 5-star rating.</Description></p>
      </div>
    </HighlightsContainer>
)

export default Highlights;

