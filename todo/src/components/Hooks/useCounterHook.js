import { useEffect } from 'react'

function useCounterHook(count) {
    useEffect(() => {
        document.title = `Clicked ${count}`
    },[count])
}

export default useCounterHook
