import {CdkScrollable} from '@angular/cdk/scrolling';
import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, type OnInit} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_TIMELINE_SUPPORT} from '@taiga-ui/core/tokens';
import {type Observable, of} from 'rxjs';

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
    host: {'[class._timeline]': 'timeline'},
})
export class TuiScrollControls implements OnInit {
    private readonly scrollable = inject(CdkScrollable, {optional: true, host: true});
    private readonly el = tuiInjectElement();

    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';
    protected readonly timeline = inject(TUI_TIMELINE_SUPPORT);

    protected readonly refresh$: Observable<readonly [boolean, boolean]> = this.timeline
        ? of([true, true] as const)
        : inject(TuiScrollControlsService);

    public ngOnInit(): void {
        this.scrollable?.getElementRef().nativeElement.prepend(this.el);
    }
}
