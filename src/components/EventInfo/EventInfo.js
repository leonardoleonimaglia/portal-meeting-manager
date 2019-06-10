import React, {Component} from 'react';

class EventInfo extends Component {  
    render() {
        if (this.props.show) {
            return (
                "DETALHES DO EVENTO"
            )
        }
        
        return null
    }
}

export default EventInfo;