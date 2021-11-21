import React from 'react';
import {useNavigate} from "react-router-dom";
export const LibraryItem = ({posterUrl, title, source, id}) => {
    const navigate = useNavigate();
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'column', padding: "0px 0px 0px 10px"}}>
                <img src={posterUrl} width="100" height="150" onClick={() => navigate( `/item/${id}`, {
                    title, id, source, posterUrl
                    })}/>
                    <p style={{color: '#FFFFFF'}}>
                        {title}
                    </p>
            </div>
        </>
    )
}
