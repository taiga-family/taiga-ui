import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Component({
    standalone: true,
    selector: 'caption[tuiCaption]',
    template: '<ng-content/>',
    styleUrls: ['./caption.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiCaptionV: TUI_VERSION,
    },
})
export class TuiTableCaption {}
