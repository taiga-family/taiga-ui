import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {type MaskitoTimeMode} from '@maskito/kit';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocIcons,
        TuiDocInput,
        TuiDocTextfield,
        TuiDropdown,
        TuiInputDateTime,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
    protected readonly isMobile = inject(WA_IS_MOBILE);
    protected readonly control = new FormControl();

    protected readonly dates = [
        TUI_FIRST_DAY,
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1, month: 1}),
        TuiDay.currentLocal().append({year: -1, month: -1}),
        [TuiDay.currentLocal().append({day: 1}), new TuiTime(12, 34)],
        TUI_LAST_DAY,
    ] as const satisfies ReadonlyArray<TuiDay | readonly [TuiDay, TuiTime]>;

    protected readonly timeModeVariants = [
        'HH:MM',
        'HH:MM AA',
        'HH:MM:SS',
        'HH:MM:SS AA',
        'HH:MM:SS.MSS',
        'HH:MM:SS.MSS AA',
    ] as const satisfies readonly MaskitoTimeMode[];

    protected min: TuiDay | readonly [TuiDay, TuiTime] | null = this.dates[0];
    protected max: TuiDay | readonly [TuiDay, TuiTime] | null = this.dates.at(-1) ?? null;
    protected timeMode: MaskitoTimeMode = this.timeModeVariants[0];
}
`;export{t as default};
