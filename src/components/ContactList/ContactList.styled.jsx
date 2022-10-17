import styled from 'styled-components';

export const Contact = styled.ul`
  margin-top: 20px;

  li {
    margin: 5px;
    align-items: center;
  }

  span:nth-child(2) {
    margin: 0 5px;
  }

  button {
    border: none;
    background-color: #4caf50;
    padding: 5px;
    margin-bottom: 1px;
    color: white;

    &:hover {
      background: green;
    }
  }
`;
