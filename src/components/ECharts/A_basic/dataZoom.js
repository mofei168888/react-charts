/**
 * @author  M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 * @git 
 */
export default (props) => {
    const { dataZoom, showDataZoom } = props;

    return dataZoom || [
        {
            show: showDataZoom,
            realtime: true,
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
        }
    ];
};