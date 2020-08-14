import React from "react";

function Header(props) {

    return (
        <header>
            <h1 className="display-4 text-center p-2 m-4">Employee Directory</h1>
            <div className="row mx-2">
                <div className="input-group mb-3 pl-0 pl-sm-2 col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="searchSubmit"
                        value={props.form}
                        onChange={props.handleInputChange}
                    ></input>
                    <button className="btn btn-info" type="button" id="searchSubmit" onClick={props.handleFormSubmit}>Search</button>
                </div>
                <button className="btn btn-outline-info col-sm-2 col-md-2 col-lg-2 mb-3" type="button" id="clearForm" onClick={props.clearForm}>Reset</button>
            </div>
        </header>
    );
}

export default Header;