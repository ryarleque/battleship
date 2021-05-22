import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const DashboardContainerStyled = styled(Grid)`
  && {
    background: #0C5063;
  }
`;

export const GridContainerStyled = styled(Grid)`
  && {
    padding: 4rem 1rem 0 1rem;
    display: flex;
    justify-content: space-around;
  }
`;

export const CardInfoStyled = styled.div`
  && {
    width: 6rem;
    text-align: center;
    padding: 0.5rem;
    background: #2691af;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 1px grey;
    color: white;
    font-weight: bold;
  }
`;

export const DashboardStyled = styled(Grid)`
  && {
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
    > div {
        height: 4rem;
        width: 100%;
        text-align: center;
        border: 1px solid white;
        cursor: pointer;        
    }
    .hiddenShip {
        background: #2691af;
        &:hover {
            background: white;
        }
    }
    .failedShot {
        background: lightBlue;
    }
    .goodShot {
        background: #e03737;
    }
  }
`;

export const GridContentStyled = styled.div`
  && {
    transform: scale(0.8);
  }
`;