```ts
import {tuiEditorOptionsProvider, TuiEditorOptions} from '@taiga-ui/addon-editor';

const YOUR_PARAMS: TuiEditorOptions = {
  color: new Map([
    ['red', 'rgba(244, 87, 37, 1)'],
    ['blue', 'var(--tui-primary)'],
  ]),
  //...
};

@Component({
  //...
  providers: [tuiEditorOptionsProvider(YOUR_PARAMS)],
})
export class YourComponent {}
```
