// //import TransformStream from 'stream'
// import { TransformStream } from 'stream';
// const tes = {
//     start(){this.encoder = new TextEncoder()},
//     transform(chunk, controller) {
//       controller.enqueue(this.encoder.encode(chunk))
//     }
//   }
  
//   let _jstes_wm = new WeakMap(); /* info holder */
//   class JSTextEncoderStream extends TransformStream {
//     constructor() {
//       let t = {...tes}
  
//       super(t)
//       _jstes_wm.set(this, t)
//     }
//     get encoding() {return _jstes_wm.get(this).encoder.encoding}
//   }

//   export default JSTextEncoderStream;