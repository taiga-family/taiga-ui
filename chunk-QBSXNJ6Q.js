import"./chunk-LQ6M4NCU.js";var t=`<header tuiHeader="h6">Regular</header>
<dl tuiList>
    @for (item of data | keyvalue; track $index) {
        <dt>{{ item.key }}</dt>
        <dd>{{ item.value }}</dd>
    }
</dl>
<br />
<header tuiHeader="h6">Compact</header>
<dl
    compact
    tuiList="m"
>
    @for (item of data | keyvalue; track $index) {
        <dt>{{ item.key }}</dt>
        <dd>{{ item.value }}</dd>
    }
</dl>
`;export{t as default};
