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
        define("@angular/cdk/schematics/ng-update/data/input-names", ["require", "exports", "@angular/cdk/schematics/update-tool/target-version"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const target_version_1 = require("@angular/cdk/schematics/update-tool/target-version");
    exports.inputNames = {
        [target_version_1.TargetVersion.V6]: [
            {
                pr: 'https://github.com/angular/components/pull/10161',
                changes: [
                    {
                        replace: 'origin',
                        replaceWith: 'cdkConnectedOverlayOrigin',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'positions',
                        replaceWith: 'cdkConnectedOverlayPositions',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'offsetX',
                        replaceWith: 'cdkConnectedOverlayOffsetX',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'offsetY',
                        replaceWith: 'cdkConnectedOverlayOffsetY',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'width',
                        replaceWith: 'cdkConnectedOverlayWidth',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'height',
                        replaceWith: 'cdkConnectedOverlayHeight',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'minWidth',
                        replaceWith: 'cdkConnectedOverlayMinWidth',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'minHeight',
                        replaceWith: 'cdkConnectedOverlayMinHeight',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'backdropClass',
                        replaceWith: 'cdkConnectedOverlayBackdropClass',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'scrollStrategy',
                        replaceWith: 'cdkConnectedOverlayScrollStrategy',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'open',
                        replaceWith: 'cdkConnectedOverlayOpen',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    },
                    {
                        replace: 'hasBackdrop',
                        replaceWith: 'cdkConnectedOverlayHasBackdrop',
                        whitelist: { attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay'] }
                    }
                ]
            },
        ]
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbmFtZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL2RhdGEvaW5wdXQtbmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCx1RkFBK0Q7SUFpQmxELFFBQUEsVUFBVSxHQUF5QztRQUM5RCxDQUFDLDhCQUFhLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDbEI7Z0JBQ0UsRUFBRSxFQUFFLGtEQUFrRDtnQkFDdEQsT0FBTyxFQUFFO29CQUNQO3dCQUNFLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixXQUFXLEVBQUUsMkJBQTJCO3dCQUN4QyxTQUFTLEVBQ0wsRUFBQyxVQUFVLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxFQUFDO3FCQUN4RjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsV0FBVyxFQUFFLDhCQUE4Qjt3QkFDM0MsU0FBUyxFQUNMLEVBQUMsVUFBVSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsRUFBQztxQkFDeEY7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLFNBQVM7d0JBQ2xCLFdBQVcsRUFBRSw0QkFBNEI7d0JBQ3pDLFNBQVMsRUFDTCxFQUFDLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDLEVBQUM7cUJBQ3hGO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxTQUFTO3dCQUNsQixXQUFXLEVBQUUsNEJBQTRCO3dCQUN6QyxTQUFTLEVBQ0wsRUFBQyxVQUFVLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxFQUFDO3FCQUN4RjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsT0FBTzt3QkFDaEIsV0FBVyxFQUFFLDBCQUEwQjt3QkFDdkMsU0FBUyxFQUNMLEVBQUMsVUFBVSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsRUFBQztxQkFDeEY7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLFdBQVcsRUFBRSwyQkFBMkI7d0JBQ3hDLFNBQVMsRUFDTCxFQUFDLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDLEVBQUM7cUJBQ3hGO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixXQUFXLEVBQUUsNkJBQTZCO3dCQUMxQyxTQUFTLEVBQ0wsRUFBQyxVQUFVLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxFQUFDO3FCQUN4RjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsV0FBVyxFQUFFLDhCQUE4Qjt3QkFDM0MsU0FBUyxFQUNMLEVBQUMsVUFBVSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsRUFBQztxQkFDeEY7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFdBQVcsRUFBRSxrQ0FBa0M7d0JBQy9DLFNBQVMsRUFDTCxFQUFDLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDLEVBQUM7cUJBQ3hGO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7d0JBQ3pCLFdBQVcsRUFBRSxtQ0FBbUM7d0JBQ2hELFNBQVMsRUFDTCxFQUFDLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDLEVBQUM7cUJBQ3hGO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxNQUFNO3dCQUNmLFdBQVcsRUFBRSx5QkFBeUI7d0JBQ3RDLFNBQVMsRUFDTCxFQUFDLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDLEVBQUM7cUJBQ3hGO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixXQUFXLEVBQUUsZ0NBQWdDO3dCQUM3QyxTQUFTLEVBQ0wsRUFBQyxVQUFVLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxFQUFDO3FCQUN4RjtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VGFyZ2V0VmVyc2lvbn0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvdGFyZ2V0LXZlcnNpb24nO1xuaW1wb3J0IHtWZXJzaW9uQ2hhbmdlc30gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvdmVyc2lvbi1jaGFuZ2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dE5hbWVVcGdyYWRlRGF0YSB7XG4gIC8qKiBUaGUgQElucHV0KCkgbmFtZSB0byByZXBsYWNlLiAqL1xuICByZXBsYWNlOiBzdHJpbmc7XG4gIC8qKiBUaGUgbmV3IG5hbWUgZm9yIHRoZSBASW5wdXQoKS4gKi9cbiAgcmVwbGFjZVdpdGg6IHN0cmluZztcbiAgLyoqIFdoaXRlbGlzdCB3aGVyZSB0aGlzIHJlcGxhY2VtZW50IGlzIG1hZGUuIElmIG9taXR0ZWQgaXQgaXMgbWFkZSBpbiBhbGwgSFRNTCAmIENTUyAqL1xuICB3aGl0ZWxpc3Q6IHtcbiAgICAvKiogTGltaXQgdG8gZWxlbWVudHMgd2l0aCBhbnkgb2YgdGhlc2UgZWxlbWVudCB0YWdzLiAqL1xuICAgIGVsZW1lbnRzPzogc3RyaW5nW10sXG4gICAgLyoqIExpbWl0IHRvIGVsZW1lbnRzIHdpdGggYW55IG9mIHRoZXNlIGF0dHJpYnV0ZXMuICovXG4gICAgYXR0cmlidXRlcz86IHN0cmluZ1tdLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgaW5wdXROYW1lczogVmVyc2lvbkNoYW5nZXM8SW5wdXROYW1lVXBncmFkZURhdGE+ID0ge1xuICBbVGFyZ2V0VmVyc2lvbi5WNl06IFtcbiAgICB7XG4gICAgICBwcjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvcHVsbC8xMDE2MScsXG4gICAgICBjaGFuZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICByZXBsYWNlOiAnb3JpZ2luJyxcbiAgICAgICAgICByZXBsYWNlV2l0aDogJ2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW4nLFxuICAgICAgICAgIHdoaXRlbGlzdDpcbiAgICAgICAgICAgICAge2F0dHJpYnV0ZXM6IFsnY2RrLWNvbm5lY3RlZC1vdmVybGF5JywgJ2Nvbm5lY3RlZC1vdmVybGF5JywgJ2Nka0Nvbm5lY3RlZE92ZXJsYXknXX1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJlcGxhY2U6ICdwb3NpdGlvbnMnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucycsXG4gICAgICAgICAgd2hpdGVsaXN0OlxuICAgICAgICAgICAgICB7YXR0cmlidXRlczogWydjZGstY29ubmVjdGVkLW92ZXJsYXknLCAnY29ubmVjdGVkLW92ZXJsYXknLCAnY2RrQ29ubmVjdGVkT3ZlcmxheSddfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVwbGFjZTogJ29mZnNldFgnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnY2RrQ29ubmVjdGVkT3ZlcmxheU9mZnNldFgnLFxuICAgICAgICAgIHdoaXRlbGlzdDpcbiAgICAgICAgICAgICAge2F0dHJpYnV0ZXM6IFsnY2RrLWNvbm5lY3RlZC1vdmVybGF5JywgJ2Nvbm5lY3RlZC1vdmVybGF5JywgJ2Nka0Nvbm5lY3RlZE92ZXJsYXknXX1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJlcGxhY2U6ICdvZmZzZXRZJyxcbiAgICAgICAgICByZXBsYWNlV2l0aDogJ2Nka0Nvbm5lY3RlZE92ZXJsYXlPZmZzZXRZJyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6XG4gICAgICAgICAgICAgIHthdHRyaWJ1dGVzOiBbJ2Nkay1jb25uZWN0ZWQtb3ZlcmxheScsICdjb25uZWN0ZWQtb3ZlcmxheScsICdjZGtDb25uZWN0ZWRPdmVybGF5J119XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByZXBsYWNlOiAnd2lkdGgnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoJyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6XG4gICAgICAgICAgICAgIHthdHRyaWJ1dGVzOiBbJ2Nkay1jb25uZWN0ZWQtb3ZlcmxheScsICdjb25uZWN0ZWQtb3ZlcmxheScsICdjZGtDb25uZWN0ZWRPdmVybGF5J119XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByZXBsYWNlOiAnaGVpZ2h0JyxcbiAgICAgICAgICByZXBsYWNlV2l0aDogJ2Nka0Nvbm5lY3RlZE92ZXJsYXlIZWlnaHQnLFxuICAgICAgICAgIHdoaXRlbGlzdDpcbiAgICAgICAgICAgICAge2F0dHJpYnV0ZXM6IFsnY2RrLWNvbm5lY3RlZC1vdmVybGF5JywgJ2Nvbm5lY3RlZC1vdmVybGF5JywgJ2Nka0Nvbm5lY3RlZE92ZXJsYXknXX1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJlcGxhY2U6ICdtaW5XaWR0aCcsXG4gICAgICAgICAgcmVwbGFjZVdpdGg6ICdjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGgnLFxuICAgICAgICAgIHdoaXRlbGlzdDpcbiAgICAgICAgICAgICAge2F0dHJpYnV0ZXM6IFsnY2RrLWNvbm5lY3RlZC1vdmVybGF5JywgJ2Nvbm5lY3RlZC1vdmVybGF5JywgJ2Nka0Nvbm5lY3RlZE92ZXJsYXknXX1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJlcGxhY2U6ICdtaW5IZWlnaHQnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnY2RrQ29ubmVjdGVkT3ZlcmxheU1pbkhlaWdodCcsXG4gICAgICAgICAgd2hpdGVsaXN0OlxuICAgICAgICAgICAgICB7YXR0cmlidXRlczogWydjZGstY29ubmVjdGVkLW92ZXJsYXknLCAnY29ubmVjdGVkLW92ZXJsYXknLCAnY2RrQ29ubmVjdGVkT3ZlcmxheSddfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVwbGFjZTogJ2JhY2tkcm9wQ2xhc3MnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnY2RrQ29ubmVjdGVkT3ZlcmxheUJhY2tkcm9wQ2xhc3MnLFxuICAgICAgICAgIHdoaXRlbGlzdDpcbiAgICAgICAgICAgICAge2F0dHJpYnV0ZXM6IFsnY2RrLWNvbm5lY3RlZC1vdmVybGF5JywgJ2Nvbm5lY3RlZC1vdmVybGF5JywgJ2Nka0Nvbm5lY3RlZE92ZXJsYXknXX1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJlcGxhY2U6ICdzY3JvbGxTdHJhdGVneScsXG4gICAgICAgICAgcmVwbGFjZVdpdGg6ICdjZGtDb25uZWN0ZWRPdmVybGF5U2Nyb2xsU3RyYXRlZ3knLFxuICAgICAgICAgIHdoaXRlbGlzdDpcbiAgICAgICAgICAgICAge2F0dHJpYnV0ZXM6IFsnY2RrLWNvbm5lY3RlZC1vdmVybGF5JywgJ2Nvbm5lY3RlZC1vdmVybGF5JywgJ2Nka0Nvbm5lY3RlZE92ZXJsYXknXX1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJlcGxhY2U6ICdvcGVuJyxcbiAgICAgICAgICByZXBsYWNlV2l0aDogJ2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuJyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6XG4gICAgICAgICAgICAgIHthdHRyaWJ1dGVzOiBbJ2Nkay1jb25uZWN0ZWQtb3ZlcmxheScsICdjb25uZWN0ZWQtb3ZlcmxheScsICdjZGtDb25uZWN0ZWRPdmVybGF5J119XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByZXBsYWNlOiAnaGFzQmFja2Ryb3AnLFxuICAgICAgICAgIHJlcGxhY2VXaXRoOiAnY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wJyxcbiAgICAgICAgICB3aGl0ZWxpc3Q6XG4gICAgICAgICAgICAgIHthdHRyaWJ1dGVzOiBbJ2Nkay1jb25uZWN0ZWQtb3ZlcmxheScsICdjb25uZWN0ZWQtb3ZlcmxheScsICdjZGtDb25uZWN0ZWRPdmVybGF5J119XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICBdXG59O1xuIl19