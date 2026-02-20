import"./chunk-HU6DUUP4.js";var a=`<button
    iconStart="@tui.plus"
    size="s"
    tuiButton
    type="button"
    (click)="addTemplate(someTemplate)"
>
    Add
</button>

<button
    appearance="secondary"
    iconStart="@tui.trash"
    size="s"
    tuiButton
    type="button"
    class="tui-space_left-3"
    (click)="removeTemplate()"
>
    Remove
</button>

<ng-template #someTemplate>
    <div class="template">
        <div class="greeting">
            Hello Taiga UI
            <tui-icon
                icon="@tui.heart"
                class="icon"
            />
        </div>
    </div>
</ng-template>
`;export{a as default};
