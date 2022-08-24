//从localstorage中读取数据
function getData() {
    //如果本地localstorage中不存在数据
    if (!localStorage.getItem('geojson')) {//没有数据
        localStorage.setItem('geojson', '[]')//写入一个空数组
    }
    //有数据//把geojson中的数据读取出来后返回
    //用JSON.parse将字符串类型的数据转换成json格式对象
    return JSON.parse(localStorage.getItem('geojson'))
}

//将数据保存到localstorage中
//先用JSON.stringjfy将json格式对象转换成string类型再进行保存
function saveData(data) {
    localStorage.setItem('geojson', JSON.stringify(data))
}