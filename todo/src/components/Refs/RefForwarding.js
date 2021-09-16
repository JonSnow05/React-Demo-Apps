import React from 'react'

const RefForwarding = React.forwardRef((props,ref) => {
    return (
        <div>
            <input ref={ref} />
        </div>
    )
}) 

export default RefForwarding
