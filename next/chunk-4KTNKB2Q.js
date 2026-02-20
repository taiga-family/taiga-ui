import"./chunk-HU6DUUP4.js";var l=`<tui-input-range
    [content]="[value[0] ? '' : 'Today', value[1] ? '' : 'Today']"
    [max]="0"
    [min]="-30"
    [postfix]="[value[0] | i18nPlural: pluralize, value[1] | i18nPlural: pluralize]"
    [(ngModel)]="value"
>
    How far back to look
</tui-input-range>

<p>
    <strong>Control value:</strong>
    <output>
        <code>{{ value | json }}</code>
    </output>
</p>
`;export{l as default};
