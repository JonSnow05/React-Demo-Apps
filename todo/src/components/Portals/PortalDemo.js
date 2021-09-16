import React from 'react'
import reactDom from 'react-dom'

function PortalDemo() {
    return reactDom.createPortal (
        <div>
            <h1>PortalDemo</h1>
        </div>,
        document.getElementById('non-root')
    )
}

export default PortalDemo
