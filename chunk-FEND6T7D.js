import"./chunk-HU6DUUP4.js";var i=`<form [formGroup]="form">
    <tui-textfield>
        <label tuiLabel>Card number</label>
        <input
            formControlName="card"
            tuiInputCard
            (binChange)="onBinChange($event)"
        />
    </tui-textfield>
    <section>
        <tui-textfield>
            <label tuiLabel>Expires</label>
            <input
                formControlName="expire"
                tuiInputExpire
            />
        </tui-textfield>
        <tui-textfield>
            <label tuiLabel>CVC/CVV</label>
            <input
                formControlName="cvc"
                tuiInputCVC
            />
        </tui-textfield>
    </section>
    <tui-error formControlName="card" />
</form>
<p>{{ form.value | json }}</p>
`;export{i as default};
