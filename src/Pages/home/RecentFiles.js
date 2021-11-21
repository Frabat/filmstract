import React from 'react';
import {LibraryItem} from "./Components/LibraryItem";
export const RecentFiles = () => {
    const itemsToRender = [
        {
            id: 1,
            title: "Breaking Bad",
            posterUrl: "https://www.hallofseries.com/wp-content/uploads/2018/05/bb.jpg",
            source: "bbriassunto"
        },
        {
            id: 2,
            title: "Balla Coi Lupi",
            posterUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTn-yWonlW5SrjtZay4hBJ4u03rAttQQd9vWyt5WJfhH-kj6tC2",
            source: "consigliocomunale"
        }
    ]
    const renderLibrary = (library) => {
        return library.map((item, index) => <LibraryItem id={item.id} posterUrl={item.posterUrl} title={item.title} source={item.source}/> )
    }
    return (
        <>
            <div style={{flexDirection: 'row', display: 'flex', padding: '20px' }}>
                {renderLibrary(itemsToRender)}
            </div>
        </>
    );
}
