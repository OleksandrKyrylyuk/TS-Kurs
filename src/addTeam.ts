import { allTeams } from './delEditTeam';
import { generateTeam, league  } from '.';
import { Team } from './Team';
import { insertContent, errorMassage } from './util';

export const addTeam = ():void =>  {
	insertContent(content, 'newTeam');
	document.querySelector('.addP')?.addEventListener('click', () => {onAddTeam()})
	
}

	let content = `<label class="col-form-label mt-4" for="inputDefault">Name</label>
				<input type="text" class="form-control" >
				<label class="col-form-label mt-4" for="inputDefault">Coach</label>
				<input type="text" class="form-control"">
				<label class="col-form-label mt-4" for="inputDefault">Country</label>
				<input type="text" class="form-control">
				<button type="button" class="btn btn-secondary addP">Add Team</button>
				`

const onAddTeam = ():void => {
let values = document.querySelectorAll('input');
	const newTeam = new Team(values[0].value, values[1].value, values[2].value);
	if (league.AddTeam(newTeam) === true){
		league.AddTeam(newTeam);
		allTeams();
	}
	else {
		errorMassage('Inccorect team name')
		setTimeout(() => {
			let node = document.querySelector('.alert');
				node?.remove();
		}, 4000);
	}
}