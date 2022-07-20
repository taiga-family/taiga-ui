```ts
// This example is only if you are running via ts-node
// $ ts-node ./my-path-to-script/process-icons.ts
import glob from 'glob';

import {processIcons} from '@taiga-ui/icons/scripts';

glob('./my-path-to-icons/**/*.svg', {}, (_err, files) => processIcons(files));
```
