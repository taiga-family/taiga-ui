import"./chunk-HU6DUUP4.js";var e=`<h3 class="title">Horizontal group</h3>
<form
    tuiGroup
    class="group"
    [collapsed]="true"
    [formGroup]="form"
>
    <label tuiBlock>
        <input
            formControlName="value"
            tuiRadio
            type="radio"
            value="oranges"
        />
        Oranges
    </label>
    <label tuiBlock>
        <input
            formControlName="value"
            tuiRadio
            type="radio"
            value="apples"
        />
        Apples
    </label>
    <label tuiBlock>
        <input
            formControlName="value"
            tuiRadio
            type="radio"
            value="pineapples"
        />
        <span tuiFade>Pineapples</span>
    </label>
</form>
<h3 class="title">Vertical group</h3>
<form
    orientation="vertical"
    tuiGroup
    class="group"
    [collapsed]="true"
    [formGroup]="form"
>
    <label tuiBlock>
        <input
            formControlName="value"
            tuiRadio
            type="radio"
            value="oranges"
        />
        Oranges
    </label>
    <label tuiBlock>
        <input
            formControlName="value"
            tuiRadio
            type="radio"
            value="apples"
        />
        Apples
    </label>
    <label tuiBlock>
        <input
            formControlName="value"
            tuiRadio
            type="radio"
            value="pineapples"
        />
        Pineapples
    </label>
</form>
<h3 class="title">Without checkbox indicators</h3>
<form
    tuiGroup
    class="group"
    [collapsed]="true"
    [formGroup]="form"
>
    <label
        appearance=""
        tuiBlock
    >
        <input
            formControlName="value"
            tuiBlock
            type="radio"
            value="oranges"
        />
        Oranges
    </label>
    <label
        appearance=""
        tuiBlock
    >
        <input
            formControlName="value"
            tuiBlock
            type="radio"
            value="apples"
        />
        Apples
    </label>
    <label
        appearance=""
        tuiBlock
    >
        <input
            formControlName="value"
            tuiBlock
            type="radio"
            value="pineapples"
        />
        Pineapples
    </label>
</form>
`;export{e as default};
