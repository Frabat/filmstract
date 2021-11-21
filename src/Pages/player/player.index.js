import React, {useEffect} from 'react';
import {Footer} from "../../Components/footer";
import ReactAudioPlayer from "react-audio-player";
export const Player = (props) => {
    useEffect(() => {
        console.log(props);
    }, [])
    return(
        <>
        <div className={'App-footer'}>
            <Footer />
        </div>
        <ReactAudioPlayer src={''}/>
        </>
    )
}
