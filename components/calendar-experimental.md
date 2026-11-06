# CalendarExperimental

- **Package**: `EXPERIMENTAL`
- **Type**: components

This is a work in progress The APIs might change in the future, use with caution

### Example

```html
<tui-calendar new [disabledItemHandler]="disabledItemHandler" [max]="max" [min]="min" [showAdjacent]="showAdjacent" [showWeek]="showWeek" [style.inline-size.rem]="20" [(month)]="month" [(view)]="view" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [(month)] | `TuiMonth` | current month |
| [(view)] | `'day' \| 'month' \| 'year'` | current view |
| [(value)] | `T \| null` | a single day, array or a range |
| [mode] | `'single' \| 'multi' \| 'range'` | type of value for picking |
| [max] | `TuiDay \| null` | maximal date to choose |
| [min] | `TuiDay \| null` | minimum date to choose |
| [showAdjacent] | `boolean` | display dates from adjacent months |
| [showWeek] | `boolean` | display week number on each row |
| [disabledItemHandler] | `TuiBooleanHandler<TuiDay>` |  |
| [dayType] | `TuiStringHandler<TuiDay>` |  |
| [contentDay] | `PolymorpheusContent<TuiContext<TuiDay>>` | custom template for day cell |
| [contentMonth] | `PolymorpheusContent<TuiContext<TuiMonth>>` | custom template for month cell |
| [contentYear] | `PolymorpheusContent<TuiContext<number>>` | custom template for year cell |

### Usage Examples

#### Basic

Date picker can be used together with date controls.

**Template:**
```html
<form tuiForm [formGroup]="form" >
<tui-textfield [disabledItemHandler]="disabledItemHandler">
<label tuiLabel>Single date</label>
<input formControlName="single" tuiInputDate [max]="max" [min]="min" />
<tui-calendar *tuiDropdown new />
</tui-textfield>
<tui-textfield multi [disabledItemHandler]="disabledItemHandler" >
<label tuiLabel>Multiple dates</label>
<input formControlName="multi" tuiInputDateMulti [max]="max" [min]="min" />
<tui-calendar *tuiDropdown new />
</tui-textfield>
<tui-textfield [disabledItemHandler]="disabledItemHandler">
<label tuiLabel>Date range</label>
<input formControlName="range" tuiInputDateRange [max]="max" [min]="min" />
<tui-calendar *tuiDropdown mode="range" new />
</tui-textfield>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/experimental';
import {TuiInputDate, TuiInputDateMulti, TuiInputDateRange} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiCalendar,
        TuiForm,
        TuiInputDate,
        TuiInputDateMulti,
        TuiInputDateRange,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = TuiDay.currentLocal().append({month: -2, year: -10});
    protected readonly max = TuiDay.currentLocal().append({month: 2, year: 10});

    protected readonly form = new FormGroup({
        single: new FormControl(),
        multi: new FormControl(),
        range: new FormControl(),
    });

    protected readonly disabledItemHandler = (item: TuiDay): boolean => item.day === 13;
}
```

#### Labels

You can customize content of date picker cells, with built-in extended spacing when `Title` is used.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Select date</label>
<input tuiInputDate [(ngModel)]="value" />
<tui-calendar *tuiDropdown new [contentDay]="day" [contentMonth]="month" />
<ng-template #day let-date >
<span tuiTitle> {{ date.day }} <span tuiSubtitle>{{ getLabel(date) }}</span>
</span>
</ng-template>
<ng-template #month let-date >
<span tuiTitle> {{ date.toUtcNativeDate() | date: 'MMM' }} <span tuiSubtitle>{{ date.year }}</span>
</span>
</ng-template>
</tui-textfield>
```

**TypeScript:**
```ts
import {DatePipe} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {TuiCalendar} from '@taiga-ui/experimental';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    imports: [DatePipe, FormsModule, TuiCalendar, TuiInputDate, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = signal<TuiDay | null>(new TuiDay(2026, 5, 25));

    protected getLabel({day}: TuiDay): string {
        switch (day) {
            case 17:
            case 18:
            case 19:
                return 'Sick';
            case 20:
                return '••';
            case 25:
                return '•••';
            case 3:
                return '••';
            case 30:
                return 'Q2';
            case 4:
            case 5:
                return '•';
            default:
                return '';
        }
    }
}
```

#### Accessibility

When attacked to a non-input, for example, ButtonSelect , a hidden input is added that gets focused when user presses arrow down .

**Template:**
```html
<button aria-label="Select date" iconEnd="@tui.calendar" tuiButton tuiButtonSelect [(ngModel)]="value" > {{ value() || 'Select date' }} <div *tuiDropdown="let close">
<tui-calendar new />
<button appearance="action" size="m" tuiButton type="button" [style.inline-size.%]="100" (click)="value.set(null); close()" > Clear </button>
</div>
</button>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiCalendar} from '@taiga-ui/experimental';
import {
    TuiButtonSelect,
    TuiInputDate,
    TuiInputDateMulti,
    TuiInputDateRange,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonSelect,
        TuiCalendar,
        TuiInputDate,
        TuiInputDateMulti,
        TuiInputDateRange,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = signal<TuiDay | null>(null);
}
```

#### Customization

Adding hint, different colors and week numbers.

**Template:**
```html
<tui-textfield multi>
<label tuiLabel>Pick days off</label>
<input tuiInputDateMulti [ngModel]="value()" (ngModelChange)="onValueChange($event)" />
<div *tuiDropdown [style.display]="'flex'" [style.flex-wrap]="'wrap'" >
<tui-calendar new [contentDay]="content" [dayType]="dayType()" [showAdjacent]="true" [showWeek]="true" />
<tui-data-list> @for (user of users; track $index) { <button tuiOption (click)="current.set($index)" >
<span [tuiAvatar]="user | tuiInitials"></span> {{ user }} <tui-icon icon="@tui.check" [style.visibility]="current() !== $index ? 'hidden' : ''" />
</button> } </tui-data-list>
<ng-template #content let-day > {{ day.day }} @if (getHint(day); as hint) { <span tuiHintDirection="top" class="hint" [tuiHint]="hint" ></span> } </ng-template>
</div>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, computed, signal, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDay, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiDataList, TuiHint, TuiIcon} from '@taiga-ui/core';
import {TuiCalendar} from '@taiga-ui/experimental';
import {TuiAvatar, TuiInitialsPipe, TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiCalendar,
        TuiDataList,
        TuiHint,
        TuiIcon,
        TuiInitialsPipe,
        TuiInputDateMulti,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected readonly users = ['Alex Inkin', 'Roman Sedov'];
    protected readonly value = computed(() => this.groups().flat());
    protected readonly current = signal(0);

    protected readonly groups = signal<TuiDay[][]>(
        Array.from({length: this.users.length}, () => []),
    );

    protected readonly dayType = computed<TuiStringHandler<TuiDay>>(
        (groups = this.groups(), current = this.current()) =>
            (day) =>
                [
                    day.isWeekend ? 'weekend' : 'weekday',
                    groups[current]?.find((item) => item.daySame(day))
                        ? 'current'
                        : 'other',
                ].join(' '),
    );

    protected onValueChange(value: TuiDay[]): void {
        const added = value.filter((item) => !this.value().includes(item));
        const removed = this.value().filter((item) => !value.includes(item));

        this.groups.update((groups) =>
            groups
                .map((group) => group.filter((item) => !removed.includes(item)))
                .map((group, i) => (i === this.current() ? group.concat(added) : group)),
        );
    }

    protected getHint(day: TuiDay): string | undefined {
        return this.users[
            this.groups().findIndex((group) => group.find((item) => day.daySame(item)))
        ];
    }
}
```

**LESS:**
```less
tui-date-picker [data-type~='other']::before {
    opacity: var(--tui-disabled-opacity);
}

tui-date-picker .hint {
    position: absolute;
    inset: 0;
}
```

#### Multiple

You can display 1-3 months at the same time.

**Template:**
```html
<tui-calendar [disabledItemHandler]="disabledItemHandler" [max]="max" [min]="min" [months]="2" [(value)]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/experimental';

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = TuiDay.currentLocal().append({month: -2, year: -10});
    protected readonly max = TuiDay.currentLocal().append({month: 2, year: 10});
    protected value = TuiDay.currentLocal();
    protected readonly disabledItemHandler = (item: TuiDay): boolean => item.day === 13;
}
```

#### Mobile

Using mobile version of the calendar inside SheetDialog and a fullscreen Dialog

**Template:**
```html
<button tuiButton type="button" (click)="sheet.set(true)" > {{ day() ?? 'Sheet' }} </button>
<button tuiButton type="button" (click)="dialog.set(true)" > {{ range() ?? 'Dialog' }} </button>
<ng-template let-observer [tuiSheetDialogOptions]="{appearance: 'fullscreen', bar: false, closable: false}" [(tuiSheetDialog)]="sheet" >
<header>
<tui-app-bar>
<button tuiButton tuiSlot="start" type="button" (click)="observer.complete()" > Back </button> Select date <button tuiButton tuiSlot="end" type="button" (click)="day.set(today); observer.complete()" > Today </button>
</tui-app-bar>
</header>
<tui-calendar-mobile #calendar mode="single" [value]="day()" /> @if (calendar.value(); as selected) { <div class="footer">
<footer tuiFloatingContainer="transparent"> @if (day() === selected) { <button tuiButton type="button" (click)="day.set(null); observer.complete()" > Clear </button> } @else { <button tuiButton type="button" (click)="day.set(selected); observer.complete()" > Select {{ calendar.value() }} </button> } </footer>
</div> } </ng-template>
<ng-template let-observer [tuiDialogOptions]="{appearance: 'fullscreen'}" [(tuiDialog)]="dialog" >
<tui-app-bar>
<button tuiButton tuiSlot="start" type="button" (click)="observer.complete()" > Back </button> Select range <button tuiButton tuiSlot="end" type="button" (click)="range.set(null); observer.complete()" > Clear </button>
</tui-app-bar>
<tui-calendar-mobile #calendar mode="range" [min]="today" [value]="range()" /> @if (calendar.value()) { <tui-bottom-sheet tuiAnimated [bar]="false" [stops]="[]" >
<div tuiItemGroup [horizontal]="true" > @for (item of items; track $index) { <button tuiChip type="button" (click)="range.set(item.range); observer.complete()" > {{ item }} </button> } </div>
<footer tuiFloatingContainer>
<button tuiButton type="button" (click)="range.set(calendar.value()); observer.complete()" > Select dates </button>
<p>{{ calendar.value() }}</p>
</footer>
</tui-bottom-sheet> } </ng-template>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet, TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TuiAnimated, TuiDay, type TuiDayRange} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog} from '@taiga-ui/core';
import {TuiCalendar} from '@taiga-ui/experimental';
import {TuiChip, tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';
import {TuiAppBar, TuiFloatingContainer, TuiItemGroup} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAnimated,
        TuiAppBar,
        TuiBottomSheet,
        TuiButton,
        TuiCalendar,
        TuiChip,
        TuiDialog,
        TuiFloatingContainer,
        TuiItemGroup,
        TuiSheetDialog,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly today = TuiDay.currentLocal();
    protected readonly sheet = signal(false);
    protected readonly dialog = signal(false);
    protected readonly day = signal<TuiDay | null>(null);
    protected readonly range = signal<TuiDayRange | null>(null);
    protected readonly items = tuiCreateDefaultDayRangePeriods();
}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1rem;
}

.footer {
    display: flex;
    max-block-size: 0;
    align-items: flex-end;
}

[tuiFloatingContainer] {
    inline-size: 100%;
}

tui-bottom-sheet {
    position: fixed;
    inset: auto 0 calc(max(1rem, env(safe-area-inset-bottom)) - 2rem);
    margin: auto;
    block-size: fit-content;

    --tui-from: translateY(100%);

    &.tui-enter,
    &.tui-leave {
        animation-name: tuiSlide;
    }

    [tuiItemGroup] {
        padding: 0 1rem;
        margin: 0.25rem -1rem 0;
    }

    [tuiFloatingContainer] {
        animation: none;
        padding: 0;
    }
}
```
