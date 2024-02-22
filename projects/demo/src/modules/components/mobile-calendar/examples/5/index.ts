import {Component, inject, INJECTOR, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';
import {tuiControlValue, TuiDay} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiDialogService} from '@taiga-ui/core';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {combineLatest, map, Observable} from 'rxjs';

@Component({
    selector: 'tui-mobile-calendar-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMobileCalendarExample5 {
    private readonly dialogs = inject(TuiDialogService);
    private readonly injector = inject(INJECTOR);
    private readonly months$ = inject(TUI_MONTHS);
    private readonly control = new FormControl<readonly TuiDay[] | null>(null);

    private readonly dialog$: Observable<readonly TuiDay[]> = this.dialogs.open(
        new PolymorpheusComponent(
            TuiMobileCalendarDialogComponent,
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
            size: 'fullscreen',
            closeable: false,
            data: {
                multi: true,
                min: new TuiDay(2018, 2, 10),
            },
        },
    );

    readonly date$ = combineLatest([
        tuiControlValue<readonly TuiDay[]>(this.control),
        this.months$,
    ]).pipe(
        map(([value, months]) => {
            if (!value?.length) {
                return 'Choose dates';
            }

            return value
                .map(day => `${months[day.month]} ${day.day}, ${day.year}`)
                .join('; ');
        }),
    );

    get empty(): boolean {
        return !this.control.value?.length;
    }

    onClick(): void {
        this.dialog$.subscribe(value => this.control.setValue(value));
    }
}
