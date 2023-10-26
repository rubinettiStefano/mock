import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import SearchBar from "./SearchBar";

class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark p-3 bg-success bg-gradient" id="headerNav">
                    <div class="container-fluid">
                        <a class="navbar-brand d-block d-lg-none" href="#">
                            <img src="https://cdn-icons-png.flaticon.com/512/5900/5900195.png" height="80" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav mx-auto ">
                                <li class="nav-item ">
                                    <a className={"nav-link mx-2 "+(this.props.home ? "active " : "")} onClick={this.props.showHome} aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a className={"nav-link mx-2 "+(this.props.rooms ? "active " : "")} onClick={this.props.showRooms} href="#">Rooms</a>
                                </li>
                                <li class="nav-item d-none d-lg-block">
                                    <a class="nav-link mx-2" href="#">
                                        <img onClick={this.bell} src="https://cdn-icons-png.flaticon.com/512/5900/5900195.png" height="80" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className={"nav-link mx-2 "+(this.props.history ? "active " : "")} onClick={this.props.showHistory} href="#">History</a>
                                </li>
                                <li class="nav-item ">
                                    <a className={"nav-link mx-2 "+(this.props.login ? "active " : "")} onClick={this.props.showLogin} href="#" id="navbarDropdownMenuLink" role="button">
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.login || this.props.home || <SearchBar />}
            </div>
        );
    }




    bell = () =>
    {
        let campanella = new Audio("bell.mp3");
        campanella.play();
    }
}

export default Navbar;