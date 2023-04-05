/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
	black, dim, green, red, bgCyan,
} from 'kolorist';
import {
	intro, outro, spinner, select, confirm, isCancel,
} from '@clack/prompts';
import loadConfig from '../config/load';

async function loadENV() {
	const spin = spinner();
	let isError = false;
	spin.start("Loading ENV variables...");
	try{
		const cfg = await loadConfig();
		outro(green("ENV variables loaded!"));
		return cfg;
	}catch(err){
		isError = true;
	}finally{
		spin.stop();
		if(isError){
			outro(red("Failed to load ENV variables!"));
			process.exit(1);
		}
	}
}

const aidocsCMD = async () => {
	intro(bgCyan(black(' AIDocs ')));
	const config = await loadENV();
	
}