import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons'
import './Roomcard.css';


class Roomcard extends Component {
  render() {
    return (
        <div class="col-sm-4 mt-4">
            <div class="card border-bottom-0">
                <div class="card-body">
                    <h6 class="card-title text-uppercase">Sala Bromélia</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    <FontAwesomeIcon icon={faTv} />
                    <FontAwesomeIcon icon={faGlobe} />

                    <div class="float-right">
                       <span class="badge badge-success"><FontAwesomeIcon icon={faUser} /> 9</span>
                    </div>
                </div>

                <div class="card-border rounded-bottom"/>
            </div>
        </div>
    )
  }
}

export default Roomcard;