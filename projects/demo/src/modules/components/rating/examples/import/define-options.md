```ts
import {TUI_RATING_OPTIONS} from '@taiga-ui/kit';
// ...

@NgModule({
  providers: [
    {
      provide: TUI_RATING_OPTIONS,
      useValue: {
        min: 0,
        max: 5,
        iconNormal: 'tuiIconStarLarge',
        iconFilled: 'tuiIconStarFilledLarge',
      },
    },
  ],
})
export class MyModule {}
```
