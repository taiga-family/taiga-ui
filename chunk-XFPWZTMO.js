import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page header="Colors">
    <ng-template pageTab="Text">
        <table [colors]="text"></table>
        <table
            [attr.tuiTheme]="darkMode() ? 'light' : 'dark'"
            [colors]="text"
        ></table>
    </ng-template>

    <ng-template pageTab="Backgrounds">
        <table [colors]="backgrounds"></table>
        <table
            [attr.tuiTheme]="darkMode() ? 'light' : 'dark'"
            [colors]="backgrounds"
        ></table>
    </ng-template>

    <ng-template pageTab="Statuses">
        <table [colors]="statuses"></table>
        <table
            [attr.tuiTheme]="darkMode() ? 'light' : 'dark'"
            [colors]="statuses"
        ></table>
    </ng-template>

    <ng-template pageTab="Others">
        <table [colors]="others"></table>
        <table
            [attr.tuiTheme]="darkMode() ? 'light' : 'dark'"
            [colors]="others"
        ></table>
    </ng-template>

    <ng-template pageTab="Charts">
        <table [colors]="charts"></table>
    </ng-template>

    <ng-template pageTab="Setup">
        <div>
            Taiga UI uses
            <strong>CSS custom properties</strong>
            . You do not need to import anything as long as you included Taiga UI theme in your global styles. Just use
            variables
        </div>

        <tui-doc-code
            filename="styles.less"
            [code]="basicImportsLess"
        />
    </ng-template>
</tui-doc-page>
`;export{a as default};
