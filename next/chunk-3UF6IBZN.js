import"./chunk-42JZD6NG.js";var a=`<p>
    @if (default | tuiEmails; as emails) {
        <tui-input [(ngModel)]="default">
            Standard addresses
            @if (emails.length) {
                <ng-template tuiDataList>
                    <tui-data-list-wrapper [items]="emails" />
                </ng-template>
            }
        </tui-input>
    }
</p>
<p>
    @if (custom | tuiEmails: emails; as emails) {
        <tui-input [(ngModel)]="custom">
            Custom addresses
            @if (emails.length) {
                <ng-template tuiDataList>
                    <tui-data-list-wrapper [items]="emails" />
                </ng-template>
            }
        </tui-input>
    }
</p>
`;export{a as default};
