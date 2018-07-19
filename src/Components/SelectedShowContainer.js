import React, { Component } from 'react';
import Episode from './Episode';

class SelectedShowContainer extends Component {

  state = {
    selectedSeason: 1,
  }

  mapSeasons = () => {
    if (!!this.props.episodes){
      let seasons = this.props.episodes.map((e)=> e.season).unique()

      return seasons.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      });
    }
  }

  mapEpisodes = () => {
    return this.props.episodes.map((e)=>{
      if (e.season == this.state.selectedSeason){
        return (<Episode episode={e} key={e.id}/>)
      }
    })
  }

  handleSelectionChange = (e) => {
    this.setState({ selectedSeason: e.target.value })
  }

  render() {
    const { selectedShow } = this.props
    // DO NOT USE dangerouslySetInnerHTML in your own personal projects
    // as this can expose you, this app is 1 exception where we can use this method
    return (
      <div style={{position: "static"}}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt=""/>
        <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} onChange={this.handleSelectionChange}>
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }

}

export default SelectedShowContainer;


Array.prototype.unique = function() {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
    if(!arr.includes(this[i])) {
        arr.push(this[i]);
    }
  }
  return arr;
}
