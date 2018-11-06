import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = (props) => {
    if (!!props.searchTerm){
      return props.shows.map((s) => {
        if (s.name.toLowerCase().includes(props.searchTerm)){
          return <TVShow show={s} key={s.id} selectShow={props.selectShow}/>
        } else {
          return false
        }
      })
    }
    return props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={props.selectShow}/>)
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows(this.props)}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
