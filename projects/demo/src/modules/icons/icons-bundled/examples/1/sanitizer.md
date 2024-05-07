```ts
import {TUI_SANITIZER} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

// ...

@Component({
  standalone: true,
  // ...
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ],
})
export class MyComponent {}
```
