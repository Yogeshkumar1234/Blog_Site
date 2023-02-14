import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
 blogs:any;

constructor(){

}
ngOnInit(): void {
  this.blogs=JSON.parse(localStorage.getItem('blogs')||'[]');
}

}

