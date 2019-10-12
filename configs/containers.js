const requireFuncComponents = require.context('../components/pages', true, /\.js$/);
const requireFuncContainers = require.context('../containers/pages', true, /\.js$/);

import React from 'react';
import { connect } from 'react-redux';

let containers = {};

let components = {};

requireFuncComponents.keys().forEach(key => components[key] = requireFuncComponents(key));

requireFuncContainers.keys().forEach(key => {
  let path = /^\.\/(.*)\.js$/.exec(key)[1].split('/');

  // 检测是否为单独页面
  if(path.length < 3) return;

  const component = components[key].default;
  console.log(/^\.\/(.*)\.js$/.exec(key)[1].split('/'))
  if(!component) throw new Error('未检测到 container 对应的 component');

  const dfs = obj => {
    let head = path.shift();
    if (path.length > 0) {
      if (obj[head]) obj[head] = dfs(obj[head]);
      else obj[head] = dfs({});
    } else {
      obj[head] = React.createElement(
        connect(requireFuncContainers(key).mapStateToProps, requireFuncContainers(key).mapDispatchToProps)
          (component), { key });
    }
    return obj;
  }
  containers = dfs(containers);
});

export default containers;