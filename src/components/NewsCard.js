
import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class NewsCard extends Component {
static propTypes={
  category: PropTypes.string,
};
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page:1 // Initialize articles as empty array in state
    };
  }

  async componentDidMount() {
    try {
      console.log('test');
      console.log(this.props.category);
      let uri = 'https://newsapi.org/v2/top-headlines?country=in&category='+this.props.category+'&apikey=9af91ad9c6e14c38afc00c7757d86f21&page='+this.state.page;
      let data = await fetch(uri);
      let parsedata = await data.json();
      this.setState({ articles: parsedata.articles }); // Update articles in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
          <div className=' '><h4 className=' text-center'>  Today High-Lights</h4></div>
        <div className='row'>
            {this.state.articles.map((ele, index) => (
              <div className="col-sm-4 mb-3 mb-sm-0">
                <div className="card mx-5 my-5 ">
                <img src={ele.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ele.title}</h5>
                  <p className="card-text">{ele.description}</p>
                  <a href={ele.url} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
          </div>
            ))}
        </div>
        <div className='row'>
        <button className='btn btn-dark col-2 mx-5 my-5' onClick={async()=>{this.setState({page:this.state.page-1});  try {
      let uri = 'https://newsapi.org/v2/top-headlines?country=in&category='+this.props.category+'&apikey=9af91ad9c6e14c38afc00c7757d86f21&page='+this.state.page;
      let data = await fetch(uri);
      let parsedata = await data.json();
      this.setState({ articles: parsedata.articles }); // Update articles in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }}}>Prev</button>
        <div className='col-5'>
</div>
        <button className='btn btn-dark col-2 mx-5 my-5' onClick={async()=>{this.setState({page:this.state.page+1});  try {
  let uri = 'https://newsapi.org/v2/top-headlines?country=in&category='+this.props.category+'&apikey=9af91ad9c6e14c38afc00c7757d86f21&page='+this.state.page;
      let data = await fetch(uri);
      let parsedata = await data.json();
      this.setState({ articles: parsedata.articles }); // Update articles in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }}}>Next</button>
        </div>
      </div>
    );
  }
}

export default NewsCard;
