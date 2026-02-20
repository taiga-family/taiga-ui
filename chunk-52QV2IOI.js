import"./chunk-HU6DUUP4.js";var i=`<h2 class="title">
    <ng-content />
</h2>

<tui-textfield
    tuiHint="You can copy icon's name with a click"
    tuiTextfieldSize="m"
    [tuiTextfieldCleaner]="true"
>
    <input
        placeholder="Input icon name to highlight"
        tuiAutoFocus
        tuiInput
        [formControl]="control"
    />
</tui-textfield>

@for (key of keys(); track key) {
    @if (icons()[key] || [] | tuiFilter: matcher : (search$ | async) ?? ''; as filtered) {
        @if (filtered.length) {
            <div class="header-group">
                <h2 class="title">
                    {{ key }}
                </h2>
                <div
                    appearance="positive"
                    size="m"
                    tuiBadge
                    class="badge"
                >
                    {{ filtered.length.toString() }}
                </div>
            </div>
            <div
                class="icons"
                [style.--tui-text-primary]="color()"
            >
                @for (icon of filtered; track icon) {
                    <ng-container
                        [ngTemplateOutlet]="iconGroup()?.template || null"
                        [ngTemplateOutletContext]="{
                            icon: icon,
                            group: key,
                            copyPath: copyPath,
                        }"
                    />
                }
            </div>
        }
    }
}

<div class="nothing tui-space_top-8">Nothing found</div>
`;export{i as default};
