# Dark mode

- **Type**: customization

Taiga UI provides
`TUI_DARK_MODE`
— an injectable
`WritableSignal<boolean>`
with an extra
`reset()`
method. It automatically initialises from
`localStorage`
or the system
`prefers-color-scheme`
media query, and persists manual changes back to
`localStorage`
.

```ts
import {inject} from '@angular/core';
import {TUI_DARK_MODE} from '@taiga-ui/core';

@Component({
  // ...
})
export class MyComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);

  enable(): void {
    // Set explicitly
    this.darkMode.set(true);
  }

  toggle(): void {
    this.darkMode.update((dark) => !dark);
  }

  resetToSystem(): void {
    // Reset to system preference (prefers-color-scheme)
    this.darkMode.reset();
  }
}
```

## Custom localStorage key

By default the preference is stored under the
`tuiDark`
key (
`TUI_DARK_MODE_DEFAULT_KEY`
). Provide
`TUI_DARK_MODE_KEY`
token to use a different key:

```ts
import {TUI_DARK_MODE_KEY} from '@taiga-ui/core';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: TUI_DARK_MODE_KEY,
      // Override the default 'tuiDark' localStorage key
      useValue: 'myAppTheme',
    },
  ],
});
```

### Usage Examples

#### Toggle & Reset

**Template:**
```html
<p> Dark mode: <code>{{ darkMode() }}</code>
</p>
<div class="buttons">
<button size="s" tuiButton type="button" (click)="darkMode.set(true)" > Enable dark </button>
<button size="s" tuiButton type="button" (click)="darkMode.set(false)" > Enable light </button>
<button appearance="outline" size="s" tuiButton type="button" (click)="darkMode.reset()" > Reset to system </button>
</div>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DARK_MODE, TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly darkMode = inject(TUI_DARK_MODE);
}
```

**LESS:**
```less
.buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-block-start: 1rem;
}
```
