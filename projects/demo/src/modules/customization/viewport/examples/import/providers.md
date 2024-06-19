```ts
import {Component} from '@angular/core';
import {TUI_VIEWPORT} from '@taiga-ui/core';

@Component({
  // ...
  providers: [
    {
      provide: TUI_VIEWPORT,
      useFactory: () => {
        const win = inject(WINDOW);

        return {
          type: `viewport`,
          getClientRect() {
            return {
              top: 0,
              left: 0,
              right: win.innerWidth,
              bottom: win.innerHeight,
              width: win.innerWidth,
              height: win.innerHeight,
            };
          },
        };
      },
    },
  ],
})
export class Example {}
```
