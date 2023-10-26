import React from "react";
import Room from "./Room";

class RoomsList extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {

        return(
            
            <div className="row">
                <div className="col-1"></div>
                <div className="col">
                    <Room />
                </div>
                <div className="col">
                    <Room />
                </div>
                <div className="col">
                    <Room />
                </div>
                <div className="col">
                    <Room />
                </div>
                <div className="col-1"></div>
            </div>
        );
    }
}

export default RoomsList;