import React from 'react'

export default function LandingPage(props) {
  return (
    <>
    <header className='py-5 px-20 bg-white'>
      <img 
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Hg_%28equity_firm%29_%28logo%29.svg/800px-Hg_%28equity_firm%29_%28logo%29.svg.png"
        className='h-10' 
      />
    </header>
    <main>{props.children}</main>
    <footer>

    </footer>
    </>
  )
}
