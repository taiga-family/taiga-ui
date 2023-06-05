```js
// This example is only if you are running via node
// $ node ./my-path-to-script/process-icons.js
const glob = require('glob');
const {processIcons} = require('@taiga-ui/icons/scripts');

glob('./my-path-to-icons/**/*.svg', {}, (_err, files) => processIcons(files));
```
