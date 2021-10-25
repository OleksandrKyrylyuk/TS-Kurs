import { insertContent } from './util';
import { Player } from './Player';
import { league } from '.';

export const lessThan20Years = () => {
	let content = (league.AgeLower().map( (el:Player) => { return el.ShowPlayer()})).join('');
	insertContent(content, 'players')
	
}