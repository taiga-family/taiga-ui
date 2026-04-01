import"./chunk-HU6DUUP4.js";var r=`<form [formGroup]="form">
    <tui-filter
        formControlName="filters"
        [badgeHandler]="badgeHandler"
        [content]="content"
        [identityMatcher]="identityMatcher"
        [items]="items"
    />
</form>
<ng-template
    #content
    let-item
>
    {{ item.title }}
</ng-template>
<div>
    <pre>Form value: {{ form.value | json }}</pre>
</div>
`;export{r as default};
