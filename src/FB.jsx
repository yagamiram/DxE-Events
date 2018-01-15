import React from 'react'
import { getDxESFBayAreaEvents }  from './utils/ApiResponse'
import SelectEvent from "./SelectEvent";

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
                <ul>
                    {this.state.items.map((event, index) => (
                        <li key={index}>
                            {event.name}
                        </li>
                    ))}
                </ul>
            </div>

        )

    }
}

export default FB
