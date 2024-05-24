import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faHome, faIdCard, faInbox, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../service/auth.service';
import { User } from '../../models/user';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panel-menu',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './side-panel-menu.component.html',
  styleUrl: './side-panel-menu.component.css'
})
export class SidePanelMenuComponent implements OnInit{
  //Icons
  faUser = faUser;
  faHome = faHome;
  faIdCard = faIdCard;
  faInbox = faInbox;
  faCalendar = faCalendar;
  
  //Menu item selections
  showHome : boolean = true;
  showProfile : boolean = false;
  showCards : boolean = false;
  showInbox : boolean = false;
  showRoutes : boolean = false;
  showEmployees: boolean = false;
  showUserBalance: boolean = false;
  showUserCardBalance: boolean = false;
  showWorkCalendar: boolean = false

  token : string | null = localStorage.getItem('token');
  loggedUser! : User;
  loggedUserRole : string  = '';

  constructor(private authService : AuthService,
              private router: Router){}

  ngOnInit(): void {
    this.fetchUser();
  }

  public fetchUser() : void {
    if(this.token != null){
      this.authService.getUserFromToken(this.token).subscribe(
        (response : User) => {
          this.loggedUser = response;
          this.loggedUserRole = this.loggedUser.roles;
        },
        (error: HttpErrorResponse) => {
          console.log('Error fetching user data:\n', error.message);
        }
      )
    }
  }

  public viewHome() : void{
    this.showHome = true;
    this.showProfile = false;
    this.showCards = false;
    this.showInbox = false;
    this.showRoutes = false;
    this.showEmployees = false;
    this.showUserBalance = false;
    this.showUserCardBalance = false;
    this.showWorkCalendar = false;
  }
  
  public viewProfile() : void{
    this.showHome = false;
    this.showProfile = true;
    this.showCards = false;
    this.showInbox = false;
    this.showRoutes = false;
    this.showEmployees = false;
    this.showUserBalance = false;
    this.showUserCardBalance = false;
    this.navigateToProfile();
    this.showWorkCalendar = false;
  
  }

  public viewCards() : void{
    this.showHome = false;
    this.showProfile = false;
    this.showCards = true;
    this.showInbox = false;
    this.showWorkCalendar = false;
  }
  
  public viewInbox() : void{
    this.showHome = false;
    this.showProfile = false;
    this.showCards = false;
    this.showInbox = true;
    this.showRoutes = false;
    this.showEmployees = false;
    this.showUserBalance = false;
    this.showUserCardBalance = false;
    this.showWorkCalendar = false;
  }

  public viewRoutes() : void{
    this.showHome = false;
    this.showProfile = false;
    this.showRoutes = true;
    this.showInbox = false;
    this.navigateToRoutes();
    this.showWorkCalendar = false;
  }

  public viewEmployees() : void{
    this.showHome = false;
    this.showProfile = false;
    this.showEmployees = true;
    this.showInbox = false;
    this.navigateToEmployees();
    this.showWorkCalendar = false;
  }
  public viewUserBalance() : void{
    this.showHome = false;
    this.showProfile = false;
    this.showInbox = false;
    this.showUserBalance = true;
    this.showUserCardBalance = false;
    this.navigateToEmployees();
    this.showWorkCalendar = false;
  }
  public viewUserCardBalance() : void{
    this.showHome = false;
    this.showProfile = false;
    this.showInbox = false;
    this.showUserBalance = false;
    this.showUserCardBalance = true;
    this.navigateToUserCardBalance();
    this.showWorkCalendar = false;
  }
  public viewWorkCalendar() : void{
    this.showHome = false;
    this.showProfile = false;
    this.showCards = false;
    this.showInbox = false;
    this.showRoutes = false;
    this.showEmployees = false;
    this.showUserBalance = false;
    this.showUserCardBalance = false;
    this.showWorkCalendar = true;
    this.navigateToWorkCalendar();
  }

  public navigateToRoutes() : void {
    this.router.navigate(['/routes']);
  }

  public navigateToEmployees() : void {
    this.router.navigate(['/employees']);
  }

  public navigateToProfile() : void {
    this.router.navigate(['/profile']);
  }
  public navigateToUserBalance() : void {
    this.router.navigate(['/updateUserBalance']);
  }
  public navigateToUserCardBalance() : void {
    this.router.navigate(['/updateUserCardBalance']);
  }
  public navigateToWorkCalendar() : void {
    this.router.navigate(['/work-calendar']);
  }
}
