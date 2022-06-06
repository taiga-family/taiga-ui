```ts
import {TUI_INPUT_TIME_OPTIONS} from '@taiga-ui/kit';

// ...

@NgModule({
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
export class MyModule {}
```
