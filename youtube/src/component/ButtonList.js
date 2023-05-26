import React from 'react'
import Button from './Button'

const lists = ['All','Music','Game','Live','Git','Mixes','Dramedy','Programming','Kapil Sharma','React js','Java','Movies','Cartoons','Kapil Sharma','React js','Java','Movies','Cartoons']

const ButtonList = () => {
  return (
    <div className='flex'>
      {lists.map((list,index)=><Button key={index} name={list}/>)}
    </div>
  )
}

export default ButtonList