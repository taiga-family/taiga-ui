import {ClipboardModule} from '@angular/cdk/clipboard';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiDocCopy} from '@taiga-ui/addon-doc';
import {tuiInjectElement, TuiPlatform, tuiPure} from '@taiga-ui/cdk';
import {TUI_DARK_MODE} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'table[colors]',
    imports: [AsyncPipe, ClipboardModule, NgForOf, NgIf, TuiDocCopy],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TableColors {
    private readonly win = inject(WA_WINDOW);
    private readonly styles = this.win.getComputedStyle(tuiInjectElement());
    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly platform = inject(TuiPlatform);

    @Input()
    public colors: readonly string[] = [];

    @tuiPure
    protected getValue(variable: string, _p: string, _d: boolean): string {
        return this.styles.getPropertyValue(variable);
    }
}
