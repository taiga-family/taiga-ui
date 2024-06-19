```ts
@Component({
  standalone: true,
  // ..
})
export class Example {
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
