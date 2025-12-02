```ts
import {provideTaiga} from '@taiga-ui/core';
// ...

bootstrapApplication(App, {
  providers: [
    provideTaiga(),
    //...
  ],
}).catch((err) => console.error(err));
```
