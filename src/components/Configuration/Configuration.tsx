import * as React from 'react';

import { 
  ConfigurationContainerStyled, 
  TitleConfigurationStyled
 } from './Configuration.style';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import { updatedConfiguration } from '../../actions/index';

const ConfigurationComponent: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const turns = useSelector((state: any) => state.battleship.availableTurns);
  const level = useSelector((state: any) => state.battleship.level);

  const handleLevelChange = (event: any) => {    
    dispatch(updatedConfiguration(event.target.value));
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
            <Select
              labelId="Level"
              id="Level"
              value={level}
              onChange={handleLevelChange}
            >
              <MenuItem value={'Easy'}>Easy</MenuItem>
              <MenuItem value={'Medium'}>Medium</MenuItem>
              <MenuItem value={'Hard'}>Hard</MenuItem>
            </Select>       
          </FormControl>
        </div>
        <br /><br />

        <div>
          <FormControl>
            <TextField disabled value={turns} id="standard-disabled" label="Turns"/>
          </FormControl>
        </div>
      </ConfigurationContainerStyled>
    );
}

export default ConfigurationComponent;
