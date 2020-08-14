import React from "react";

function TButtons(props) {

    return (
        <th scope="col">
            <button
                type="button"
                className="btn btn-sm filter"
                onClick={() => props.sortingButton(props.name)}
            >
                <span className="table-header">{props.name}</span>
                {props.children}
            </button>
        </th>
    );
}

export default TButtons;