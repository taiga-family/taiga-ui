import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    type OnDestroy,
    type OnInit,
    signal,
} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiFocusTrap} from '@taiga-ui/cdk/directives/focus-trap';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {tuiGetFocused} from '@taiga-ui/cdk/utils/focus';
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core/components/scrollbar';
import {
    injectContext,
    type PolymorpheusContent,
    PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-modal',
    imports: [PolymorpheusOutlet, TuiScrollControls],
    template: `
        <ng-container *polymorpheusOutlet="component(); context: context" />
        <tui-scroll-controls class="t-scrollbars" />
    `,
    styleUrl: './modal.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiActiveZone, TuiFocusTrap, TuiScrollRef],
    host: {
        role: 'dialog',
        class: 'tui-enter',
        'aria-modal': 'true',
        '[attr.aria-labelledby]': 'context.id',
        '(animationend.self)': '$event.target.classList.remove("tui-enter")',
    },
})
export class TuiModal<T> implements OnDestroy, OnInit {
    private readonly current = inject(TuiActiveZone);
    private readonly parent = findActive(
        inject(TuiActiveZone, {skipSelf: true}),
        tuiGetFocused(inject(DOCUMENT)),
    );

    public readonly context = injectContext<TuiPortalContext<T>>();
    public readonly component = signal<PolymorpheusContent<TuiPortalContext<T>>>(null);

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
