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
            items : []
        }
        this.showEvents = this.showEvents.bind(this)
    }
    showEvents(value) {
        console.log("inside the show events", value)
        getDxESFBayAreaEvents(value)
            .then((values) => {
                this.setState({ items: values })
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
                <br/>
                {
                    /*
                 <div className="container">
                    {this.state.items.map((event, index) => (
                        <div className={`item${index}`} key={index}>
                            <div className="eventTiming">
                                <li className="eventEmptyRow"></li>
                                <li className="eventMonth">{moment(`${event.start_time}`).format('MMM')}</li>
                                <li className="eventDate">{moment(`${event.start_time}`).format('Do')}</li>
                                <li className="eventDay">{moment(`${event.start_time}`).format('ddd')}</li>
                                <li className="eventBorder"></li>
                            </div>
                            <div className="eventEmptySpace"></div>
                            <div className="eventPicture">
                                {event.cover ? <img src={event.cover.source} alt={"picture"} />  : " no url"}
                            </div>
                            <div className="eventPicture"></div>
                            <div className="eventDescription"></div>
                            <div className="eventCount"></div>
                        </div>
                    ))}
                </div>
                     */
                }
                {
                    console.log("the state items in the render function of FB are:", this.state.items)
                }
                <AntdList eventList={this.state.items}/>
            </div>

        )

    }
}

export default FB
