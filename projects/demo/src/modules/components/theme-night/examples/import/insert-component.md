```ts
@Component({
  // ...
})
export class AppComponent {
  constructor(@Inject(TuiThemeNightService) readonly night: TuiThemeNightService) {}

  get mode(): TuiBrightness | null {
    return this.night.value ? 'onDark' : null;
  }
}
```
