import {DOCUMENT} from '@angular/common';
import {Component, HostBinding, Inject, Input} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
import {changeDetection} from '../../../../change-detection-strategy';
import {TuiThemeService} from '../../../app/theme.service';
import {Color} from '../colors.constants';

@Component({
    selector: 'table[colors]',
    templateUrl: './table.template.html',
    styleUrls: ['./table.style.less'],
    changeDetection,
})
export class TableComponent {
    @Input()
    colors: ReadonlyArray<Color> = [];

    @Input()
    @HostBinding('class._dark')
    dark = false;

    readonly theme$ = this.themeService.pipe(delay(1));

    private readonly styles = this.windowRef.getComputedStyle(
        this.documentRef.documentElement,
    );

    constructor(
        @Inject(TuiThemeService) private readonly themeService: Observable<unknown>,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(WINDOW) private readonly windowRef: Window,
    ) {}

    getValue(variable: string): string {
        return this.styles.getPropertyValue(variable);
    }
}
