import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage} from 'mdb-react-ui-kit';
//TODO Switch between Heroku and Localhost here:
//TODO Switch back to Heroku URL when committing.

const HomePage = (props) => {

    const gameGridMapper = () => {
        return props.games.games?.map((game, index) => {
            return (
                <MDBCard key={index}>
                    <MDBCardBody>
                        <MDBCardImage src={game.boxart} />
                        <MDBCardTitle>{game.name}</MDBCardTitle>
                        Description: {game.gamedescription}
                        <br/>
                        ESRB Rating: {game.esrbrating}
                        <br/>
                        Rating: {game.reviewrating} / 10
                        <br/>
                        Review Description: {game.reviewdescription}
                        <br/>
                        Platforms: {game.platforms}
                        <br/>
                        Tags: {game.tags}
                    {/* <MDBBtn onClick={GameViewModal(props)}> View Game </MDBBtn> */}
                    </MDBCardBody>
                </MDBCard>
            )
        })
    }

    // const gameGridMapper = () => {
    //     return props.games.map((game, index) => {
    //         return (
    //             <Card key={index}>
    //                 <CardBody>
    //                     <CardImg src={game.boxart} />
    //                     <CardTitle>{game.name}</CardTitle>
    //                     {/* <Button onClick={() => {setButton(!button)}}> View Details </Button> */}
    //                 </CardBody>
    //             </Card>
    //         )
    //     })
    // }

    return (
        <div className="home-page">
            {gameGridMapper()}
            {/* {button ? props.gameModalMapper(props) : null} */}
        </div>
    )
};

export default HomePage;