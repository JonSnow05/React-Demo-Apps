import React from 'react'

function Title() {
    console.warn(`Rendering Count - Title`);
    return (
        <div>
            <h2>CallBack Hook Example</h2>
        </div>
    )
}

export default React.memo(Title)
