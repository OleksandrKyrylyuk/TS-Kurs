import { addPlayer } from './addPlayer';
import { allPlayers } from './delEditPlayer';
import { League } from './League';
import { Player } from './Player';
import { Team } from './Team';
import { generatePlayer, insertContent } from './util';
import { addTeam } from './addTeam'
import { getPlayersByPostion } from './getPlayersByPostion';
import { mostExpensivePlayer } from './mostExpensivePlayer';
import { allTeams } from './delEditTeam';
import { getTeamsByCountry } from './getTeamsByCountry';
import { lessThan20Years } from './lessThan20Years';

export let league = new League();
let mu = new Team('MU', 'Ole Solskjaer', 'England');
let dynamo = new Team('Dynamo', 'Mircha Lychesky', 'Ukraine');
let arsenal = new Team('Arsenal', 'Mikel Arteta', 'England');
let barcelona = new Team('Barcelona','Ronald Koenam', 'Spain');
let shakhtar = new Team('Shakhtar', 'Roberto  Dzerbi', 'Ukraine');

export const generateTeam = (team: Team):void => {
	for (let i = 0; i < 11; i++) {
		team.AddPlayer(generatePlayer());
	}
	league.AddTeam(team);
}
generateTeam(mu);
generateTeam(dynamo);
generateTeam(arsenal);
generateTeam(barcelona);
generateTeam(shakhtar);

league.SortByName();



document.querySelector('.players')?.addEventListener('click', () => allPlayers());
document.querySelector('.teams')?.addEventListener('click', () => allTeams());
document.querySelector('.add')?.addEventListener('click', () => addPlayer());
document.querySelector('.addTeam')?.addEventListener('click', () => {addTeam()})
document.querySelector('.getByPostion')?.addEventListener('click', () => {getPlayersByPostion()})
document.querySelector('.getMostExpensicePlayer')?.addEventListener('click', () => {mostExpensivePlayer()})
document.querySelector('.getTeamsByCountry')?.addEventListener('click', () => {getTeamsByCountry()})
document.querySelector('.lessThan20Years')?.addEventListener('click', () => {lessThan20Years()})


