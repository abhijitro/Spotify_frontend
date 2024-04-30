import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../service/data/authentication.service';
import { UserProfileDataService } from '../service/data/user-profile-data.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UserProfile } from '../model/UserProfile';
import { AuthAccessToken } from '../model/AuthAccessToken';
import { HttpClientModule } from '@angular/common/http';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthenticationService;
  let userService: UserProfileDataService;
  let router: Router;
  let fakeUserProfile: UserProfile = {
    username: 'fakeUsername',
    password: 'fakePassword',
    email: 'fakeEmail',
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    phone:7003559802
  };
  let fakeAuthAccessToken: AuthAccessToken = {
    message: 'fakeMessage',
    role: 'fakeRole',
    username: 'fakeUsername',
    jwtToken: 'fakeToken'
  };

  const mockUserProfile: UserProfile = new UserProfile();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthenticationService},
        { provide: UserProfileDataService},
        { provide: Router},
      ],
      imports:[HttpClientModule]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    userService = TestBed.inject(UserProfileDataService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call register method on signUp', () => {
    
    let userSpy=spyOn(userService,'register').and.returnValue(of(fakeUserProfile));
    component.signUp();
  
    expect(userSpy).toHaveBeenCalledWith(component.username,component.firstName,component.lastName, component.password, component.email,component.phone,component.dob);
    expect(component.successMessage).toEqual('Successfully registered.');
    expect(component.errorMessage2).toEqual('');
  });
  

  // it('should call authenticate method on login', () => {
  //   let authSpy=spyOn(authService,'authenticate').and.returnValue(of(fakeAuthAccessToken));
  
  //   component.login();
  
  //   expect(authSpy).toHaveBeenCalledWith(component.loginUsername, component.loginPassword);
  //   expect(localStorage.setItem).toHaveBeenCalledWith('token', fakeAuthAccessToken.jwtToken);
  //   expect(router.navigate).toHaveBeenCalledWith(['/home']);
  // });
  
  

  // it('should handle error on login', () => {
  //   let authSpy=spyOn(authService,'tokenValidate').and.throwError('Please enter a valid User Name and password.');
    

  //   component.login();

  //   expect(authSpy).toHaveBeenCalled();
    
  // });
});

