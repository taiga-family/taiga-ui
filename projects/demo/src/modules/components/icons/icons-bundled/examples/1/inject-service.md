```ts
// ...
import {TuiSvgService, tuiIconTrashLarge} from '@taiga-ui/core';

@Component({
  // ...
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ],
})
export class MyComponent {
  constructor() {
    inject(TuiSvgService).define({tuiIconTrashLarge});
  }
}
```
