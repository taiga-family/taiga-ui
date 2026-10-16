# Timeline

- **Package**: `KIT`
- **Type**: components

An interactive timeline component for arranging events on a linear axis with no built-in styles

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [orientation] | `TuiOrientation` | — |
| [template] | `TemplateRef<TuiContext<number>>` | template for gaps between items |
| [max] | `number` | upper limit of the timeline |
| [draggable] | `boolean` | allow moving this item around |
| [resizable] | `boolean` | allow resizing this item by dragging edges |
| [(value)] | `[number, number]` | beginning and end of the item |

### Usage Examples

#### Basic

**Template:**
```html
<tui-timeline [max]="50"> @for (_ of items; track $index) { <label tuiTimelineItem [style.background]="`var(--tui-chart-categorical-0${$index})`" [(value)]="items[$index]!" ></label> } </tui-timeline>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTimeline} from '@taiga-ui/kit';

@Component({
    imports: [TuiTimeline],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: ReadonlyArray<[number, number]> = [
        [0, 5],
        [12, 15],
        [24, 40],
    ];
}
```

**LESS:**
```less
tui-timeline {
    inline-size: 18rem;
    block-size: 3rem;
    box-sizing: border-box;
    background: var(--tui-background-base-alt);
    border: 0.125rem solid transparent;
    border-radius: var(--tui-radius-s);
}

label {
    clip-path: inset(0.125rem round var(--tui-radius-xs));
    box-shadow: inset 0 0 0 0.375rem var(--tui-background-neutral-1-hover);
}
```

#### Full-fledged

**Template:**
```html
<tui-timeline #timeline orientation="vertical" [max]="max" [template]="gap" > @for (_ of items(); track $index) { <label #item tuiHintAppearance="floating" tuiHintDirection="end" tuiTimelineItem [resizable]="false" [tuiHint]="hint" [(value)]="items()[$index]!" >
<span>Event #{{ $index + 1 }}</span>
</label>
<ng-template #hint>
<form tuiForm="s">
<tui-range name="range" [margin]="max / 5" [max]="item.max()" [min]="item.min()" [ngModelOptions]="{updateOn: 'submit'}" [(ngModel)]="items()[$index]" />
<footer>
<button tuiButton type="submit" > Save </button>
<button appearance="secondary-destructive" tuiButton type="button" (click)="remove($index)" > Remove </button>
</footer>
</form>
</ng-template> } <ng-template #gap let-index > @let gap = timeline.gaps()[index] ?? [0, 0]; @if (gap[1] - gap[0] > max / 5) { <button appearance="secondary" iconStart="@tui.plus" size="xs" tuiIconButton type="button" (click)="add(index)" > Add </button> } </ng-template>
</tui-timeline>
```

**TypeScript:**
```ts
import {Component, signal, type WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import {TuiRange, TuiTimeline} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [FormsModule, TuiButton, TuiForm, TuiHint, TuiRange, TuiTimeline],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 50;

    protected readonly items = signal<ReadonlyArray<WritableSignal<[number, number]>>>([
        signal([0, 12]),
        signal([24, 40]),
    ]);

    protected remove(index: number): void {
        this.items.update((items) => items.filter((_, i) => i !== index));
    }

    protected add(index: number): void {
        const start = this.items()[index - 1]?.()[1] || 0;
        const end = this.items()[index]?.()[0] || this.max;
        const copy = [...this.items()];

        copy.splice(index, 0, signal([start, end]));

        this.items.set(copy);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

tui-timeline {
    inline-size: 18rem;
    block-size: 10rem;
    box-shadow: inset 0 0 0 0.375rem var(--tui-background-neutral-1);
    overflow: hidden;
    border-radius: var(--tui-radius-s);
    filter: drop-shadow(0 0.125rem 0.25rem rgba(0, 0, 0, 0.25));

    button {
        .transition(opacity);

        position: absolute;
        inset: 50%;
        opacity: 0;
        transform: translate(-50%, -50%);
    }

    &:hover button,
    button:focus-visible {
        opacity: 1;
    }
}

label {
    border-radius: inherit;
    background: var(--tui-border-normal);
    box-shadow: inset 0 0 0 0.375rem var(--tui-background-elevation-3);
}

span {
    display: flex;
    writing-mode: horizontal-tb;
    inline-size: 100%;
    block-size: 100%;
    justify-content: center;
    align-items: center;
}

form footer {
    inline-size: fit-content;
}
```
