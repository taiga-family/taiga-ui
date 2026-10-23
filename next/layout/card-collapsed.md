# CardCollapsed

- **Package**: `LAYOUT`
- **Type**: components

### Usage Examples

#### Basic

**Template:**
```html
<section tuiCardLarge="compact" [tuiCardCollapsed]="collapsed()" >
<header tuiHeader="body-m">
<hgroup tuiTitle>
<h2>[31344] Error finding account number when executing the deal</h2>
<p tuiSubtitle> Some clients could encounter an error “Account not found” when selecting the account on the checkout screen </p>
</hgroup>
<aside tuiAccessories>
<button appearance="action-grayscale" iconEnd="@tui.copy" tuiLink type="button" > 237-123-42 </button>
</aside>
</header>
<div tuiCardRow>
<div tuiTitle>
<div tuiSubtitle>Status</div>
<div>
<tui-icon icon="@tui.clock" /> Pending </div>
</div>
<div tuiTitle>
<div tuiSubtitle>Unit</div>
<a href="https://github.com/taiga-family/taiga-ui" rel="noreferrer" target="_blank" tuiLink > Taiga UI </a>
</div>
<div tuiTitle>
<div tuiSubtitle>Category</div>
<div> Angular <span appearance="neutral" size="s" tuiBadge > Open Source </span>
</div>
</div>
<button appearance="secondary" size="s" tuiIconButton type="button" [tuiChevron]="!collapsed()" (click)="collapsed.set(!collapsed())" > Expand </button>
</div>
<tui-expand [expanded]="!collapsed()">
<table tuiTable>
<thead>
<tr>
<th tuiTh>Project</th>
<th tuiTh>Version</th>
<th tuiTh>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td tuiTd><b>Taiga UI</b></td>
<td tuiTd>4.32.0</td>
<td tuiTd>Angular UI kit for awesome people</td>
</tr>
<tr>
<td tuiTd><b>Maskito</b></td>
<td tuiTd>3.5.0</td>
<td tuiTd>Holy Grail of input masking for the Web</td>
</tr>
</tbody>
</table>
</tui-expand>
</section>
<section tuiCardLarge="compact">I'm just another card</section>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton, TuiExpand, TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiChevron} from '@taiga-ui/kit';
import {TuiCard, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiBadge,
        TuiButton,
        TuiCard,
        TuiChevron,
        TuiExpand,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiTable,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly collapsed = signal(true);
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 32rem;
    background: var(--tui-background-base-alt);
    box-shadow: 0 0 0 100rem var(--tui-background-base-alt);
}

tui-icon {
    color: var(--tui-status-warning);
}

td:last-child {
    color: var(--tui-text-secondary);
}
```
