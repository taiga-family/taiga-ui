import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    standalone: true,
    selector: 'main[tuiNavigationMain]',
    template: '<ng-content />',
    styleUrl: './main.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiNavigationMain: '',
    },
})
export class TuiMainComponent {}
