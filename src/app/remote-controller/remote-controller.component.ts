import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../services/remote.service';

@Component({
  selector: 'app-remote-controller',
  templateUrl: './remote-controller.component.html',
  styleUrls: ['./remote-controller.component.css']
})
export class RemoteControllerComponent implements OnInit {

  automatic: boolean;
  filter: boolean;
  temperature: string;
  minutes: string;

  constructor(private remoteService: RemoteService) {
   }

  ngOnInit() {
    this.automatic = false;
    this.filter = false;
    this.temperature = '';
    this.minutes = '';
  }

  automaticChange($event) {
    console.log($event);
    this.automatic = $event;
  }

  filterChange($event) {
    this.filter = $event;
  }

  turnModeAuto() {
    this.remoteService.turnAutomatic().subscribe(
      result => {
        console.log(result);
        alert('Automatic mode is on.');
        this.automatic = true;
      },
      error => {
        alert(error.message);
      });
  }

  turnOnManual() {
    this.remoteService.turnOff().subscribe(
      result => {
        console.log(result);
        alert('Manual mode is on.');
        this.automatic = false;
      },
      error => {
        alert(error.message);
      });
  }

  feedFishes() {
    this.remoteService.feedFish().subscribe(
      result => {
        console.log(result);
        alert('Fish feeding');
      },
      error => {
        alert(error.message);
      });
  }

  filterOn() {
    this.remoteService.filterOn().subscribe(
      result => {
        console.log(result);
        alert('Filter is on.');
        this.filter = true;
      },
      error => {
        alert(error.message);
      });
  }

  filterOff() {
    this.remoteService.filterOff().subscribe(
      result => {
        console.log(result);
        alert('Filter is off.');
        this.filter = false;
      },
      error => {
        alert(error.message);
      });
  }

  heating() {
    if (this.temperature !== null && this.temperature !== '') {
      this.remoteService.fishTemperature(this.temperature).subscribe(
        result => {
          console.log(result);
          alert('Heating.');
        },
        error => {
          alert(error.message);
        });
    }
  }

  waterPlants() {
    this.remoteService.waterPlants(this.minutes).subscribe(
      result => {
        console.log(result);
        alert('Watering is on.');
      },
      error => {
        alert(error.message);
      });
  }

}
