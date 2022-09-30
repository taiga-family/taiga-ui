```ts
export class MyComponent {
  @Input()
  @tuiDefaultProp(
    quantity => Number.isInteger(quantity) && quantity >= 5,
    'Should be integer number more than min value',
  )
  quantity = 10;
}
```
