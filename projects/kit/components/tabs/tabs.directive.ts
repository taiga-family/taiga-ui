import {
    afterNextRender,
    type AfterViewChecked,
    ChangeDetectionStrategy,
    Component,
    Directive,
    EventEmitter,
    inject,
    INJECTOR,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeL} from '@taiga-ui/core/types';

import {TUI_TAB_ACTIVATE} from './tab.directive';
import {TUI_TABS_OPTIONS} from './tabs.options';

@Component({
    template: '',
    styleUrl: './tabs.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-tabs'},
})
class Styles {}

@Directive({
    host: {
        '[attr.data-size]': 'size',
        [`(${TUI_TAB_ACTIVATE})`]: 'onActivate($event, $event.target)',
    },
})
export class TuiTabsDirective implements AfterViewChecked {
    private readonly el = tuiInjectElement();
    private readonly injector = inject(INJECTOR);

    protected readonly nothing = tuiWithStyles(Styles);

    @Input()
    public size: TuiSizeL = inject(TUI_TABS_OPTIONS).size;

    @Input()
    public activeItemIndex = 0;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    public get tabs(): readonly HTMLElement[] {
        return Array.from(this.el.querySelectorAll<HTMLElement>('[tuiTab]'));
    }

    public get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex] || null;
    }

    public moveFocus(current: HTMLElement, step: number): void {
        const {tabs} = this;

        tuiMoveFocus(tabs.indexOf(current), tabs, step);
    }

    public ngAfterViewChecked(): void {
        afterNextRender(
            () => {
                this.markTabAsActive();
            },
            {injector: this.injector},
        );
    }

    protected onActivate(event: Event, element: HTMLElement): void {
        const index = this.tabs.findIndex((tab) => tab === element);

        event.stopPropagation();

        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndexChange.emit(index);
        this.activeItemIndex = index;
    }

    protected markTabAsActive(): void {
        const {tabs, activeElement} = this;

        tabs.forEach((nativeElement) => {
            const active = nativeElement === activeElement;

            nativeElement.classList.toggle('_active', active);
            nativeElement.setAttribute('tabIndex', active ? '0' : '-1');
        });
    }
}
