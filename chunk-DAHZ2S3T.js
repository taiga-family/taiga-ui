import"./chunk-HU6DUUP4.js";var e=`<form [formGroup]="form">
    <label tuiBlock>
        <div tuiAvatar="@tui.user">
            <img
                alt=""
                src="https://avatars.githubusercontent.com/u/11832552"
            />
        </div>
        Heading
        <input
            formControlName="testValue1"
            tuiCheckbox
            type="checkbox"
        />
    </label>
    <label
        appearance=""
        tuiBlock
    >
        <div tuiAvatar="@tui.user">
            <img
                alt=""
                src="https://avatars.githubusercontent.com/u/11832552"
            />
        </div>
        <span
            tuiTitle
            [style.margin-block.rem]="-0.5"
        >
            <span tuiSubtitle>Taiga UI</span>
            Alex Inkin
        </span>
        <tui-icon icon="@tui.heart" />
        <input
            formControlName="testValue2"
            tuiBlock
            type="checkbox"
        />
    </label>
    <label
        appearance="secondary"
        tuiBlock
    >
        <span tuiTitle>
            Heading
            <span tuiSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque incidunt itaque iusto natus
                quaerat quia similique veniam?
            </span>
        </span>
        <input
            formControlName="testValue3"
            tuiSwitch
            type="checkbox"
        />
    </label>
    <label
        tuiBlock="m"
        [style.align-self]="'stretch'"
    >
        <input
            formControlName="testValue3"
            size="s"
            tuiSwitch
            type="checkbox"
        />
        Enable
        <tui-icon
            tuiTooltip="Enabling this will cause trouble"
            [style.margin-inline-start]="'auto'"
        />
    </label>
</form>
`;export{e as default};
