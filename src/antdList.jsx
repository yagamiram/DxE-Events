import React from 'react';
import { List, Icon, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import _ from 'lodash';

const IconText = ({ type, text, toolTipText, event }) => (
    <span>
        <Tooltip placement={"top"} title={toolTipText}>
            <Icon type={type} style={{ marginRight: 8 }} onMouseOver={event}/>
            {text}
        </Tooltip>
    </span>
);

class AntdList extends React.Component {
    constructor(props) {
        super(props);
        console.log("Inside thr constructor of component AntList: ", this.props)
        this.listData = []
        this.state = {
            likeCount: 0,
            dislikeCount: 0
        }
    }
    componentWillReceiveProps(newProps) {
        console.log("inside the component will receive props of AntdList", newProps)
        console.log("de-structuring the received object", newProps.eventList)
        this.listData = []
        Object.keys(newProps.eventList).map((index) => {
            console.log("The key and index are: ", newProps.eventList[index])
            let eventBe = newProps.eventList[index]
            console.log("The eventBe is", eventBe)
            this.listData.unshift({
                title: eventBe.name,
                time: eventBe.start_time,
                attendingCount: eventBe.attending_count,
                content: eventBe.description,
                interest_count: eventBe.interested_count,
                href: `http://www.facebool.com/${eventBe.id}`,
                avatar: eventBe.cover.source,
                description: `Hosted by ${newProps["hostedBy"]}`,
                place: eventBe.place
            })
        })
    }
    findLocation(place) {
        let street = _.get(place, 'location.street', undefined)
        let city = _.get(place, 'location.city', undefined)
        let state = _.get(place, 'location.state', undefined)
        if (street && city && state) return street + ', ' + city + ', ' + state
        if (street) return street
        if (city) return city
        if (state) return state
        if (street && city) return street + ', ' + city
        if (street && state) return street + ', ' + state
        if (city && state) return city + ' ,' + state
        else return 'Location not revealed'
    }
    render() {
        return (
            <List
                itemLayout="vertical"
                size="large"
                dataSource={this.listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText type="clock-circle-o" text={moment(item.time).format("MMMM Do YYYY, h:mm:ss a")} toolTipText={"Time"} event={() => {console.log("on click")}}/>,
                            <IconText type="like-o" text={item.interest_count} toolTipText={"Interested Count"}/>,
                            <IconText type="check-circle-o" text={item.attendingCount} toolTipText={"Attending Count"}/>,
                            <IconText type="environment-o" text={this.findLocation(item.place)} toolTipText={"Location"}/>
                        ]}
                        extra={<img width={272} alt="logo" src={item.avatar} />}
                    >
                        <List.Item.Meta
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        )
    }
}

export default AntdList
