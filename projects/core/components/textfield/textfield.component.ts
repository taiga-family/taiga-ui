import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChild,
    contentChildren,
    ElementRef,
    forwardRef,
    inject,
    input,
    type Signal,
    viewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement, tuiValue} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiGenerateId, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiCell} from '@taiga-ui/core/components/cell';
import {
    tuiAsDataListHost,
    type TuiDataListHost,
    TuiWithOptionContent,
} from '@taiga-ui/core/components/data-list';
import {TuiLabel} from '@taiga-ui/core/components/label';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiButtonX} from '@taiga-ui/core/directives/button-x';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TuiWithItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {
    TuiDropdownDirective,
    TuiDropdownFixed,
    TuiDropdownOpen,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/portals/dropdown';
import {TUI_AUXILIARY, TUI_CLEAR_WORD} from '@taiga-ui/core/tokens';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';
import {TUI_TEXTFIELD_ACCESSOR, type TuiTextfieldAccessor} from './textfield-accessor';

@Component({
    selector: 'tui-textfield:not([multi])',
    imports: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, WaResizeObserver],
    templateUrl: './textfield.template.html',
    styles: '@import "@taiga-ui/styles/components/textfield.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({size: 'xs', appearance: 'icon'}),
        tuiAsDataListHost(TuiTextfieldComponent),
    ],
    hostDirectives: [
        TuiAppearance,
        TuiDropdownDirective,
        TuiDropdownFixed,
        TuiWithDropdownOpen,
        TuiWithIcons,
        TuiWithItemsHandlers,
        TuiWithOptionContent,
    ],
    host: {
        class: 'tui-interactive',
        '[attr.data-size]': 'options.size()',
        '[class._with-label]': 'hasLabel', // TODO :has([tuiLabel]
        '[class._with-template]': 'content() && control()?.value != null',
        '[class._disabled]': 'disabled', // TODO :has([tuiInput]:disabled)
        '(animationstart)': '0', // TODO :has([tuiInput]:disabled)
        '(animationcancel)': '0', // TODO :has([tuiInput]:disabled)
        '(click.self.prevent)': '0',
        // TODO preventing breaks resize: both, but not preventing breaks focus, fix
        '(pointerdown.self.prevent)': 'onIconClick()',
        '(scroll.capture.zoneless)': 'onScroll($event.target)',
        '(tuiActiveZoneChange)': '!$event && control()?.valueAccessor?.onTouched?.()',
    },
})
export class TuiTextfieldComponent<T> implements TuiDataListHost<T> {
    private readonly autoId = tuiGenerateId();
    private readonly focusedIn = tuiFocusedIn(tuiInjectElement());

    protected readonly ghost = viewChild<ElementRef<HTMLElement>>('ghost');
    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly open = inject(TuiDropdownOpen);
    protected readonly clear = inject(TUI_CLEAR_WORD);
    protected readonly label = contentChild(
        forwardRef(() => TuiLabel),
        {read: ElementRef},
    );

    protected readonly computedFiller = computed((value = this.value()) => {
        const filler = value + this.filler().slice(value.length);

        return filler.length > value.length ? filler : '';
    });

    protected readonly showFiller = computed<boolean>(
        () =>
            this.focused() &&
            !!this.computedFiller() &&
            (!!this.value() || !this.input()?.nativeElement.placeholder),
    );

    protected readonly accessor = contentChild<TuiTextfieldAccessor<T>>(
        TUI_TEXTFIELD_ACCESSOR,
        {descendants: true},
    );

    public readonly vcr = viewChild('vcr', {read: ViewContainerRef});
    public readonly control = contentChild(NgControl);
    public readonly auxiliaries = contentChildren(TUI_AUXILIARY, {descendants: true});
    public readonly focused = computed(() => this.open.open() || this.focusedIn());
    public readonly options = inject(TUI_TEXTFIELD_OPTIONS);
    public readonly el = tuiInjectElement();
    public readonly input: Signal<ElementRef<HTMLInputElement> | undefined> =
        contentChild(TUI_TEXTFIELD_ACCESSOR, {read: ElementRef});

    public readonly content = input<PolymorpheusContent<TuiContext<T>>>();
    public readonly filler = input('');
    public readonly value = tuiValue(this.input);

    public get id(): string {
        return this.input()?.nativeElement.id || this.autoId;
    }

    public get disabled(): boolean {
        return this.control()?.disabled ?? this.input()?.nativeElement?.disabled ?? false;
    }

    public get size(): TuiSizeL | TuiSizeS {
        return this.options.size();
    }

    public handleOption(option: T): void {
        this.accessor()?.setValue(option);
        this.open.open.set(false);
    }

    protected get hasLabel(): boolean {
        return Boolean(this.label()?.nativeElement?.childNodes.length);
    }

    protected onResize({contentRect}: ResizeObserverEntry): void {
        this.el.style.setProperty('--t-side', tuiPx(contentRect.width));
    }

    // Click on ::before,::after pseudo-elements ([iconStart] / [iconEnd])
    protected onIconClick(): void {
        this.input()?.nativeElement.focus();

        if (
            !this.open.enabled() ||
            this.input()?.nativeElement.matches('input:read-only,textarea:read-only')
        ) {
            return;
        }

        this.open.open.update((open) => !open);

        try {
            this.input()?.nativeElement.showPicker?.();
        } catch {
            // Empty catch block - silently ignore showPicker errors
        }
    }

    protected onScroll(element: HTMLElement): void {
        if (this.input()?.nativeElement === element) {
            this.ghost()?.nativeElement.scrollTo({
                left: this.input()?.nativeElement.scrollLeft,
            });
        }
    }
}
