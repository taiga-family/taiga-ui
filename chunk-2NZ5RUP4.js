import"./chunk-HU6DUUP4.js";var n=`<p>
    <label class="toggle">
        <input
            tuiSwitch
            type="checkbox"
            [(ngModel)]="open"
        />
        Show help
    </label>
</p>
You can ask any questions about
<code
    tuiDropdown="A directive to show content in a dropdown"
    tuiDropdownDirection="bottom"
    [textContent]="'tuiDropdown'"
    [tuiDropdownManual]="open"
></code>
and
<button
    tuiDropdownDirection="top"
    tuiLink
    type="button"
    [tuiDropdown]="dropdownContent"
    [tuiDropdownManual]="open"
>
    Alex
</button>
will gladly answer!

<ng-template #dropdownContent>
    <div class="dropdown">
        <div
            size="l"
            tuiAvatar="@tui.user"
        >
            <img
                alt=""
                src="assets/images/avatar.jpg"
            />
        </div>
        <div class="text">
            <div class="label">Taiga UI developer</div>
            <div class="name">Alex Inkin</div>
            <div class="account">a.inkin</div>
        </div>
    </div>
</ng-template>
`;export{n as default};
