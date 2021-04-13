import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavController } from "ionic-angular";
import { GlobalService } from "../../app/global.service";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data: any;
  constructor(public gv: GlobalService) {
    //this.data = gv.data;
    this.refill();
  }

  refill() {
    this.data = [];
    for (var i = 0; i < this.gv.data.length; i++) {
      if (this.gv.favorited.includes(i)) {
        this.gv.data[i].favorited = 1;
      } else {
        this.gv.data[i].favorited = 0;
      }
      this.data.push(this.gv.data[i]);
    }
  }
}
