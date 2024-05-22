```js
// This example is only if you are running via node
// $ node ./my-path-to-script/process-icons.js
const {globSync} = require('glob');
const {processIcons} = require('@taiga-ui/icons/scripts');

processIcons(globSync('./my-path-to-icons/**/*.svg'));
```
