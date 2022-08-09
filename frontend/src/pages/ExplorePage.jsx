import React from 'react'
import {useEffect, useState, useContext} from 'react'
import AuthContext from '../context/AuthContext'

function ExplorePage() {
  const [data, setData] = useState(null)
  let {authTokens} = useContext(AuthContext)


  


  return (
    <div className="explore">
    </div>
  )
}

export default ExplorePage
