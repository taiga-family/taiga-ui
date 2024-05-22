```ts
import {TuiElasticStickyModule} from '@taiga-ui/addon-mobile';
import {TuiScrollbarComponent} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiScrollbarComponent,
    TuiElasticStickyModule,
  ],
  // ...
})
export class MyComponent {
  scale = 1;

  // ...

  onElastic(scale: number) {
    this.scale = clamp(scale, 0.5, 1); // We do not want to scale below 50%
  }
}
```
