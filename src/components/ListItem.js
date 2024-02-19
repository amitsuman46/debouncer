import React from 'react'

const ListItem = ({name}) => {
    const clickHandler = () =>{
        alert(name)
    }
  return (
    <div className=" flex items-center justify-center cursor-pointer border border-orange-500 p-2 m-2" onClick={clickHandler}>
        {name}
    </div>
  )
}

export default ListItem