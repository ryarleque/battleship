import * as React from 'react';

import { HeaderContainerStyled } from './Header.style';
import {
    Link
  } from "react-router-dom";

const HeaderComponent: React.FC<any> = () => {

    return (
        <HeaderContainerStyled>
            <Link to="/">Dashboard</Link>            
            <Link to="/configuration">Configuration</Link>
            <Link to="/">History</Link>
        </HeaderContainerStyled>
    );
}

export default HeaderComponent;
