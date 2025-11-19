import"./chunk-42JZD6NG.js";var i=`<p>
    @if (default | tuiEmails; as emails) {
        <tui-textfield>
            <label tuiLabel>Standard addresses</label>
            <input
                tuiTextfield
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
                tuiTextfield
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
`;export{i as default};
