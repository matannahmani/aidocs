/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
	black, green, red, bgCyan,
} from 'kolorist';
import {
	intro, outro, spinner,
} from '@clack/prompts';
import loadConfig from '../config/load.js';

async function loadENV() {
	const spin = spinner();
	spin.start("Loading ENV variables...");
	try{
		const cfg = await loadConfig();
		outro(green("ENV variables loaded!"));
		return cfg;
	}catch(err){
		outro(red("Failed to load ENV variables! Please check your configuration file or Generate one by running aidocs generate."));
		process.exit(1);
	}finally{
		spin.stop();
	}
}

const aidocsCMD = async () => {
	intro(bgCyan(black(' AIDocs ')));
	const config = await loadENV();
}

export default aidocsCMD;