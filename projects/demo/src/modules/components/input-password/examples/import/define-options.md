```ts
import {TUI_INPUT_PASSWORD_OPTIONS, TUI_INPUT_PASSWORD_DEFAULT_OPTIONS} from '@taiga-ui/kit';

// ...

@NgModule({
  providers: [
    {
      provide: TUI_INPUT_PASSWORD_OPTIONS,
      useValue: {
        ...TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
        icons: {
          hide: 'tuiIconEyeClosed',
          show: 'tuiIconEyeOpen',
        },
      },
    },
  ],
  // ...
})
export class MyModule {}
```
