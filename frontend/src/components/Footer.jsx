import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer--main">
        <div className="footer--links">
          <a href="">Support me</a>
          <a href="">Information</a>
          <a href="https://github.com/erik465/iteam-up">GitHub Repo</a>
       </div>
        <div className="footer--contact">
          <a href="mailto:ehalasz06@gmail.com">Work email : ehalasz06@gmail.com</a>
          <p>Erik Halasz</p>
        </div>
      </div>
      
      <hr />

      <div className="footer--social">
        <a href="https://github.com/erik465" target="_blank">
          <p>GitHub</p>
          <img src="github.png" alt="" />
        </a>
        <a href="https://twitter.com/ErikHalasz1" target="_blank">
          <p>Twitter</p>
          <img src="twitter.png" alt="" />
        </a>
        <a href="https://www.reddit.com/user/Able_Choice1015/" target="_blank">
          <p>Reddit</p>
          <img src="reddit.png" alt="" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
