```ts
// ...
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    NG_EVENT_PLUGINS,
    //...
  ],
}).catch(err => console.error(err));
```
