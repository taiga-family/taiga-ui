```ts
import {TUI_POPOUT_CONFIG} from '@taiga-ui/experimental';
// Use provideZonelessChangeDetection for Angular ^20.2
import {provideExperimentalZonelessChangeDetection} from '@angular/core';

@Component({
  // ...
  providers: [
    {
      provide: TUI_POPOUT_CONFIG,
      useValue: {providers: [provideExperimentalZonelessChangeDetection()]},
    },
  ],
})
export default class Example {
  private readonly popout = inject(TuiPopoutService);

  // ...
}
```
