import * as React from 'react';
import { 
    HistoryContainerStyled, 
    CardContainerStyled,
    CardTitleStyled,
    CardDetailStyled
   } from './History.style';

import { useSelector } from 'react-redux';

const HistoryComponent: React.FC<any> = (props) => {
  const history = useSelector((state: any) => state.battleship.savedGames);

    return (
        <HistoryContainerStyled>
            {history.map((item: any) =>
                <CardContainerStyled className={item.isUserWon ? '' : 'failed' }>
                    <CardTitleStyled>MISSION {item.isUserWon ? 'COMPLETED' : 'FAILED'}</CardTitleStyled>
                    <CardDetailStyled>
                        <div>LEVEL : {item.level}</div>
                        { item.turns !== 0 && <div>TURNS : {item.turns}</div> }
                    </CardDetailStyled>
                </CardContainerStyled>
            )}
            {history.length === 0 && <div>NO RECORDS TO VIEW YET.</div>}
        </HistoryContainerStyled>
    );
}

export default HistoryComponent;