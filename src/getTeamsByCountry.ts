import { Team } from './Team';
import { league } from '.'
import { insertContent } from './util';

export const getTeamsByCountry = () => {

	insertContent('Find by country: ', 'find');
	const value = <HTMLInputElement>document.querySelector('.find');
	
	
	
	document.querySelector('.getPlayersByPostion')?.addEventListener('click', () => {
		let teams = ''; 
		league.GetTeamsByCountry(value.value).forEach( (el:Team) => {teams += el.ShowTeam()});
		insertContent(teams,'teams');
	})
}