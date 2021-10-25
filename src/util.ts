import faker from 'faker'

import { Player } from './Player';
	export const postion = ['Forward', 'Defender', 'Goalkeeper', 'Semi-defender'];
	export const status = ['Active', 'Reserve']

export const generatePlayer = (): Player => {
	const randomPosition = faker.datatype.number({min: 0, max: 3});
	const randomStatus = faker.datatype.number({min: 0, max: 1});
	const name = faker.name.firstName() + ' ' +  faker.name.lastName();
	const age = faker.datatype.number({min: 16, max: 50});
	const price = faker.datatype.number({min: 10000, max: 9999999});
	const skills = {
		Speed: faker.datatype.number(30), 
		Technique: faker.datatype.number(40), 
		HP: faker.datatype.number(200)
	}
	
	return new Player(name, postion[randomPosition], age , price, skills, status[randomStatus]);
}

export const insertContent = (content: string, type :string) => {
	let node = document.querySelector('.content');
	if (node  != null){
		while (node.firstChild) {
				node.removeChild(node.firstChild);
	}}
	let types = [
		`<table class="table table-hover">
			<thead>
				<tr>
				<th scope="col">Name</th>
				<th scope="col">Age</th>
				<th scope="col">Position</th>
				<th scope="col">Price</th>
				<th scope="col">Speed</th>
				<th scope="col">Technique</th>
				<th scope="col">HP</th>
				<th scope="col">Status</th>
				</tr>
			</thead>
			${content}
		</table>`,
		`<table class="table table-hover">
			<thead>
				<tr>
				<th scope="col">Team name</th>
				<th scope="col">Coach</th>
				<th scope="col">Country</th>
				</tr>
			</thead>
			${content}
		</table>`,
		`${content}
		`,
		`
		<label class="col-form-label mt-4" for="inputDefault">${content}</label>
		<input type="text" class="form-control find">
		<button type="button" class="btn btn-secondary getPlayersByPostion">Find</button>
		<ul class="list-group">
			
		</ul>`
		
	];

switch (type) {
	case 'players':
			node?.insertAdjacentHTML('afterbegin', types[0])
		break;
	case 'teams':
			node?.insertAdjacentHTML('afterbegin', types[1])
		break;
	case 'newTeam':
			node?.insertAdjacentHTML('afterbegin', types[2])
		break;
	case 'find':
			node?.insertAdjacentHTML('afterbegin', types[3])
		break;
	
	default:
		break;
}
}

export const errorMassage = (text: String):void => {
	const content = `<div class="alert alert-dismissible alert-danger">
						<strong>${text}</strong>
					</div>`;
	const node = document.querySelector('.content');
	node?.insertAdjacentHTML('beforeend', content )
}

export const insertPlayerCount =  () => {
	const node = document.querySelector('.content');
	const count = document.querySelector('.playerCount');
	if (count != null) count.remove();
	node?.insertAdjacentHTML('beforebegin', `<h2 class="playerCount">Player in league: ${Player.count}</h2>`)
}