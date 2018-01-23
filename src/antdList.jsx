import React from 'react';
import { List, Avatar, Icon } from 'antd';
import 'antd/dist/antd.css';

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
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
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
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
