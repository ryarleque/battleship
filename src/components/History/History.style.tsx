import styled from 'styled-components';

export const HistoryContainerStyled = styled.div`
  && {
    padding: 2rem;
    > .failed {
        background: #e03737 !important;
    }
  }
`;

export const CardContainerStyled = styled.div`
  && {
    padding: 2rem;
    margin: 0 auto;
    background: #2691af;
    border-radius: 0.5rem;
    color: white;
    margin-bottom: 2rem;
    width: 22rem;
  }
`;

export const CardTitleStyled = styled.div`
  && {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.25rem;
  }
`;

export const CardDetailStyled = styled.div`
  && {
    display: flex;
    justify-content: space-between;
  }
`;