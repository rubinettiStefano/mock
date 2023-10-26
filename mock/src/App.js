import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./navbar/Navbar";
import BookingDetail from "./booking/BookingDetail";
import History from "./history/History";
import RoomsList from "./rooms/RoomsList";
import Login from "./login/Login";
import Home from "./home/Home";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {showHome:true,showRoomsList:false,showHistory:false,showBookingDetail:false,showLogin:false}
    }

    showRooms= () =>
    {
        this.setState({showHome:false,showRoomsList:true,showHistory:false,showBookingDetail:false,showLogin:false});
    }

    showHistory= () =>
    {
        this.setState({showHome:false,showRoomsList:false,showHistory:true,showBookingDetail:false,showLogin:false});
    }

    showBookingDetail= () =>
    {
        this.setState({showHome:false,showRoomsList:false,showHistory:false,showBookingDetail:true,showLogin:false});
    }

    showLogin= () =>
    {
        this.setState({showHome:false,showRoomsList:false,showHistory:false,showBookingDetail:false,showLogin:true});
    }

    showHome= () =>
    {
        this.setState({showHome:true,showRoomsList:false,showHistory:false,showBookingDetail:false,showLogin:false});
    }

    render()
    {

        return(
            <div>
                <Navbar home={this.state.showHome} showHome={this.showHome}  login={this.state.showLogin} showLogin={this.showLogin} rooms={this.state.showRoomsList} showRooms={this.showRooms} history={this.state.showHistory} showHistory={this.showHistory} />
                {this.state.showHome && <Home />}
                {this.state.showRoomsList && <RoomsList />}
                {this.state.showHistory && <History />}
                {this.state.showLogin && <Login />}
                {this.state.showBookingDetail && <BookingDetail />}
            </div>
        );
    }
}

export default App;