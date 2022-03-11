```ts
@Component({
  selector: 'my-portal-host',
  templateUrl: './my-portal-host.template.html',
  styleUrls: ['./my-portal-host.style.less'],
  changeDetection,
  providers: [{provide: AbstractTuiPortalService, useExisting: MyPortalService}],
})
export class MyPortalHost extends AbstractTuiPortalHostComponent {}
```
