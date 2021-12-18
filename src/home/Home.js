import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText, MDBCol, MDBRow, MDBBtn, MDBContainer  } from 'mdb-react-ui-kit';

const HomePage = (props) => {
    //TODO props.games.games?.map is the working version. ensure that's what's listed. 
    const gameGridMapper = () => {
        return props.games.games?.map((game, index) => {
            return (
                //using index to map dynamically the game.boxart, game.name, game.id, game.reviewrating, game.reviewdescription, game.platforms, and game.tags of every game to  display the game's information in a card group. It will be displayed in a grid. Three cards per row. 
                <MDBCard key={index}>
                    <MDBCardBody className="cardbody">
                        <MDBCardImage className="boxart" src={game.boxart} />
                        <MDBCardTitle>{game.name}</MDBCardTitle>
                        <div className='cardDescriptionRow1'> <p className='homeCardHeaders' className='cardColumnLeft'>Description:</p> <p className='homeCardInfo' className='cardColumnRight'>{game.gamedescription}</p></div>
                        <br />
                        <div className='cardDescriptionRow2'><p className='homeCardHeaders' className='cardColumnLeft'>ESRB Rating:</p>  <p className='homeCardInfo' className='cardColumnRight'>{game.esrbrating}</p></div>
                        <br />
                        <div className='cardDescriptionRow3'><p className='homeCardHeaders' className='cardColumnLeft'>Rating:</p>  <p className='homeCardInfo' className='cardColumnRight'>{game.reviewrating} / 10</p></div>
                        <br />
                        <div className='cardDescriptionRow4'><p className='homeCardHeaders' className='cardColumnLeft'>Review Description:</p>  <p className='homeCardInfo' className='cardColumnRight'>{game.reviewdescription}</p></div>
                        <br />
                        <div className='cardDescriptionRow5'><p className='homeCardHeaders' className='cardColumnLeft'>Platforms:</p>  <p className='homeCardInfo' className='cardColumnRight'>{game.platforms}</p>  </div>
                        <br />
                        <div className='cardDescriptionRow6'><p className='homeCardHeaders' className='cardColumnLeft'>Tags:</p>  <p className='homeCardInfo' className='cardColumnRight'>{game.tags}</p> </div>
                    </MDBCardBody>
                </MDBCard>
            )
        })
    }



    return (
        <div className="home-page">
            {gameGridMapper()}
        </div>
    )
};


export default HomePage;