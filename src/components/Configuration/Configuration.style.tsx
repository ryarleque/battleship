import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

export const ConfigurationContainerStyled = styled.div`
  && {
    padding: 2rem;
  }
`;

export const TitleConfigurationStyled = styled.div`
  && {
    color: #B06A27;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

export const SelectStyled = styled(Select)`
  && {
    width: 6rem;
  }
`;


export const TexfieldStyled = styled(TextField)`
  && {
    width: 6rem;
  }
`;

export const UpdatedButtonStyled = styled.div`
  && {
    PADDING: 1REM;
    BACKGROUND: #2691af;
    border-radius: 0.5rem;
    color: white;
    font-weight: bold;
    width: 4.55rem;
    cursor: pointer;
  }
`;
