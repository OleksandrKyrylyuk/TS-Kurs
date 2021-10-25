import { league } from '.';
import { insertContent } from './util'

export const mostExpensivePlayer = (): void => {
	insertContent(`<ul class="list-group"></ul>`,'newTeam');
	const ul = document.querySelector('.list-group');
		if (ul  != null){
		while (ul.firstChild) {
				ul.removeChild(ul.firstChild);
	}}

	for (let i = 0; i < league.team.length; i++){
		ul?.insertAdjacentHTML('afterbegin', league.team[i].MostExpensivePlayer())
		if (i === league.team.length -1 ) 
			ul?.insertAdjacentHTML('afterbegin', league.MostExpensivePlayer());

		}
}