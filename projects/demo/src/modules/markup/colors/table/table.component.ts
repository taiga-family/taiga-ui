import {DOCUMENT} from '@angular/common';
import {Component, HostBinding, Inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WINDOW} from '@ng-web-apis/common';
import {TuiThemeService} from '@taiga-ui/addon-doc';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

import {Color} from '../colors.constants';

@Component({
    selector: 'table[colors]',
    templateUrl: './table.template.html',
    styleUrls: ['./table.style.less'],
    changeDetection,
})
export class TableComponent {
    private readonly styles = this.win.getComputedStyle(this.doc.documentElement);

    @Input()
    colors: readonly Color[] = [];

    @Input()
    @HostBinding('class._dark')
    dark = false;

    readonly theme$ = this.themeService.pipe(delay(1));

    constructor(
        @Inject(TuiThemeService) private readonly themeService: Observable<string>,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(WINDOW) private readonly win: Window,
    ) {}

    getValue(variable: string): string {
        return this.styles.getPropertyValue(variable);
    }
}
