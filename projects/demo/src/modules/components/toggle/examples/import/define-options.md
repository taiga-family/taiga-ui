```ts
import {TuiToggleOptions, TUI_TOGGLE_DEFAULT_OPTIONS, TUI_TOGGLE_OPTIONS} from '@taiga-ui/kit';

// ...
const options: Partial<TuiToggleOptions> = {
  icons: {
    toggleOff: ({$implicit}) => ($implicit === 'm' ? 'tuiIconChevronRight' : 'tuiIconChevronRightLarge'),
    toggleOn: ({$implicit}) => ($implicit === 'm' ? 'tuiIconChevronLeft' : 'tuiIconChevronLeftLarge'),
  },
};

@NgModule({
  providers: [
    {
      provide: TUI_TOGGLE_OPTIONS,
      useValue: {
        ...TUI_TOGGLE_DEFAULT_OPTIONS,
        ...options,
      },
    },
  ],
})
export class MyModule {}
```
