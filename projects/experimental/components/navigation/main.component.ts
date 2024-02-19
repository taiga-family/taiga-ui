import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'main[tuiMain]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./main.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiMain: '',
    },
})
export class TuiMainComponent {}
