```ts
import {TUI_INPUT_COUNT_OPTIONS, TUI_INPUT_COUNT_DEFAULT_OPTIONS} from '@taiga-ui/kit';

// ...

@NgModule({
  providers: [
    {
      provide: TUI_INPUT_COUNT_OPTIONS,
      useValue: {
        ...TUI_INPUT_COUNT_DEFAULT_OPTIONS,
        icons: {
          up: 'tuiIconChevronUp',
          down: 'tuiIconChevronDown',
        },
        appearance: 'secondary',
        step: 10,
        min: 10,
        max: 100,
      },
    },
  ],
  // ...
})
export class MyModule {}
```
