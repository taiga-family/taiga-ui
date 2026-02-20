import"./chunk-HU6DUUP4.js";var n=`<tui-textfield
    [open]="open()"
    (openChange)="open.set($event)"
>
    <input
        placeholder="Your happiest life moment"
        tuiInputMonth
        [(ngModel)]="value"
    />

    <ng-container *tuiDropdown>
        <tui-calendar-month />

        <button
            tuiLink
            type="button"
            class="option"
            (click)="chooseTheOnlyCorrectOption()"
        >
            My wife's birthday
        </button>
    </ng-container>
</tui-textfield>
`;export{n as default};
