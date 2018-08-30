import React from "react";
import styled from "styled-components";

const StatsInfo = styled.li`
  display: inline;
  margin-left: 0.5%;
  padding-left: 0.5%;
  padding-right: 0.5%;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-size: 16px;
`;

const StatsDiv = styled.ul`
  margin-left: 14.1%;
`;

const Stats = ({ statsInfo }) => {
  return (
    <div>
      <StatsDiv>
        <StatsInfo>
          <i class="fas fa-users" /> {statsInfo.guests} guests
        </StatsInfo>
        <StatsInfo>
          <i class="fas fa-door-open" />{" "}
          {statsInfo.bedrooms > 1
            ? `${statsInfo.bedrooms} bedrooms`
            : `${statsInfo.bedrooms} bedroom`}
        </StatsInfo>
        <StatsInfo>
          <i class="fas fa-bed" />{" "}
          {statsInfo.beds > 1
            ? `${statsInfo.beds} beds`
            : `${statsInfo.beds} bed`}
        </StatsInfo>
        <StatsInfo>
          <i class="fas fa-bath" />{" "}
          {statsInfo.baths > 1
            ? `${statsInfo.baths} baths`
            : `${statsInfo.baths} bath`}
        </StatsInfo>
      </StatsDiv>
    </div>
  );
};

export default Stats;
