import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { AuthenticationService } from 'src/app/service/data/authentication.service';
import { UserProfileDataService } from 'src/app/service/data/user-profile-data.service';
import { WishlistDataService } from 'src/app/service/data/wishlist-data.service';
import { of } from 'rxjs';
import { UserProfile } from 'src/app/model/UserProfile';
import { SideBarComponent } from 'src/app/navigation/side-bar/side-bar.component';
import { FooterComponent } from 'src/app/navigation/footer/footer.component';
import { Wishlist } from 'src/app/model/Wishlist';
import { HttpClientModule } from '@angular/common/http';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let authService: AuthenticationService;
  let userProfileService: UserProfileDataService;
  let wishlistService: WishlistDataService;
  let fakeUserProfile: UserProfile = {
    username: 'fakeUsername',
    password: 'fakePassword',
    email: 'fakeEmail',
    firstName: '',
    lastName: '',
    phone: 7003559802,
    dateOfBirth: new Date()
  };
  let fakeWishlist: Wishlist={
    username:'fakeUsername',
    tracks:[]
  }
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [FooterComponent,SideBarComponent,ProfileComponent],
      providers: [AuthenticationService,UserProfileDataService,WishlistDataService],
      imports:[HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    userProfileService = TestBed.inject(UserProfileDataService);
    wishlistService = TestBed.inject(WishlistDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call validateToken on ngOnInit', () => {
    let authSpy=spyOn(authService,'validateToken').and.returnValue(of({}));
    let subSpy=spyOn(authService.validateToken('fakeToken'),'subscribe');
    component.ngOnInit();
    expect(authSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  });

  it('should call getUserProfile on ngOnInit',() => {
    
    let userProfileSpy=spyOn(userProfileService,'getUserById').and.returnValue(of(fakeUserProfile));
    let subSpy=spyOn(userProfileService.getUserById(),'subscribe');
    component.ngOnInit();
    expect(userProfileSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  });

  it('should call getWishlist on ngOnInit', () => {
    
    let wishlistSpy=spyOn(wishlistService,'getUserWishList').and.returnValue(of(fakeWishlist));
    let subSpy=spyOn(wishlistService.getUserWishList(),'subscribe');
    component.ngOnInit();
    expect(wishlistSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  });
});
