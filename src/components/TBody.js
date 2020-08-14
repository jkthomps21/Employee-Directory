import React from "react";

function TBody({tableContents}) {

    let items = tableContents.map(item => {
        let values = Object.values(item);
        let rowBody = [];
        for (let i = 1; i < values.length; i++) {  
            let value = values[i] || "-";
            rowBody.push(<td key={value}>{value}</td>)
        }
        let row = 
            <tr key={values[0]}>
                <th scope="row">{values[0]}</th>
                {rowBody}
            </tr>;
        return row;
    })

    return (
        <tbody>
            {items}
        </tbody>
    );
}

export default TBody;