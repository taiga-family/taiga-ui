import"./chunk-HU6DUUP4.js";var i=`<tui-segmented class="t-direction">
    @for (direction of directions; track direction) {
        <label>
            <input
                name="radio"
                type="radio"
                [value]="direction"
                [(ngModel)]="selected"
            />
            {{ direction }}
        </label>
    }
</tui-segmented>

<portal-host class="dropdowns">
    <button
        tuiButton
        type="button"
        class="t-centered-axis-xy"
        [tuiHint]="template"
        [tuiHintDirection]="selected"
        [tuiHintManual]="hintShown"
        (click)="toggleHint()"
    >
        Hint
    </button>
</portal-host>

<ng-template #template>
    Use
    <a
        appearance="action-grayscale"
        tuiLink
        tuiTheme="dark"
        class="link"
    >
        Hint
    </a>
</ng-template>
`;export{i as default};
