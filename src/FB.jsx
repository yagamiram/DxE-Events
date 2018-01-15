import React from 'react'
import { getDxESFBayAreaEvents }  from './utils/FB'

class FB extends React.Component {
    constructor(props) {
        super(props);
        console.log("The props are:  ", props)
        this.state = {
            items : []
        }
    }
    componentDidMount() {
        console.log("Inside component did mount", this.props)
        let dxeURL = `https://graph.facebook.com/v2.5/${this.props.id}/events?fields=name,start_time,attending_count,category,description,interested_count&limit=999&since=now&access_token=339134753269160|e17be7c7603d79b8cd99a43461fcd825`
        const rv = getDxESFBayAreaEvents(dxeURL)
        rv.then((values) => {
            this.setState({ items: values })
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log("Inside the component will receive props", nextProps)
    }
    render() {
        console.log("the items are: ", this.state.items)
        return (
            <ul>
                {this.state.items.map((event, index) => (
                    <li key={index}>
                        {event.name}
                    </li>
                ))}
            </ul>
        )

    }
}

export default FB
