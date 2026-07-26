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
