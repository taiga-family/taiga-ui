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
        name: 'TuiTableDirectionOrder',
        moduleSpecifier: '@taiga-ui/addon-table',
        message:
            'TuiTableDirectionOrder has been removed. Use [direction] and (directionChange) from TuiTableDirective. Update your types: TuiSortDirection (1 | -1) instead of "asc" | "desc"',
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
        'TuiArrowComponent',
        'TUI_ARROW',
        'TuiArrowOptions',
        'TUI_ARROW_OPTIONS',
        'TUI_ARROW_DEFAULT_OPTIONS',
        'tuiArrowOptionsProvider',
    ].map((name) => ({
        name,
        moduleSpecifier: '@taiga-ui/legacy',
        message: `${name} has been removed. Use TuiChevron directive from @taiga-ui/kit instead. See example https://taiga-ui.dev/components/data-list#links`,
    })),
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
        name: 'tuiProvideMobileCalendar',
        moduleSpecifier: '@taiga-ui/addon-mobile',
        message:
            'tuiProvideMobileCalendar has been removed. Explicitly import TuiMobileCalendarDropdown from @taiga-ui/addon-mobile and add the directive to your input-date fields. See https://taiga-ui.dev/components/input-date#mobile',
    },
    {
        name: 'TuiCarousel',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiCarousel is deprecated. Migrate to the new variant TuiCarousel from @taiga-ui/core. See https://taiga-ui.dev/components/carousel',
    },
    {
        name: 'TUI_TEXTFIELD_HOST',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'TUI_TEXTFIELD_HOST has been removed. Use TuiTextfieldHost or create a custom implementation for textfield host element references.',
    },
    {
        name: 'TUI_MONTH_FORMATTER',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'TUI_MONTH_FORMATTER has been removed. Month display now uses TUI_MONTHS from @taiga-ui/core — an array of 12 month-name strings. Provide it via tuiLanguageSwitcher or override TUI_MONTHS directly instead of providing a formatter function.',
    },
    {
        name: 'TUI_FONTS_READY',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'TUI_FONTS_READY has been removed. Use the FontFace API directly or implement custom font loading detection.',
    },
    {
        name: 'TUI_TOUCH_SUPPORTED',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'TUI_TOUCH_SUPPORTED has been removed. Use WA_TOUCH_SUPPORTED from @ng-web-apis/platform package instead.',
    },
    {
        name: 'TUI_IS_CHROMIUM',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'TUI_IS_CHROMIUM has been removed. Use WA_IS_CHROMIUM from @ng-web-apis/platform package instead.',
    },
    {
        name: 'TUI_IS_STACKBLITZ',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'TUI_IS_STACKBLITZ has been removed. Implement custom StackBlitz detection or remove if not needed for your application.',
    },
    {
        name: 'tuiInputCardOptionsProvider',
        moduleSpecifier: '@taiga-ui/addon-commerce',
        message:
            'tuiInputCardOptionsProvider has been removed with no direct replacement. The new input[tuiInputCard] has no DI options token — configure it per instance instead (placeholder and autocomplete as attributes on the <input>, validation via form validators). If you were using the grouped card input, migrate to InputCardGroup and use tuiInputCardGroupOptionsProvider from @taiga-ui/addon-commerce. See https://taiga-ui.dev/components/input-card-group',
    },
    {
        name: 'TUI_INPUT_CARD_OPTIONS',
        moduleSpecifier: '@taiga-ui/addon-commerce',
        message:
            'TUI_INPUT_CARD_OPTIONS has been removed with no direct replacement. The new input[tuiInputCard] has no DI options token — configure it per instance instead (placeholder and autocomplete as attributes on the <input>, validation via form validators). If you were using the grouped card input, migrate to InputCardGroup and use TUI_INPUT_CARD_GROUP_OPTIONS from @taiga-ui/addon-commerce. See https://taiga-ui.dev/components/input-card-group',
    },
    {
        name: 'TUI_CHECKBOX_DEFAULT_OPTIONS',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'TUI_CHECKBOX_DEFAULT_OPTIONS has been removed. The TUI_CHECKBOX_OPTIONS token moved to @taiga-ui/core; provide custom defaults via tuiCheckboxOptionsProvider from @taiga-ui/core instead of importing a default options constant.',
    },
    {
        name: 'TUI_ALERT_POSITION',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'TUI_ALERT_POSITION has been removed. Alert position is now part of the notification options: use the block and inline properties (e.g. via tuiNotificationOptionsProvider from @taiga-ui/core) instead.',
    },
    {
        name: 'tuiHexToRgb',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'tuiHexToRgb has been removed without a direct replacement. Convert a HEX color to RGB manually where you used it.',
    },
    {
        name: 'TUI_TEXTFIELD_APPEARANCE',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TUI_TEXTFIELD_APPEARANCE has been removed. Set the appearance via the tuiTextfieldAppearance attribute on the textfield (e.g. <tui-textfield tuiTextfieldAppearance="..."> or <input tuiTextfieldAppearance="..." />) instead of providing this token.',
    },
    {
        name: 'TuiWrapperDirective',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiWrapperDirective ([tuiWrapper]) has been removed. Use the tuiAppearance directive from @taiga-ui/core to set the visual appearance; interactive states now resolve automatically from the host element. See https://taiga-ui.dev/appearances',
    },
    {
        name: 'TuiStaticRequestService',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiStaticRequestService has been removed. Replace usages of service.request(url) with native fetch(url).then(r => r.text()). Add your own caching layer (e.g. a Map or shareReplay) if you need it.',
    },
    {
        name: 'AbstractTuiControl',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'AbstractTuiControl has been removed. Extend the signal-based TuiControl<T> from @taiga-ui/cdk instead. The API changed from getters/@Input to signals: read the value with this.value(), set it with this.value.set(v), and use this.onChange(v)/this.onTouched(). Port your custom control manually — this cannot be migrated automatically.',
    },
    {
        name: 'AbstractTuiNullableControl',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'AbstractTuiNullableControl has been removed. Extend the signal-based TuiControl<T | null> from @taiga-ui/cdk instead (same signal API as AbstractTuiControl). Port your custom control manually — this cannot be migrated automatically.',
    },
    {
        name: 'TuiPrimitiveTextfieldComponent',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiPrimitiveTextfieldComponent has been removed. Use the new <tui-textfield> (TuiTextfield from @taiga-ui/core) that wraps a native input/textarea instead.',
    },
    {
        name: 'TuiColorSelectorComponent',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiColorSelectorComponent has been removed. Use input[tuiInputColor] (TuiInputColor from @taiga-ui/kit) instead. See https://taiga-ui.dev/components/input-color',
    },
    {
        name: 'TuiInputCopyComponent',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiInputCopyComponent has been removed. Use TuiCopy from @taiga-ui/kit instead (the <tui-copy> component, the tui-icon[tuiCopy] directive or TuiButtonCopy). See https://taiga-ui.dev/components/copy',
    },
    {
        name: 'TuiValueAccessorModule',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiValueAccessorModule has been removed together with TuiValueAccessorDirective. Provide your custom ControlValueAccessor via the Angular NG_VALUE_ACCESSOR token directly instead.',
    },
    {
        name: 'TuiTableBarComponent',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiTableBarComponent (<tui-table-bar>) has been removed with no direct replacement. Compose a table toolbar/footer from current components (e.g. tui-pagination) instead.',
    },
    {
        name: 'TuiLegacyDropdownOpenMonitorDirective',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiLegacyDropdownOpenMonitorDirective has been removed. It was a compatibility shim for the legacy dropdown; v5 dropdowns track open state natively via [tuiDropdownOpen] / (tuiDropdownOpenChange) and tuiDropdownAuto. Remove the [tuiDropdownOpenMonitor] attribute and use those instead.',
    },
];
