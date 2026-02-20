import"./chunk-HU6DUUP4.js";var o=`import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component, inject, input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiDocCopy} from '@taiga-ui/addon-doc';
import {tuiInjectElement, TuiPlatform} from '@taiga-ui/cdk';
import {TUI_DARK_MODE} from '@taiga-ui/core';

@Component({
    selector: 'table[colors]',
    imports: [ClipboardModule, TuiDocCopy],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export class TableColors {
    private readonly win = inject(WA_WINDOW);
    private readonly styles = this.win.getComputedStyle(tuiInjectElement());
    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly platform = inject(TuiPlatform);

    public readonly colors = input<readonly string[]>([]);

    protected getValue(variable: string, _p: string, _d: boolean): string {
        return this.styles.getPropertyValue(variable);
    }
}
`;export{o as default};
