import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(5)};
  border-bottom: 1.5px solid ${p => p.theme.colors.purple};
`;
