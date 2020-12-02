/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
export var Breakpoints = {
    XSmall: '(max-width: 599.99px)',
    Small: '(min-width: 600px) and (max-width: 959.99px)',
    Medium: '(min-width: 960px) and (max-width: 1279.99px)',
    Large: '(min-width: 1280px) and (max-width: 1919.99px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
        '(max-width: 959.99px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2xheW91dC9icmVha3BvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxnRUFBZ0U7QUFDaEUseUNBQXlDO0FBQ3pDLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRztJQUN6QixNQUFNLEVBQUUsdUJBQXVCO0lBQy9CLEtBQUssRUFBRSw4Q0FBOEM7SUFDckQsTUFBTSxFQUFFLCtDQUErQztJQUN2RCxLQUFLLEVBQUUsZ0RBQWdEO0lBQ3ZELE1BQU0sRUFBRSxxQkFBcUI7SUFFN0IsT0FBTyxFQUFFLHFEQUFxRDtRQUNyRCxvREFBb0Q7SUFDN0QsTUFBTSxFQUFFLDRFQUE0RTtRQUM1RSw0RUFBNEU7SUFDcEYsR0FBRyxFQUFFLGtEQUFrRDtRQUNsRCxrREFBa0Q7SUFFdkQsZUFBZSxFQUFFLG1EQUFtRDtJQUNwRSxjQUFjLEVBQUUsMEVBQTBFO0lBQzFGLFdBQVcsRUFBRSxnREFBZ0Q7SUFFN0QsZ0JBQWdCLEVBQUUsb0RBQW9EO0lBQ3RFLGVBQWUsRUFBRSw0RUFBNEU7SUFDN0YsWUFBWSxFQUFFLGtEQUFrRDtDQUNqRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vLyBQYXNjYWxDYXNlIGlzIGJlaW5nIHVzZWQgYXMgQnJlYWtwb2ludHMgaXMgdXNlZCBsaWtlIGFuIGVudW0uXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuZXhwb3J0IGNvbnN0IEJyZWFrcG9pbnRzID0ge1xuICBYU21hbGw6ICcobWF4LXdpZHRoOiA1OTkuOTlweCknLFxuICBTbWFsbDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5Ljk5cHgpJyxcbiAgTWVkaXVtOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpJyxcbiAgTGFyZ2U6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpJyxcbiAgWExhcmdlOiAnKG1pbi13aWR0aDogMTkyMHB4KScsXG5cbiAgSGFuZHNldDogJyhtYXgtd2lkdGg6IDU5OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICAgICAnKG1heC13aWR0aDogOTU5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBUYWJsZXQ6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICAgICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFdlYjogJyhtaW4td2lkdGg6IDg0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuXG4gIEhhbmRzZXRQb3J0cmFpdDogJyhtYXgtd2lkdGg6IDU5OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICBUYWJsZXRQb3J0cmFpdDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIFdlYlBvcnRyYWl0OiAnKG1pbi13aWR0aDogODQwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG5cbiAgSGFuZHNldExhbmRzY2FwZTogJyhtYXgtd2lkdGg6IDk1OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgVGFibGV0TGFuZHNjYXBlOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBXZWJMYW5kc2NhcGU6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxufTtcbiJdfQ==