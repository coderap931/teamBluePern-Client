import GameViewModal from '../games/GameViewModal'; //Game View Modal with Single Game's Info //!Jaylen
import GameGrid from './GameGrid';
import { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import GameEditDeleteModal from '../games/GameEditDeleteModal';
import GameUpdateModal from '../games/GameUpdateModal';
import APIURL from '../helpers/environment';
// const APIURL = 'http://localhost:3000'

const HomePage = (props) => {
    const [games, setGames] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [updateGame, setUpdateGame] = useState({});


    const editUpdateGame = (games) => {
        setUpdateGame(games);
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    const fetchGames = () => {
        fetch(`${APIURL}/all`, {
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
                        <GameViewModal />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                        <GameViewModal />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                        <GameViewModal />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameUpdateModal games={games} editUpdateGame={editUpdateGame} updateOn={updateOn} fetchGames={fetchGames} token={props.token} />
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
                        <GameViewModal />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                        <GameViewModal />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                        <GameViewModal />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameUpdateModal games={games} editUpdateGame={editUpdateGame} updateOn={updateOn} fetchGames={fetchGames} token={props.token} />
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
                        <GameViewModal />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                        <GameViewModal />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameGrid />
                        <GameViewModal />
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <GameUpdateModal games={games} editUpdateGame={editUpdateGame} updateOn={updateOn} fetchGames={fetchGames} token={props.token} />
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