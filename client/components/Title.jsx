import React from 'react';
import styled from 'styled-components';

const HostName = styled.div`
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  text-align: center;
`;

const Host = styled.div`
  flex: 1;
  height: 100%;
  width: auto;
  text-align: center;
  padding-top: 30px;
`;

const HostDiv = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  
`;
const HostPic = styled.img`
  height: 100%;
  max-width: 100%;
`;

const TitleInfo = styled.div`
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 31px;
  height: 70%;
  position: relative;
`;

const Location = styled.div`
  padding-top: 5px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  font-size: 16px; 
`;

const TitleDiv = styled.div`
  flex: 6;
`;

const TitleContainer = styled.div`
  height: 100px;
  display: flex;
  margin-left:17%;
  width: 35%;
`;

const TitleSpan = styled.span`
position: absolute;
bottom: 0;
`


const Title = ({ listingInfo, hostInfo }) => (
    <div>
      <TitleContainer> 
        <TitleDiv> 
          <TitleInfo>
            <TitleSpan>        
            {listingInfo.title}
            </TitleSpan> 
          </TitleInfo>
          <Location>
            {listingInfo.location}
          </Location>
        </TitleDiv>
        <Host>
          <HostDiv>
          <HostPic src={hostInfo.picture}>  
          </HostPic>
          </HostDiv>
          <HostName>
            {hostInfo.name}
          </HostName>
        </Host>
      </TitleContainer>
    </div>
)

export default Title;