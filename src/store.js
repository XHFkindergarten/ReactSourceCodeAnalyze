import { useState } from 'react'
function useTestData () {
  const [ data, setData ] = useState('lzk')
  return () => {
    return [ data, setData ]
  }
}

export default useTestData()