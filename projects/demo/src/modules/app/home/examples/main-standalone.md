```ts
// ...
import {TuiRootModule} from '@taiga-ui/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(
      TuiRootModule,
      // ...
    ),
  ],
}).catch(err => console.error(err));
```
