import React, {Component} from 'react';
import Calendar from '../Calendar/Calendar'

class RoomInfo extends Component {  
  render() {
    return (
        <div class="modal fade" id="roomInfoModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title text-uppercase" id="myModalLabel">Sala {this.props.title}</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <Calendar/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default RoomInfo;