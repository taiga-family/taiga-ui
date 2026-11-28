import"./chunk-LQ6M4NCU.js";var o=`<form [formGroup]="form">
    <tui-filter
        formControlName="filters"
        [content]="content"
        [items]="items"
    />
</form>
<ng-template
    #content
    let-item
>
    {{ item }}
    <tui-icon [icon]="getItemIcon(item)" />
</ng-template>
<div>
    <pre>Form value: {{ form.value | json }}</pre>
</div>
`;export{o as default};
