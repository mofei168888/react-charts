/**
 * @author：M
 * @E-mail: mpw0311@163.com
 * @version: 1.0.0
 * @description： 
 */
export default (props) => {
    const { xAxis } = props;

    return {
        type: 'category',
        ...xAxis
    };
}