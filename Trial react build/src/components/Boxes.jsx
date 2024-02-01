import React from 'react'
import './Boxes.css'

function Boxes() {
  return (
    <section className="boxes">
      <hr width="90%" size="2" />
      <div className="container">
        <div className="box-sect">
          <div className="box">
            <h2>Un-touched Locations</h2>
            <p>
              Dive in places most people have never been before, we have access
              to dive sites not accessable to the public
            </p>
          </div>
          <img src="reef.jpeg" />
        </div>
        <div className="box-sect">
          <img src="packages.jpg" />
          <div className="box">
            <h2>Variety of packages</h2>
            <p>
              With our differnt dive packages, we can cater to everyone and
              different budgets
            </p>
          </div>
        </div>
        <div className="box-sect">
          <div className="box">
            <h2>Training</h2>
            <p>
              Never been diving before? no problem, our dive guides are fully
              qualified and can train you while on-board
            </p>
          </div>
          <img src="dive-training.jpg" />
        </div>
      </div>
      <hr width="90%" size="2" />
    </section>
  )
}

export default Boxes
