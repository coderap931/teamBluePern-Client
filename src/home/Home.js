// import GameViewModal from './games/GameViewModal'; //Game View Modal with Single Game's Info //!Jaylen
import GameGrid from './GameGrid';
import { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import GameEditDeleteModal from '../games/GameEditDeleteModal';

const HomePage = (props) => {
    const [games, setGames] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [updateGame, setEditUpdateGame] = useState({});

    console.log("Home Page", props);

    const editUpdateGame = (games) => {
        setEditUpdateGame(games);
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    const fetchGames = () => {
        fetch('http://localhost:3000/game/all', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .then((res) => res.json())
            .then((gameData) => {
                setGames(gameData)
            })
    }

    useEffect(() => {
        fetchGames();
    }, [])

    return (
        <div className="home-page">

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
                        {updateActive ? (<GameEditDeleteModal updateGame={updateGame} updateOff={updateOff} token={props.token} fetchGames={fetchGames} />) : (<></>
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
                        {updateActive ? (<GameEditDeleteModal updateGame={updateGame} updateOff={updateOff} token={props.token} fetchGames={fetchGames} />) : (<></>
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
                        {updateActive ? (<GameEditDeleteModal updateGame={updateGame} updateOff={updateOff} token={props.token} fetchGames={fetchGames} />) : (<></>
                        )}
                    </MDBCol>

                </MDBRow>
            </MDBContainer>


        </div>
    );
};

export default HomePage;