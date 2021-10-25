import { status } from './util';
export interface ISkills {
	Speed: number;
	Technique: number;
	HP: number
}

export class Player {
	static count = 0;
	constructor(
		private Name: string,
		private Position: string,
		private Age: number,
		private Price: number,
		private Skills: ISkills,
		private Status: string
	){	
		Player.count++;
	}

	
	get name(){
		return this.Name
	}
	set name(str: string){
		this.Name = str;
	}
	
	get position(){
		return this.Position
	}
	set position(str: string){
		this.Position = str;
	}
	get age(){
		return this.Age
	}
	set age(str: number){
		this.Age = str;
	}
	get price(){
		return this.Price
	}
	set price(str: number){
		this.Price = str;
	}
	get speed(){
		return this.Skills.Speed
	}	
	set speed(str: number){
		this.Skills.Speed = str;
	}
	get technique(){
		return this.Skills.Technique
	}
	set technique(str: number){
		this.Skills.Technique = str;
	}
	get hp(){
		return this.Skills.HP
	}
	set hp(str: number){
		this.Skills.HP = str;
	}
	get status (){
		return this.Status
	}
	set status(str: string){
		this.Status = str;
	}
	ShowPlayer():string {
		return `<tr class="table-primary">
						<th scope="row">${this.Name}</th>
						<td>${this.Age}</td>
						<td>${this.Position}</td>
						<td>${this.Price}</td>
						<td>${this.Skills.Speed}</td>
						<td>${this.Skills.Technique}</td>
						<td>${this.Skills.HP}</td>
						<td>${this.Status}</td>
						<td><button type="button" class="btn btn-secondary onDel" id="${this.Name}">Del</button></td>
						<td><button type="button" class="btn btn-secondary onEdit" id="${this.Name}">Edit</button></td>
					</tr>`
	}


}