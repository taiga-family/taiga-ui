import"./chunk-HU6DUUP4.js";var l=`@if (done()) {
    <div class="done">PIN verified \u2713</div>
} @else {
    <div
        class="field"
        [class.field_success]="verification.value() === false"
    >
        <tui-loader
            class="loader"
            [inheritColor]="true"
            [loading]="verification.value() === false"
        />
        <tui-textfield>
            <input
                tuiPincode
                [invalid]="verification.value()"
                [(ngModel)]="pin"
                (finished)="onFinished()"
            />
        </tui-textfield>
    </div>
}
`;export{l as default};
