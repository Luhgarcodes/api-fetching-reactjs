import React from "react";
import Row from "./Row";
import Column from "./Column";

const Table=({items})=>{
    return(
    <div className="table-container">
        <table>
            <tbody>

                {items.map(item =>((item.id === 1)&&
                    <Column key={item.id} item = {item} />))}
                    
                {items.map(item => (
                    <Row key={item.id} item={item} />))}

            </tbody>
        </table>
    </div>
    );
}
export default Table;