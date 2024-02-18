import React from 'react'

function Card({userName = "Anonimus", post="Not assignd yet", imgUrl="https://images.pexels.com/photos/20187061/pexels-photo-20187061/free-photo-of-women-in-the-village-grow-rice-together-for-the-family.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}) {
  //console.log(props)
  return (
    <div>
      <figure className="p-8 bg-slate-100 rounded-xl dark:bg-slate-800">
        <img className="w-24 h-24 mx-auto rounded-full" src={imgUrl} alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              {userName}
            </div>
            <div>
              {post}
            </div>
          </figcaption>
        </div>
      </figure>    
    </div>
  )
}

export default Card


