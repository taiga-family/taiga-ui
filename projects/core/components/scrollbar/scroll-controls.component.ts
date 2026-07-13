import {CdkScrollable} from '@angular/cdk/scrolling';
import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, type OnInit} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

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
export class TuiScrollControls implements OnInit {
    private readonly scrollable = inject(CdkScrollable, {optional: true, host: true});
    private readonly el = tuiInjectElement();

    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';
    protected readonly refresh$ = inject(TuiScrollControlsService);

    public ngOnInit(): void {
        this.scrollable?.getElementRef().nativeElement.prepend(this.el);
    }
}
