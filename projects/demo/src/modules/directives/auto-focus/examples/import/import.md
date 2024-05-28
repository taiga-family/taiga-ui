```ts
@Component({
  standalone: true,
  imports: [
    // ...
    TuiAutoFocusDirective,
  ],
  providers: [
    tuiAutoFocusOptionsProvider({
      delay: 300, // NaN = no delay/sync
    }),
  ],
})
export class MyComponent {}
```
