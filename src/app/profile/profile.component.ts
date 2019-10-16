import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service"
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentProfile.subscribe(profile => this.profile = profile)
  }

}
