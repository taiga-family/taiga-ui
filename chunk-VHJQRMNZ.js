import"./chunk-42JZD6NG.js";var o=`@if (dropdown()) {
    <dropdown-documentation />
}
@if (isTuiReactiveControl(documentedComponent)) {
    @if (withHint()) {
        <hint-controller-documentation />
    }
    @if (withTextFieldController()) {
        <textfield-controller-documentation />
    }
    <h6 class="tui-text_h6">
        Inherited from
        <code>TuiReactiveControl</code>
    </h6>
    <tui-doc-documentation>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="readOnly"
            documentationPropertyType="boolean"
            [(documentationPropertyValue)]="documentedComponent.readOnly"
        >
            Component is read only
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="pseudoInvalid"
            documentationPropertyType="boolean | null"
            [documentationPropertyValues]="booleanVariants"
            [(documentationPropertyValue)]="documentedComponent.pseudoInvalid"
        >
            Set invalid state regardless of control
        </ng-template>
    </tui-doc-documentation>
}
@if (isTuiInteractive(documentedComponent)) {
    <h6 class="tui-text_h6">
        Inherited from
        <code>TuiInteractive</code>
    </h6>
    <tui-doc-documentation>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="focusable"
            documentationPropertyType="boolean"
            [(documentationPropertyValue)]="documentedComponent.focusable"
        >
            Element can be focused
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="nativeId"
            documentationPropertyType="string"
        >
            Native ID attribute for element. It helps users with Screen Readers to use a page
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="pseudoHover"
            documentationPropertyType="boolean | null"
            [documentationPropertyValues]="booleanVariants"
            [(documentationPropertyValue)]="documentedComponent.pseudoHovered"
        >
            Visual hovered state
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="pseudoFocus"
            documentationPropertyType="boolean | null"
            [documentationPropertyValues]="booleanVariants"
            [(documentationPropertyValue)]="documentedComponent.pseudoFocused"
        >
            Visual focused state
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="pseudoActive"
            documentationPropertyType="boolean | null"
            [documentationPropertyValues]="booleanVariants"
            [(documentationPropertyValue)]="documentedComponent.pseudoPressed"
        >
            Visual pressed state
        </ng-template>
        <ng-template
            documentationPropertyMode="output"
            documentationPropertyName="focusedChange"
            documentationPropertyType="boolean"
        >
            Emits on focus and blur
        </ng-template>
    </tui-doc-documentation>
}
<!-- TODO: Do we need this? -->
@if (isTuiHint(documentedComponent)) {
    <tui-doc-documentation>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="tuiHintDirection"
            documentationPropertyType="TuiHintDirection | TuiHintDirection[]"
            [documentationPropertyValues]="directionVariants"
            [(documentationPropertyValue)]="documentedComponent.direction"
        >
            Hint direction
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="tuiHintAppearance"
            documentationPropertyType="string"
            [documentationPropertyValues]="appearanceVariants"
            [(documentationPropertyValue)]="documentedComponent.appearance"
        >
            Hint mode
        </ng-template>
        <ng-template
            documentationPropertyMode="output"
            documentationPropertyName="tuiHintDirectionChange"
            documentationPropertyType="TuiHintDirection"
        >
            Hint direction change
        </ng-template>
        <ng-template
            documentationPropertyMode="output"
            documentationPropertyName="tuiHintVisible"
            documentationPropertyType="boolean"
        >
            Hint visibility state change
        </ng-template>
    </tui-doc-documentation>
}
`;export{o as default};
