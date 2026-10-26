import {
    afterNextRender,
    type AfterViewChecked,
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    INJECTOR,
    input,
    model,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

import {TUI_TAB_ACTIVATE} from './tab.directive';
import {TUI_TABS_OPTIONS} from './tabs.options';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './tabs.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-tabs-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    host: {
        'data-tui-version': TUI_VERSION,
        '[attr.data-size]': 'size()',
        [`(${TUI_TAB_ACTIVATE}.stop)`]: 'onActivate($event.target)',
    },
})
export class TuiTabsDirective implements AfterViewChecked {
    private readonly el = tuiInjectElement();
    private readonly injector = inject(INJECTOR);
    private marked: HTMLElement | null = null;
    private markedIndex = -1;

    protected readonly nothing = tuiWithStyles(Styles);

    public readonly size = input(inject(TUI_TABS_OPTIONS).size);
    public readonly activeItemIndex = model(0);

    public get tabs(): readonly HTMLElement[] {
        return Array.from(this.el.querySelectorAll<HTMLElement>('[tuiTab]'));
    }

    public get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex()] || null;
    }

    public moveFocus(current: HTMLElement, step: number): void {
        const {tabs} = this;

        tuiMoveFocus(tabs.indexOf(current), tabs, step);
    }

    public ngAfterViewChecked(): void {
        afterNextRender(
            () => {
                this.syncActiveItemIndex();
                this.markTabAsActive();
            },
            {injector: this.injector},
        );
    }

    protected onActivate(element: HTMLElement): void {
        const index = this.tabs.findIndex((tab) => tab === element);

        if (index !== -1) {
            this.activeItemIndex.set(index);
        }

        this.marked = null;
    }

    protected markTabAsActive(): void {
        const {tabs, activeElement} = this;

        tabs.forEach((nativeElement) => {
            const active = nativeElement === activeElement;
            const anchor = nativeElement.getAttribute('data-tui-anchor');
            const name = [anchor, '--tui-tab-active'].filter(Boolean).join(', ');

            nativeElement.classList.toggle('_active', active);
            nativeElement.setAttribute('tabIndex', active ? '0' : '-1');
            nativeElement.style.setProperty('anchor-name', active ? name : anchor);
        });

        this.marked = activeElement;
        this.markedIndex = this.activeItemIndex();
    }

    // Index becomes stale when tabs are added or removed, so the element marked on the previous pass wins
    private syncActiveItemIndex(): void {
        const {tabs, activeItemIndex} = this;

        // The model is written from outside when it no longer matches the last mark
        if (!this.marked || activeItemIndex() !== this.markedIndex) {
            return;
        }

        const index = tabs.indexOf(this.marked);

        if (index !== -1 && index !== activeItemIndex()) {
            activeItemIndex.set(index);
        }
    }
}
