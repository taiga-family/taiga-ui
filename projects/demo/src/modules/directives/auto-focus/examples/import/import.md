```ts
@Component({
  standalone: true,
  imports: [
    // ...
    TuiAutoFocus,
  ],
  providers: [
    tuiAutoFocusOptionsProvider({
      delay: 300, // NaN = no delay/sync
    }),
  ],
})
export class MyComponent {}
```
