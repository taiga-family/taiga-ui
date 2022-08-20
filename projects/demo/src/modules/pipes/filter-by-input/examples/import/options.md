```ts
@Component({
  // ...
  providers: [
    {
      provide: TUI_FILTER_BY_INPUT_OPTIONS,
      useValue: {
        strictMode: false,
      },
    },
  ],
})
export class MyComponent {}
```
