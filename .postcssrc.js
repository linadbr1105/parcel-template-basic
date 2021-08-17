//ESM (브라우저에서 사용)
// CommonJS (지금 이 파일은 내용들을 번들러를 통해 변환하는 용도로 쓰인 파일이므로
//    브라우저가 아닌 node.js환경에서 동작하며 node.js는 commonJS라는 방식을 사용한다.)

//import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

//export{
//   piugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  piugins: [
    require('autoprefixer')
  ]
}