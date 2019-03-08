import { PureComponent } from 'react';
import { Tabs } from 'antd';
import View from './view';

const TabPane = Tabs.TabPane;

export default class PageMenu extends PureComponent {
    render() {

        return (
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
            >
                {this.props.children.map((child, i) => {
                    const { props: { config = {} } } = child;
                    const { name } = config;

                    return (
                        <TabPane tab={name || `Tab${i + 1}`} key={i + 1}>
                            <View>
                                {child}
                            </View>
                        </TabPane>
                    );

                })}
            </Tabs>
        );
    }
}