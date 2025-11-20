import"./chunk-42JZD6NG.js";var e=`<tui-badged-content>
    <img
        alt=""
        size="s"
        tuiBadge
        tuiSlot="bottom"
        [src]="flags.get(language.value ?? '') || flags.get(switcher.language) | tuiFlag"
    />

    <button
        appearance="outline-grayscale"
        size="s"
        tuiButtonSelect
        tuiIconButton
        type="button"
        [formControl]="language"
        [iconStart]="icons.languages"
    >
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
</tui-badged-content>
`;export{e as default};
