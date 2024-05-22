```ts
// This example is only if you are running via ts-node
// $ ts-node ./my-path-to-script/process-icons.ts
import {sync as globSync} from 'glob';

import {processIcons} from '@taiga-ui/icons/scripts';

processIcons(globSync('./my-path-to-icons/**/*.svg'));
```
