import { Component } from '@angular/core';

@Component({
  selector: 'app-incdec',
  templateUrl: './incdec.component.html',
  styleUrls: ['./incdec.component.css']
})
export class IncdecComponent {
public value:number=0;
public Counter(str:string){
(str=='increment') ? this.value++:this.value--;
}
public Reset(){
  this.value=0;
}

}
