```ts
export class MyComponent {
  scale = 1;

  onZoom(scale: TuiScale) {
    this.scale += scale.delta;
  }
}
```
