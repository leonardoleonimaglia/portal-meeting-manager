import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faGlobe, faUser, faVideo } from '@fortawesome/free-solid-svg-icons'
import './RoomCard.css';

const cardTextSize = {
  fontSize: '11px'
};

class RoomCard extends Component {  
  render() {
    return (
      <div class="col-sm-4 mt-4" data-toggle="modal" data-target="#roomInfoModal">
          <div class="card border-bottom-0">
              <div class="card-body">
                  <h6 class="card-title text-uppercase">Sala {this.props.title}</h6>
                  <p class="card-text text-secondary" style={cardTextSize}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                  <span class="badge badge-secondary">
                    <a data-tooltip="Televisão"><FontAwesomeIcon icon={faTv} /></a>
                    <a data-tooltip="Internet cabeada"><FontAwesomeIcon icon={faGlobe} /></a>
                    <a data-tooltip="Projetor"><FontAwesomeIcon icon={faVideo} /></a>
                  </span>

                  <div class="float-right">
                    <a data-tooltip="Pessoas suportadas">
                      <span class="badge badge-success"><FontAwesomeIcon icon={faUser} /> 9</span>
                    </a>
                  </div>
              </div>

              <div class="card-border rounded-bottom"/>
          </div>
      </div>
    )
  }
}

export default RoomCard;