import React, {useEffect, useState} from 'react';
import {Footer} from "../../Components/footer";
import {RecentFiles} from "./RecentFiles";
export const Home = () => {
    const podcasts = [

    ]
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
            <div style={{position: "fixed", top: 60}}>
            <h3 style={{color: "#FFFFFF",  paddingLeft: "5%", display: 'flex', alignSelf: 'flex-start' }}>
                Recent Files
            </h3>
            <RecentFiles/>
            </div>
            <div style={{marginTop: "40%"}}>
                <h3 style={{color: "#FFFFFF",  paddingLeft: "5%", display: 'flex', alignSelf: 'flex-start' }}>
                    Recently Updated
                </h3>
                <RecentFiles/>
            </div>
        </>
    )
}
