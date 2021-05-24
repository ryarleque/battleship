import * as React from 'react';

import { 
  ConfigurationContainerStyled, 
  TitleConfigurationStyled,
  SelectStyled,
  TexfieldStyled,
  UpdatedButtonStyled
 } from './Configuration.style';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import { updatedConfiguration } from '../../actions/index';
import { useHistory } from "react-router-dom";

const ConfigurationComponent: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const turns = useSelector((state: any) => state.battleship.availableTurns);
  const level = useSelector((state: any) => state.battleship.level);

  const handleLevelChange = (event: any) => {    
    dispatch(updatedConfiguration(event.target.value));
  };

  const updatedValues = (event: any) => {
    history.push("/dashboard");  
  };

  React.useEffect(() => {
    dispatch(updatedConfiguration('Easy'));
}, []);

    return (
      <ConfigurationContainerStyled>
        < TitleConfigurationStyled>Batthe Ship Configurations</TitleConfigurationStyled>
        <div>
          {/* <div>Level</div> */}
          <FormControl>
            <InputLabel id="Level">Level</InputLabel>
            <SelectStyled
              labelId="Level"
              id="Level"
              value={level}
              onChange={handleLevelChange}
            >
              <MenuItem value={'Easy'}>Easy</MenuItem>
              <MenuItem value={'Medium'}>Medium</MenuItem>
              <MenuItem value={'Hard'}>Hard</MenuItem>
            </SelectStyled>       
          </FormControl>
        </div>
        <br /><br />

        <div>
          <FormControl>
            <TexfieldStyled disabled value={turns} id="standard-disabled" label="Turns"/>
          </FormControl>
        </div>

        <br /><br />
        <UpdatedButtonStyled onClick={updatedValues}>UPDATED</UpdatedButtonStyled>
      </ConfigurationContainerStyled>
    );
}

export default ConfigurationComponent;
