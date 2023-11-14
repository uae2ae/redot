import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AtuhResponseData, AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy{
  isLoginMode = true;
  isLoading = false;
  error: string = '';
  @ViewChild(PlaceholderDirective, {static: false}) alertHost!: PlaceholderDirective;

  private closeSub!: Subscription;

  constructor(private http: HttpClient,private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {}
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnDestroy(): void {
    if (this.closeSub){
      this.closeSub.unsubscribe();
    }
  }

  onSubmit(form: NgForm){
    if(!form.valid)
    return;
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;

    let oathObs: Observable<AtuhResponseData>

    this.isLoading = true;
    if (this.isLoginMode){
      oathObs = this.authService.login(email,password)
    }else{
      oathObs = this.authService.signup(username,email,password)
    }

    oathObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage
      this.showErrorAlert(errorMessage);
      this.isLoading = false;
    });
    form.reset();
  }


  private showErrorAlert(message:string){
    // const alertCmp = new AlertComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef  = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = message;

    this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  onHandleError(){
    this.error = '';
  }
}
