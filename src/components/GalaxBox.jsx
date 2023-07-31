import React from 'react'
import './styles/GalaxBox.css'

const GalaxBox = ({handleButton, phrase}) => {
  return (
    <section className='galaxBox'>
      <h2 className='tittle'>INFOGALAX</h2>

      <section className='button2'>
        <article className='boxbox'>
          <p>
            {phrase.phrase}
          </p>
        </article>
        <button className= 'button' onClick={handleButton }> <i class='bx bx-rotate-right' ></i> </button>
        
      </section>

      <footer className='boxbox2'><h4> Font: {phrase.author}</h4></footer>
    </section>
  )
}

export default GalaxBox 