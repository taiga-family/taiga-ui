import"./chunk-HU6DUUP4.js";var e=`<tui-textfield>
    <input
        bigintWithDecimal
        postfix=" per day"
        prefix="$"
        tuiInputNumber
        [max]="infinity"
        [min]="0"
        [tuiNumberFormat]="{precision: infinity, decimalSeparator: '.'}"
        [(ngModel)]="value"
    />
</tui-textfield>

<p><strong>Control value:</strong></p>
<pre><code>{{ stringified() }}</code></pre>
`;export{e as default};
