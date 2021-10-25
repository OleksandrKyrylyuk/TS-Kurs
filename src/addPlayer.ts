import { allPlayers } from './delEditPlayer';
import { league } from '.';
import { Player } from './Player';
import { status, postion } from './util';

export const addPlayer = ():void => {
	const node = document.querySelector('.content');
	if (node  != null){
		while (node.firstChild) {
				node.removeChild(node.firstChild);
	}}
	const form = `<div class="form-group addplayer">
				<h1>Add Player</h1>
				<select name="select" class='form-control'> 
					${generateOptions(league.GetTeamsName())}
				</select>
				<label class="col-form-label mt-4" for="inputDefault">Name</label>
				<input type="text" class="form-control">
				<label class="col-form-label mt-4" for="inputDefault">Position</label>
				<input type="text" class="form-control">
				<label class="col-form-label mt-4" for="inputDefault">Age</label>
				<input type="text" class="form-control">
				<label class="col-form-label mt-4" for="inputDefault">Price</label>
				<input type="text" class="form-control">
				<label class="col-form-label mt-4" for="inputDefault">Speed</label>
				<input type="text" class="form-control">
				<label class="col-form-label mt-4" for="inputDefault">Technique</label>
				<input type="text" class="form-control">
				<label class="col-form-label mt-4" for="inputDefault">HP</label>
				<input type="text" class="form-control">
				<label class="col-form-label mt-4" for="inputDefault">Status</label>
				<input type="text" class="form-control">
				<button type="button" class="btn btn-secondary addP">Add</button>
			</div>`;

	node?.insertAdjacentHTML('afterbegin', form);
	document.querySelector('.addP')?.addEventListener('click', ():void => onAddPlayer())

	

}

const onAddPlayer = () => {
	const content = document.querySelectorAll('input');
	const newPlayer = new Player(content[0].value, content[1].value, parseInt(content[2].value), parseInt(content[3].value), {Speed: parseInt(content[4].value), Technique: parseInt(content[5].value) , HP:parseInt(content[6].value)}, content[7].value);
	let searchValue = document.querySelector('select')?.value as string;
	const team = league.GetTeamByName(searchValue);
	team.AddPlayer(newPlayer);
	allPlayers();
}

const generateOptions = (str: string[]):string => {
		let option = '';
		for (let index = 0; index < str.length; index++) {
			option+=`<option value="${str[index]}">${str[index]}</option>`
		}
		 return option;
}


