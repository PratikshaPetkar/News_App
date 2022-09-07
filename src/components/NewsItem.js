import React, { Component } from 'react'

export class NewsItem extends Component {
     
  
 
  render(){
let{title,description,imageUrl,newsUrl,author,date,source} = this.props;
  return (
      <div>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
        <span className=" badge rounded-pill bg-danger" >
    {source} 
  </span>
  </div>
  <img src={!imageUrl?"https://staticc.sportskeeda.com/editor/2022/09/81584-16622366665938-1920.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unkown":author} on {date} </small></p>
    <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark"> Read More </a>
  </div>
</div>
      </div>
    )
  }
}



export default NewsItem
