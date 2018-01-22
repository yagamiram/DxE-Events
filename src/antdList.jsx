import React from 'react';
import { List, Avatar, Icon } from 'antd';
import 'antd/dist/antd.css';

const listData = []
for (let i=0; i < 50; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    })
}

const pagination = {
    pageSize: 1,
    current: 1,
    total: listData.length,
    onChange: (() => {console.log("the pagination is called")})
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 10 }}/>
        {text}
    </span>
);

class AntdList extends React.Component {
    constructor(props) {
        super(props);
        console.log("Inside thr constructor of component AntList: ", this.props)
        this.listData = []
    }
    componentWillMount() {
        console.log("Inside the component will mount of AntDList")
    }
    componentDidMount() {
        console.log("Inside the component did mount of AntList")
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
                href: 'http://ant.design',
                avatar: eventBe.cover.source,
                description: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
            })
        }
    }
    shouldComponentUpdate(newProps, newState) {
        console.log("inside the function shouldComponentUpdate of the component AntdList")
        console.log("new props: ", newProps)
        console.log("the new state is: ", newState)
        return true
    }
    render() {
        console.log("Inside the render function of the component AntdList");
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={pagination}
                dataSource={this.listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                        extra={<img width={272} alt="logo" src={item.avatar} />}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
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
