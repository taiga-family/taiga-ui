import {ClipboardModule} from '@angular/cdk/clipboard';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiDocCopy} from '@taiga-ui/addon-doc';
import {tuiInjectElement, tuiPure} from '@taiga-ui/cdk';

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

    @Input()
    public colors: readonly string[] = [];

    @tuiPure
    protected getValue(variable: string): string {
        return this.styles.getPropertyValue(variable);
    }
}
