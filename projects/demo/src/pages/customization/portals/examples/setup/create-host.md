```ts
@Component({
  selector: 'my-portal-host',
  template: '<ng-container tuiVCR />',
  styleUrl: './my-portal-host.style.less',
  imports: [TuiVCR],
  providers: [tuiProvide(TuiPortalService, MyPortalService)],
})
export class MyPortalHost extends TuiPortals {}
```
