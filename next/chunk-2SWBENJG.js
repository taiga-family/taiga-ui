import"./chunk-HU6DUUP4.js";var p=`@for (group of appearances | keyvalue: asIs; track group) {
    <h3>{{ group.key }}</h3>
    <section class="section">
        @for (appearance of group.value; track appearance) {
            <button
                iconStart="@tui.star"
                tuiButton
                type="button"
                [appearance]="appearance"
                [cdkCopyToClipboard]="appearance"
                (cdkCopyToClipboardCopied)="$event && onCopy(appearance)"
            >
                {{ appearance }}
            </button>
        }
    </section>
}
`;export{p as default};
