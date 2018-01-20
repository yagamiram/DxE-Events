import React from 'react'
import { getDxESFBayAreaEvents }  from './utils/ApiResponse'
import SelectEvent from "./SelectEvent";
import './events.css';

class FB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : []
        }
        this.showEvents = this.showEvents.bind(this)
    }
    showEvents(value) {
        getDxESFBayAreaEvents(value)
            .then((values) => {
                this.setState({ items: values })
            })
    }
    componentDidMount() {
        getDxESFBayAreaEvents(171904216553096) // Load the default DxE page events
            .then((values) => {
                this.setState({ items: values })
        })
    }
    render() {
        return (
            <div>
                <SelectEvent onSelect={this.showEvents}/>
                <br/>
                <div className="container">
                    {this.state.items.map((event, index) => (
                        <div className={`item${index}`} key={index}>
                            {
                                console.log("event cover is", event.name, event.cover)
                            }
                            <li key={event.name}>
                                {event.name}
                            </li>
                            <li>{event.start_time}</li>
                            <li>{event.attending_count}</li>
                            <li>{event.description}</li>
                            <li>{event.interested_count}</li>
                            <li>{event.cover ? event.cover.source : " no url"}</li>
                        </div>
                    ))}
                </div>
            </div>

        )

    }
}

export default FB
