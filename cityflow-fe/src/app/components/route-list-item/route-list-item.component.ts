import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBus, faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RoutesService } from '../../service/routes.service';

@Component({
  selector: 'app-route-list-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './route-list-item.component.html',
  styleUrl: './route-list-item.component.css'
})
export class RouteListItemComponent {
  //Inputs
  @Input() routeId: number = 0;
  @Input() routeName: string = '';
  @Input() startTime: string = '';
  @Input() endTime: string = '';

  //Icons
  faBus = faBus;
  faPlus = faPlus
  faPen = faPen;
  faTrash = faTrash;

  constructor(private routeService: RoutesService){}

  public showRoute(routeId : number) : void{
    this.routeService.showRoute(routeId);
  }

}