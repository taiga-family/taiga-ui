import"./chunk-HU6DUUP4.js";var d=`@if (done()) {
    <div class="done">PIN verified \u2713</div>
} @else {
    <tui-textfield>
        <input
            tuiPincode
            [invalid]="verification.value()"
            [(ngModel)]="pin"
            (confirmed)="done.set(true)"
        />
    </tui-textfield>
}
`;export{d as default};
