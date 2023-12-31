import React from 'react';
import { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";


interface LoveProps {
    onLoveClick: () => void;
}

const Love = ({onLoveClick}: LoveProps) => {
    const [clickStatus, setClickStatus] = useState(false);
    const toggle = () => {
        setClickStatus(!clickStatus)
        onLoveClick();
    }
    if (clickStatus) {
        return (
            <AiFillHeart color="red" onClick={toggle}></AiFillHeart>
        )
    } else {
        return (
            <AiOutlineHeart onClick={toggle}></AiOutlineHeart>
        )
    }
}

export default Love