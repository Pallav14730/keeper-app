import React from 'react'

function Note(props:any) {

  function handleClick(){
   props.onDelete(props.id);
  }
  return (
    <div className='mt-5 ml-6 pr-5 inline-block shadow-xl bg-gray-200 hover:shadow-2xl cursor-pointer rounded'>
        <h1 className='pt-3 pl-2 text-lg '>{props.title}</h1>
        <p className='pb-3 pl-2 text-sm'>{props.content}</p>
        <button onClick={handleClick} className='text-yellow-500 right-2'>Delete</button>
    </div>
  )
}

export default Note