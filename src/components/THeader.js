import React from "react";

function THeader(props) {

    return (
        <thead>
            <tr>
                {props.children}
            </tr>
        </thead>
    );
}

export default THeader;