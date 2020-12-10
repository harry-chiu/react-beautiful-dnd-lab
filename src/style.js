import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const List = styled.ul`
  width: 420px;
  margin: 0;
  padding: 0 8px 8px 8px;
  list-style: none;
  border: 1px solid #e0e0e0;

  & > li {
    margin-top: 8px;
  }
`;

export const ListItem = styled.li`
  padding: 8px;
  text-align: center;
  border: 1px solid #e0e0e0;
  background: #ffffff;

  ${({ isDragging }) => isDragging && 'border: 2px solid #ff0000'}
`;
