import"./chunk-LQ6M4NCU.js";var i=`<tui-textfield
    tuiChevron
    tuiDropdownMobile
>
    <input
        placeholder="Country"
        tuiComboBox
        [(ngModel)]="country"
    />

    <ng-container *tuiDropdown="let close">
        <tui-data-list-wrapper [items]="countries | tuiFilterByInput" />
        <footer tuiFloatingContainer>
            <button
                tuiButton
                type="button"
                (click)="close()"
            >
                Close
            </button>
        </footer>
    </ng-container>
</tui-textfield>

<tui-textfield
    tuiChevron
    tuiDropdownSheet="Select user"
    [content]="template"
>
    <input
        placeholder="Select user"
        tuiSelect
        [(ngModel)]="user"
    />
    <tui-data-list-wrapper
        *tuiDropdown
        [itemContent]="template"
        [items]="users"
    />
</tui-textfield>

<tui-textfield
    multi
    tuiChevron
    tuiDropdownMobile
    class="field"
    [open]="open()"
    [stringify]="stringify"
    (openChange)="open.set($event)"
>
    <input
        placeholder="Pick more users"
        tuiInputChip
        [(ngModel)]="selected"
    />

    <tui-input-chip *tuiItem />

    <ng-container *tuiDropdown>
        <tui-data-list-wrapper
            tuiMultiSelectGroup
            [itemContent]="template"
            [items]="users | tuiFilterByInput"
        />
        <footer tuiFloatingContainer>
            <button
                tuiButton
                type="button"
                (click)="open.set(false)"
            >
                Done
            </button>
        </footer>
    </ng-container>
</tui-textfield>

<tui-textfield class="field">
    <label tuiLabel>Sum</label>
    <input
        prefix="$"
        tuiInputNumber
        [(ngModel)]="sum"
    />
</tui-textfield>

<ng-template
    #template
    let-user
>
    <div [tuiAvatar]="user.name | tuiInitials">
        @if (user.url) {
            <img
                alt=""
                [src]="user.url"
            />
        }
    </div>
    <span tuiTitle>
        <span tuiFade>{{ user.name }}</span>
        <span tuiSubtitle>
            {{ user.balance | tuiAmount: '$' : 'start' }}
        </span>
    </span>
</ng-template>
`;export{i as default};
