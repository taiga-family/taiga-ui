```ts
// ...
import {TuiRootModule} from '@taiga-ui/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      TuiRootModule,
      // ...
    ),
  ],
}).catch(err => console.error(err));
```
