import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
public name="Hi yogesh";
public display='';
myEvent(){
alert('welcome to my page')
}
submit(a:string){
alert(a);
}
getName(vale:string){
this.display=vale;
}
}
