```ts
import {clamp} from '@taiga-ui/cdk';

export class MyComponent {
  scale = 1;

  // ...

  onElastic(scale: number) {
    this.scale = clamp(scale, 0.5, 1); // We do not want to scale below 50%
  }
}
```
