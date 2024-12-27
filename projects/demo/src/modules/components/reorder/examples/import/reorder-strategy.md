```ts
import {TuiReorder} from '@taiga-ui/addon-table';
import {TUI_TILES_REORDER_STRATEGY} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiReorder,
    {
      provide: TUI_TILES_REORDER_STRATEGY,
      useValue: 'shift',
    },
  ],
  // ...
})
export class Example {}
```
