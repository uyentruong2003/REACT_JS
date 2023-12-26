import { Fragment } from "react";
function ListGroup() {
    let items = ['New York','San Francisco','Tokyo','London','Paris'];
    items = [];
    // function to get message if items list has no item
    const getMessage = () => {
        return items.length === 0 ? <p>No Item Found</p> : null;
        // items.length === 0 && <p>No Item Found</p>
    }
    return (
        // <> is Fragment tag 
        <>
            <h1>List</h1>
            {/* when items list has no item, call getMessage function to return no item found*/}
            {getMessage()}
            <ul className="list-group">
                {/* for loop is unavailable in tsx; use map (~ foreach) to render list instead: */}
                {/* key is equivalent to id in html */}
                {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}
            </ul>

        </>
    )
}

export default ListGroup;
