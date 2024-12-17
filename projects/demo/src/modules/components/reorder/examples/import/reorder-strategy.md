```ts
import {TuiReorder} from '@taiga-ui/addon-table';
import {TUI_REORDER_STRATEGY} from '@taiga-ui/addon-table';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiReorder,
    {
      provide: TUI_REORDER_STRATEGY,
      useValue: 'shift',
    },
  ],
  // ...
})
export class Example {}
```
