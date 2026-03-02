import"./chunk-HU6DUUP4.js";var o=`<tui-textfield>
    <label tuiLabel>Changes propagate both ways</label>
    <input
        tuiInput
        [(ngModel)]="value"
    />
</tui-textfield>
<label
    class="flex"
    [tuiDropdown]="dropdownContent"
    [tuiDropdownManual]="open"
>
    <input
        size="s"
        tuiSwitch
        type="checkbox"
        [showIcons]="false"
        [(ngModel)]="open"
    />
    Open dropdown
</label>

<ng-template
    #dropdownContent="polymorpheus"
    polymorpheus
>
    <div class="dropdown">
        <tui-textfield>
            <input
                tuiInput
                [(ngModel)]="value"
            />
            <label tuiLabel>Changes propagate both ways</label>
        </tui-textfield>

        <p>
            Use
            <code>polymorpheus</code>
            directive on the template to make changes propagate both ways
        </p>
        @if (showBigText$ | async) {
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa
                laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam
                vitae?
            </p>
        }
    </div>
</ng-template>
`;export{o as default};
