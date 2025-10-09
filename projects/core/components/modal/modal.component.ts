import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    InjectionToken,
    type OnDestroy,
    type OnInit,
} from '@angular/core';
import {TuiAnimatedParent} from '@taiga-ui/cdk/directives';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiFocusTrap} from '@taiga-ui/cdk/directives/focus-trap';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {tuiGetFocused} from '@taiga-ui/cdk/utils/focus';
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core/components/scrollbar';
import {
    injectContext,
    type PolymorpheusContent,
    PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus';

export const TUI_MODAL = new InjectionToken<
    PolymorpheusContent<TuiPopover<unknown, any>>
>(ngDevMode ? 'TUI_MODAL' : '');

@Component({
    selector: 'tui-modal',
    imports: [PolymorpheusOutlet, TuiScrollControls],
    template: `
        <ng-container *polymorpheusOutlet="component; context: context" />
        <tui-scroll-controls class="t-scrollbars" />
    `,
    styleUrl: './modal.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiActiveZone, TuiFocusTrap, TuiScrollRef, TuiAnimatedParent],
    host: {
        role: 'dialog',
        'aria-modal': 'true',
        '[attr.aria-labelledby]': 'context.id',
    },
})
export class TuiModal<T> implements OnDestroy, OnInit {
    private readonly current = inject(TuiActiveZone);
    private readonly parent = findActive(
        inject(TuiActiveZone, {skipSelf: true}),
        tuiGetFocused(inject(DOCUMENT)),
    );

    protected readonly context = injectContext<TuiPopover<T, any>>();
    protected readonly component = inject(TUI_MODAL);

    public ngOnInit(): void {
        this.current.tuiActiveZoneParentSetter = this.parent;
    }

    public ngOnDestroy(): void {
        this.current.tuiActiveZoneParentSetter = null;
    }
}

function findActive(zone: TuiActiveZone, el: Element | null): TuiActiveZone | null {
    if (!el || !zone.contains(el)) {
        return null;
    }

    const active = zone.children.find(
        (child) => !child['el'].matches('[tuiActiveZoneAdapter]') && child.contains(el),
    );

    return active ? findActive(active, el) : zone;
}
