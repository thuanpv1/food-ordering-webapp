import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  border: 1px solid red;
  width: 200px;
  margin: 5px;
`


function HeaderLink() {
  return (
    <Wrapper>
      <div>icon</div>
      <div>url</div>
    </Wrapper>
  );
}

export default HeaderLink;
