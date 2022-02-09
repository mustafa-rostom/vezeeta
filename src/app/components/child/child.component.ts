import { Component, OnInit,Input } from '@angular/core';
import { faSpinner,faMapMarker,faPhone, faDollarSign,faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() name:String='';
  @Input() majoring:String='';
  @Input() fees:number=0;
  @Input() place:String='';
  @Input() phone:number=0;
  @Input() image:String='';
  isTrue=false;
  btnTitle='Book Now';
  faSpinner=faSpinner;
  faMapMarker=faMapMarker;
  faPhone=faPhone;
  faDollarSign=faDollarSign;
  faChevronRight=faChevronRight;
  
  ngOnInit(): void {
  }

  change(){
    this.btnTitle='Booking...'
    this.isTrue=true;
    setTimeout(() => {
      this.btnTitle='Book Now'
      this.isTrue=false;
    }, 2000);
  }
}
