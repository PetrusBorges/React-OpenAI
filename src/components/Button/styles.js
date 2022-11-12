import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  background: #4B4B4D;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  width: 250px;
  height: 40px;
  transition: all 0.5s ease;

  &[disabled] {
    cursor: default;
    background: transparent;
  }
`