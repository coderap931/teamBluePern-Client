import Sidebar from './home/Sidebar'; //Sidebar | Likely being moved into HomePage. //!Alex
import GameViewModal from './games/GameViewModal'; //Game View Modal with Single Game's Info //!Jaylen

const HomePage = (props) => {
    //* functions replaced here

    return (
        <div className="home-page">
            <Sidebar />
            <GameViewModal />
        </div>
    );
};

export default HomePage;