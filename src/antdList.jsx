import React from 'react';
import { List, Icon, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

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
        this.listData = []
        for (let i =0; i < newProps["eventList"].length; i++) {
            let eventBe = newProps["eventList"][i]
            this.listData.push({
                title: eventBe.name,
                time: eventBe.start_time,
                attendingCount: eventBe.attending_count,
                content: eventBe.description,
                interest_count: eventBe.interested_count,
                href: `http://www.facebool.com/${eventBe.id}`,
                avatar: eventBe.cover.source,
                description: `Hosted by ${newProps["hostedBy"]}`
            })
        }
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
                        actions={[<IconText type="clock-circle-o" text={moment(item.time).format("MMMM Do YYYY, h:mm:ss a")} toolTipText={"Time"} event={() => {console.log("on click")}}/>, <IconText type="like-o" text={item.interest_count} toolTipText={"Interested Count"} event={() => {console.log("on click")}}/>, <IconText type="check-circle" text={item.attendingCount} toolTipText={"Attending Count"} event={() => {console.log("on click")}}/>]}
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
