import"./chunk-42JZD6NG.js";var t=`import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, tuiWatch} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core';
import {TuiChip, TuiLineClamp} from '@taiga-ui/kit';
import {map, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiChip, TuiLineClamp, TuiNotification],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(TUI_IS_E2E);

    protected value$ = timer(this.isE2E ? 0 : 4000).pipe(
        map(() => \`\${'async fake value, '.repeat(10)}end!\`),
        tuiWatch(),
    );
}
`;export{t as default};
