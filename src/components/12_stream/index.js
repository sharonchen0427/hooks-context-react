import React from 'react'
//import TextDecoderStream from 'stream'
//import { TextDecoderStream } from 'stream';
//import JSTextEncoderStream from  '../../method'
export default function StreamDemo() {
    fetch('http://localhost:3000/comments', {
        method: 'GET',
        //mode: 'cors',
        headers: {
            'content-type': 'application/json'
        },
        // credentials: 'include',
        // redirect: 'follow',
        // body: JSON.stringify({ foo: 'bar' })
    }).then(res => {
        console.log(res)
        // res.json()
        // console.log(res.json())
        const reader = res.body.getReader();
        let bytesReceived = 0;
        const processData = (result) => {
            if (result.done) {
                console.log(`complete, total size: ${bytesReceived}`);
                return;
            }
            const value = result.value; // Uint8Array
            const length = value.length;
            console.log(`got ${length} bytes data:`, value);
            bytesReceived += length;
            // 读取下一个文件片段，重复处理步骤
            return reader.read().then(processData);
        };
        reader.read().then(processData);
    })

    //get progress
    /*
    let total = null;
    let loaded = 0;
    const logProgress = (reader) => {
        return reader.read().then(({ value, done }) => {
            if (done) {
                console.log('Download completed');
                return;
            }
            loaded += value.length;
            if (total === null) {
                console.log(`Downloaded ${loaded}`);
            } else {
                console.log("value：", value)
                console.log(`Downloaded ${loaded} of ${total} (${(loaded / total * 100).toFixed(2)}%)`);

            }
            return logProgress(reader);
        });
    };
    fetch('http://localhost:3000/comments').then((res) => {
        total = res.headers.get('content-length');
        return res.body.getReader();
    }).then(logProgress);
*/

//get content:
    let text = '';
    const logProcessRead = (res) => {
        const reader = res.body.getReader();
        const decoder = new TextDecoder('utf-8');
        const push = ({ value, done }) => {
            if (done) return JSON.parse(text);
            text += decoder.decode(value, { stream: true });
            // ...
            return reader.read().then(push);
        };
        console.log("**read**", reader.read().then(push))
        return reader.read().then(push);
    };
    fetch('http://localhost:3000/comments').then((res) => {
        // total = res.headers.get('content-length');
        // return res.body.getReader();
        return res;
    }).then(logProcessRead);

//Tee
    const logProgressTee = (res) => {
        const total = res.headers.get('content-length');
        let loaded = 0;
        const [progressStream, returnStream] = res.body.tee();
        const reader = progressStream.getReader();
        const log = () => {
            reader.read().then(({ value, done }) => {
                console.log("progressStream",progressStream)//called twice

                if (done) {
                    console.log('Tee Download completed');
                    return;
                }
                // 省略输出进度
                loaded += value.length;
                if (total === null) {
                    console.log(`Tee Downloaded ${loaded}`);
                } else {
                    console.log("Tee value：", value)
                    console.log(`Tee Downloaded ${loaded} of ${total} (${(loaded / total * 100).toFixed(2)}%)`);

                }
                log();
            });
        };
        log();
        console.log("**tee:**", new Response(returnStream, { headers: res.headers }))
        return new Response(returnStream, { headers: res.headers });
    };
    fetch('http://localhost:3000/comments').then(logProgressTee).then(res => res.json()).then((data) => {
        return data
    });

    // 'TextDecoderStream' is not defined 
    /*
    fetch('http://localhost:3000/comments').then((res) => {
        const decoder = new TextDecoderStream('gbk', { ignoreBOM: true });
        const textStream = res.body.pipeThrough(decoder);
        const reader = textStream.getReader();
        const findMatched = () => reader.read().then(({ value, done }) => {
            if (done) {
                return false;
            }
            if (value.indexOf('bar') >= 0) {
                reader.cancel();
                return true;
            }
            return findMatched();
        });
        return findMatched();
    }).then((isMatched) => { console.log("isMatched",isMatched) });
*/

    return (
        <div>
            this is StreamDemo page
        </div>
    )

}


