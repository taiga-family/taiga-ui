```ts
@NgModule({
  // ...
  providers: [
    {
      provide: TUI_DIALOGS_CLOSE,
      deps: [AuthService],
      useFactory: authService => authService.logout$,
    },
  ],
})
export class MyModule {}
```
