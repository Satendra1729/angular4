import { Component } from '@angular/core';
import { friend } from './classes/friend'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	name : string = ""; 
	address : string = ""; 
	age : number =0; 
	practicalTitle = "Component and ts practice !!"; 
 	friends : friend[]; 
	constructor()
	{
		this.friends = [{name: "Satendra",address: "Bangalore",age : 26},
						{name : "Aman",address : "Germany",age : 28},
						{name : "Aurn",address : "Pai Layout",age : 2500}];
	}
	addNewFriend(): void
	{
		if(this.name != "" && this.address != "" && this.age !=0 && this.age !=null)
		this.friends.push({name: this.name,address : this.address,age : this.age }); 
		console.log(this.age)
	}
}
