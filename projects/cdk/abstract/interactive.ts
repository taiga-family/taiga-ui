import {Directive, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk/decorators';

const TUI = 'tui_interactive_';

/**
 * The most basic class for interactive components
 */
@Directive()
export abstract class AbstractTuiInteractive {
    private static autoId = 0;

    abstract disabled: boolean;

    abstract focused: boolean;

    private readonly autoIdString: string;

    @Input()
    @tuiDefaultProp()
    pseudoHovered: boolean | null = null;

    @Input()
    @tuiDefaultProp()
    pseudoPressed: boolean | null = null;

    @Input()
    @tuiDefaultProp()
    pseudoFocused: boolean | null = null;

    /**
     * Determines if component is focusable with keyboard.
     */
    @Input()
    @tuiDefaultProp()
    focusable = true;

    @Input()
    @tuiDefaultProp()
    nativeId = '';

    /**
     * Emits 'true' on focus and 'false' on blur.
     */
    @Output()
    readonly focusedChange = new EventEmitter<boolean>();

    /** @deprecated use `tuiPressedChange` directive */
    @Output()
    readonly pressedChange = new EventEmitter<boolean>();

    /** @deprecated use `tuiHoveredChange` directive */
    @Output()
    readonly hoveredChange = new EventEmitter<boolean>();

    @Output()
    readonly focusVisibleChange = new EventEmitter<boolean>();

    /** @deprecated use `tuiHoveredChange` directive */
    hovered = false;

    /** @deprecated use `tuiPressedChange` directive */
    pressed = false;

    focusVisible = false;

    protected constructor() {
        this.autoIdString = `${TUI}${AbstractTuiInteractive.autoId++}${Date.now()}`;
    }

    @HostBinding('class._disabled')
    get computedDisabled(): boolean {
        return this.disabled;
    }

    /** @deprecated */
    @HostBinding('class._hovered')
    get computedHovered(): boolean {
        return !this.computedDisabled && (this.pseudoHovered ?? this.hovered);
    }

    /** @deprecated */
    @HostBinding('class._pressed')
    get computedPressed(): boolean {
        return !this.computedDisabled && (this.pseudoPressed ?? this.pressed);
    }

    get computedFocusable(): boolean {
        return !this.computedDisabled && (this.focusable || this.focused);
    }

    @HostBinding('class._focused')
    get computedFocused(): boolean {
        return !this.computedDisabled && (this.pseudoFocused ?? this.focused);
    }

    @HostBinding('class._focus-visible')
    get computedFocusVisible(): boolean {
        return !this.computedDisabled && (this.pseudoFocused ?? this.focusVisible);
    }

    // TODO: 3.0 Consider removing since native input is exposed
    get id(): string {
        return this.nativeId ? this.nativeId : this.autoIdString;
    }

    /** @deprecated */
    protected updateHovered(hovered: boolean): void {
        if (this.hovered === hovered) {
            return;
        }

        this.hovered = hovered;
        this.hoveredChange.emit(hovered);
    }

    /** @deprecated */
    protected updatePressed(pressed: boolean): void {
        if (this.pressed === pressed) {
            return;
        }

        this.pressed = pressed;
        this.pressedChange.emit(pressed);
    }

    protected updateFocused(focused: boolean): void {
        this.focusedChange.emit(focused);
    }

    protected updateFocusVisible(focusVisible: boolean): void {
        if (this.focusVisible === focusVisible) {
            return;
        }

        this.focusVisible = focusVisible;
        this.focusVisibleChange.emit(focusVisible);
    }
}
