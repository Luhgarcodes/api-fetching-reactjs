import React from "react";
import Cell from "./Cell";

const Row = ({item})=>{


    return(
        <tr>
            {Object.entries(item).map(([key, value]) => {
                // console.log(key);
                return (
                    <Cell key ={key} cellData={(value)} />
                );
            })}
        </tr>
        );
}
export default Row;