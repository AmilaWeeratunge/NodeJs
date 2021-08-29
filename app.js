// npm- global comman, comes with node
// npm --version

//local dependency - use it only in this paericular procect
//npm i <packageName>

// global dependency - use it in any project
// nmp install -g <packageName>
// sudo install -g <packageName> (mac, linux)

const _ = require('lodash');

const items =[1,[2,[3,[4]]]]
const items01 =[1,2,3,4]
const newItems = _.flattenDeep(items)

console.log(newItems)