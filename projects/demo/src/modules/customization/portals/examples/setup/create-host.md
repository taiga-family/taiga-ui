```ts
@Component({
  selector: 'my-portal-host',
  templateUrl: './my-portal-host.template.html',
  styleUrls: ['./my-portal-host.style.less'],
  providers: [tuiAsPortal(MyPortalService)],
})
export class MyPortalHost extends TuiPortals {}
```
