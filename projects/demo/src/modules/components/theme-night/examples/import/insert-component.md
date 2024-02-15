```ts
@Component({
  // ...
})
export class AppComponent {
  readonly night = inject(TuiThemeNightService);

  get mode(): TuiBrightness | null {
    return this.night.value ? 'onDark' : null;
  }
}
```
