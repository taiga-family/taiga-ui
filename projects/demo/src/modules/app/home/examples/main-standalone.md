```ts
// ...
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    NG_EVENT_PLUGINS,
    //...
  ],
}).catch((err) => console.error(err));
```
