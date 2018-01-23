import React from 'react'
import { getDxESFBayAreaEvents }  from './utils/ApiResponse'
import SelectEvent from "./SelectEvent";
import './events.css';
import moment from 'moment';
import AntdList from './antdList';

class FB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [],
            hostedBy: 'Berkeley Animal Rights Center'
        }
        this.showEvents = this.showEvents.bind(this)
    }
    showEvents(value) {
        console.log("inside the show events", value)
        getDxESFBayAreaEvents(value.id)
            .then((values) => {
                this.setState({ items: values, hostedBy: value.name })
            })
    }
    componentDidMount() {
        console.log("Inside the component did mount of FB")
        getDxESFBayAreaEvents(171904216553096) // Load the default DxE page events
            .then((values) => {
                this.setState({ items: values })
        })
    }
    render() {
        console.log("Inside the render function of the component FB");
        return (
            <div>
                <SelectEvent onSelect={this.showEvents}/>
                <AntdList eventList={this.state.items} hostedBy={this.state.hostedBy}/>
            </div>

        )

    }
}

export default FB
