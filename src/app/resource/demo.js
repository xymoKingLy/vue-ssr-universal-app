/**
 * @author panezhang
 * @date 2017/12/14-下午3:34
 * @file demo
 */

export const fetchItem = id => new Promise((resolve) => {
    console.log('fetching item', id);
    setTimeout(() => resolve({id, timestamp: Date.now()}), 1e3);
});
