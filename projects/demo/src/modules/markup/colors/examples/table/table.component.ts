import {ClipboardModule} from '@angular/cdk/clipboard';
import {AsyncPipe, DOCUMENT, NgForOf, NgIf} from '@angular/common';
import {Component, HostBinding, inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WINDOW} from '@ng-web-apis/common';
import {TuiDocCopyComponent, TuiThemeService} from '@taiga-ui/addon-doc';
import {delay} from 'rxjs';

import type {Color} from '../../constants';

@Component({
    standalone: true,
    selector: 'table[colors]',
    imports: [NgIf, AsyncPipe, NgForOf, TuiDocCopyComponent, ClipboardModule],
    templateUrl: './table.template.html',
    styleUrls: ['./table.style.less'],
    changeDetection,
})
export class TableComponent {
    private readonly themeService = inject(TuiThemeService);
    private readonly doc = inject(DOCUMENT);
    private readonly win = inject(WINDOW);
    private readonly styles = this.win.getComputedStyle(this.doc.documentElement);

    @Input()
    public colors: readonly Color[] = [];

    @Input()
    @HostBinding('class._dark')
    public dark = false;

    protected readonly theme$ = this.themeService.pipe(delay(1));

    protected getValue(variable: string): string {
        return this.styles.getPropertyValue(variable);
    }
}
