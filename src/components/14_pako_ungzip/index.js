
import pako from 'pako'
import download from 'downloadjs'

export default function UnGzipDemo() {

    var _data = '{"body":{"banners":[],"ptypes":[{"addr":1,"productTypes":[1]},{"addr":2,"productTypes":[2]},{"addr":3,"productTypes":[3]}]},"success":true}';
    var data = pako.gzip(_data);
    console.log("->Pako 压缩data:", data);
    const decompressedData = pako.ungzip(data, { to: "string" })
    console.log("decompressedData", decompressedData)
    download(decompressedData,"log_123.log","application/text")
    //download(data, strFileName, strMimeType);
    // console.log("->Pako 解压压缩后的data:", pako.ungzip(data, {to: "string"}));//d
    //https://nodeca.github.io/pako/#ungzip

    return (
        <div>
            <p>
                {decompressedData}
            </p>
        </div>
    )

}
