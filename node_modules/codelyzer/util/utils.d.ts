import { BooleanLiteral, ClassDeclaration, Decorator, Expression, ExpressionWithTypeArguments, Node, NodeArray, ObjectLiteralExpression, SourceFile } from 'typescript';
export declare enum AngularClassDecorators {
    Component = "Component",
    Directive = "Directive",
    Injectable = "Injectable",
    NgModule = "NgModule",
    Pipe = "Pipe"
}
declare enum AngularConstructorParameterDecorators {
    Attribute = "Attribute",
    Host = "Host",
    Inject = "Inject",
    Optional = "Optional",
    Self = "Self",
    SkipSelf = "SkipSelf"
}
declare enum AngularMethodDecorators {
    HostListener = "HostListener"
}
declare enum AngularPropertyAccessorDecorators {
    ContentChild = "ContentChild",
    ContentChildren = "ContentChildren",
    HostBinding = "HostBinding",
    Input = "Input",
    Output = "Output",
    ViewChild = "ViewChild",
    ViewChildren = "ViewChildren"
}
export declare const AngularInnerClassDecorators: {
    ContentChild: AngularPropertyAccessorDecorators.ContentChild;
    ContentChildren: AngularPropertyAccessorDecorators.ContentChildren;
    HostBinding: AngularPropertyAccessorDecorators.HostBinding;
    Input: AngularPropertyAccessorDecorators.Input;
    Output: AngularPropertyAccessorDecorators.Output;
    ViewChild: AngularPropertyAccessorDecorators.ViewChild;
    ViewChildren: AngularPropertyAccessorDecorators.ViewChildren;
    HostListener: AngularMethodDecorators.HostListener;
    Attribute: AngularConstructorParameterDecorators.Attribute;
    Host: AngularConstructorParameterDecorators.Host;
    Inject: AngularConstructorParameterDecorators.Inject;
    Optional: AngularConstructorParameterDecorators.Optional;
    Self: AngularConstructorParameterDecorators.Self;
    SkipSelf: AngularConstructorParameterDecorators.SkipSelf;
};
export declare enum AngularLifecycleInterfaces {
    AfterContentChecked = "AfterContentChecked",
    AfterContentInit = "AfterContentInit",
    AfterViewChecked = "AfterViewChecked",
    AfterViewInit = "AfterViewInit",
    OnChanges = "OnChanges",
    OnDestroy = "OnDestroy",
    OnInit = "OnInit",
    DoCheck = "DoCheck"
}
export declare enum AngularLifecycleMethods {
    ngAfterContentChecked = "ngAfterContentChecked",
    ngAfterContentInit = "ngAfterContentInit",
    ngAfterViewChecked = "ngAfterViewChecked",
    ngAfterViewInit = "ngAfterViewInit",
    ngOnChanges = "ngOnChanges",
    ngOnDestroy = "ngOnDestroy",
    ngOnInit = "ngOnInit",
    ngDoCheck = "ngDoCheck"
}
export declare type AngularClassDecoratorKeys = keyof typeof AngularClassDecorators;
export declare type AngularInnerClassDecoratorKeys = Exclude<keyof typeof AngularInnerClassDecorators, number>;
export declare type AngularLifecycleInterfaceKeys = keyof typeof AngularLifecycleInterfaces;
export declare type AngularLifecycleMethodKeys = keyof typeof AngularLifecycleMethods;
export declare const angularClassDecoratorKeys: readonly ("Component" | "Directive" | "Injectable" | "NgModule" | "Pipe")[];
export declare const angularInnerClassDecoratorKeys: readonly ("ContentChild" | "ContentChildren" | "HostBinding" | "Input" | "Output" | "ViewChild" | "ViewChildren" | "HostListener" | "Attribute" | "Host" | "Inject" | "Optional" | "Self" | "SkipSelf")[];
export declare const angularLifecycleInterfaceKeys: readonly ("AfterContentChecked" | "AfterContentInit" | "AfterViewChecked" | "AfterViewInit" | "OnChanges" | "OnDestroy" | "OnInit" | "DoCheck")[];
export declare const angularLifecycleMethodKeys: readonly ("ngAfterContentChecked" | "ngAfterContentInit" | "ngAfterViewChecked" | "ngAfterViewInit" | "ngOnChanges" | "ngOnDestroy" | "ngOnInit" | "ngDoCheck")[];
export declare const ANGULAR_INNER_CLASS_DECORATORS: ReadonlySet<AngularInnerClassDecoratorKeys>;
export declare const ANGULAR_CLASS_DECORATORS: ReadonlySet<AngularClassDecoratorKeys>;
export declare const ANGULAR_CLASS_DECORATOR_MAPPER: ReadonlyMap<AngularClassDecoratorKeys, ReadonlySet<AngularInnerClassDecoratorKeys>>;
export declare const ANGULAR_LIFECYCLE_INTERFACES: ReadonlySet<AngularLifecycleInterfaceKeys>;
export declare const ANGULAR_LIFECYCLE_METHODS: ReadonlySet<AngularLifecycleMethodKeys>;
export declare const ANGULAR_CLASS_DECORATOR_LIFECYCLE_METHOD_MAPPER: ReadonlyMap<AngularClassDecoratorKeys, ReadonlySet<AngularLifecycleMethodKeys>>;
export declare const getClassName: (node: Node) => string;
export declare const getDecorator: (node: ClassDeclaration, decoratorName: string) => Decorator;
export declare const getDecoratorArgument: (decorator: Decorator) => ObjectLiteralExpression;
export declare const getDecoratorName: (decorator: Decorator) => string;
export declare const getDecoratorPropertyInitializer: (decorator: Decorator, name: string) => Expression;
export declare const getNextToLastParentNode: (node: Node) => Node;
export declare const getComponentDecorator: (node: ClassDeclaration) => Decorator;
export declare const getDirectiveDecorator: (node: ClassDeclaration) => Decorator;
export declare const getInjectableDecorator: (node: ClassDeclaration) => Decorator;
export declare const getNgModuleDecorator: (node: ClassDeclaration) => Decorator;
export declare const getPipeDecorator: (node: ClassDeclaration) => Decorator;
export declare const getSymbolName: (expression: ExpressionWithTypeArguments) => string;
export declare const isAngularClassDecorator: (value: string) => value is "Component" | "Directive" | "Injectable" | "NgModule" | "Pipe";
export declare const isAngularInnerClassDecorator: (value: string) => value is "ContentChild" | "ContentChildren" | "HostBinding" | "Input" | "Output" | "ViewChild" | "ViewChildren" | "HostListener" | "Attribute" | "Host" | "Inject" | "Optional" | "Self" | "SkipSelf";
export declare const isAngularLifecycleInterface: (value: string) => value is "AfterContentChecked" | "AfterContentInit" | "AfterViewChecked" | "AfterViewInit" | "OnChanges" | "OnDestroy" | "OnInit" | "DoCheck";
export declare const isAngularLifecycleMethod: (value: string) => value is "ngAfterContentChecked" | "ngAfterContentInit" | "ngAfterViewChecked" | "ngAfterViewInit" | "ngOnChanges" | "ngOnDestroy" | "ngOnInit" | "ngDoCheck";
export declare const getDeclaredInterfaces: (node: ClassDeclaration) => NodeArray<ExpressionWithTypeArguments>;
export declare const getDeclaredInterfaceNames: (node: ClassDeclaration) => string[];
export declare const getDeclaredInterfaceName: (node: ClassDeclaration, value: string) => string;
export declare const getDeclaredAngularLifecycleInterfaces: (node: ClassDeclaration) => readonly ("AfterContentChecked" | "AfterContentInit" | "AfterViewChecked" | "AfterViewInit" | "OnChanges" | "OnDestroy" | "OnInit" | "DoCheck")[];
export declare const getLifecycleInterfaceByMethodName: (methodName: "ngAfterContentChecked" | "ngAfterContentInit" | "ngAfterViewChecked" | "ngAfterViewInit" | "ngOnChanges" | "ngOnDestroy" | "ngOnInit" | "ngDoCheck") => "AfterContentChecked" | "AfterContentInit" | "AfterViewChecked" | "AfterViewInit" | "OnChanges" | "OnDestroy" | "OnInit" | "DoCheck";
export declare const getDeclaredAngularLifecycleMethods: (node: ClassDeclaration) => readonly ("ngAfterContentChecked" | "ngAfterContentInit" | "ngAfterViewChecked" | "ngAfterViewInit" | "ngOnChanges" | "ngOnDestroy" | "ngOnInit" | "ngDoCheck")[];
export declare const kebabToCamelCase: (value: string) => string;
export declare const isSameLine: (sourceFile: SourceFile, pos1: number, pos2: number) => boolean;
export declare const isBooleanLiteralLike: (node: Node) => node is BooleanLiteral;
export declare const isStringLiteralLike: (node: Node) => node is import("typescript").StringLiteralLike;
export declare const maybeNodeArray: <T extends Node>(nodes: NodeArray<T>) => readonly T[];
export declare const toTitleCase: (value: string) => string;
export {};
