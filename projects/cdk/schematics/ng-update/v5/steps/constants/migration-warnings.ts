import {type MigrationWarning} from '../../../interfaces';

export const MIGRATION_WARNINGS: MigrationWarning[] = [
    {
        name: 'TUI_DATE_MODE_MASKITO_ADAPTER',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiDateMode and MaskitoDateMode are now compatible with each other; the adapter is no longer required',
    },
    {
        name: 'TuiDateMode',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'All values inside TuiDateMode are renamed: DMY -> dd/mm/yyyy, MDY -> mm/dd/yyyy, YMD -> yyyy/mm/dd',
    },
    {
        name: 'TuiIdService',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'TuiIdService has been removed. Use tuiGenerateId() function from @taiga-ui/cdk instead.\n// Before: constructor(private readonly idService: TuiIdService) { const id = this.idService.generateId(); }\n// After:  import {tuiGenerateId} from "@taiga-ui/cdk"; const id = tuiGenerateId();',
    },
    {
        name: 'TuiScrollService',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'TuiScrollService has been removed because smooth scroll is natively supported by all modern browsers. Use native scrolling APIs (window.scrollTo, Element.scrollTo, Element.scrollIntoView) instead',
    },
    {
        name: 'TuiFormatDatePipe',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'TuiFormatDatePipe has been removed. Use Angular built-in Date pipe instead. See https://angular.dev/api/common/DatePipe',
    },
    {
        name: 'TUI_SLIDER_OPTIONS',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'TUI_SLIDER_OPTIONS has been removed. Use CSS variables for slider configuration. See example https://taiga-ui.dev/components/slider',
    },
    {
        name: 'tuiSliderOptionsProvider',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiSliderOptionsProvider has been removed. Use CSS variables for slider configuration. See example https://taiga-ui.dev/components/slider',
    },
    {
        name: 'TuiFeedItemDetailsComponent',
        moduleSpecifier: '@taiga-ui/proprietary',
        message:
            'TuiFeedItemDetailsComponent has been removed. Use BlockDetails instead. See https://taiga-ui.dev/layout/block-details',
    },
    {
        name: 'TuiToCountryCodePipe',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiToCountryCodePipe has been removed. Replace pipe usage `phone | tuiToCountryCode` with the maskitoGetCountryFromNumber(phone) function from @maskito/phone.',
    },
    {
        name: 'TuiStatus',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiStatus type has been removed. Replace with a plain string literal type: "default" | "error" | "info" | "neutral" | "primary" | "success" | "warning"',
    },
    {
        name: 'TuiIsoToCountryCodePipe',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiIsoToCountryCodePipe has been removed. Replace pipe usage `isoCode | tuiIsoToCountryCode` with the getCountryCallingCode(isoCode, metadata) function from libphonenumber-js/core.',
    },
    {
        name: 'TuiPortalContext',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'TuiPopoverContext<O> is removed. Use TuiPortalContext<T, O> where T=options shape, O=output type.\n// Before: injectContext<TuiPopoverContext<boolean>>()\n// After:  injectContext<TuiPortalContext<MyOptions, boolean>>()',
    },
    {
        name: 'TuiPortal',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'TuiPopoverService → TuiPortal: constructor args (token, component, defaultOptions) are now abstract class properties; call super(inject(TuiPopupService)).\n// Before: @Injectable({useFactory: () => new MyService(TUI_DIALOGS, MyComponent, defaultOpts)}) class MyService extends TuiPopoverService<T, K> {}\n// After:  @Injectable({providedIn: "root"}) class MyService extends TuiPortal<T, K> { protected readonly component = MyComponent; protected readonly options = defaultOpts; constructor() { super(inject(TuiPopupService)); } }\n// See https://taiga-ui.dev/cdk/portal',
    },
    {
        name: 'TuiPortalDirective',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'TuiPopoverDirective → TuiPortalDirective: do not extend; use hostDirectives + tuiAsPortal() instead.\n// Before: @Directive({inputs:[...], outputs:[...], providers:[{provide:TuiPopoverService,useExisting:MyService}]}) class MyDirective<T> extends TuiPopoverDirective<T> {}\n// After:  @Directive({providers:[tuiAsPortal(MyService)], hostDirectives:[{directive:TuiPortalDirective,inputs:[...],outputs:[...]}]}) class MyDirective {}\n// See https://taiga-ui.dev/cdk/portal',
    },
    {
        name: 'TUI_ARROW_MODE',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TUI_ARROW_MODE has been removed. Use TuiChevron directive from @taiga-ui/kit instead',
    },
    {
        name: 'TuiArrowMode',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiArrowMode has been removed. Use TuiChevron directive from @taiga-ui/kit instead',
    },
    {
        name: 'TUI_ARROW_DEFAULT_MODE',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TUI_ARROW_DEFAULT_MODE has been removed. Use TuiChevron directive from @taiga-ui/kit instead',
    },
    {
        name: 'tuiArrowModeProvider',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'tuiArrowModeProvider has been removed. Use TuiChevron directive from @taiga-ui/kit instead',
    },
    ...[
        'tuiParentAnimation',
        'tuiParentStop',
        'tuiHost',
        'tuiHeightCollapse',
        'tuiHeightCollapseList',
        'tuiWidthCollapse',
        'tuiWidthCollapseList',
        'tuiCrossFade',
        'tuiFadeIn',
        'tuiFadeInList',
        'tuiFadeInTop',
        'tuiFadeInBottom',
        'tuiDropdownAnimation',
        'tuiScaleIn',
        'tuiPop',
        'tuiScaleInList',
        'tuiSlideIn',
        'tuiSlideInLeft',
        'tuiSlideInLeftList',
        'tuiSlideInRight',
        'tuiSlideInRightList',
        'tuiSlideInTop',
        'tuiSlideInTopList',
        'tuiSlideInBottom',
        'tuiSlideInBottomList',
        'TuiDurationOptions',
    ].map((name) => ({
        name,
        moduleSpecifier: '@taiga-ui/core',
        message: `${name} has been removed. Angular animations are replaced with CSS animations + TuiAnimated directive from @taiga-ui/cdk. See https://taiga-ui.dev/directives/animated`,
    })),
    {
        name: 'TuiCarousel',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiCarousel is deprecated. Migrate to the new variant TuiCarousel from @taiga-ui/core. See https://taiga-ui.dev/components/carousel',
    },
];
