import React from "react";

class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {

        return(
            <div className="d-flex justify-content-center p-3">
                <form>
                    <div class="row">
                        <div class="col">
                            <div className="row" >
                            <label for="inputFrom" class="col-sm-4 col-form-label">From</label>
                            <input id="inputFrom" type="date" class="col-sm-8" placeholder="From" />
                            </div>
                        </div>

                        <div class="col-2"></div>
                        <div class="col">
                         <div className="row" >
                            <label for="inputTo" class="col-sm-3 col-form-label">To</label>
                            <input id="inputTo" type="date" class="col-sm-9" placeholder="To" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;