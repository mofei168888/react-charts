/**
 * author：M
 * E-mail: mpw0311@163.com
 */
import { PureComponent } from 'react';
import Chart from '../../A_basic';
class Index extends PureComponent {
    static defaultProps = {
        data: {},
        type: 'area',
        loading: false,
        stack:true
    }
    render() {

        return (
            <Chart
                {...this.props}
            />
        );
    }
}
export default Index;