import { league } from '.';
import { insertContent } from './util';


export const allTeams = (): void => {
	let content = '';
	league.SortByName();
	for (let i = 0; i < league.team.length; i++) {
		content += league.team[i].ShowTeam()
	}
	insertContent(content, 'teams');
	const deleteTeam = document.querySelectorAll('.onDelTeam')
	for (let i = 0; i < deleteTeam.length; i++){
		deleteTeam[i].addEventListener('click', (e:Event) => { onDelete(e)})
	}

	const editTeam = document.querySelectorAll('.onEditTeam')
	for (let i = 0; i < editTeam.length; i++){
		editTeam[i].addEventListener('click', (e:Event) => { onEdit(e)})
	}

}

const onDelete = (e: Event):void => {
	league.DeleteTeam((e.target as Element).id);
	allTeams();
}

const onEdit = (e: Event):void => {
	let team = league.GetTeamByName((e.target as Element).id);
	let content = `<label class="col-form-label mt-4" for="inputDefault">Name</label>
				<input type="text" class="form-control" value="${team.teamName}">
				<label class="col-form-label mt-4" for="inputDefault">Coach</label>
				<input type="text" class="form-control" value="${team.coach}">
				<label class="col-form-label mt-4" for="inputDefault">Country</label>
				<input type="text" class="form-control" value="${team.country}">
				<button type="button" class="btn btn-secondary addP">Edit Team</button>
				`;
	insertContent(content, 'newTeam');
	const inputs = document.querySelectorAll('input')
	document.querySelector('.addP')?.addEventListener('click', () => {
		team.teamName = inputs[0].value;
		team.coach = inputs[1].value;
		team.country = inputs[2].value;
		allTeams();
	})
}

