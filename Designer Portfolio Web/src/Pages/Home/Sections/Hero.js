import React from 'react'

export default function Hero() {
  return (
    <div className='p-20 bg-slate-50 h-[calc(100dvh-80px)] flex flex-col justify-center'>
      <h1 className="text-[calc(2vw+2vh)] font-serif leading-tight highlight-container">
        Hi There! I'm <span className='highlight'>Himanshu Grover</span>, a passionate Software Engineer with over 8 years of dedicated experience in front-end development, I bring a robust foundation in web technologies and a passion for crafting exceptional user experiences.
        &nbsp;
        <a className="text-lg italic" href="#">Read More</a>
      </h1>
      <p className="mt-10 text-[calc(1vw+1vh)]">Let's connect. <a className='underline' href="#">Say Hello!</a></p>
    </div>
  )
}
