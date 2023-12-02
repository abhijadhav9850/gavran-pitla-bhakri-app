import { Component } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent {
  title = 'Local Storage';

  localData :any;
  data = [
    {
      id:1,
      name:"Shubham Salunkhe",
      age:26,
      address:"Mankhurd Mumbai",
      gender:"Male"
    },
    {
      id:2,
      name:"Abhishek Jadhav",
      age:22,
      address:"Ghansoli",
      gender:"Male"
    },
    {
      id:3,
      name:"Rudra Belwalkar",
      age:21,
      address:"Mumbai",
      gender:"Male"
    }
  ]

  saveData(){
    localStorage.setItem("LocalData",JSON.stringify(this.data));
  }

  loadData(){
    let data = localStorage.getItem('LocalData')
  }
}
