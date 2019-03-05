/**
 * author：M
 * E-mail: mpw0311@163.com
 */
import { PureComponent } from 'react';
import Chart from '../core';
import { _isData } from '../methods';
import PropTypes from 'prop-types';
import getTooltip from './tooltip';
import getToolbox from './toolbox';
import getLegend from './legend';
import getDataset from './dataset';
import getSeries from './series';
class BasicChart extends PureComponent {
    static defaultProps = {
        data: {},
        type: 'funnel',
        loading: false,
        showTooltip: true,
        showLegend: true,
        showToolbox: false,
        showToolboxDataZoom: false,
        showToolboxDataView: false,
        showToolboxMagicType: true,
        toolboxMagicType: ['line', 'bar'],
        showToolboxRestore: true,
        showToolboxSaveAsImage: false,
        seriesSettings: {},
        sort: 'none'

    }
    render() {
        const { data } = this.props;
        if (!_isData(data)) {
            return (<div>无数据</div>);
        }
        const option = {
            tooltip: getTooltip(this.props),
            toolbox: getToolbox(this.props),
            legend: getLegend(this.props),
            dataset: getDataset(this.props),
            series: getSeries(this.props)
        }
        return (
            <Chart
                option={option}
            />
        );
    }
}
export default BasicChart;

BasicChart.propTypes = {
    //支持的图形类型
    type: PropTypes.oneOf(['funnel']),
    //数据格式校验
    data: PropTypes.shape({
        columns: PropTypes.array,
        rows: PropTypes.array,
    }),
    //是否显示正在加载中
    loading: PropTypes.bool,
    //图形标题
    title: PropTypes.string,
    //可以传入tooltip配置，校验
    tooltip: PropTypes.object,
    //是否显示tootip
    showTooltip: PropTypes.bool,
    //图形图例配置项
    legend: PropTypes.object,
    //是否显示图例
    showLegend: PropTypes.bool,
    //工具栏配置项
    toolbox: PropTypes.object,
    //是否显示工具栏
    showToolbox: PropTypes.bool,
    //区域缩放
    showToolboxDataZoom: PropTypes.bool,
    //数据视图
    showToolboxDataView: PropTypes.bool,
    //是否图形切换
    showToolboxMagicType: PropTypes.bool,
    //图形切换类型
    toolboxMagicType: PropTypes.array,
    //刷新还原
    showToolboxRestore: PropTypes.bool,
    //保存为图片
    showToolboxSaveAsImage: PropTypes.bool,
    //图形系列(series)配置项
    series: PropTypes.object,
    //单个图形系列(series[i])配置项
    seriesSettings: PropTypes.object,
    //漏斗图数据排序
    sort: PropTypes.oneOf(['ascending', 'descending', 'none']),
};