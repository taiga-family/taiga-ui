/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/cdk/schematics/ng-update/data/property-names", ["require", "exports", "@angular/cdk/schematics/update-tool/target-version"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const target_version_1 = require("@angular/cdk/schematics/update-tool/target-version");
    exports.propertyNames = {
        [target_version_1.TargetVersion.V9]: [
            {
                pr: 'https://github.com/angular/components/pull/17084',
                changes: [{
                        replace: 'boundaryElementSelector',
                        replaceWith: 'boundaryElement',
                        whitelist: { classes: ['CdkDrag'] }
                    }]
            },
            {
                pr: 'https://github.com/angular/components/pull/17302',
                changes: [{
                        replace: 'onChange',
                        replaceWith: 'changed',
                        whitelist: { classes: ['SelectionModel'] }
                    }]
            }
        ],
        [target_version_1.TargetVersion.V8]: [],
        [target_version_1.TargetVersion.V7]: [
            {
                pr: 'https://github.com/angular/components/pull/8286',
                changes: [{ replace: 'onChange', replaceWith: 'changed', whitelist: { classes: ['SelectionModel'] } }]
            },
            {
                pr: 'https://github.com/angular/components/pull/12927',
                changes: [{
                        replace: 'flexibleDiemsions',
                        replaceWith: 'flexibleDimensions',
                        whitelist: { classes: ['CdkConnectedOverlay'] }
                    }]
            }
        ],
        [target_version_1.TargetVersion.V6]: [
            {
                pr: 'https://github.com/angular/components/pull/10161',
                changes: [
                    {
                        replace: '_deprecatedOrigin',
                        replaceWith: 'origin',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedPositions',
                        replaceWith: 'positions',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedOffsetX',
                        replaceWith: 'offsetX',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedOffsetY',
                        replaceWith: 'offsetY',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedWidth',
                        replaceWith: 'width',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedHeight',
                        replaceWith: 'height',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedMinWidth',
                        replaceWith: 'minWidth',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedMinHeight',
                        replaceWith: 'minHeight',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedBackdropClass',
                        replaceWith: 'backdropClass',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedScrollStrategy',
                        replaceWith: 'scrollStrategy',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedOpen',
                        replaceWith: 'open',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    },
                    {
                        replace: '_deprecatedHasBackdrop',
                        replaceWith: 'hasBackdrop',
                        whitelist: { classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective'] }
                    }
                ]
            },
            {
                pr: 'https://github.com/angular/components/pull/10257',
                changes: [
                    {
                        replace: '_deprecatedPortal',
                        replaceWith: 'portal',
                        whitelist: { classes: ['CdkPortalOutlet'] }
                    },
                    {
                        replace: '_deprecatedPortalHost',
                        replaceWith: 'portal',
                        whitelist: { classes: ['CdkPortalOutlet'] }
                    }
                ]
            },
        ]
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktbmFtZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL2RhdGEvcHJvcGVydHktbmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCx1RkFBK0Q7SUFlbEQsUUFBQSxhQUFhLEdBQTRDO1FBQ3BFLENBQUMsOEJBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNsQjtnQkFDRSxFQUFFLEVBQUUsa0RBQWtEO2dCQUN0RCxPQUFPLEVBQUUsQ0FBQzt3QkFDUixPQUFPLEVBQUUseUJBQXlCO3dCQUNsQyxXQUFXLEVBQUUsaUJBQWlCO3dCQUM5QixTQUFTLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQztxQkFDbEMsQ0FBQzthQUNIO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLGtEQUFrRDtnQkFDdEQsT0FBTyxFQUFFLENBQUM7d0JBQ1IsT0FBTyxFQUFFLFVBQVU7d0JBQ25CLFdBQVcsRUFBRSxTQUFTO3dCQUN0QixTQUFTLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO3FCQUN6QyxDQUFDO2FBQ0g7U0FDRjtRQUNELENBQUMsOEJBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RCLENBQUMsOEJBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNsQjtnQkFDRSxFQUFFLEVBQUUsaURBQWlEO2dCQUNyRCxPQUFPLEVBQ0gsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLEVBQUMsQ0FBQzthQUM5RjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxrREFBa0Q7Z0JBQ3RELE9BQU8sRUFBRSxDQUFDO3dCQUNSLE9BQU8s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QVMsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUM7cUJBQzFDO29CQUNEO3dCQUNFLE9BQU8sRUFBRSx1QkFBdUI7d0JBQ2hDLFdBQVcsRUFBRSxRQUFRO3dCQUNyQixTQUFTLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO3FCQUMxQztpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VGFyZ2V0VmVyc2lvbn0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvdGFyZ2V0LXZlcnNpb24nO1xuaW1wb3J0IHtWZXJzaW9uQ2hhbmdlc30gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvdmVyc2lvbi1jaGFuZ2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eU5hbWVVcGdyYWRlRGF0YSB7XG4gIC8qKiBUaGUgcHJvcGVydHkgbmFtZSB0byByZXBsYWNlLiAqL1xuICByZXBsYWNlOiBzdHJpbmc7XG4gIC8qKiBUaGUgbmV3IG5hbWUgZm9yIHRoZSBwcm9wZXJ0eS4gKi9cbiAgcmVwbGFjZVdpdGg6IHN0cmluZztcbiAgLyoqIFdoaXRlbGlzdCB3aGVyZSB0aGlzIHJlcGxhY2VtZW50IGlzIG1hZGUuIElmIG9taXR0ZWQgaXQgaXMgbWFkZSBmb3IgYWxsIENsYXNzZXMuICovXG4gIHdoaXRlbGlzdDoge1xuICAgIC8qKiBSZXBsYWNlIHRoZSBwcm9wZXJ0eSBvbmx5IHdoZW4gaXRzIHR5cGUgaXMgb25lIG9mIHRoZSBnaXZlbiBDbGFzc2VzLiAqL1xuICAgIGNsYXNzZXM6IHN0cmluZ1tdO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcHJvcGVydHlOYW1lczogVmVyc2lvbkNoYW5nZXM8UHJvcGVydHlOYW1lVXBncmFkZURhdGE+ID0ge1xuICBbVGFyZ2V0VmVyc2lvbi5WOV06IFtcbiAgICB7XG4gICAgICBwcjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvcHVsbC8xNzA4NCcsXG4gICAgICBjaGFuZ2VzOiBbe1xuICAgICAgICByZXBsYWNlOiAnYm91bmRhcnlFbGVtZW50U2VsZWN0b3InLFxuICAgICAgICByZXBsYWNlV2l0aDogJ2JvdW5kYXJ5RWxlbWVudCcsXG4gICAgICAgIHdoaXRlbGlzdDoge2NsYXNzZXM6IFsnQ2RrRHJhZyddfVxuICAgICAgfV1cbiAgICB9LFxuICAgIHtcbiAgICAgIHByOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9wdWxsLzE3MzAyJyxcbiAgICAgIGNoYW5nZXM6IFt7XG4gICAgICAgIHJlcGxhY2U6ICdvbkNoYW5nZScsXG4gICAgICAgIHJlcGxhY2VXaXRoOiAnY2hhbmdlZCcsXG4gICAgICAgIHdoaXRlbGlzdDoge2NsYXNzZXM6IFsnU2VsZWN0aW9uTW9kZWwnXX1cbiAgICAgIH1dXG4gICAgfVxuICBdLFxuICBbVGFyZ2V0VmVyc2lvbi5WOF06IFtdLFxuICBbVGFyZ2V0VmVyc2lvbi5WN106IFtcbiAgICB7XG4gICAgICBwcjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvcHVsbC84Mjg2JyxcbiAgICAgIGNoYW5nZXM6XG4gICAgICAgICAgW3tyZXBsYWNlOiAnb25DaGFuZ2UnLCByZXBsYWNlV2l0aDogJ2NoYW5nZWQnLCB3aGl0ZWxpc3Q6IHtjbGFzc2VzOiBbJ1NlbGVjdGlvbk1vZGVsJ119fV1cbiAgICB9LFxuXG4gICAge1xuICAgICAgcHI6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL3B1bGwvMTI5MjcnLFxuICAgICAgY2hhbmdlczogW3tcbiAgICAgICAgcmVwbGFjZTogJ2ZsZXhpYmxlRGllbXNpb25zJyxcbiAgICAgICAgcmVwbGFjZVdpdGg6ICdmbGV4aWJsZURpbWVuc2lvbnMnLFxuICAgICAgICB3aGl0ZWxpc3Q6IHtjbGFzc2VzOiBbJ0Nka0Nvbm5lY3RlZE92ZXJsYXknXX1cbiAgICAgIH1dXG4gICAgfVxuICBdLFxuXG4gIFtUYXJnZXRWZXJzaW9uLlY2XTogW1xuICAgIHtcbiAgICAgIHByOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9wdWxsLzEwMTYxJyxcbiAgICAgIGNoYW5nZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJlcGxhY2U6ICdfZGVwcmVjYXRlZE9yaWdpbicsXG4gICAgICAgICAgcmVwbGFjZVdpdGg6ICdvcmlnaW4nLFxuICAgICAgICAgIHdoaXRlbGlzdDoge2NsYXNzZXM6IFsnQ2RrQ29ubmVjdGVkT3ZlcmxheScsICdDb25uZWN0ZWRPdmVybGF5RGlyZWN0aXZlJ119XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByZXBsYWNlOiAnX2RlcHJlY2F0ZWRQb3NpdGlvbnMnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAncG9zaXRpb25zJyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6IHtjbGFzc2VzOiBbJ0Nka0Nvbm5lY3RlZE92ZXJsYXknLCAnQ29ubmVjdGVkT3ZlcmxheURpcmVjdGl2ZSddfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVwbGFjZTogJ19kZXByZWNhdGVkT2Zmc2V0WCcsXG4gICAgICAgICAgcmVwbGFjZVdpdGg6ICdvZmZzZXRYJyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6IHtjbGFzc2VzOiBbJ0Nka0Nvbm5lY3RlZE92ZXJsYXknLCAnQ29ubmVjdGVkT3ZlcmxheURpcmVjdGl2ZSddfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVwbGFjZTogJ19kZXByZWNhdGVkT2Zmc2V0WScsXG4gICAgICAgICAgcmVwbGFjZVdpdGg6ICdvZmZzZXRZJyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6IHtjbGFzc2VzOiBbJ0Nka0Nvbm5lY3RlZE92ZXJsYXknLCAnQ29ubmVjdGVkT3ZlcmxheURpcmVjdGl2ZSddfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVwbGFjZTogJ19kZXByZWNhdGVkV2lkdGgnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnd2lkdGgnLFxuICAgICAgICAgIHdoaXRlbGlzdDoge2NsYXNzZXM6IFsnQ2RrQ29ubmVjdGVkT3ZlcmxheScsICdDb25uZWN0ZWRPdmVybGF5RGlyZWN0aXZlJ119XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByZXBsYWNlOiAnX2RlcHJlY2F0ZWRIZWlnaHQnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnaGVpZ2h0JyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6IHtjbGFzc2VzOiBbJ0Nka0Nvbm5lY3RlZE92ZXJsYXknLCAnQ29ubmVjdGVkT3ZlcmxheURpcmVjdGl2ZSddfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVwbGFjZTogJ19kZXByZWNhdGVkTWluV2lkdGgnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnbWluV2lkdGgnLFxuICAgICAgICAgIHdoaXRlbGlzdDoge2NsYXNzZXM6IFsnQ2RrQ29ubmVjdGVkT3ZlcmxheScsICdDb25uZWN0ZWRPdmVybGF5RGlyZWN0aXZlJ119XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByZXBsYWNlOiAnX2RlcHJlY2F0ZWRNaW5IZWlnaHQnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnbWluSGVpZ2h0JyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6IHtjbGFzc2VzOiBbJ0Nka0Nvbm5lY3RlZE92ZXJsYXknLCAnQ29ubmVjdGVkT3ZlcmxheURpcmVjdGl2ZSddfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVwbGFjZTogJ19kZXByZWNhdGVkQmFja2Ryb3BDbGFzcycsXG4gICAgICAgICAgcmVwbGFjZVdpdGg6ICdiYWNrZHJvcENsYXNzJyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6IHtjbGFzc2VzOiBbJ0Nka0Nvbm5lY3RlZE92ZXJsYXknLCAnQ29ubmVjdGVkT3ZlcmxheURpcmVjdGl2ZSddfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVwbGFjZTogJ19kZXByZWNhdGVkU2Nyb2xsU3RyYXRlZ3knLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnc2Nyb2xsU3RyYXRlZ3knLFxuICAgICAgICAgIHdoaXRlbGlzdDoge2NsYXNzZXM6IFsnQ2RrQ29ubmVjdGVkT3ZlcmxheScsICdDb25uZWN0ZWRPdmVybGF5RGlyZWN0aXZlJ119XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByZXBsYWNlOiAnX2RlcHJlY2F0ZWRPcGVuJyxcbiAgICAgICAgICByZXBsYWNlV2l0aDogJ29wZW4nLFxuICAgICAgICAgIHdoaXRlbGlzdDoge2NsYXNzZXM6IFsnQ2RrQ29ubmVjdGVkT3ZlcmxheScsICdDb25uZWN0ZWRPdmVybGF5RGlyZWN0aXZlJ119XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByZXBsYWNlOiAnX2RlcHJlY2F0ZWRIYXNCYWNrZHJvcCcsXG4gICAgICAgICAgcmVwbGFjZVdpdGg6ICdoYXNCYWNrZHJvcCcsXG4gICAgICAgICAgd2hpdGVsaXN0OiB7Y2xhc3NlczogWydDZGtDb25uZWN0ZWRPdmVybGF5JywgJ0Nvbm5lY3RlZE92ZXJsYXlEaXJlY3RpdmUnXX1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBwcjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvcHVsbC8xMDI1NycsXG4gICAgICBjaGFuZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICByZXBsYWNlOiAnX2RlcHJlY2F0ZWRQb3J0YWwnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAncG9ydGFsJyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6IHtjbGFzc2VzOiBbJ0Nka1BvcnRhbE91dGxldCddfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVwbGFjZTogJ19kZXByZWNhdGVkUG9ydGFsSG9zdCcsXG4gICAgICAgICAgcmVwbGFjZVdpdGg6ICdwb3J0YWwnLFxuICAgICAgICAgIHdoaXRlbGlzdDoge2NsYXNzZXM6IFsnQ2RrUG9ydGFsT3V0bGV0J119XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICBdXG59O1xuIl19