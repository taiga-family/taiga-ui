import"./chunk-HU6DUUP4.js";var o=`<form [formGroup]="form">
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
    <tui-icon
        class="tui-space_left-2"
        [icon]="getItemIcon(item)"
    />
</ng-template>
<div>
    <pre>Form value: {{ form.value | json }}</pre>
</div>
`;export{o as default};
