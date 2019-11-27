import styled from 'styled-components';

export const CardInfo = styled.p`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.background};

  width: ${props => props.width};
  justify-content: center;
  padding: 40px;
  box-shadow: 3px 3px 3px #ececec;
  color: #909090;
  text-align: justify;
  text-justify: inter-character;
  line-height: 1.6;
  font-size: 15px;
  flex-direction: inherit;

  p {
    text-align: justify;
    text-justify: inter-character;
    line-height: 2;
  }
`;
