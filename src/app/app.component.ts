import { Component, OnInit } from '@angular/core';
import { Team } from './model/team';
import { BaseService } from './service/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vbApp';
  counter = 100;
  constructor(private baseService: BaseService<Team>){

}
ngOnInit() {
  this.baseService.getAll('teams').subscribe(
    teams => console.log(teams),
    err => console.error("error")
  )
}
}
