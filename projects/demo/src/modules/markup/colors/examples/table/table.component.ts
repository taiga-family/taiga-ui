import {ClipboardModule} from '@angular/cdk/clipboard';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WINDOW} from '@ng-web-apis/common';
import {TuiDocCopy, TuiThemeService} from '@taiga-ui/addon-doc';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {delay} from 'rxjs';

@Component({
    standalone: true,
    selector: 'table[colors]',
    imports: [NgIf, AsyncPipe, NgForOf, TuiDocCopy, ClipboardModule],
    templateUrl: './table.template.html',
    styleUrls: ['./table.style.less'],
    changeDetection,
})
export class TableColors {
    private readonly themeService = inject(TuiThemeService);
    private readonly win = inject(WINDOW);
    private readonly styles = this.win.getComputedStyle(tuiInjectElement());

    protected readonly theme$ = this.themeService.pipe(delay(1));

    @Input()
    public colors: readonly string[] = [];

    protected getValue(variable: string): string {
        return this.styles.getPropertyValue(variable);
    }
}
