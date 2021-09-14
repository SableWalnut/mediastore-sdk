import styled from 'styled-components';
import { MainColor } from 'styles/variables';

export const WrapStyled = styled.div.attrs(() => ({
  className: 'msd__payment-details__wrapper'
}))`
  width: 100%;
`;

export const HeaderStyled = styled.div`
  color: ${MainColor};

  font-size: 14px;
  font-weight: 700;
`;
