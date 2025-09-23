```ts
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideTaiga} from '@taiga-ui/core';
// ...

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideTaiga(),
    //...
  ],
}).catch((err) => console.error(err));
```
