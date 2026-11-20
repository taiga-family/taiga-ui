# Spaces

- **Type**: markup

You can use global classes to make (n multiples 4px) margins

You can build a class with direction and value between 0 and 15 (
`-'">`
).

## Classes

### Usage Examples

#### Classes

**Template:**
```html
<h2 class="title"> Margin top <code [textContent]="'tui-space_top-<value>'"></code>
</h2>
<div class="row">
<div class="example tui-space_top-1 tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_top-1">tui-space_top-1</tui-doc-copy>
</div>
<div class="example tui-space_top-2 tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_top-2">tui-space_top-2</tui-doc-copy>
</div>
<div class="example tui-space_top-3 tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_top-3">tui-space_top-3</tui-doc-copy>
</div>
<div class="example tui-space_top-4 tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_top-4">tui-space_top-4</tui-doc-copy>
</div>
<div class="example tui-space_top-5 tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_top-5">tui-space_top-5</tui-doc-copy>
</div>
</div>
<h2 class="title"> Margin bottom <code [textContent]="'tui-space_bottom-<value>'"></code>
</h2>
<div class="row row_align-items_bottom">
<div class="example tui-space_bottom-1 tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_bottom-1">tui-space_bottom-1</tui-doc-copy>
</div>
<div class="example tui-space_bottom-2 tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_bottom-2">tui-space_bottom-2</tui-doc-copy>
</div>
<div class="example tui-space_bottom-3 tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_bottom-3">tui-space_bottom-3</tui-doc-copy>
</div>
<div class="example tui-space_bottom-4 tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_bottom-4">tui-space_bottom-4</tui-doc-copy>
</div>
<div class="example tui-space_bottom-5 tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_bottom-5">tui-space_bottom-5</tui-doc-copy>
</div>
</div>
<h2 class="title"> Margin right <code [textContent]="'tui-space_right-<value>'"></code>
</h2>
<div class="row">
<div class="example tui-space_right-1">
<tui-doc-copy cdkCopyToClipboard="tui-space_right-1">tui-space_right-1</tui-doc-copy>
</div>
<div class="example tui-space_right-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_right-2">tui-space_right-2</tui-doc-copy>
</div>
<div class="example tui-space_right-3">
<tui-doc-copy cdkCopyToClipboard="tui-space_right-3">tui-space_right-3</tui-doc-copy>
</div>
<div class="example tui-space_right-4">
<tui-doc-copy cdkCopyToClipboard="tui-space_right-4">tui-space_right-4</tui-doc-copy>
</div>
<div class="example tui-space_right-5">
<tui-doc-copy cdkCopyToClipboard="tui-space_right-5">tui-space_right-5</tui-doc-copy>
</div>
<div class="example"></div>
</div>
<h2 class="title"> Margin left <code [textContent]="'tui-space_left-<value>'"></code>
</h2>
<div class="row">
<div class="example"></div>
<div class="example tui-space_left-1">
<tui-doc-copy cdkCopyToClipboard="tui-space_left-1">tui-space_left-1</tui-doc-copy>
</div>
<div class="example tui-space_left-2">
<tui-doc-copy cdkCopyToClipboard="tui-space_left-2">tui-space_left-2</tui-doc-copy>
</div>
<div class="example tui-space_left-3">
<tui-doc-copy cdkCopyToClipboard="tui-space_left-3">tui-space_left-3</tui-doc-copy>
</div>
<div class="example tui-space_left-4">
<tui-doc-copy cdkCopyToClipboard="tui-space_left-4">tui-space_left-4</tui-doc-copy>
</div>
<div class="example tui-space_left-5">
<tui-doc-copy cdkCopyToClipboard="tui-space_left-5">tui-space_left-5</tui-doc-copy>
</div>
</div>
<h2 class="title"> Vertical and horizontal margins <code [textContent]="'tui-space_vertical-<value>'"></code> and <code [textContent]="'tui-space_horizontal-<value>'"></code>
</h2>
<div class="row">
<div class="example tui-space_vertical-4">
<tui-doc-copy cdkCopyToClipboard="tui-space_vertical-4">tui-space_vertical-4</tui-doc-copy>
</div>
<div class="example tui-space_horizontal-4">
<tui-doc-copy cdkCopyToClipboard="tui-space_horizontal-4">tui-space_horizontal-4</tui-doc-copy>
</div>
</div>
```

**TypeScript:**
```ts
import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocCopy} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [ClipboardModule, TuiDocCopy],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: block;
}

.title {
    font: var(--tui-font-heading-6);
    margin: 1.5rem 0 0.75rem;
}

.description {
    font: var(--tui-font-text-m);
}

.row {
    display: flex;

    &_align-items_bottom {
        align-items: flex-end;
    }
}

.example {
    display: flex;
    font: var(--tui-font-text-m);
    box-shadow: var(--tui-shadow-small);
    align-items: center;
    justify-content: center;
    inline-size: 11.25rem;
    block-size: 4.6875rem;
    background-color: var(--tui-background-base);
    border-radius: var(--tui-radius-m);
}
```
