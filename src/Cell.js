import React from "react";

const Cell =({cellData})=>{    
    
    return(
        // <td>{JSON.stringify(cellData)}</td>  
        
        <>
        {
            
            (typeof cellData !== "object")
            ? <td>{JSON.stringify(cellData)}</td>
            
            : Object.entries(cellData).map(([key, value]) => {
                return (
                    <Cell key ={key} cellData={(value)} />
                );
            })
        
                }
        </>
        
        
        
        );
}
export default Cell;

