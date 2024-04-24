```ts
import {TUI_INPUT_PASSWORD_OPTIONS, TUI_INPUT_PASSWORD_DEFAULT_OPTIONS} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  providers: [
    {
      provide: TUI_INPUT_PASSWORD_OPTIONS,
      useValue: {
        ...TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
        icons: {
          hide: 'tuiIconEyeOff',
          show: 'tuiIconEye',
        },
      },
    },
  ],
  // ...
})
export class MyComponent {}
```
