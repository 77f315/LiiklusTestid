import React, {useEffect, useState} from 'react'

function App() {
  const [testdata, setTestdata] = useState();
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setTestdata(data)
      }
    )
  }, [])
  return (
    <>
    {(typeof testdata === 'undefined') ? (
      <p>no bueno</p>
    ) : (
      <p>{testdata.test}</p>
    )}
    </>
  )
}

export default App