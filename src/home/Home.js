import Sidebar from './home/Sidebar'; //Sidebar | Likely being moved into HomePage. //!Alex
import GameViewModal from './games/GameViewModal'; //Game View Modal with Single Game's Info //!Jaylen
import GameGrid from './GameGrid';
import { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import GameEditDeleteModal from '../games/GameEditDeleteModal';

const HomePage = (props) => {
    const [games, setGames] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [updateGame, setUpdateGame] = useState({});

    const updateGame = (games) => {
        setUpdateGame(games);
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    const fetchAllGames = () => {
        fetch('http://localhost:3000/all', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            }),
        })
            .then((res) => res.json())
            .then((gameData) => {
                setGames(gameData)
            })
    }

    useEffect(() => {
        fetchAllGames();
    }, [])

    return (
        <div className="home-page">
            <Sidebar />

            <MDBContainer>
                <MDBRow>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                    </MDBCol>

                    <MDBCol size='md' className='col-example'>
                        {updateActive ? (<GameEditDeleteModal updateGame={updateGame} updateOff={updateOff} token={props.token} fetchAllGames={fetchAllGames} />) : (<></>
                        )}
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        {updateActive ? (<GameEditDeleteModal updateGame={updateGame} updateOff={updateOff} token={props.token} fetchAllGames={fetchAllGames} />) : (<></>
                        )}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        {updateActive ? (<GameEditDeleteModal updateGame={updateGame} updateOff={updateOff} token={props.token} fetchAllGames={fetchAllGames} />) : (<></>
                        )}
                    </MDBCol>

                </MDBRow>
            </MDBContainer>


        </div>
    );
};

export default HomePage;