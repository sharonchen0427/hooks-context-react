
import pako from 'pako'

export default function UnGzipDemo()   {

    var _data = '{"body":{"banners":[],"ptypes":[{"addr":1,"productTypes":[1]},{"addr":2,"productTypes":[2]},{"addr":3,"productTypes":[3]}]},"success":true}';
    var data = pako.gzip(_data);
    console.log("->Pako 压缩data:", data);
    console.log("->Pako 解压压缩后的data:", pako.ungzip(data, {to: "string"}));//d
     //https://nodeca.github.io/pako/#ungzip

        return (
            <div>
                
            </div>
        )
     
}
