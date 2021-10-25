import { league } from '.';
import { Player } from './Player';
import { Team } from './Team';
import { insertContent, insertPlayerCount, status } from './util';

export const allPlayers = ():void => {
	let content = '';

	for (let i = 0; i < league.team.length; i++) {
		league.team[i].SortBySpeed()
		for(let j = 0; j < league.team[i].players.length; j++) {
			content+= league.team[i].players[j].ShowPlayer();
		}
	}
	insertPlayerCount();
	insertContent(content, 'players');

	let delButtons = document.querySelectorAll('.onDel');
	
	for (let i = 0; i <= delButtons.length; i++){
		(<HTMLButtonElement>delButtons[i])?.addEventListener('click', (e: Event):void => {onDelete(e)})
	}

	let editButtons = document.querySelectorAll('.onEdit');
	
	for (let j = 0; j <= editButtons.length; j++){
		(<HTMLButtonElement>editButtons[j])?.addEventListener('click', (e: Event):void => {onEdit(e)})
	}
}

const onDelete = (e: Event) => {
	const name = (e.target as Element).id;
	for (let i = 0; i < league.team.length; i++) {
		for(let j = 0; j < league.team[i].players.length; j++) {
			if (league.team[i].players[j].name === name){
				league.team[i].DelPlayer(name);
			}
		}
	}
	allPlayers();
}

const onEdit = (e: Event) => {
	const name = (e.target as Element).id;
	for (let i = 0; i < league.team.length; i++) {
		for(let j = 0; j < league.team[i].players.length; j++) {
			if (league.team[i].players[j].name === name){
				let player = league.team[i].players[j];
				createEditForm(player);
			}
		}
	}
}

const createEditForm = (player: Player):void => {
	const node = document.querySelector('.content');
	
	if (node  != null){
		while (node.firstChild) {
				node.removeChild(node.firstChild);
	}}
	const form = `<div class="form-group addplayer">
				<h1>EditPlayer</h1>
				<label class="col-form-label mt-4" for="inputDefault">Name</label>
				<input type="text" class="form-control" value="${player.name}">
				<label class="col-form-label mt-4" for="inputDefault">Position</label>
				<input type="text" class="form-control"value="${player.position}">
				<label class="col-form-label mt-4" for="inputDefault">Age</label>
				<input type="text" class="form-control"value="${player.age}">
				<label class="col-form-label mt-4" for="inputDefault">Price</label>
				<input type="text" class="form-control"value="${player.price}">
				<label class="col-form-label mt-4" for="inputDefault">Speed</label>
				<input type="text" class="form-control"value="${player.speed}">
				<label class="col-form-label mt-4" for="inputDefault">Technique</label>
				<input type="text" class="form-control"value="${player.technique}">
				<label class="col-form-label mt-4" for="inputDefault">HP</label>
				<input type="text" class="form-control"value="${player.hp}">
				<label class="col-form-label mt-4" for="inputDefault">Status</label>
				<input type="text" class="form-control"value="${player.status}">
				<button type="button" class="btn btn-secondary addP">Edit</button>
			</div>`;
	node?.insertAdjacentHTML('afterbegin', form);
	document.querySelector('.addP')?.addEventListener('click', () => {edit(player)})
}

const edit = (player:Player):void => {
	const inputs = document.querySelectorAll('input');
	player.name = inputs[0].value;
	player.position = inputs[1].value;
	player.age = parseInt(inputs[2].value);
	player.price = parseInt(inputs[3].value);
	player.speed = parseInt(inputs[4].value);
	player.technique = parseInt(inputs[5].value);
	player.hp = parseInt(inputs[6].value);
	player.status = inputs[7].value;
	allPlayers();
}
