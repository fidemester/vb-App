import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Team } from './model/team';
import { AuthService } from './service/auth.service';
import { BaseService } from './service/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any ={};
  title = 'vbApp';
  counter = 100;
  teamKeys: string[]= [];
  constructor(private baseService: BaseService<Team>,
    private afAuth: AngularFireAuth,
    private authService: AuthService)
    {
      let keyTeam: Team = new Team();
      this.teamKeys= Object.keys(keyTeam);

}
ngOnInit() {
  this.authService.login()
  this.afAuth.user.subscribe(
    user =>{
      console.log(user);
      this.user = user},
    err => console.log(err),
  )

}
getAllData(){
  this.baseService.getAll('teams').subscribe(
    teams => console.log(teams),
    err => console.error("error")
  )
}
onLogin(){
  this.authService.login();
}
onLogout(){
  this.authService.logout();
}
}
