# Sidebar

- **Package**: `ADDON-MOBILE`
- **Type**: directives

Directive allows to show arbitrary content in a sidebar above all content. A darkening overlay is shown under the sidebar. This directive is deprecated and will be removed in the next major version. Use Drawer instead.

### How to Use (Import)

```ts
import {TuiSidebar} from '@taiga-ui/addon-mobile';
import {TuiActiveZone} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSidebar,
    TuiActiveZone,
  ],
  // ...
})
export class Example {
  open = false;

  toggle(open: boolean) {
    this.open = open;
  }
}
```

### How to Use (Template)

```html
<button
  tuiButton
  type="button"
  (click)="toggle(true)"
  (tuiActiveZoneChange)="toggle($event)"
>
  Show sidebar
  <div *tuiSidebar="open">Content</div>
</button>
```

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButton type="button" (click)="toggle(true)" (tuiActiveZoneChange)="toggle($event)" > Show sidebar <!-- Nest the directive so it is considered the same active zone -->
<div *tuiSidebar="open; direction: 'right'">
<tui-accordion [rounded]="false">
<tui-accordion-item borders="top-bottom"> Web APIs for Angular <ng-template tuiAccordionItemContent>
<a *ngFor="let link of webApis" rel="noreferrer" target="_blank" tuiLink class="link" [attr.href]=" 'https://github.com/taiga-family/ng-web-apis/tree/main/libs/' + link + '/README.md' " > {{ link }} </a>
</ng-template>
</tui-accordion-item>
<tui-accordion-item borders="top-bottom"> Other libraries <ng-template tuiAccordionItemContent>
<a *ngFor="let link of taigaFamilyProducts" rel="noreferrer" target="_blank" tuiLink class="link" [attr.href]="'https://github.com/taiga-family/' + link" > {{ link }} </a>
</ng-template>
</tui-accordion-item>
</tui-accordion>
</div>
</button>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSidebar} from '@taiga-ui/addon-mobile';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiAccordion, TuiActiveZone, TuiButton, TuiLink, TuiSidebar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly webApis = [
        'Common',
        'Audio',
        'Canvas',
        'Geolocation',
        'MIDI',
        'Workers',
    ];

    protected readonly taigaFamilyProducts = [
        'Taiga-UI',
        'ng-event-plugins',
        'ng-polymorpheus',
        'ng-dompurify',
    ];

    protected toggle(open: boolean): void {
        this.open = open;
    }
}
```

**LESS:**
```less
.link {
    display: block;
    margin: 0.75rem 0;
}
```
