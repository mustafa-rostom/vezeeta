import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}
  doctors = [
    { doctorName: 'Manar Mustafa',image:'../assets/1.jpg', majoring: "Dentist",place:'Mansoora',fees:100,phone:16676 },
    { doctorName: 'Muhamed Ahmed',image:'../assets/2.jpg', majoring: "Dentist",place:'Ismailia',fees:600,phone:16988 },
    { doctorName: 'Hessien Ali',image:'../assets/3.jpg', majoring: "Dentist",place:'Cairo',fees:350,phone:16684 },
    { doctorName: 'Ali Rostom',image:'../assets/4.jpg', majoring: "Dentist",place:'Alex',fees:700,phone:16584 }
  ];
  ngOnInit(): void {}
}
