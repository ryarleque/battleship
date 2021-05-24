import * as React from 'react';
import { 
    decreasedAvailableTurns,
    updatedConfiguration,
    saveGame
} from '../../actions/index';

import {
    DashboardContainerStyled,
    GridContainerStyled,
    CardInfoStyled,
    DashboardStyled,
    GridContentStyled,
    ModalContainerStyled,
    TryAgainButtonStyled,
    ExitButtonStyled
  } from './Dashboard.style';

import Modal from '@material-ui/core/Modal'; 
import NotesComponent from '../Notes/Notes';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const DasboardComponent: React.FC<any> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const turns = useSelector((state: any) => state.battleship.availableTurns);
    const level = useSelector((state: any) => state.battleship.level);
    const [isMoodalopen, setModalMode] = React.useState(false);
    const [isUserWin, setUserState] = useState(false);

    const handleModalClose = () => {        
        dispatch(updatedConfiguration(level));
        dispatch(saveGame(isUserWin));        
        setModalMode(false);
        setTable(createInitDashboard);        
        history.push("/");      
      };

    const generatedDefaultArray = (length: number) => {
        let list: any[] = [];
        for(var i = 0; i < length; i++) {
            list.push({
                isDiscovered:false,
                shipType: 0,
                shipNumber: 0
            });
        }
        return list;
    };

    const [list, setList] = useState(generatedDefaultArray(10));

    const createInitDashboard = () => {
        list.forEach((item, index, obj) => {
            obj[index] = generatedDefaultArray(10);
        });
        return list;      
    };
    
    const [table, setTable] = useState(createInitDashboard);

    React.useEffect(() => {
        handleDashboardSteps();
    }, []);


    React.useEffect(() => {
        if (turns === 0) {
            setUserState(false);
            setModalMode(true);
        }
    }, [turns]);

    const handleDashboardSteps = () => {
        handleShipsGeneration();
    };   

    const handleShipsGeneration = () => {
        generateShipType(4,1);
        generateShipType(3,2);
        generateShipType(2,3);
        generateShipType(1,4);
    };

    const updatedPositions = (item: any, shipType: number, list: any[]) => {
        const selectedSection = table[item.latitude];
        selectedSection[item.longitude].shipType = shipType;
        setTable([
            ...table.slice(0, item.latitude),
            selectedSection,
            ...table.slice(item.latitude + 1)                 
        ]);
    };

    const generateShipType = (shipType: number, shipNumber: number) => {
        for (let i=0 ; i<shipNumber; i++) {       
            var latitude = getRandomPosition(0, 10);
            var longitude = getRandomPosition(0, 10);
            var orientation = getRandomPosition(0, 1) === 0 ? 'H' : 'V' ;
            var validationResult = validateGeneratedValues(latitude, longitude, orientation, shipType);
            validationResult.isValid ?
            validationResult.result.forEach(item => updatedPositions(item, shipType, validationResult.result))
           : retryGenerateShipType(shipType, shipNumber);        
        }
    };

    const retryGenerateShipType = (shipType: number, shipNumber: number) => {
             var latitude = getRandomPosition(0, 10);
             var longitude = getRandomPosition(0, 10);
             var orientation = getRandomPosition(0, 1) === 0 ? 'H' : 'V' ;
             var validationResult = validateGeneratedValues(latitude, longitude, orientation, shipType);
             validationResult.isValid ?
             validationResult.result.forEach(item => updatedPositions(item, shipType, validationResult.result))
            : retryGenerateShipType(shipType, shipNumber);
    };
    
    const validateGeneratedValues = (latitude: number, longitude: number, orientation: string, shipType: number) => {
        let tmpList = {
            isValid: true,
            result: [] as any[]
        };

        if (orientation === 'V'){
            for(let i=longitude; i< longitude+shipType; i++) {
                if(table?.[latitude]?.[i]?.shipType === 0){
                    tmpList.result.push({
                        latitude, longitude : i
                    });
                } else {
                    tmpList.isValid = false;
                    tmpList.result = [];
                }
            }
        } else {
            for(let i=latitude; i< latitude+shipType; i++) {
                if(table?.[i]?.[longitude]?.shipType === 0){
                    tmpList.result.push({
                        latitude: i, longitude
                    });
                } else {
                    tmpList.isValid = false;
                    tmpList.result = [];
                }
            }
        }
        return tmpList;
    };

    const getRandomPosition = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const updatePosition = (latitude: number, longitude: number) => {
        const selectedSection = table[latitude];
        selectedSection[longitude].isDiscovered = true;
        setTable([
            ...table.slice(0, latitude),
            selectedSection,
            ...table.slice(latitude + 1)                 
        ]);
        dispatch(decreasedAvailableTurns());
    };

    const modalSuccessContent = (
        <ModalContainerStyled>
            <h2>YOU WIN!!!</h2>
            <TryAgainButtonStyled onClick={handleModalClose}>Save</TryAgainButtonStyled>
        </ModalContainerStyled>
    );

    const modalFailedContent = (
        <ModalContainerStyled>
            <h2>UPS.... YOU CAN DO BETTER!!!</h2>
            <TryAgainButtonStyled onClick={handleModalClose}>Try Again</TryAgainButtonStyled>
            <ExitButtonStyled onClick={handleModalClose}>Exit</ExitButtonStyled>
        </ModalContainerStyled>
    );

    return (
        <DashboardContainerStyled container>
            <GridContainerStyled item xs={12} sm={9}>
                <CardInfoStyled>
                    <div>LEVEL</div>
                    <div>{level}</div>
                </CardInfoStyled>
                <CardInfoStyled>
                    <div>TURN</div>
                    <div>{turns}</div>
                </CardInfoStyled>
            </GridContainerStyled>

            <Grid item xs={12} sm={9}>
                <GridContentStyled>
                    {table?.map((itemList:any, latitude: number) => {
                        return (
                            <DashboardStyled>
                                {itemList?.map((item:any, longitude:number) => {
                                    return (
                                        <>
                                        {!item?.isDiscovered && <div className="hiddenShip" onClick={e=> updatePosition(latitude, longitude)}></div>                                        }
                                        {item?.isDiscovered && item.shipType === 0 && <div className="failedShot"></div>}
                                        {item?.isDiscovered && item.shipType !== 0 && <div className="goodShot"></div>}
                                        </>
                                    );
                                })}
                            </DashboardStyled>                            
                        );
                    })}                    
                </GridContentStyled>
            </Grid>
            <NotesComponent/>

            <Modal
                open={isMoodalopen}
                onClose={handleModalClose}
            >
                { isUserWin ? modalSuccessContent : modalFailedContent }
            </Modal>
        </DashboardContainerStyled>
    );
}

export default DasboardComponent;
