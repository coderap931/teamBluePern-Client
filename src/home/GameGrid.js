// import React from 'react';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage} from 'mdb-react-ui-kit';
// // import GameViewModal from '../games/GameViewModal';

// const GameGrid = (props) => {
//     console.log("Props:", props)
//     console.log("Props.Games:", props.games)

//     const gameGridMapper = (props) => {
//         return props.games.map((game, index) => {
//             return (
//                 <MDBCard key={index}>
//                     <MDBCardBody>
//                         <MDBCardImage src={game.boxart} />
//                         <MDBCardTitle>{game.name}</MDBCardTitle>
//                         Description: {game.gamedescription}
//                         <br/>
//                         ESRB Rating: {game.esrbrating}
//                         <br/>
//                         Rating: {game.reviewrating} / 10
//                         <br/>
//                         Review Description: {game.reviewdescription}
//                         <br/>
//                         Platforms: {game.platforms}
//                         <br/>
//                         Tags: {game.tags}
//                     {/* <MDBBtn onClick={GameViewModal(props)}> View Game </MDBBtn> */}
//                     </MDBCardBody>
//                 </MDBCard>
//             )
//         })
//     }

//     return (
//         <div>
//             {gameGridMapper()}
//         </div>
//     )
// }


// export default GameGrid;