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
  status: string;

  constructor(private remoteService: RemoteService) {
   }

  ngOnInit() {
    this.automatic = false;
    this.filter = false;
    this.temperature = '';
    this.minutes = '';
    this.status = '';
  }

  filterChange($event) {
    this.filter = $event;
  }

  temp($event) {
    this.temperature = $event;
  }

  min($event) {
    this.minutes = $event;
  }

  turnModeAuto() {
    this.remoteService.turnAutomatic().subscribe(
      result => {
        console.log(result);
        this.automatic = true;
        this.status = result;
        console.log(this.automatic);
      },
      error => {
        alert(error.message);
      });
  }

  turnOnManual() {
    this.remoteService.turnOff().subscribe(
      result => {
        console.log(result);
        this.automatic = false;
        this.status = result;
        console.log(this.automatic);
      },
      error => {
        alert(error.message);
      });
  }

  feedFishes() {
    this.remoteService.feedFish().subscribe(
      result => {
        console.log(result);
        this.status = result;
      },
      error => {
        alert(error.message);
      });
  }

  filterOn() {
    this.remoteService.filterOn().subscribe(
      result => {
        console.log(result);
        this.filter = true;
        this.status = result;
      },
      error => {
        alert(error.message);
      });
  }

  filterOff() {
    this.remoteService.filterOff().subscribe(
      result => {
        console.log(result);
        this.filter = false;
        this.status = result;
      },
      error => {
        alert(error.message);
      });
  }

  heating() {
    console.log(this.temperature);
    if (this.temperature !== null && this.temperature !== '') {
      this.remoteService.fishTemperature(this.temperature).subscribe(
        result => {
          console.log(result);
          this.status = result;
        },
        error => {
          alert(error.message);
        });
    }
  }

  waterPlants() {
    console.log(this.minutes);
    this.remoteService.waterPlants(this.minutes).subscribe(
      result => {
        console.log(result);
        this.status = result;
      },
      error => {
        alert(error.message);
      });
  }

}
