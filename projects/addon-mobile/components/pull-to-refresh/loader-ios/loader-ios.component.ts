import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';

const LOADED_STEP = 8;
const ROTATE_X_STEP = 30;

@Component({
    selector: 'tui-mobile-ios-loader',
    templateUrl: './loader-ios.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiMobileLoaderIOSComponent {
    @Input()
    pulled = 0;

    readonly steps = 12;

    get finished(): boolean {
        return this.pulled >= 100;
    }

    isShown(index: number): boolean {
        return this.pulled > (index + 1) * LOADED_STEP;
    }

    calculateTransform(index: number): string {
        return `rotate(${index * ROTATE_X_STEP} 50 50)`;
    }

    calculateAnimationBegin(index: number): string {
        return `${(index * LOADED_STEP) / 100}s`;
    }
}
