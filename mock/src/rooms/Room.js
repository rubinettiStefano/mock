import React from "react";

class Room extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {

        return(
            <div class="card" style={{width: "18rem"}}>
                <img src="https://images.pexels.com/photos/20943/pexels-photo.jpg?cs=srgb&dl=pexels-rene-asmussen-20943.jpg&fm=jpg" class="card-img-top" alt="Stanza" />
                    <div class="card-body">
                        <h5 class="card-title">Mock Room</h5>
                        <p class="card-text">One of the best Royal Suites in the world, furnished by Stefano</p>
                        <a href="#" class="btn btn-success" onClick={() => alert("Mostrare una pagina che mostri i dettagli della prenotazione e chieda la conferma")}>Book</a>
                    </div>
            </div>
        );
    }
}

export default Room;