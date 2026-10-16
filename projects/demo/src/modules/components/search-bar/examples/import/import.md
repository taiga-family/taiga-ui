```ts
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiButtonClose,
    TuiSearchBar,
  ],
  // ...
})
export class Example {}
```
