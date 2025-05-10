import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CompanyContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 2rem;
`;

const Section = styled(motion.section)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Company = () => {
  return (
    <div className="container">
      <ul id="cards">
        <li className="card" id="card1">
          <div className="card-body">
            <h2>Card 1</h2>
          </div>
        </li>
        <li className="card" id="card2">
          <div className="card-body">
            <h2>Card 2</h2>
          </div>
        </li>
        <li className="card" id="card3">
          <div className="card-body">
            <h2>Card 3</h2>
          </div>
        </li>
        <li className="card" id="card4">
          <div className="card-body">
            <h2>Card 4</h2>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Company;
