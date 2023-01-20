import React from "react";
import Cell from "./Cell";

const Column = ({item})=>{
    return( 
        <tr>
            {Object.entries(item).map(([key]) => {

                return (      
                <Cell key ={key} cellData={JSON.stringify(key)} />
                // <td>{key}</td>
                
                );
            })}
        </tr>
        );
}
export default Column;