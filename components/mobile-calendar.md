# MobileCalendar

- **Package**: `ADDON-MOBILE`
- **Type**: components

A calendar for mobile devices. It is used in date picker controls on mobile devices if `tuiMobileCalendar` directive is applied. You can use `TUI_CALENDAR_DATE_STREAM` token to set value from outside (see samples)

### Example

```html
<tui-mobile-calendar class="calendar" [disabledItemHandler]="disabledItemHandler" [markerHandler]="markerHandler" [max]="max" [min]="min" [multi]="multi" [single]="single" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [(value)] | `TuiDay | TuiDayRange | readonly TuiDay[] | null` | — |
| [disabledItemHandler] | `TuiBooleanHandler<TuiDay>` |  |
| [markerHandler] | `TuiMarkerHandler | null` | a handler that returns marker colors for a date |
| [max] | `TuiDay` | max date |
| [min] | `TuiDay` | min date |
| [multi] | `boolean` | array of single dates |
| [single] | `boolean` |  |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (cancel) | `void` | output when user clicks Cancel |
| (confirm) | `TuiDayRange | TuiDay` | output when user clicks Confirm (range or single day) |

### Usage Examples

#### Custom dropdown

**Template:**
```html
<div class="wrapper">
<button appearance="secondary" iconStart="@tui.calendar" tuiIconButton type="button" [style.border-radius.%]="100" (click)="onClick()" > Choose a date </button>
<span class="date" [class.date_empty]="empty" > {{ date$ | async }} </span>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject, INJECTOR, Injector} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_CALENDAR_DATE_STREAM,
    TuiMobileCalendarDropdownComponent,
} from '@taiga-ui/addon-mobile';
import {tuiControlValue, TuiDay} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiButton, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {combineLatest, map, type Observable} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);
    private readonly injector = inject(INJECTOR);
    private readonly months$ = toObservable(inject(TUI_MONTHS));
    private readonly control = new FormControl<TuiDay | null>(null);

    private readonly dialog$: Observable<TuiDay> = this.dialogs.open(
        new PolymorpheusComponent(
            TuiMobileCalendarDropdownComponent,
            Injector.create({
                providers: [
                    {
                        provide: TUI_CALENDAR_DATE_STREAM,
                        useValue: tuiControlValue(this.control),
                    },
                ],
                parent: this.injector,
            }),
        ),
        {
            appearance: 'fullscreen',
            closable: false,
            data: {
                single: true,
                min: TuiDay.currentLocal(),
            },
        },
    );

    protected readonly date$ = combineLatest([
        tuiControlValue<TuiDay>(this.control),
        this.months$,
    ]).pipe(
        map(([value, months]) =>
            value
                ? `${months[value.month]} ${value.day}, ${value.year}`
                : 'Choose a date',
        ),
    );

    protected get empty(): boolean {
        return !this.control.value;
    }

    protected onClick(): void {
        this.dialog$.subscribe((value) => this.control.setValue(value));
    }
}
```

**LESS:**
```less
.wrapper {
    display: flex;
    align-items: center;
}

.date {
    margin-inline-start: 1rem;

    &_empty {
        color: var(--tui-text-tertiary);
    }
}
```

#### Range

**Template:**
```html
<div class="example">
<tui-mobile-calendar [max]="max" [min]="min" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileCalendar} from '@taiga-ui/addon-mobile';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiCalendarSheetOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiMobileCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiCalendarSheetOptionsProvider({rangeMode: true})],
})
export default class Example {
    protected min = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 1);
    protected max = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 10);
}
```

**LESS:**
```less
.example {
    block-size: 35rem;
}
```

#### Localization

Use `tuiCalendarOptionsProvider` to change start day of the week (Monday by default)

**Template:**
```html
<tui-mobile-calendar [min]="min" />
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileCalendar} from '@taiga-ui/addon-mobile';
import {TuiDay, TuiDayOfWeek} from '@taiga-ui/cdk';
import {tuiCalendarOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiMobileCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiCalendarOptionsProvider({weekStart: signal(TuiDayOfWeek.Sunday)})],
})
export default class Example {
    protected min = TuiDay.currentLocal();
}
```

**LESS:**
```less
tui-mobile-calendar {
    max-inline-size: 20rem;
    block-size: 30rem;
}
```

#### Custom dropdown (range)

**Template:**
```html
<div class="wrapper">
<button appearance="secondary" iconStart="@tui.calendar" tuiIconButton type="button" [style.border-radius.%]="100" (click)="onClick()" > Calendar </button>
<span class="date" [class.date_empty]="empty" > {{ date$ | async }} </span>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject, INJECTOR, Injector} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_CALENDAR_DATE_STREAM,
    TuiMobileCalendarDropdownComponent,
} from '@taiga-ui/addon-mobile';
import {tuiControlValue, TuiDay, type TuiDayRange} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiButton, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {combineLatest, map, type Observable} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);
    private readonly injector = inject(INJECTOR);
    private readonly months$ = toObservable(inject(TUI_MONTHS));
    private readonly control = new FormControl<TuiDayRange | null>(null);

    private readonly dialog$: Observable<TuiDayRange> = this.dialogs.open(
        new PolymorpheusComponent(
            TuiMobileCalendarDropdownComponent,
            Injector.create({
                providers: [
                    {
                        provide: TUI_CALENDAR_DATE_STREAM,
                        useValue: tuiControlValue(this.control),
                    },
                ],
                parent: this.injector,
            }),
        ),
        {
            appearance: 'fullscreen',
            closable: false,
            data: {min: new TuiDay(2018, 2, 10)},
        },
    );

    protected readonly date$ = combineLatest([
        tuiControlValue<TuiDayRange>(this.control),
        this.months$,
    ]).pipe(
        map(([value, months]) => {
            if (!value) {
                return 'Choose a date range';
            }

            return value.isSingleDay
                ? `${months[value.from.month]} ${value.from.day}, ${value.from.year}`
                : `${months[value.from.month]} ${value.from.day}, ${value.from.year} - ${
                      months[value.to.month]
                  } ${value.to.day}, ${value.to.year}`;
        }),
    );

    protected get empty(): boolean {
        return !this.control.value;
    }

    protected onClick(): void {
        this.dialog$.subscribe((value) => this.control.setValue(value));
    }
}
```

**LESS:**
```less
.wrapper {
    display: flex;
    align-items: center;
}

.date {
    margin-inline-start: 1rem;

    &_empty {
        color: var(--tui-text-tertiary);
    }
}
```

#### Custom dropdown (multi)

**Template:**
```html
<div class="wrapper">
<button appearance="secondary" iconStart="@tui.calendar" tuiIconButton type="button" [style.border-radius.%]="100" (click)="onClick()" > Calendar </button>
<span class="date" [class.date_empty]="empty" > {{ date$ | async }} </span>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject, INJECTOR, Injector} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_CALENDAR_DATE_STREAM,
    TuiMobileCalendarDropdownComponent,
} from '@taiga-ui/addon-mobile';
import {tuiControlValue, TuiDay} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiButton, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {combineLatest, map, type Observable} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);
    private readonly injector = inject(INJECTOR);
    private readonly months$ = toObservable(inject(TUI_MONTHS));
    private readonly control = new FormControl<readonly TuiDay[] | null>(null);

    private readonly dialog$: Observable<readonly TuiDay[]> = this.dialogs.open(
        new PolymorpheusComponent(
            TuiMobileCalendarDropdownComponent,
            Injector.create({
                providers: [
                    {
                        provide: TUI_CALENDAR_DATE_STREAM,
                        useValue: tuiControlValue(this.control),
                    },
                ],
                parent: this.injector,
            }),
        ),
        {
            appearance: 'fullscreen',
            closable: false,
            data: {
                multi: true,
                min: new TuiDay(2018, 2, 10),
            },
        },
    );

    protected readonly date$ = combineLatest([
        tuiControlValue<readonly TuiDay[]>(this.control),
        this.months$,
    ]).pipe(
        map(([value, months]) =>
            value?.length
                ? value
                      .map((day) => `${months[day.month]} ${day.day}, ${day.year}`)
                      .join('; ')
                : 'Choose dates',
        ),
    );

    protected get empty(): boolean {
        return !this.control.value?.length;
    }

    protected onClick(): void {
        this.dialog$.subscribe((value) => this.control.setValue(value));
    }
}
```

**LESS:**
```less
.wrapper {
    display: flex;
    align-items: center;
}

.date {
    margin-inline-start: 1rem;

    &_empty {
        color: var(--tui-text-tertiary);
    }
}
```

#### Without header

**Template:**
```html
<tui-mobile-calendar [max]="max" [min]="min" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileCalendar} from '@taiga-ui/addon-mobile';
import {TuiDay} from '@taiga-ui/cdk';
import {TUI_CHOOSE_DAY_OR_RANGE_TEXTS} from '@taiga-ui/kit';

@Component({
    imports: [TuiMobileCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
            useValue: null,
        },
    ],
})
export default class Example {
    protected min = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 1);
    protected max = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 10);
}
```

**LESS:**
```less
:host {
    display: block;
    block-size: 35rem;
}
```
