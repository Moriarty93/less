import css from './css/index.less'
import css2 from './css/pipei.less'

// 注意postcss-loader 要放在less-loader之前



// border-color border-style 都支持4个参数即上右下左
// 当元素宽度为0，border有值时，某个方向有颜色，其余为透明就画出三角形-。-
// 其中兼容ie 就要用到 dashed 透明方向的border-style设置dashed
// 实例 .sanjiao {
//      width: 0;
//      height: 0;
//      overflow: hidden;
//      border-width: 10px;
//      border-color: red transparent transparent transparent;
//      border-style: solid dashed dashed dashed;
// }
