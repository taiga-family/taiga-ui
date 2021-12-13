```js
import glob from 'glob';

import {processIcons} from '@taiga-ui/icons/scripts';

glob('./my-path-to-icons/**/*.svg', {}, (_err, files) => processIcons(files));
```
