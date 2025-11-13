import"./chunk-42JZD6NG.js";var u=`<tui-input-range
    [content]="[value[0] ? '' : 'Today', value[1] ? '' : 'Today']"
    [max]="0"
    [min]="-30"
    [postfix]="[value[0] | i18nPlural: pluralize, value[1] | i18nPlural: pluralize]"
    [(ngModel)]="value"
>
    <label tuiLabel>How far back to look</label>
</tui-input-range>

<p>
    <strong>Control value:</strong>
    <output>
        <code>{{ value | json }}</code>
    </output>
</p>
`;export{u as default};
