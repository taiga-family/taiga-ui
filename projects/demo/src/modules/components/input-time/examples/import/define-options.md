```ts
import {TUI_INPUT_TIME_OPTIONS} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  providers: [
    {
      provide: TUI_INPUT_TIME_OPTIONS,
      useValue: {
        icon: 'tuiIconCheckCircleLarge',
        mode: 'HH:MM:SS',
        itemSize: 's',
      },
    },
  ],
  // ...
})
export class MyComponent {}
```
