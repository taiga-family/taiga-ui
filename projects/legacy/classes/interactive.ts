import {Directive, EventEmitter, HostBinding, Input, Output} from '@angular/core';

const TUI = 'tui_interactive_';

/**
 * TODO drop in 4.0
 * @deprecated
 */
@Directive()
export abstract class AbstractTuiInteractive {
    private static autoId = 0;

    public abstract disabled: boolean;

    public abstract focused: boolean;

    private readonly autoIdString: string;

    protected focusVisible = false;

    @Input()
    public pseudoHover: boolean | null = null;

    @Input()
    public pseudoActive: boolean | null = null;

    @Input()
    @HostBinding('attr.data-focused')
    public pseudoFocus: boolean | null = null;

    /**
     * Determines if component is focusable with keyboard.
     */
    @Input()
    public focusable = true;

    @Input()
    public nativeId = '';

    /**
     * Emits 'true' on focus and 'false' on blur.
     */
    @Output()
    public readonly focusedChange = new EventEmitter<boolean>();

    @Output()
    public readonly focusVisibleChange = new EventEmitter<boolean>();

    constructor() {
        this.autoIdString = `${TUI}${AbstractTuiInteractive.autoId++}${Date.now()}`;
    }

    @HostBinding('class._disabled')
    public get computedDisabled(): boolean {
        return this.disabled;
    }

    @HostBinding('class._focused')
    public get computedFocused(): boolean {
        return !this.computedDisabled && (this.pseudoFocus ?? this.focused);
    }

    @HostBinding('class._focus-visible')
    public get computedFocusVisible(): boolean {
        return !this.computedDisabled && (this.pseudoFocus ?? this.focusVisible);
    }

    public get computedFocusable(): boolean {
        return !this.computedDisabled && (this.focusable || this.focused);
    }

    // TODO: 3.0 Consider removing since native input is exposed
    public get id(): string {
        return this.nativeId || this.autoIdString;
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
