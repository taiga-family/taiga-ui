```ts
@Component({
  selector: 'my-portal-host',
  templateUrl: './my-portal-host.template.html',
  styleUrl: './my-portal-host.style.less',
  providers: [tuiAsPortal(MyPortalService)],
})
export class MyPortalHost extends TuiPortals {}
```
