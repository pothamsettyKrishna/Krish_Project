import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from '../app-service.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private fb: FormBuilder, private appService: AppServiceService){}

  messageForm : any;

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: ['', [Validators.required]]
    });
  }

  sendMsg(){
    console.log(this.messageForm.value.message)

    this.appService.sendData(this.messageForm.value).subscribe(
      (success) => {
        console.log('success')
        console.log(success)
      },
        (error) => {
          console.log('Error')
          console.log(error)
        }
    );

  }

}
