import React from 'react'

import style from './info.module.css';
const Info = ({value}) => {
    
  return (
    <div>
      <h1 id={style.head}>{value.name}</h1>
      <p style={{color:'white'}} id={style.para}>{value.data}</p>

      <br />
      <a href={value.Github}>Github &nbsp;</a>   
       <a href={value.link}>&nbsp; ViewSite</a>

      <br />
      
        
    </div>
  )
}

export default Info
