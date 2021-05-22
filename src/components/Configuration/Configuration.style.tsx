import { Grid } from '@material-ui/core';

import styled from 'styled-components';

export const PlaceholderStyled = styled.div`
  && {
    height: 100vh;
  }
`;

export const DetailsGridStyled = styled(Grid)`
  && {
    position: relative;
    overflow: hidden;
    ${p => p.theme.breakpoints.down('xs')} {
      text-align: center;

      div[class*='MediaViewerViewContainer'] {
        width: calc(100% + 32px);
        margin-left: -${p => p.theme.spacing(2)}px;
      }
    }
    ${p => p.theme.breakpoints.down('md')} {
      .buttons-wrapper {
        text-align: center;
      }
    }
  }
`;