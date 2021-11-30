import Sidebar from './home/Sidebar'; //Sidebar | Likely being moved into HomePage. //!Alex
import GameViewModal from './games/GameViewModal'; //Game View Modal with Single Game's Info //!Jaylen

const HomePage = (props) => {
    //* functions replaced here
    // this where my code will go 
    return (
        <div className="home-page">
            <Sidebar />
            <GameViewModal />
        </div>
    );
};

export default HomePage;