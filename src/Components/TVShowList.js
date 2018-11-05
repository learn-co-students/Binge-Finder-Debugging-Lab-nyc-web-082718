import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow';

class TVShowList extends Component {

  mapAllShows = () => {
    const tvJSX = (s) => <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>

    let filtered = this.props.shows

    if (!!this.props.searchTerm){
      filtered = filtered.filter((s) => {
        return s.name.toLowerCase().includes(this.props.searchTerm)
      })
    }

    if (!!this.props.filterRating){
      filtered = filtered.filter(s => {
        return s.rating.average >= parseInt(this.props.filterRating) && s.rating.average < parseInt(this.props.filterRating) + 1
      })
    }

    return filtered.map((s)=> tvJSX(s))


  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
