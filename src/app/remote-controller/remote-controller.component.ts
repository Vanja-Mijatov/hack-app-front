import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../services/remote.service';

@Component({
  selector: 'app-remote-controller',
  templateUrl: './remote-controller.component.html',
  styleUrls: ['./remote-controller.component.css']
})
export class RemoteControllerComponent implements OnInit {

  automatic: boolean;
  manual: boolean;

  constructor(private remoteService: RemoteService) { }

  ngOnInit() {
    this.automatic = false;
    this.manual = true;
  }

  automaticChange($event) {
    this.automatic = $event;
  }

  manualChange($event) {
    this.manual = $event;
  }

  turnModeAuto() {
    if (this.automatic) {
      this.remoteService.turnMode(this.modeToJson(this.automatic)).subscribe(
        result => {
          console.log(result);
          alert('Automatic mode is on.');
        },
        error => {
          alert(error.message);
        });
    }
  }

  turnModeManual() {
    if (this.manual) {
      this.remoteService.turnMode(this.modeToJson(this.manual)).subscribe(
        result => {
          console.log(result);
          alert('Manual mode is on.');
        },
        error => {
          alert(error.message);
        });
    }
  }

  feedFishes() {
    this.remoteService.feedFish(this.modeToJson(this.automatic)).subscribe(
      result => {
        console.log(result);
        alert('Fish feeding');
      },
      error => {
        alert(error.message);
      });
  }

  filterWatter() {}

  heatWatter() {}

  stopHeating() {}

  modeToJson(data: boolean) {
    return JSON.stringify({
      'mode': data
    });
  }

}
