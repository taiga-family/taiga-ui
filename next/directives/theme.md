# Theme

- **Type**: directives

`tuiTheme`
allows to set style for a DOM branch. By default
`dark`
and
`light`
are included. Importing is not required.

### Usage Examples

#### Themes

**Template:**
```html
<div tuiTheme="dark" class="dark" >
<p>
<tui-textfield>
<label tuiLabel>Text</label>
<input tuiInput [(ngModel)]="text" />
</tui-textfield>
</p>
<p>
<input tuiSwitch type="checkbox" [(ngModel)]="toggle" />
</p>
<p>
<tui-textfield>
<label tuiLabel>Sum</label>
<input tuiInputNumber [(ngModel)]="money" />
</tui-textfield>
</p>
<div tuiTheme="light" class="light" >
<p>
<tui-textfield>
<label tuiLabel>Text</label>
<input tuiInput [(ngModel)]="text" />
</tui-textfield>
</p>
<p>
<input tuiSwitch type="checkbox" [(ngModel)]="toggle" />
</p>
<p>
<tui-textfield>
<label tuiLabel>Sum</label>
<input tuiInputNumber [(ngModel)]="money" />
</tui-textfield>
</p>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInput} from '@taiga-ui/core';
import {TuiInputNumber, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInput, TuiInputNumber, TuiSwitch],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected toggle = false;
    protected text = '';
    protected money = 237;
}
```

**LESS:**
```less
.dark {
    inline-size: 18.75rem;
    padding: 0.625rem 1.25rem 1.25rem;
    background: #454e58;
    border-radius: 0.25rem;
}

.light {
    padding: 0.625rem 1.25rem;
    background: var(--tui-background-base);
    border-radius: 0.25rem;
    color: var(--tui-text-primary);
}
```

#### Toggling

**Template:**
```html
Dark mode enabled: {{ darkMode() }} <p>
<button tuiButton type="button" (click)="darkMode.set(!darkMode())" > Toggle </button>
<button tuiButton type="button" (click)="darkMode.reset()" > Reset </button>
</p>
<p>Add to Root to enable:</p>
<code>&lt;tui-root [attr.tuiTheme]="darkMode() ? 'dark' : null"&gt;&lt;/tui-root&gt;</code>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_LOCAL_STORAGE, WA_WINDOW} from '@ng-web-apis/common';
import {TUI_DARK_MODE, TUI_DARK_MODE_KEY, TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly key = inject(TUI_DARK_MODE_KEY);
    private readonly storage = inject(WA_LOCAL_STORAGE);
    private readonly media = inject(WA_WINDOW).matchMedia('(prefers-color-scheme: dark)');

    protected readonly darkMode = inject(TUI_DARK_MODE);

    protected reset(): void {
        this.darkMode.set(this.media.matches);
        this.storage?.removeItem(this.key);
    }
}
```

**LESS:**
```less
p {
    display: flex;
    gap: 1rem;
}

code {
    white-space: nowrap !important;
}
```
