import pako from 'pako'

export default function Page() {
    //https://blog.csdn.net/qq_35713752/article/details/82079629
    //https://blog.csdn.net/weixin_34351321/article/details/85903179?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.no_search_link&spm=1001.2101.3001.4242.1&utm_relevant_index=3

    // var key = 'absd';
    var _data = '{"body":{"banners":[],"ptypes":[{"addr":1,"productTypes":[1]},{"addr":2,"productTypes":[2]},{"addr":3,"productTypes":[3]}]},"success":true}';
    var data = zip(_data);
    console.log("压缩data:", data);
    console.log("解压压缩后的data:", unzip(data));//d
    // var time = new Date().getTime();
    // for (let i = 0; i < 1000; i++) {
    //     zip(_data)
    // }
    // console.log('压缩一千次使用时间/毫秒：', new Date().getTime() - time)

    // 解压
    function unzip(key) {
        // 将二进制字符串转换为字符数组
        var charData = key.split('').map(function (x) { return x.charCodeAt(0); });
        console.log('压缩后的文件:', charData.join(","))

        // 将数字数组转换成字节数组
        var binData = new Uint8Array(charData);

        // 解压
        var data = pako.inflate(binData);

        // 将GunZip ByTAREAR转换回ASCII字符串
        key = String.fromCharCode.apply(null, new Uint16Array(data));

        //unescape(str)  --->解压后解码，防止中午乱码
        return unescape(key);
    }

    // 压缩
    function zip(str) {
        //escape(str)  --->压缩前编码，防止中午乱码
        var binaryString = pako.gzip(escape(str), { to: 'string' });
        return binaryString;
    }

    return (
        <div>

        </div>
    )

}
