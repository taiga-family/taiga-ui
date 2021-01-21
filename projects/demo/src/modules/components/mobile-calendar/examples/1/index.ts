import {Component, Inject, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';
import {TuiDay, tuiReplayedValueChangesFrom} from '@taiga-ui/cdk';
import {TuiDialogService} from '@taiga-ui/core';
import {TUI_MONTHS} from '@taiga-ui/core';
import {TUI_CALENDAR_DATA_STREAM} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

// @dynamic
@Component({
    selector: 'tui-mobile-calendar-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMobileCalendarExample1 {
    private readonly control = new FormControl();

    private readonly dialog$: Observable<TuiDay>;

    constructor(
        @Inject(TuiDialogService) dialogService: TuiDialogService,
        @Inject(Injector) injector: Injector,
        @Inject(TUI_MONTHS) private readonly months: readonly string[],
    ) {
        const dataStream = tuiReplayedValueChangesFrom(this.control);
        const computedInjector = Injector.create({
            providers: [
                {
                    provide: TUI_CALENDAR_DATA_STREAM,
                    useValue: dataStream,
                },
            ],
            parent: injector,
        });
        const content = new PolymorpheusComponent(
            TuiMobileCalendarDialogComponent,
            computedInjector,
        );

        this.dialog$ = dialogService.open(content, {
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

    get date(): string {
        return this.parsed || 'Choose a date';
    }

    get parsed(): string {
        if (!this.control.value) {
            return '';
        }

        const {month, day, year} = this.control.value as TuiDay;

        return `${this.months[month]} ${day}, ${year}`;
    }

    onClick() {
        this.dialog$.subscribe(value => {
            this.control.setValue(value);
        });
    }
}
