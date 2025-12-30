import {
    createComponent,
    Directive,
    EnvironmentInjector,
    forwardRef,
    inject,
    INJECTOR,
    input,
    type OnDestroy,
    type Type,
    ViewContainerRef,
} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {TuiCell} from '@taiga-ui/core/components/cell';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TuiDropdownDirective} from '@taiga-ui/core/portals/dropdown';

import {TuiDataListComponent} from './data-list.component';
import {TUI_OPTION_CONTENT} from './option-content.directive';

@Directive({
    selector: 'button[tuiOption], a[tuiOption], label[tuiOption]',
    hostDirectives: [TuiWithIcons, TuiCell],
    host: {
        type: 'button',
        role: 'option',
        '[attr.disabled]': 'disabled() || null',
        '[class._with-dropdown]': 'dropdown?.()',
        '(mousemove.zoneless)': 'onMouseMove()',
    },
})
export class TuiOption<T = unknown> implements OnDestroy {
    private readonly vcr = inject(ViewContainerRef);
    private readonly isMobile = inject(WA_IS_MOBILE);
    private readonly el = tuiInjectElement();
    private readonly datalist = inject<TuiDataListComponent<T>>(
        forwardRef(() => TuiDataListComponent),
        {optional: true},
    );

    private readonly content = inject<Type<any> | null>(TUI_OPTION_CONTENT, {
        optional: true,
    });

    private readonly ref =
        this.content &&
        createComponent(this.content, {
            environmentInjector: inject(EnvironmentInjector),
            elementInjector: inject(INJECTOR),
            hostElement: tuiInjectElement(),
        });

    protected readonly dropdown = inject(TuiDropdownDirective, {
        self: true,
        optional: true,
    })?.ref;

    public readonly disabled = input(false);

    constructor() {
        if (this.ref) {
            this.vcr.insert(this.ref.hostView);
            this.ref.changeDetectorRef.detectChanges();
        }
    }

    // Preventing focus loss upon focused option removal
    public ngOnDestroy(): void {
        this.datalist?.handleFocusLossIfNecessary(this.el);
    }

    protected onMouseMove(): void {
        if (
            !this.isMobile &&
            !tuiIsFocused(this.el) &&
            this.datalist &&
            this.el.closest('[tuiDataListDropdownManager]')
        ) {
            this.el.focus({preventScroll: true});
        }
    }
}
