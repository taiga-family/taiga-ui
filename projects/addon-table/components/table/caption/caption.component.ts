import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    standalone: true,
    selector: 'caption[tuiCaption]',
    template: '<ng-content/>',
    styleUrls: ['./caption.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCaption {}
