import"./chunk-HU6DUUP4.js";var t=`import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, KeyValuePipe, TuiDataList, TuiInputDateTime],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly dates: Record<string, [TuiDay, TuiTime]> = {
        'Taiga UI Birthday': [new TuiDay(2020, 8, 20), new TuiTime(19, 19)],
        '2.0.0 release': [new TuiDay(2020, 11, 29), new TuiTime(19, 5)],
        '3.0.0 release': [new TuiDay(2022, 7, 30), new TuiTime(17, 18)],
        '4.0.0 release': [new TuiDay(2024, 7, 9), new TuiTime(12, 17)],
    };

    protected value: [TuiDay, TuiTime | null] | null =
        Object.values(this.dates).at(-1) ?? null;

    protected toISOString([day, time]: readonly [TuiDay, TuiTime]): string {
        return \`\${day.toString('yyyy/mm/dd', '-')}T\${time.toString()}\`;
    }

    protected asIs(): number {
        return 0;
    }
}
`;export{t as default};
