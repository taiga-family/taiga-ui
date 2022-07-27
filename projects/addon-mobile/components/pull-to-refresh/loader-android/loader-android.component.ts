import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

const HIDDEN_DISTANCE = 2;
const ROTATE_X_DEFAULT = 180;
const ROTATE_X_MAX = 500;
const ROTATE_X_MULTIPLIER = 2.3;

@Component({
    selector: `tui-mobile-android-loader`,
    templateUrl: `./loader-android.template.html`,
    styleUrls: [`./loader-android.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMobileLoaderAndroidComponent {
    @Input()
    pulled = 0;

    get transform(): string {
        const rotateX = Math.min(
            ROTATE_X_DEFAULT + this.pulled * ROTATE_X_MULTIPLIER,
            ROTATE_X_MAX,
        );

        return `rotate(${rotateX} 0 0)`;
    }

    @HostBinding(`class._hidden`)
    get hidden(): boolean {
        return this.pulled < HIDDEN_DISTANCE;
    }
}
