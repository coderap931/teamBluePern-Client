import GameViewModal from '../games/GameViewModal'; //Game View Modal with Single Game's Info //!Jaylen
import GameGrid from './GameGrid';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
//TODO Switch between Heroku and Localhost here:
import APIURL from '../helpers/environment';
// const APIURL = 'http://localhost:3000'
//TODO Switch back to Heroku URL when committing. 

const HomePage = (props) => {


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
                </MDBRow>
            </MDBContainer>


        </div>
    );
};


export default HomePage;