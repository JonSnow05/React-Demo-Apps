import React from 'react'

function Count({text,count}) {
    console.warn(`Rendering Count - ${text}`);
    return (
        <div>
            <h3>{text} - {count}</h3>
        </div>
    )
}

export default React.memo(Count)
