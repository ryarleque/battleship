import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const NotesContentStyled = styled(Grid)`
  && {
    top: 3rem;
    position: relative;
  }
`;

export const NoteItemListStyled = styled.div`
  && {
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .goodShoot {
        width: 3rem;
        height: 2rem;
        background: #e03737;
    }
    .failedShoot {
        width: 3rem;
        height: 2rem;
        background: lightBlue;
    }
    .emptyShoot {
        width: 3rem;
        height: 2rem;
        background: #2691af;
    }
    .downShip {
        width: 3rem;
        height: 2rem;
        background: black;
    }
    .noteDescription {
        width: 7rem;
        font-size: 1rem;
        font-weight: bold;
        color: black;
    }
  }
`;

export const NoteTitletStyled = styled.div`
  && {
    color: #B06A27;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

