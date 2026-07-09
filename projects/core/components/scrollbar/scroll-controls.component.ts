import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';

import {TuiScrollControlsService} from './scroll-controls.service';
import {TuiScrollbarDirective} from './scrollbar.directive';
import {TUI_SCROLLBAR_OPTIONS} from './scrollbar.options';

@Component({
    selector: 'tui-scroll-controls',
    imports: [AsyncPipe, TuiAnimated, TuiScrollbarDirective],
    templateUrl: './scroll-controls.template.html',
    styleUrl: './scroll-controls.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiScrollControlsService],
})
export class TuiScrollControls {
    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';
    protected readonly refresh$ = inject(TuiScrollControlsService);
}
