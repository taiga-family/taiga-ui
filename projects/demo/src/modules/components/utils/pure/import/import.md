```ts
@Component({
  standalone: true,
  // ..
})
export class MyComponent {
  @tuiPure
  get complexCalculationWithFixedResult(): number {
    // ...
  }

  @tuiPure
  someMethod(arg1: number, arg2: {}): {} {
    // ...
  }
}
```
