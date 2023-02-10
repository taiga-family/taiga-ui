```ts
import {TUI_RATING_OPTIONS, TUI_RATING_DEFAULT_OPTIONS} from '@taiga-ui/kit';
// ...

@NgModule({
  providers: [
    {
      provide: TUI_RATING_OPTIONS,
      useValue: {
        ...TUI_RATING_DEFAULT_OPTIONS,
        iconNormal: 'tuiIconHeart',
        iconFilled: 'tuiIconHeartLarge',
      },
    },
  ],
})
export class MyModule {}
```
