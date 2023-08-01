```ts
import {provideAnimations} from '@angular/platform-browser/animations';
import {TuiAlertModule, TuiDialogModule, TuiRootModule} from '@taiga-ui/core';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(TuiRootModule, TuiDialogModule, TuiAlertModule), provideAnimations()],
}).catch(err => console.error(err));
```
