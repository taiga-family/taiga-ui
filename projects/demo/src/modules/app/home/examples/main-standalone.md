```ts
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideEventPlugins} from '@taiga-ui/event-plugins';
// ...

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideEventPlugins(),
    //...
  ],
}).catch((err) => console.error(err));
```
