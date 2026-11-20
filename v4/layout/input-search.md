# InputSearch

- **Package**: `LAYOUT`
- **Type**: components

### How to Use (Import)

```ts
import {TuiInputSearch} from '@taiga-ui/layout';
import {TuiTextfield} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTextfield,
    TuiInputSearch,
  ],
  // ...
})
export class MyComponent {}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    [tuiInputSearch]="results"
    [(ngModel)]="value"
  />
  <ng-template #results>
    <!-- ... -->
  </ng-template>
</tui-textfield>
```

### Usage Examples

#### Basic

**Template:**
```html
<header tuiNavigationHeader>
<strong>Taiga UI</strong>
<hr />
<tui-textfield (pointerdown.capture.stop)="(0)">
<input tuiSearchHotkey [formControl]="control" [tuiInputSearch]="search" [(tuiInputSearchOpen)]="open" />
<ng-template #search>
<tui-search-results [results]="results$ | async">
<tui-search-history [popular]="popular" />
<ng-template let-item>
<a tuiCell [href]="item.href" >
<tui-avatar [src]="item.icon || '@tui.file'" />
<span tuiTitle> {{ item.title }} <span tuiSubtitle>{{ item.subtitle }}</span>
</span>
</a>
</ng-template>
</tui-search-results>
</ng-template>
</tui-textfield> Alex Inkin <tui-avatar src="https://avatars.githubusercontent.com/u/11832552" />
</header>
<p>
<button size="m" tuiButton type="button" (click)="open = !open" > Toggle open: {{ open }} </button>
</p>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TuiButton, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiSearchResults} from '@taiga-ui/experimental';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCell, TuiInputSearch, TuiNavigation} from '@taiga-ui/layout';
import {filter, map, startWith, switchMap, timer} from 'rxjs';

interface Result {
    href: string;
    title: string;
    subtitle?: string;
    icon?: string;
}

const DATA: Record<string, readonly Result[]> = {
    Documents: [
        {
            title: 'Monty Python',
            href: 'https://en.wikipedia.org/wiki/Monty_Python',
        },
    ],
    Code: [
        {
            title: 'Taiga UI',
            href: 'https://github.com/taiga-family/taiga-ui',
            icon: '@tui.github',
        },
        {
            title: 'Maskito',
            href: 'https://github.com/taiga-family/maskito',
            icon: '@tui.github',
        },
        {
            title: 'Web APIs with Angular',
            href: 'https://github.com/taiga-family/ng-web-apis',
            icon: '@tui.github',
        },
    ],
    Links: [
        {
            title: 'Taiga UI',
            subtitle: 'Super awesome library',
            href: 'https://taiga-ui.dev',
            icon: 'assets/images/taiga.svg',
        },
        {
            title: 'Maskito',
            href: 'https://maskito.dev',
            icon: '@tui.external-link',
        },
    ],
};

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiInputSearch,
        TuiNavigation,
        TuiSearchResults,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly popular = ['Taiga UI', 'Maskito', 'Web APIs for Angular'];

    protected readonly control = new FormControl('');

    protected readonly results$ = this.control.valueChanges.pipe(
        filter(Boolean),
        switchMap((value: string) =>
            timer(2000).pipe(
                map(() => this.filter(value)),
                startWith(null),
            ),
        ),
    );

    protected open = false;

    private filter(query: string): Record<string, readonly Result[]> {
        return Object.entries(DATA).reduce(
            (result, [key, value]) => ({
                ...result,
                [key]: value.filter(({title, href, subtitle = ''}) =>
                    TUI_DEFAULT_MATCHER(title + href + subtitle, query),
                ),
            }),
            {},
        );
    }
}
```

**LESS:**
```less
:host {
    display: block;
    transform: translate3d(0, 0, 0);
}

[tuiNavigationHeader] {
    white-space: nowrap;
    inline-size: 100% !important;
    box-shadow: none !important;

    &::before {
        display: none;
    }
}
```
