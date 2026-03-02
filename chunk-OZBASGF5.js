import"./chunk-HU6DUUP4.js";var t=`import {AsyncPipe} from '@angular/common';
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
            !value
                ? 'Choose a date'
                : \`\${months[value.month]} \${value.day}, \${value.year}\`,
        ),
    );

    protected get empty(): boolean {
        return !this.control.value;
    }

    protected onClick(): void {
        this.dialog$.subscribe((value) => this.control.setValue(value));
    }
}
`;export{t as default};
