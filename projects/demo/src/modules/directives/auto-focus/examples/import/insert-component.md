```ts
@Component({
  selector: 'my',
  // [...]
  providers: [
    tuiAutoFocusOptionsProvider({
      delay: 300, // NaN = no delay/sync
    }),
  ],
})
export class MyComponent {}
```
