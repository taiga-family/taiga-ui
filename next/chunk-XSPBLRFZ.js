import"./chunk-HU6DUUP4.js";var i=`<tui-textfield>
    <label tuiLabel>{{ user() || 'Phone number or name' }}</label>

    <input
        #input
        mask="+1 (###)###-####"
        tuiInputPhone
        [allowText]="true"
        [ngModel]="value()"
        (input)="onInput(input.value)"
        (ngModelChange)="value.set($event)"
    />

    @if (items | tuiFilterByInput: matcher; as filtered) {
        @if (!user() && input.value && filtered.length) {
            <tui-data-list-wrapper
                *tuiDropdown
                [itemContent]="template"
                [items]="filtered"
                (itemClick)="selectUser($event)"
            />
        }
    }
</tui-textfield>

<ng-template
    #template
    let-user
>
    <div tuiCell>
        <div tuiAvatar="@tui.user">
            <img
                alt=""
                [src]="user.avatarUrl"
            />
        </div>
        <div tuiTitle>
            {{ user }}
            <span tuiSubtitle>{{ user.phone }}</span>
        </div>
    </div>
</ng-template>

<pre>value: {{ value() }}</pre>
`;export{i as default};
