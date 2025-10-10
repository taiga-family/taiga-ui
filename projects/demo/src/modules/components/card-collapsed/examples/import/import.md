```ts
import {TuiButton, TuiHeader, TuiTitle} from '@taiga-ui/core';
import {TuiExpand, TuiChevron} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiCard,
    TuiHeader,
    TuiTitle,
    TuiButton,
    TuiChevron,
    TuiExpand,
  ],
})
export class Example {}
```
