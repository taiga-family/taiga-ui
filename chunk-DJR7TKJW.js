import"./chunk-HU6DUUP4.js";var n=`<button
    appearance=""
    size="s"
    tuiButton
    tuiChevron
    type="button"
    [style.margin-block-start.rem]="0.25"
    [tuiDropdown]="content"
    [(tuiDropdownOpen)]="open"
>
    <b>{{ initialVersion?.label }}</b>
</button>

<ng-template #content>
    <tui-data-list size="s">
        @for (version of versions; track version) {
            <a
                tuiOption
                [href]="getVersionHref(version)"
                [value]="version"
            >
                {{ version.label }}
            </a>
        }
    </tui-data-list>
</ng-template>
`;export{n as default};
