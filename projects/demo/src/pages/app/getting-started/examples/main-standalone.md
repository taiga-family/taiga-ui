```ts
import {provideTaiga} from '@taiga-ui/core';
// ...

bootstrapApplication(App, {
  providers: [
    provideTaiga(),
    //...
  ],
}).catch(console.error);
```
