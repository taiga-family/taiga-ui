```ts
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideTaiga} from '@taiga-ui/core';
// ...

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideTaiga({
      automaticDarkMode: true,
      fontScaling: true,
      customGlobalScrollbar: true,
    }),
    //...
  ],
}).catch((err) => console.error(err));
```