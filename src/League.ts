import { Player } from './Player';
import { Team } from './Team';
export class League {
	private Teams: Team[] = [];

	get team():Team[]{
		return this.Teams
	}

	ShowTeams():void {
		if (this.Teams.length === 0) 
			console.log('No teams');
		else {
			this.Teams.forEach( team => team.ShowTeam())
		}
	}

	AddTeam(team: Team):boolean {
		const teamsNames = this.Teams.map((el: Team): string => {
			return el.teamName
		})
		if (teamsNames.indexOf(team.teamName) === -1 ){
			this.Teams.push(team);
			return true
		}
		else {
			return false
		}
	}

	GetTeamByName(name:string):Team{
		const searchTeam = this.Teams.filter(team => team.teamName === name)
		return searchTeam[0]		
	}


	GetTeamsName():string[]{
		let str = this.Teams.map((el): string => el.teamName);
		return str
	}

	SortByName():void {
		this.Teams.sort( (a: Team, b: Team) => {
			return a.teamName.localeCompare(b.teamName)});
	}
	DeleteTeam(team:string):void{
		this.Teams.forEach( (el:Team, index: number) => {
			if (el.teamName === team){
				this.Teams = [...this.Teams.slice(0, index), ...this.Teams.slice(index + 1)]				
			}
		});
	}
	GetTeamsByCountry(str: string):Team[]{
		let data:Team[] = []
		 this.Teams.forEach( (el:Team) => { 
			if ((el.country.toLowerCase()).includes(str.toLowerCase())){
				data.push(el)
			}
			
		})
		return data
	}

	MostExpensivePlayer():string{
		let maxPricePlayer = this.team[0].players[0];
		let team = this.team[0];
		this.Teams.forEach( (el:Team) => { 
		 el.players.forEach( (player:Player) => {
			 if (player.price > maxPricePlayer.price) {
				 maxPricePlayer = player;
				 team = el;
				};
		 });
		})
	return `<li class="list-group-item d-flex justify-content-between align-items-center expensive">The most expemsive player is : ${maxPricePlayer.name}.<br> His price is: ${maxPricePlayer.price}. <br>He playes in ${team.teamName}</li>`
	}

	AgeLower():Player[]{
		return this.Teams.map((el: Team) => {return el.players}).flat().filter( (player: Player) => {
			 if (player.age < 20) 
			 	return player
			});
	}
}