import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import api from '../services/api';
import {Plus} from 'lucide-react';

const Timeline = () => {

    const [data, setData] = useState([]);

    const getTimeLineData = async () => {
        try {
            const res = await api.get("/timeline");
            console.log(res.data);
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
    };

    // generate timeline card
    useEffect(() => {
        getTimeLineData();
    }, []);
    return (
        <>
            {data.map((element) => {
                return <Card key={element.id} CardDetails={element} />
            })}
            <Plus size={32} className='d-flex justify-content-center align-item-center mx-auto bg-primary rounded' color="white" strokeWidth={2} style={{ marginLeft: "200px" }} />
        </>
    )
}
export default Timeline;