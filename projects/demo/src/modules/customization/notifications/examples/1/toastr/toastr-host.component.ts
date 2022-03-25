import {AnimationOptions} from '@angular/animations';
import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';
import {
    AbstractTuiNotificationsService,
    TUI_ANIMATION_OPTIONS,
    TuiAnimationOptions,
    tuiFadeInList,
    tuiHeightCollapseList,
    tuiSlideInLeftList,
} from '@taiga-ui/core';

import {ToastrService} from './toastr.service';

@Component({
    selector: 'toastr-host',
    templateUrl: './toastr-host.component.html',
    styleUrls: ['./toastr-host.component.less'],
    providers: [
        {
            provide: AbstractTuiNotificationsService,
            useExisting: ToastrService,
        },
    ],
    changeDetection,
    animations: [tuiFadeInList, tuiSlideInLeftList, tuiHeightCollapseList],
})
export class ToastrHostComponent {
    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(ToastrService) readonly service: ToastrService,
    ) {}

    @tuiPure
    getAnimation(value: number): TuiAnimationOptions {
        return {
            value: String(value),
            ...this.options,
        };
    }
}
