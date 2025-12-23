import { useState } from "react";

import OffImg from "../assets/image.png";
import OnImg from '../assets/pic_bulbon.gif';

const Light = () => {

    const [img, setImg] = useState(OffImg);

    const ButtonOff = () => {

        if (ButtonOn) {
            setImg(OffImg);
        }
    };
    const ButtonOn = () => {
        setImg(OnImg);
    };
    return (
        <>
            <h2>Light On Of</h2>
            <img src={img} alt="light" />
            <button onClick={ButtonOff}>Off</button>
            <button onClick={ButtonOn}>On</button>
        </>
    );

};

export default Light;
