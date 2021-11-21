import React, {useEffect, useState} from 'react';
import {Footer} from "../../Components/footer";
export const Library = () => {

    useEffect(() => {

    }, [])
    return(
        <>
            <div className={'App-footer'}>
                <Footer />
            </div>
            <div style={{display: 'flex'}}>
                <h1 style={{color: "#FFFFFF", position: "fixed", top: 0, paddingLeft: "5%"}}>
                    Welcome, User
                </h1>
            </div>
        </>
    )
}
