import {TypeToRename} from '../../interfaces/type-to-rename';

export const DEPRECATED_FUNCTIONS: readonly TypeToRename[] = [
    {
        from: `tuiReplayedValueChangesFrom`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiControlValue`,
    },
    {
        from: `controlPoint`,
        moduleSpecifier: [`@taiga-ui/addon-charts`],
        to: `tuiControlPoint`,
    },
    {
        from: `describeSector`,
        moduleSpecifier: [`@taiga-ui/addon-charts`],
        to: `tuiDescribeSector`,
    },
    {
        from: `drawCurve`,
        moduleSpecifier: [`@taiga-ui/addon-charts`],
        to: `tuiDrawCurve`,
    },
    {
        from: `drawLine`,
        moduleSpecifier: [`@taiga-ui/addon-charts`],
        to: `tuiDrawLine`,
    },
    {
        from: `draw`,
        moduleSpecifier: [`@taiga-ui/addon-charts`],
        to: `tuiDraw`,
    },
    {
        from: `lineAngle`,
        moduleSpecifier: [`@taiga-ui/addon-charts`],
        to: `tuiLineAngle`,
    },
    {
        from: `formatCurrency`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiFormatCurrency`,
    },
    {
        from: `getCurrencySymbol`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiGetCurrencySymbol`,
    },
    {
        from: `getPaymentSystem`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiGetPaymentSystem`,
    },
    {
        from: `isMaestro`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiIsMaestro`,
    },
    {
        from: `isMastercard`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiIsMastercard`,
    },
    {
        from: `isMir`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiIsMir`,
    },
    {
        from: `isElectron`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiIsElectron`,
    },
    {
        from: `isVisa`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiIsVisa`,
    },
    {
        from: `isCardLengthValid`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiIsCardLengthValid`,
    },
    {
        from: `isCardNumberValid`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiIsCardNumberValid`,
    },
    {
        from: `isExpireValid`,
        moduleSpecifier: [`@taiga-ui/addon-commerce`],
        to: `tuiIsExpireValid`,
    },
    {
        from: `tryParseMarkdownCodeBlock`,
        moduleSpecifier: [`@taiga-ui/addon-doc`],
        to: `tuiTryParseMarkdownCodeBlock`,
    },
    {
        from: `coerceValue`,
        moduleSpecifier: [`@taiga-ui/addon-doc`],
        to: `tuiCoerceValue`,
    },
    {
        from: `generateRoutes`,
        moduleSpecifier: [`@taiga-ui/addon-doc`],
        to: `tuiGenerateRoutes`,
    },
    {
        from: `inspectAny`,
        moduleSpecifier: [`@taiga-ui/addon-doc`],
        to: `tuiInspectAny`,
    },
    {
        from: `rawLoadRecord`,
        moduleSpecifier: [`@taiga-ui/addon-doc`],
        to: `tuiRawLoadRecord`,
    },
    {
        from: `transliterateKeyboardLayout`,
        moduleSpecifier: [`@taiga-ui/addon-doc`],
        to: `tuiTransliterateKeyboardLayout`,
    },
    {
        from: `isEmptyParagraph`,
        moduleSpecifier: [`@taiga-ui/addon-editor`],
        to: `tuiIsEmptyParagraph`,
    },
    {
        from: `getElementPoint`,
        moduleSpecifier: [`@taiga-ui/addon-editor`],
        to: `tuiGetElementPoint`,
    },
    {
        from: `getGradientData`,
        moduleSpecifier: [`@taiga-ui/addon-editor`],
        to: `tuiGetGradientData`,
    },
    {
        from: `getMarkRange`,
        moduleSpecifier: [`@taiga-ui/addon-editor`],
        to: `tuiGetMarkRange`,
    },
    {
        from: `isSelectionIn`,
        moduleSpecifier: [`@taiga-ui/addon-editor`],
        to: `tuiIsSelectionIn`,
    },
    {
        from: `parseGradient`,
        moduleSpecifier: [`@taiga-ui/addon-editor`],
        to: `tuiParseGradient`,
    },
    {
        from: `toGradient`,
        moduleSpecifier: [`@taiga-ui/addon-editor`],
        to: `tuiToGradient`,
    },
    {
        from: `defaultSort`,
        moduleSpecifier: [`@taiga-ui/addon-table`],
        to: `tuiDefaultSort`,
    },
    {
        from: `mockCurrentDate`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiMockCurrentDate`,
    },
    {
        from: `restoreRealDate`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiRestoreRealDate`,
    },
    {
        from: `mockDateInside`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiMockDateInside`,
    },
    {
        from: `pendingIfNotMoscowTimeZone`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiPendingIfNotMoscowTimeZone`,
    },
    {
        from: `dragAndDropFrom`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiDragAndDropFrom`,
    },
    {
        from: `focusVisibleObservable`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiFocusVisibleObservable`,
    },
    {
        from: `itemsQueryListObservable`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiQueryListChanges`,
    },
    {
        from: `mouseDragFinishFrom`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiMouseDragFinishFrom`,
    },
    {
        from: `mustBePresent`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiMustBePresent`,
    },
    {
        from: `pressedObservable`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiPressedObservable`,
    },
    {
        from: `preventDefault`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiPreventDefault`,
    },
    {
        from: `stopPropagation`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiStopPropagation`,
    },
    {
        from: `typedFromEvent`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiTypedFromEvent`,
    },
    {
        from: `watch`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiWatch`,
    },
    {
        from: `isEdgeOlderThan`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsEdgeOlderThan`,
    },
    {
        from: `isEdge`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsEdge`,
    },
    {
        from: `isFirefox`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsFirefox`,
    },
    {
        from: `isIE`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsIE`,
    },
    {
        from: `isSafari`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsSafari`,
    },
    {
        from: `canScroll`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiCanScroll`,
    },
    {
        from: `containsOrAfter`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiContainsOrAfter`,
    },
    {
        from: `getActualTarget`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetActualTarget`,
    },
    {
        from: `getClipboardDataText`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetClipboardDataText`,
    },
    {
        from: `getDocumentOrShadowRoot`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetDocumentOrShadowRoot`,
    },
    {
        from: `getElementObscurers`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetElementObscures`,
    },
    {
        from: `getElementOffset`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetElementOffset`,
    },
    {
        from: `getScrollParent`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetScrollParent`,
    },
    {
        from: `isCurrentTarget`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsCurrentTarget`,
    },
    {
        from: `isInsideIframe`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsInsideIframe`,
    },
    {
        from: `isNodeIn`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsNodeIn`,
    },
    {
        from: `blurNativeFocused`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiBlurNativeFocused`,
    },
    {
        from: `getClosestFocusable`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetClosestFocusable`,
    },
    {
        from: `getClosestKeyboardFocusable`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetClosestFocusable`,
    },
    {
        from: `getNativeFocused`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetNativeFocused`,
    },
    {
        from: `isNativeFocusedIn`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsNativeFocusedIn`,
    },
    {
        from: `isNativeFocused`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsNativeFocused`,
    },
    {
        from: `isNativeKeyboardFocusable`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsNativeKeyboardFocusable`,
    },
    {
        from: `isNativeMouseFocusable`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsNativeMouseFocusable`,
    },
    {
        from: `moveFocus`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiMoveFocus`,
    },
    {
        from: `setNativeMouseFocused`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiSetNativeMouseFocused`,
    },
    {
        from: `px`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiPx`,
    },
    {
        from: `clamp`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiClamp`,
    },
    {
        from: `inRange`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiInRange`,
    },
    {
        from: `normalizeToIntNumber`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiNormalizeToIntNumber`,
    },
    {
        from: `quantize`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiQuantize`,
    },
    {
        from: `round`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiRound`,
    },
    {
        from: `ceil`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiCeil`,
    },
    {
        from: `floor`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiFloor`,
    },
    {
        from: `sum`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiSum`,
    },
    {
        from: `toInt`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiToInt`,
    },
    {
        from: `toRadians`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiToRadians`,
    },
    {
        from: `distanceBetweenTouches`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiDistanceBetweenTouches`,
    },
    {
        from: `easeInOutQuad`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiEaseInOutQuad`,
    },
    {
        from: `flatLength`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiFlatLength`,
    },
    {
        from: `getOriginalArrayFromQueryList`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetOriginalArrayFromQueryList`,
    },
    {
        from: `getSwipeDirection`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiGetSwipeDirection`,
    },
    {
        from: `isElementEditable`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsElementEditable`,
    },
    {
        from: `isNumber`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsNumber`,
    },
    {
        from: `isPresent`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsPresent`,
    },
    {
        from: `markControlAsTouchedAndValidate`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiMarkControlAsTouchedAndValidate`,
    },
    {
        from: `nullableSame`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiNullableSame`,
    },
    {
        from: `uniqBy`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiUniqBy`,
    },
    {
        from: `isApplePlatform`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsApplePlatform`,
    },
    {
        from: `isApple`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsApple`,
    },
    {
        from: `isIos`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiIsIos`,
    },
    {
        from: `svgLinearGradientProcessor`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `tuiSvgLinearGradientProcessor`,
    },
    {
        from: `textfieldWatchedControllerFactory`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiTextfieldWatchedControllerFactory`,
    },
    {
        from: `smartSearch`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiSmartSearch`,
    },
    {
        from: `isMobileResFactory`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiIsMobileResFactory`,
    },
    {
        from: `modeFactory`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiModeFactory`,
    },
    {
        from: `watchedControllerFactory`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiWatchedControllerFactory`,
    },
    {
        from: `areCssVarsSupported`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiAreCssVarsSupported`,
    },
    {
        from: `areCssVarsSupported`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiAreCssVarsSupported`,
    },
    {
        from: `checkFixedPosition`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiCheckFixedPosition`,
    },
    {
        from: `getSafeAreaSize`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiGetSafeAreaSize`,
    },
    {
        from: `getScreenWidth`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiGetScreenWidth`,
    },
    {
        from: `processIcon`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiProcessIcon`,
    },
    {
        from: `capitalizeFirstLetter`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiCapitalizeFirstLetter`,
    },
    {
        from: `capitalize`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiCapitalize`,
    },
    {
        from: `formatNumber`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiFormatNumber`,
    },
    {
        from: `formatPhone`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiFormatPhone`,
    },
    {
        from: `getFractionPartPadded`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiGetFractionPartPadded`,
    },
    {
        from: `numberToStringWithoutExp`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiNumberToStringWithoutExp`,
    },
    {
        from: `otherDecimalSymbol`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiOtherDecimalSymbol`,
    },
    {
        from: `pluralize`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiPluralize`,
    },
    {
        from: `maskedMoneyValueIsEmpty`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiMaskedMoneyValueIsEmpty`,
    },
    {
        from: `maskedNumberStringToNumber`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiMaskedNumberStringToNumber`,
    },
    {
        from: `getBorder`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiGetBorder`,
    },
    {
        from: `iconsPathFactory`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiIconsPathFactory`,
    },
    {
        from: `isEditingKey`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiIsEditingKey`,
    },
    {
        from: `isPresumedHTMLString`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiIsPresumedHTMLString`,
    },
    {
        from: `sizeBigger`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `tuiSizeBigger`,
    },
    {
        from: `extractI18n`,
        moduleSpecifier: [`@taiga-ui/i18n`],
        to: `tuiExtractI18n`,
    },
    {
        from: `extractValueFromEvent`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `tuiExtractValueFromEvent`,
    },
    {
        from: `getWordRange`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `tuiGetWordRange`,
    },
    {
        from: `scrollToElement`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `tuiScrollToElement`,
    },
    {
        from: `setRangeOffset`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `tuiSetRangeOffset`,
    },
    {
        from: `formatSize`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `tuiFormatSize`,
    },
    {
        from: `getAcceptArray`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `tuiGetAcceptArray`,
    },
    {
        from: `stringHashToHsl`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `tuiStringHashToHsl`,
    },
    {
        from: `normalizeDateValue`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `tuiNormalizeDateValue`,
    },
    {
        from: `getPrecision`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `tuiGetPrecision`,
    },
    {
        from: `isFlat`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `tuiIsFlat`,
    },
];
