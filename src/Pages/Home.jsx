import BreakingNews from "../components/BreakingNews";
import Header from "./Shared/Header/Header";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div >
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border border-black">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border  border-black">
                    <h2 className="text-4xl">News coming</h2>
                </div>
                <div className="border border-black">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;