import"./chunk-HU6DUUP4.js";var o=`<form [formGroup]="form">
    <button
        appearance="outline-grayscale"
        formControlName="control"
        tuiButton
        tuiButtonSelect
        tuiChevron
        type="button"
        [tuiAppearanceMode]="length ? 'checked' : null"
        [(open)]="open"
        (keydown.delete)="form.reset()"
    >
        {{ text }}

        @if (length) {
            <tui-icon
                aria-label="reset"
                icon="@tui.x"
                role="button"
                tabindex="-1"
                [style.color]="'var(--tui-text-tertiary)'"
                [style.font-size.rem]="1"
                (click.stop)="form.reset()"
            />
        }

        <tui-data-list
            *tuiDropdown
            tuiMultiSelectGroup
        >
            @for (item of items; track item) {
                <button
                    tuiOption
                    [value]="item"
                >
                    {{ item }}
                </button>
            }
        </tui-data-list>
    </button>
</form>
`;export{o as default};
