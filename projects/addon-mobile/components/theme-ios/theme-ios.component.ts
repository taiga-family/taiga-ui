import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    ViewEncapsulation,
} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

// @dynamic
@Component({
    selector: 'tui-theme-ios',
    styleUrls: ['./theme-ios.style.less'],
    template: '',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiThemeIosComponent extends AbstractTuiThemeSwitcher {
    constructor(@Inject(DOCUMENT) documentRef: Document) {
        super(documentRef);
    }
}
