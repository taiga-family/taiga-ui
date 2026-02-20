import"./chunk-HU6DUUP4.js";var e=`<button
    appearance="secondary-grayscale"
    size="s"
    tuiButton
    tuiButtonSelect
    tuiChevron
    type="button"
    [formControl]="language"
>
    <img
        alt=""
        size="s"
        tuiBadge
        [src]="flags.get(language.value ?? '') || flags.get(switcher.language) | tuiFlag"
    />
    Language
    <tui-data-list *tuiDropdown>
        <tui-opt-group label="Language of components">
            @for (name of names; track name) {
                <button
                    tuiOption
                    type="button"
                    [value]="name | titlecase"
                    (click)="setLang(name)"
                >
                    <img
                        alt=""
                        class="t-flag"
                        [src]="flags.get(name) | tuiFlag"
                    />
                    {{ name | titlecase }}
                </button>
            }
        </tui-opt-group>
    </tui-data-list>
</button>
`;export{e as default};
