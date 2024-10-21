import React from "react";

export function Item({name, quantity, category}) {
    return(
        <div className="flex flex-col">
            <p className="font-mono text-lg font-bold">{name}</p>
            <p className="font-mono text-lg">{quantity}</p>
            <p className="font-mono text-lg">{category}</p>
        </div>
    );
}

export default Item;