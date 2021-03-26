/**
 * 个人方便做的公共方法
*/

//将对象的键取出并以数组形式返回
export const dateKey = data => {
    let content = []
    for(let i in data){
        content.push(i)
    }
    return content
}
//将对象的值取出并以数组形式返回
export const dateValue = data => {
    let content = []
    for(let i in data){
        content.push(data[i])
    }
    return content
}
//数组[1,2] => [{"name": 1},{"name": 2}]
export const dateObjcharts = (data, val) => {
    let content = []
    for(let i in data){
        let showVal = {
            'name': data[i],
            'max': val
        }
        content.push(showVal)
    }
    return content
}

