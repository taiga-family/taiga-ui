import {DOCUMENT} from '@angular/common';
import {
    type AfterViewInit,
    computed,
    Directive,
    type ElementRef,
    inject,
    type OnDestroy,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_IS_TOUCH} from '@ng-web-apis/platform';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {
    tuiGetActualTarget,
    tuiInjectElement,
    tuiPointToClientRect,
} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsDriver, tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';
import {filter, merge} from 'rxjs';

import {TuiDropdownDriver} from './dropdown.driver';
import {TUI_DROPDOWN_ANCHOR} from './dropdown.providers';

const STYLE: Partial<CSSStyleDeclaration> = {
    position: 'fixed',
    blockSize: '1px',
    inlineSize: '1px',
    pointerEvents: 'none',
};

@Directive({
    selector: '[tuiDropdownContext]',
    providers: [
        TuiActiveZone,
        TuiDropdownDriver,
        tuiAsDriver(TuiDropdownDriver),
        tuiAsRectAccessor(TuiDropdownContext),
        tuiProvide(TUI_DROPDOWN_ANCHOR, TuiDropdownContext),
    ],
    host: {
        '[style.-webkit-touch-callout]': 'userSelect()',
        '[style.-webkit-user-select]': 'userSelect()',
        '[style.user-select]': 'userSelect()',
        '(longtap)': 'onContextMenu($event.detail.clientX, $event.detail.clientY)',
    },
})
export class TuiDropdownContext
    extends TuiRectAccessor
    implements ElementRef<HTMLElement>, AfterViewInit, OnDestroy
{
    private readonly isTouch = inject(WA_IS_TOUCH);
    private currentRect = EMPTY_CLIENT_RECT;

    protected readonly userSelect = computed(() => (this.isTouch() ? 'none' : null));
    protected readonly activeZone = inject(TuiActiveZone);
    protected readonly driver = inject(TuiDropdownDriver);
    protected readonly doc = inject(DOCUMENT);
    protected readonly el = tuiInjectElement();

    protected readonly sub = merge(
        tuiTypedFromEvent(this.doc, 'pointerdown'),
        tuiTypedFromEvent(this.doc, 'keydown').pipe(filter(({key}) => key === 'Escape')),
        tuiTypedFromEvent(this.doc, 'contextmenu', {capture: true}),
    )
        .pipe(
            filter((event) => {
                const target = event ? tuiGetActualTarget(event) : null;

                return (
                    !target ||
                    (this.driver.value &&
                        (!this.activeZone.contains(target) || this.el.contains(target)))
                );
            }),
            tuiZoneOptimized(),
            takeUntilDestroyed(),
        )
        .subscribe(() => {
            this.driver.next(false);
            this.currentRect = EMPTY_CLIENT_RECT;
        });

    public readonly type = 'dropdown';
    public readonly nativeElement = this.doc.createElement('div');

    public ngAfterViewInit(): void {
        const anchorName = `--${tuiGenerateId()}`;
        const positionAnchor = this.el.dataset.tuiAnchor;

        Object.assign(this.nativeElement.style, {...STYLE, positionAnchor, anchorName});
        this.nativeElement.dataset.tuiAnchor = anchorName;
        this.doc.body.appendChild(this.nativeElement);
    }

    public ngOnDestroy(): void {
        this.doc.body.removeChild(this.nativeElement);
    }

    public getClientRect(): DOMRect {
        return this.currentRect;
    }

    protected onContextMenu(x: number, y: number): void {
        const {top, left} = this.el.getBoundingClientRect();

        this.currentRect = tuiPointToClientRect(x, y);
        this.nativeElement.style.inset = `calc(anchor(top) + ${y - top}px) calc(anchor(left) + ${x - left}px)`;
        this.driver.next(true);
    }
}
