import { Fragment } from "react";
import { useState } from "react";
 // props:
 // immutable; use this so the component is reusable
interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading,onSelectItem}: ListGroupProps) {
    // function to get message if items list has no item
    const getMessage = () => {
        return items.length === 0 ? <p>No Item Found</p> : null;
        // items.length === 0 && <p>No Item Found</p>
    }

    // Hook --> used to handle vars that change states over the time; mutable
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // none of the choice selected --> selectedIndex = -1

    return (
        // <> is Fragment tag 
        <>
            <h1>{heading}</h1>
            {/* when items list has no item, call getMessage function to return no item found*/}
            {getMessage()}
            <ul className="list-group">
                {/* for loop is unavailable in tsx; use map (~ foreach) to render list instead: */}
                {/* key is equivalent to id in html */}
                {items.map((item, index) => 
                    <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                        key={item} 
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                            }}>
                    {item}
                    </li>)}
            </ul>

        </>
    )
}

export default ListGroup;
