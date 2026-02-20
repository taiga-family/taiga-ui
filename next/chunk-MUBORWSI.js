import"./chunk-HU6DUUP4.js";var l=`<tui-input-range
    [content]="[content, content]"
    [max]="10"
    [min]="0"
    [postfix]="[value[0] | i18nPlural: pluralize, value[1] | i18nPlural: pluralize]"
    [(ngModel)]="value"
>
    Desired departure day
</tui-input-range>

<ng-template
    #content
    let-value
>
    @switch (value) {
        @case (0) {
            Today
        }
        @case (1) {
            Tomorrow
        }
        @case (7) {
            In a week
        }
        @default {
            {{ value }}{{ value | i18nPlural: pluralize }}
        }
    }
</ng-template>
`;export{l as default};
