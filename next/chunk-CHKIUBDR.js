import"./chunk-HU6DUUP4.js";var e=`<p>
    @if (default | tuiEmails; as emails) {
        <tui-textfield>
            <label tuiLabel>Standard addresses</label>
            <input
                tuiInput
                [(ngModel)]="default"
            />

            @if (emails.length) {
                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="emails"
                />
            }
        </tui-textfield>
    }
</p>
<p>
    @if (custom | tuiEmails: emails; as emails) {
        <tui-textfield>
            <label tuiLabel>Custom addresses</label>
            <input
                tuiInput
                [(ngModel)]="custom"
            />

            @if (emails.length) {
                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="emails"
                />
            }
        </tui-textfield>
    }
</p>
`;export{e as default};
