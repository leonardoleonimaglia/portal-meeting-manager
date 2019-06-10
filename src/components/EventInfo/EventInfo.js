import React, {Component} from 'react';

class EventInfo extends Component {  
    render() {
        return (
            <div style={{display: this.props.show ? 'block' : 'none' }} tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title text-uppercase" id="myModalLabel">BLA BLA</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            BLAAAAA
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventInfo;