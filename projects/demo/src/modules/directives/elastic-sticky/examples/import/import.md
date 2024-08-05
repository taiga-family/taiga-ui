```ts
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {TuiScrollbar} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiScrollbar,
    TuiElasticSticky,
  ],
  // ...
})
export class Example {
  scale = 1;

  // ...

  onElastic(scale: number) {
    this.scale = clamp(scale, 0.5, 1); // We do not want to scale below 50%
  }
}
```
