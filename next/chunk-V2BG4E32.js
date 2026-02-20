import"./chunk-HU6DUUP4.js";var a=`<button
    size="m"
    tuiButton
    type="button"
    class="tui-space_bottom-4"
    (click)="open = !open"
>
    Toggle dropdown
</button>
<form [formGroup]="card">
    <tui-input-card-group
        formControlName="meta"
        tuiTextfieldSize="m"
        [(open)]="open"
    >
        <tui-data-list
            *tuiDropdown
            size="l"
        >
            <button
                tuiOption
                type="button"
                [value]="null"
            >
                <tui-icon
                    icon="@tui.plus"
                    class="new"
                />
                <span class="label">New card</span>
            </button>
            @for (item of items; track item) {
                <button
                    tuiOption
                    type="button"
                    [value]="item"
                >
                    <tui-thumbnail-card
                        size="s"
                        class="card"
                    >
                        {{ item.card.slice(-4) }}
                    </tui-thumbnail-card>
                    <span
                        tuiTitle
                        class="label"
                    >
                        {{ item.bank }}
                        <span tuiSubtitle>{{ item.name }}</span>
                    </span>
                    <span>{{ item.card.slice(-5) }}</span>
                </button>
            }
        </tui-data-list>
    </tui-input-card-group>
</form>
`;export{a as default};
