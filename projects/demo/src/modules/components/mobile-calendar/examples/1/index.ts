import {Component, Inject, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';
import {tuiControlValue, TuiDay} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiDialogService} from '@taiga-ui/core';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-mobile-calendar-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMobileCalendarExample1 {
    private readonly control = new FormControl(new TuiDay(2024, 10, 3));

    private readonly dialog$: Observable<TuiDay>;

    readonly date$ = combineLatest([
        tuiControlValue<TuiDay>(this.control),
        this.months$,
    ]).pipe(map(([value, months]) => this.getParsed(value, months)));

    constructor(
        @Inject(TuiDialogService) dialogs: TuiDialogService,
        @Inject(Injector) injector: Injector,
        @Inject(TUI_MONTHS) private readonly months$: Observable<string[]>,
    ) {
        const dataStream = tuiControlValue(this.control);
        const computedInjector = Injector.create({
            providers: [
                {
                    provide: TUI_CALENDAR_DATE_STREAM,
                    useValue: dataStream,
                },
            ],
            parent: injector,
        });
        const content = new PolymorpheusComponent(
            TuiMobileCalendarDialogComponent,
            computedInjector,
        );

        this.dialog$ = dialogs.open(content, {
            size: 'fullscreen',
            closeable: false,
            data: {
                min: TuiDay.currentLocal(),
            },
        });
    }

    get empty(): boolean {
        return !this.control.value;
    }

    getParsed(value: TuiDay | null, months: string[]): string {
        if (!value) {
            return 'Choose a date';
        }

        const {month, day, year} = value;

        return `${months[month]} ${day}, ${year}`;
    }

    onClick(): void {
        this.dialog$.subscribe(value => {
            this.control.setValue(value);
        });
    }
}
