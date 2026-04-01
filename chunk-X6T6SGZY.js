import"./chunk-HU6DUUP4.js";var o=`<tui-textfield tuiChevron>
    <input
        placeholder="Select film"
        tuiComboBox
        [(ngModel)]="value"
    />

    <tui-data-list
        *tuiDropdown
        size="s"
    >
        <section class="filters">
            @for (category of categories; track category) {
                <label
                    tuiChip
                    [appearance]="filters[category] ? 'accent' : 'neutral'"
                    (pointerdown.prevent)="(0)"
                >
                    {{ category }}
                    <input
                        hidden
                        type="checkbox"
                        [(ngModel)]="filters[category]"
                    />
                </label>
            }
        </section>

        @for (group of filmDatabase | keyvalue; track group) {
            @if (filters[group.key]) {
                <tui-opt-group [label]="group.key">
                    @for (film of group.value | tuiFilterByInput; track film) {
                        <button
                            tuiOption
                            type="button"
                            [value]="film"
                        >
                            {{ film }}
                        </button>
                    }
                </tui-opt-group>
            }
        }
    </tui-data-list>
</tui-textfield>
`;export{o as default};
