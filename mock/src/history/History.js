import React from "react";

class History extends React.Component
{
    constructor(props)
    {
        super(props);
    }



    render()
    {

        return(
            <div>
               <div className="row">
                <div className="col-1"></div>
                <div className="col">
                <div class="card" style={{width: "18rem"}}>
                            <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Room Name: Mock Room</h5>
                                    <p class="card-text">Check In: 23/10/2023</p>
                                    <p class="card-text">Check Out: 25/10/2023</p>
                                    <p class="card-text">Price Per Night: 50</p>
                                    <p class="card-text">Total Price: 100</p>
                                    <a href="#" class="btn btn-success" onClick={() => alert("rendere modificabile check-in e check-out se ancora non si è arrivati a quelle data, cambiare il prezzo di conseguenza")}>Modify</a>
                                </div>
                            </div>
            </div>
                </div>  
                <div className="col">
                <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Room Name: Mock Room</h5>
                                    <p class="card-text">Check In: 23/10/2023</p>
                                    <p class="card-text">Check Out: 25/10/2023</p>
                                    <p class="card-text">Price Per Night: 50</p>
                                    <p class="card-text">Total Price: 100</p>
                                    <a href="#" class="btn btn-success" onClick={() => alert("rendere modificabile check-in e check-out se ancora non si è arrivati a quelle data, cambiare il prezzo di conseguenza")}>Modify</a>
                                </div>
                            </div>
            </div>
                <div className="col">
                <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Room Name: Mock Room</h5>
                                    <p class="card-text">Check In: 23/10/2023</p>
                                    <p class="card-text">Check Out: 25/10/2023</p>
                                    <p class="card-text">Price Per Night: 50</p>
                                    <p class="card-text">Total Price: 100</p>
                                    <a href="#" class="btn btn-success" onClick={() => alert("rendere modificabile check-in e check-out se ancora non si è arrivati a quelle data, cambiare il prezzo di conseguenza")}>Modify</a>
                                </div>
                            </div>
                </div>
                <div className="col">
                <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Room Name: Mock Room</h5>
                                    <p class="card-text">Check In: 23/10/2023</p>
                                    <p class="card-text">Check Out: 25/10/2023</p>
                                    <p class="card-text">Price Per Night: 50</p>
                                    <p class="card-text">Total Price: 100</p>
                                    <a href="#" class="btn btn-success" onClick={() => alert("rendere modificabile check-in e check-out se ancora non si è arrivati a quelle data, cambiare il prezzo di conseguenza")}>Modify</a>
                                </div>
                            </div>
                </div>
                <div className="col-1"></div>
            </div> 
            </div>
        );
    }
}

export default History;