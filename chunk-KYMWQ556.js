import"./chunk-HU6DUUP4.js";var i=`<label>
    Are you satisfied with Taiga UI?
    <tui-rating
        class="rating"
        [attr.data-value]="value"
        [icon]="icon"
        [max]="3"
        [(ngModel)]="value"
    />
    @if (value) {
        <button
            appearance="icon"
            iconStart="@tui.x"
            size="s"
            tuiIconButton
            type="button"
            class="button"
            (click)="value = 0"
        >
            Clear
        </button>
    }
</label>
`;export{i as default};
