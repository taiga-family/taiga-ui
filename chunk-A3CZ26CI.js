import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {
    TUI_FALSE_HANDLER,
    type TuiBooleanHandler,
    TuiDay,
    TuiMonth,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {TuiInputMonth} from '@taiga-ui/kit';

const TAIGA_BIRTHDAY = new TuiDay(2020, 8, 20);
const TAIGA_V3 = new TuiDay(2022, 7, 30);
const TAIGA_V4 = new TuiDay(2024, 7, 9);

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocInput,
        TuiDocTextfield,
        TuiInputMonth,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly control = new FormControl(null);
    protected readonly monthVariants = [
        TuiDay.currentLocal().append({year: -100, month: -1}),
        TuiDay.currentLocal().append({year: -10, month: -1}),
        new TuiMonth(2007, 0),
        TAIGA_BIRTHDAY,
        TAIGA_V3,
        TAIGA_V4,
        TuiDay.currentLocal().append({year: 10, month: 1}),
        TuiDay.currentLocal().append({year: 100, month: 1}),
    ] as const satisfies readonly TuiMonth[];

    protected readonly yearVariants = [
        new TuiYear(TuiDay.currentLocal().year),
        new TuiYear(2077),
        new TuiYear(2007),
    ] as const satisfies readonly TuiYear[];

    protected readonly disabledItemHandlerVariants = [
        TUI_FALSE_HANDLER,
        ({month}) => month % 3 === 0,
    ] as const satisfies ReadonlyArray<TuiBooleanHandler<TuiMonth>>;

    protected min: TuiMonth | null = null;
    protected max: TuiMonth | null = null;
    protected year: TuiYear = this.yearVariants[0];
    protected disabledItemHandler: TuiBooleanHandler<TuiMonth> =
        this.disabledItemHandlerVariants[0];
}
`;export{t as default};
