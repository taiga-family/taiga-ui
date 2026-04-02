```ts
@Component({
  selector: 'my-portal-host',
  template: '<ng-container tuiPortalAnchor />',
  styleUrl: './my-portal-host.style.less',
  hostDirectives: [TuiPortalAnchor],
  providers: [tuiProvide(TuiPortalService, MyPortalService)],
})
export class MyPortalHost extends TuiPortals {}
```
