import"./chunk-HU6DUUP4.js";var i=`<p>Zone: {{ active }}</p>
<p>
    <tui-textfield>
        <label tuiLabel>I'm outside</label>
        <input tuiInput />
    </tui-textfield>
</p>
<div
    class="active-zone"
    [class.active-zone_active]="active"
    (tuiActiveZoneChange)="onZone($event)"
>
    <h2>Zone</h2>
    <button
        tuiButton
        type="button"
        (click)="onClick()"
    >
        Show dialog
    </button>
</div>
<p>
    <button
        tuiButton
        type="button"
    >
        I'm outside too
    </button>
</p>
`;export{i as default};
