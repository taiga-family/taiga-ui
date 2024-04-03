```ts
// ...
import {TuiRootModule} from '@taiga-ui/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(
      TuiRootModule,
      // ...
    ),
  ],
}).catch(err => console.error(err));
```
