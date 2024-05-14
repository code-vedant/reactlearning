import React from 'react'

function Card({username , imgSrc='https://images.unsplash.com/photo-1602984338060-bfddce132ebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5vdCUyMGZvdW5kfGVufDB8fDB8fHww'}) {

    console.log(username)

  return (
    <>
<div className="max-w-96 h-[60vh] rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full max-h-[50%] object-cover object-center" src={imgSrc}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{username}</div>
    <p className="text-grey text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

   </>
  )
}

export default Card