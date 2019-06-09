import React, {Component} from 'react';
import './Roomcard.css';

class Roomcard extends Component {
  render() {
    return (
        <div class="col-sm">
            <div class="card border-bottom-0">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <div class="card-border rounded-bottom"/>
            </div>
        </div>
    )
  }
}

export default Roomcard;