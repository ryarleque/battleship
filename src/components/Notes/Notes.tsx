import * as React from 'react';

import { 
    NoteItemListStyled,
    NotesContentStyled,    
    NoteTitletStyled 
} from './Notes.style';

const NotesComponent: React.FC<any> = () => {

    return (
        <NotesContentStyled item xs={12} sm={3}>
        <NoteTitletStyled>NOTES</NoteTitletStyled>
        <NoteItemListStyled>
            <div className="emptyShoot"></div>
            <div className="noteDescription">OCEAN</div>
            
        </NoteItemListStyled>
        <NoteItemListStyled>
            <div className="failedShoot"></div>
            <div className="noteDescription">FAILED SHOOT</div>
            
        </NoteItemListStyled>
        <NoteItemListStyled>
            <div className="goodShoot"></div>
            <div className="noteDescription">GREAT SHOOT</div>                    
        </NoteItemListStyled>
    </NotesContentStyled>
    );
}

export default NotesComponent;