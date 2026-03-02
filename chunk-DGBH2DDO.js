import"./chunk-HU6DUUP4.js";var i=`<form [formGroup]="form">
    <tui-radio-list
        formControlName="vertical"
        [itemContent]="content"
        [items]="objects"
    />
    <ng-template
        #content
        let-data
    >
        <span tuiTitle>
            {{ data.name }}
            <span tuiSubtitle>{{ data.description }}</span>
        </span>
    </ng-template>
    <hr />
    <tui-radio-list
        formControlName="disabled"
        [items]="strings"
    />
    <hr />
</form>
<tui-radio-list
    size="s"
    [disabledItemHandler]="handler"
    [items]="strings"
    [style.flex-direction]="'row'"
    [style.width]="'max-content'"
    [(ngModel)]="horizontal"
/>
`;export{i as default};
