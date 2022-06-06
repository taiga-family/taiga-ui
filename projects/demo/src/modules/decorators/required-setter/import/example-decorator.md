```ts
export class MyComponent {
  @Input()
  @tuiRequiredSetter(
    quantity => Number.isInteger(quantity) && quantity >= 10,
    'Should be integer number more than min value',
  )
  set quantity(quantity: number) {
    this.items = new Array(quantity).fill(Math.floor(Math.random() * Math.floor(100)));
  }

  items: Array<number>;
}
```
