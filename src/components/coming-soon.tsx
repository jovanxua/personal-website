import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Img from "gatsby-image"

export default function ComingSoon() {
  return (
    <Container>
      Coming Soon...
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  height: 100%;
  width: 100%;
  font-size: 3.5rem;
  background-color: #000;
  color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 0.9;
  padding: 24px;
`;
