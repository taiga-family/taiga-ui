import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    ViewEncapsulation,
} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-theme-android',
    styleUrls: ['./theme-android.style.less'],
    template: '',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiThemeAndroidComponent extends AbstractTuiThemeSwitcher {
    constructor(@Inject(DOCUMENT) documentRef: Document) {
        super(documentRef);
    }
}
