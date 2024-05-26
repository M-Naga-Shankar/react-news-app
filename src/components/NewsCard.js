import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsCard extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
         <div className='row'>
          <div class="col-sm-3 mb-3 mb-sm-0">
        <div className="card mx-3 my-5 " >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDyycOD5x8Oyieptz8LJ3roAo0X0UfDOnXhb3l5TGYA&s" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
        </div>
        </div>
        <div class="col-sm-3 mb-3 mb-sm-0">
        <div className="card mx-3 my-5 " >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDyycOD5x8Oyieptz8LJ3roAo0X0UfDOnXhb3l5TGYA&s" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
        </div>
        </div>
        </div>
    </div>
    )
  }
}

export default NewsCard