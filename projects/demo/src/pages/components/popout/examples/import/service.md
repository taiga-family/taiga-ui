```ts
import {TUI_POPOUT_CONFIG} from '@taiga-ui/experimental';
import {provideZonelessChangeDetection} from '@angular/core';

@Component({
  // ...
  providers: [
    {
      provide: TUI_POPOUT_CONFIG,
      useValue: {providers: [provideZonelessChangeDetection()]},
    },
  ],
})
export default class Example {
  private readonly popout = inject(TuiPopoutService);

  // ...
}
```
