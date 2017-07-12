import axios from 'axios';
import { uniqueId } from 'lodash';

const base = 'http://65e7d620.ngrok.io/games';
window.id = uniqueId('ocqd_');


export const guess = (id, number) =>
	axios({
		method: 'POST',
		url: `${base}/${id}/guess`,
		headers: {
			 username: window.id
		},
		body: {
			number
		}
	}).then(data => data.guessStatus);


export const getResults = (id) =>
	axios({
		method: 'GET',
		url: `${base}/${id}`,
		headers: {
			 username: window.id
		}
	}).then(data => data.game);


export const createGame = () =>
	axios({
		method: 'POST',
		url: base,
		headers: {
			username: window.id
		}
	}).then(response => response.data.gameId);
