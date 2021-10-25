import { league } from '.';
import { insertContent } from './util';


export const getPlayersByPostion = ():void => {
	insertContent('Find by position: ', 'find');
	const btn = document.querySelector('.getPlayersByPostion');
	btn?.addEventListener('click', () => {onsubmit()})
}


const onsubmit = ():void => {
	const nodeValue = document.querySelector('input')?.value;
	if (nodeValue != undefined) {
		const ul = document.querySelector('.list-group');
		if (ul  != null){
		while (ul.firstChild) {
				ul.removeChild(ul.firstChild);
	}}

		let playerList:string[] = [];
		for (let i = 0; i < league.team.length; i++){
			playerList = [...playerList, ...league.team[i].GetPlayersByPostion(nodeValue)]
		}
		ul?.insertAdjacentHTML('afterbegin', playerList.join(''))
	}
	

	
}