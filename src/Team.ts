import { ISkills, Player } from './Player';

export class Team{

	private Players: Player[] = [];
	
	constructor(
		private TeamName:string,
		private Coach: string,
		private Country: string
	){}

	get players():Player[]{
		return this.Players
	}


	get teamName():string {
		return this.TeamName
	}
	set teamName(str: string){
		this.TeamName = str;
	}
	get coach():string {
		return this.Coach
	}
	set coach(str: string){
		this.Coach = str;
	}
	get country():string {
		return this.Country
	}
	set country(str: string){
		this.Country = str;
	}
	ShowTeam():string {
		return `<tr class="table-primary">
						<th scope="row">${this.TeamName}</th>
						<td>${this.Coach}</td>
						<td>${this.Country}</td>
						<td><button type="button" class="btn btn-secondary onDelTeam" id="${this.TeamName}">Del</button></td>
						<td><button type="button" class="btn btn-secondary onEditTeam" id="${this.TeamName}">Edit</button></td>
				</tr>`
	}

	AddPlayer(player: Player):void {
		this.Players.push(player)
	}
	DelPlayer(player: string):void {
		this.Players.forEach( (el:Player, index: number) => {
			if (el.name === player){
				this.Players = [...this.Players.slice(0, index), ...this.Players.slice(index + 1)]				
			}
		});
		Player.count--;
	}
	SortByName():void {
		this.Players.sort( (a: Player, b: Player) => {
			return a.name.localeCompare(b.name)});
	}
	SortBySpeed():void {
		this.Players.sort( (a: Player, b: Player) => {
			return a.speed - b.speed});
	}
	GetPlayersByPostion(str: string):string[]{
		let data: string[] = [];
		this.Players.forEach( (el:Player) => {
			if (el.position.toLocaleLowerCase().includes(str.toLocaleLowerCase())){
				data.push(`<li class="list-group-item d-flex justify-content-between align-items-center"><span>${this.TeamName}</span><span>${el.name}</span><span> ${el.position}</span></li>`)				
			}
		});
		return data;
	}
	MostExpensivePlayer():string{
		let expensivePlayer:Player = this.Players[0];
		this.Players.forEach( (el:Player) => {
			if (el.price > expensivePlayer.price)
				expensivePlayer = el
		})
		return `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${this.TeamName}</span><span>${expensivePlayer.name}</span><span> ${expensivePlayer.price}</span></li>`
	}
}