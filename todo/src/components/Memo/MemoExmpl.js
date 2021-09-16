import React from 'react'

function MemoExmpl({name}) {
    console.log('rendering memo componenet')
    return (
        
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoExmpl)
