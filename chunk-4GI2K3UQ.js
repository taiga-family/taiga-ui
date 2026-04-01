import"./chunk-HU6DUUP4.js";var u=`<button
    appearance="secondary-grayscale"
    iconStart="@tui.user"
    size="m"
    tuiButton
    tuiButtonSelect
    type="button"
    [(ngModel)]="value"
>
    {{ value.length === 1 ? value[0]?.name : \`Selected \${value.length}\` }}

    <tui-data-list *tuiDropdown>
        <tui-opt-group
            label="Users"
            tuiMultiSelectGroup
        >
            @for (name of items; track name.id) {
                <button
                    tuiOption
                    type="button"
                    [value]="name"
                >
                    {{ name.name }}
                </button>
            }
        </tui-opt-group>
    </tui-data-list>
</button>
`;export{u as default};
