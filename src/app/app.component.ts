import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'vue', 'react'];
  topicHasError =true;
  submitted = false;
errorMsg = '';

  userModel = new User('', '', '', 199286, 9948109968, '');

 constructor(private _enrollmentService : EnrollmentService){}

  VaildationTopic(value:any){
     if(value === 'default') {
      this.topicHasError =true;
     }else {
      this.topicHasError = false
     }
  }

  onsubmit(){
    this.submitted = false;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
           data => console.log('success!',data),
           error => this.errorMsg = error.statusText
    )
  }
}
