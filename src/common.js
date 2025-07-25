const regions = {
	GHub: {
        "CF589C1E": "Sea of Xionahui",
        "CF588C1E": "Vosagi Spur",
        "CF588C1F": "Gwrigi",
        "CF589C1F": "Nilinun Band",
		"CF58AC1F": "Jortan Spur",
        "CF58AC1E": "Tujmareg",
        "CF58AC1D": "Loalsh Cloud",
        "CF589C1D": "Zeyaeva",
        "CF588C1D": "Mivabak Cluster",
        "D0589C1E": "Davikto Sector",
        "D0588C1E": "Awkest",
        "D0588C1F": "Funghu Terminus",
        "D0589C1F": "Qerooit Terminus",
        "D058AC1F": "Gollodu Adjunct",
        "D058AC1E": "Lukyria Terminus",
        "D058AC1D": "Rireith Conflux",
        "D0589C1D": "Biangen Conflux",
        "D0588C1D": "Avnise",
        "CE589C1E": "Oujeme Band",
        "CE588C1E": "Pewyan Adjunct",
        "CE588C1F": "Haspra",
        "CE589C1F": "Parkim",
        "CE58AC1F": "The Arm of Minones",
        "CE58AC1E": "Edvario Cloud",
        "CE58AC1D": "Oilz",
        "CE589C1D": "Raidelsba Boundary",
        "CE588C1D": "Mompop Cloud"
        },
	CalHub: {
		F9556C30: 'Uisaor Spur',
		F9555C30: 'The Arm of Kiffeyn',
		F9555C31: 'Ilongl Cloud',
		F9556C31: 'The Arm of Taticale',
		F9557C31: 'Egerap Anomaly',
		F9557C30: 'Wakestones Expanse',
		F9557C2F: 'Erhahn Fringe',
		F9556C2F: 'Imrikians Terminus',
		F9555C2F: 'Imedeili',
		FA556C30: 'Kovasu Adjunct',
		F8556C30: 'Lossians Boundary',
		F9554C2F: 'Quverci Terminus',
		F9554C30: 'Wouden Adjunct',
		F9554C31: 'Brambu Fringe',
		F9554C32: 'Etiusin Cloud',
		F9555C32: 'Birovect',
		F9556C32: 'Yewaliteng Band',
		F9557C32: 'Reigern',
		F9558C32: 'Ograne Mass',
		F9558C31: 'Sea of Osynet',
		F9558C30: 'Joletova Boundary',
		F9558C2F: 'Fearfs Cluster',
		F9558C2E: 'Savenush Instability',
		F9557C2E: 'Qubeld Mass',
		F9556C2E: 'Boquil Void',
		F9555C2E: 'Dappan Anomaly',
		F9554C2E: 'Kaperkel',
		FA555C30: 'Otusakam Spur',
		FA555C31: 'Yuskyala',
		FA556C31: 'Cahuij',
		FA557C31: 'Itsaka Expanse',
		FA557C30: 'Yehimbi',
		FA557C2F: 'Tesinio Expanse',
		FA556C2F: 'Sea of Ebbegg',
		FA555C2F: 'Trzesi Cluster',
		F8555C30: 'Egezesi',
		F8555C31: 'Haweiweu Terminus',
		F8556C31: 'Unbice Shallows',
		F8557C31: 'Ockani',
		F8557C30: 'Esburybur',
		F8557C2F: 'Ecimbar Quadrant',
		F8556C2F: 'Zexung Fringe',
		F8555C2F: 'Kivorsi Sector',
		FB556C30: 'Niumfo Fringe',
		F7556C30: 'Haliwar Band'
	},
	EisHub: {
		"09556D30": 'Arfsotru Boundary',
		"09555D30": 'Sea of Nadsky',
		"09555D31": 'Aakiang Quadrant',
		"09556D31": 'Inleiad Nebula',
		"09557D31": 'Xejtolew Adjunct',
		"09557D30": 'Fujial Void',
		"09557D2F": 'Lugalus Fringe',
		"09556D2F": 'Aidjog',
		"09555D2F": 'Irtlin Expanse',
		"0A556D30": 'Kianso Terminus',
		"0A555D30": 'Yithrun Expanse',
		"0A555D31": 'Guyardm Band',
		"0A556D31": 'Ruomiam Nebula',
		"0A557D31": 'Kamyciro Boundary',
		"0A557D30": 'Eiense',
		"0A557D2F": 'Zoyinskyl Boundary',
		"0A556D2F": 'Citlasta Cluster',
		"0A555D2F": 'Uevion Band',
		"08556D30": 'Aptete Instability',
		"08555D30": 'Agputn Nebula',
		"08555D31": 'Hullah',
		"08556D31": 'Olatac Terminus',
		"08557D31": 'Dejigaha',
		"08557D30": 'Ulbany Cluster',
		"08557D2F": 'Zodonib Void',
		"08556D2F": 'The Arm of Esneyr',
		"08555D2F": 'Ewkini Adjunct'
	}
}

const versions = [
	'Beacon',
	'Relics',
	'Worlds2',
	'Aquarius',
	'Worlds1',
	'Adrift',
	'Orbital',
	'Omega',
	'Echoes',
	'Singularity',
	'Interceptor',
	'Fractal',
	'Waypoint',
	'Endurance',
	'Outlaws',
	'SentinelUp',
	'Frontiers',
	'Prisms',
	'Expeditions',
	'Companions',
	'NextGen',
	'Origins',
	'Desolation',
	'Crossplay',
	'ExoMech',
	'Living Ship',
	'Synthesis',
	'Beyond',
	'Visions',
	'Abyss',
	'NEXT',
	'Atlas Rises',
	'Pathfinder',
	'Foundation',
	'Release',
]

const vowels = 'aeiou';

let uploadShown = false;

const links = new Object;

const pageData = new Object;

// this object stores elements that are consistent across pages. It is filled automatically on page load, combined from other objects like commonElements
const globalElements = {
	input: {},
	output: {},
}

// define IDs and names for elements that are consistent across multiple pages
const commonElements = {
	input: {
		version: 'versionInput',
		civ: 'civInput',
		fileInput: 'fileInput',
		fileUpload: 'fileUpload',
		portalglyphsInput: 'portalglyphsInput',
		researchTeam: 'researchteamInput',
		galleryUpload: 'galleryUpload',
	},
	output: {
		output: 'output',
		portalglyphButtons: 'portalglyphButtons',
		galleryItems: 'galleryItems',
		galleryCode: 'galleryCode',
		explanation: 'explanation',
		fullArticle: 'fullArticle',
		actions: 'actions',
		albumActions: 'albumActions',
		albumEntry: 'albumEntry',
		footer: 'footer',
	}
}

function addInputs() {
	const inputs = document.querySelectorAll('input, select, textarea');
	const inputElements = Object.values(commonElements.input);
	for (const input of inputs) {
		if (inputElements.includes(input.id)) continue;
		commonElements.input[input.id] = input.id;
	}
}

function addOutputs() {
	const outputs = document.getElementsByTagName('output');
	const outputElements = Object.values(commonElements.output);
	for (const output of outputs) {
		if (outputElements.includes(output.name) || outputElements.includes(output.id)) continue;
		const keyVal = output.name || output.id;
		commonElements.output[keyVal] = keyVal;
	}
}

function updateGlobalElements(object) {
	for (const section in object) {
		for (const element in object[section]) {
			const dest = object[section][element];
			const destElements = Array.from(document.getElementsByName(dest));
			const destElement = document.getElementById(dest);
			if (destElements.length) {
				object[section][element] = destElements;
			} else {
				object[section][element] = destElement;
			}
		}
	}
	for (const section in object) {
		for (const element in object[section]) {
			globalElements[section][element] = object[section][element];
		}
	}
}
addInputs();
addOutputs();
updateGlobalElements(commonElements);

const elementFunctions = {
	nameInput: ['enableTextMarking()'],
	researchTeam: ['researchTeam(); docBy()'],
	civ: ['civ()'],
	portalglyphsInput: ['glyphInputOnChange(this); enableTextMarking()'],
	discoveredInput: ['hideDiscoverer("discoveredInput", "discoveredlinkInput"); docBy()'],
	discoveredlinkInput: ['hideDiscoverer("discoveredlinkInput", "discoveredInput"); docBy()'],
	docbyInput: ['docBy()'],
	axesInput: ['validateCoords()', 'onchange'],
}
function assignElementFunctions(object) {
	for (const elementId in object) {
		if (!globalElements.input[elementId]) continue;
		const element = globalElements.input[elementId];
		const functionName = object[elementId][0];
		if (Array.isArray(element)) {
			for (const input of element) {
				assignFunction(input, functionName, object[elementId][1], object[elementId][2]);
			}
		} else {
			assignFunction(element, functionName, object[elementId][1], object[elementId][2]);
		}
	}
}
assignElementFunctions(elementFunctions);

// assigns alt attributes to tooltip images
function assignAlt() {
	const imgs = document.querySelectorAll('.tooltip img:not([alt])');
	for (const img of imgs) {
		img.alt = 'Help';
	}
}

// initialises show/hide buttons with their proper attributes
toggleSection();

function getInputData() {
	const inputData = {
		inputs: document.querySelectorAll('[data-dest]'),
		checkboxes: document.querySelectorAll('[data-dest-checkbox]'),
		stores: document.querySelectorAll('[data-dest-noauto]'),
		defaults: document.querySelectorAll('[data-default]'),
		simple: document.querySelectorAll('[data-dest-simple]'),
		lists: document.querySelectorAll('[list]'),
	}
	return inputData;
}

function startUp() {
	autoShow();
	versionDropdown();
	uploadShown = true;
	galleryUploadShown = true;
	showAll();
	if (!pageData.debug) {
		uploadShown = false;
		galleryUploadShown = false;
	}
	enableTextMarking();
	addAllTooltips();
	// the order of the touch and mouse events MUST NOT BE CHANGED!!!
	// it will not work the other way around. Touch must be before mouse
	// globalElements.output.output.ontouchstart = () => preventCopy();	// this must be first		// this is commented out because it had bad scroll UX on mobile. It should be triggered when tapped, but not when swiped.
	globalElements.output.output.onmousedown = () => preventCopy();		// this must be second
	globalElements.output.fullArticle.onmouseup = (e) => getSelectedText(e.target);
	globalElements.output.fullArticle.ontouchend = (e) => getSelectedText(e.target);
	if (globalElements.output.albumText) {
		globalElements.output.albumText.ontouchend = (e) => getSelectedText(e.target);
		globalElements.output.albumText.onmouseup = (e) => getSelectedText(e.target);
	}
}

function versionDropdown() {
	const texts = structuredClone(versions);
	const index = texts.indexOf('SentinelUp');
	texts.splice(index, 1, 'Sentinel');
	setDropdownOptions(globalElements.input.version, versions, texts);
}

// take element and array of values and array of corresponding text.
function setDropdownOptions(element, values, texts = values) {
	const dropdown = new Array;
	for (i = 0; i < values.length; i++) {
		const value = values[i];
		const text = texts[i];
		const dropdownOption = document.createElement('option');
		dropdownOption.value = value;
		dropdownOption.innerText = text;
		dropdown.push(dropdownOption.outerHTML);
	}
	const dropdownHTML = dropdown.join('');
	// dont't update the dropdown if content is identical
	if (element.innerHTML != dropdownHTML) element.innerHTML = dropdownHTML;
}

function assignFunction(element, functionName, listener = null, invert = false) {
	const inputTag = element.tagName.toLowerCase();
	const inputType = element.type;
	const changeType = listener ?? (() => {
		if (inputTag == 'select' || inputType == 'radio' || inputType == 'checkbox') {
			return 'onchange';
		} else {
			return 'oninput';
		}
	})();
	if (element.hasAttribute(changeType)) {
		if (invert) {
			element.setAttribute(changeType, `${element.getAttribute(changeType)}; ${functionName}`);
		} else {
			element.setAttribute(changeType, `${functionName}; ${element.getAttribute(changeType)}`);
		}
	} else {
		element.setAttribute(changeType, functionName);
	}
}

function autoShow() {
	const inputData = getInputData();
	for (const element of inputData.defaults) {
		assignFunction(element, 'assignDefaultValue(this)');
	}

	for (const input of inputData.inputs) {
		assignFunction(input, 'wikiCode(this)');
	}

	for (const checkbox of inputData.checkboxes) {
		assignFunction(checkbox, 'checkboxWikiCode(this)');
	}

	for (const store of inputData.stores) {
		assignFunction(store, 'storeData(this)');
	}

	for (const simple of inputData.simple) {
		assignFunction(simple, 'wikiCodeSimple(this)');
	}

	for (const list of inputData.lists) {
		assignFunction(list, 'forceDatalist(this)', 'onchange');
	}
}

function showAll() {
	const inputData = getInputData();
	for (const input of inputData.inputs) {
		wikiCode(input);
	}
	for (const checkbox of inputData.checkboxes) {
		checkboxWikiCode(checkbox);
	}
	for (const store of inputData.stores) {
		storeData(store);
	}

	for (const element of inputData.defaults) {
		assignDefaultValue(element);
	}

	for (const simple of inputData.simple) {
		wikiCodeSimple(simple);
	}

	numberStats();
	civ();
	image(globalElements.input.fileUpload);
	galleryUpload();
	try { glyphInputOnChange(globalElements.input.portalglyphsInput) } catch (error) { /*do nothing*/ }
	try { researchTeam() } catch (error) { /*do nothing*/ }
	try { planetMoonSentence() } catch (error) { /*do nothing*/ }
	hideDiscoverer();
	try { startupFunctions() } catch (error) { console.warn(error) }
}

function wikiCode(element, dest = element.dataset.dest) {
	const destElements = Array.from(document.getElementsByName(dest));
	if (destElements.length == 0) destElements.push(document.getElementById(dest));
	const value = sanitiseString(element.value ?? element);
	if (dest) {
		pageData[dest] = value;
	} else {	// no destination given, trying to store value in pageData without transferring it into code
		pageData[element.dataset.destNoauto] = value;
		return;
	}
	for (const destElement of destElements) {
		destElement.innerText = value;
	}
}

function checkboxWikiCode(element) {
	const dest = element.dataset.destCheckbox;
	const destElement = document.getElementById(dest);
	const checked = element.value;
	const unchecked = element.dataset.checkboxUnchecked ?? '';
	if (element.checked) {
		destElement.innerText = checked;
		pageData[dest] = checked;
	} else {
		destElement.innerText = unchecked;
		pageData[dest] = unchecked;
	}
}

function storeData(element) {
	const store = element.dataset.destNoauto;
	pageData[store] = sanitiseString(element.value);
}

// just puts a value from an element into the code. No wikitext sanitisation. It also needed to be capable of managine one-to-many, so it can do that, too
function wikiCodeSimple(element) {
	const dest = element.dataset.destSimple;
	const outputs = Array.from(document.getElementsByName(dest));
	if (!outputs.length) outputs.push(document.getElementById(dest));
	for (const output of outputs) {
		output.innerText = element.value;
	}
}

function addStaticPageData(key, value) {
	Object.defineProperty(pageData, key, { configurable: false, writable: false, value: value });
}

function civ() {
	const input = globalElements.input.civ.value;
	const civData = new Object;
	switch (input) {
		case 'GHub':
			civData.galaxy = 'Euclid';
			civData.civilized = 'Galactic Hub Project';
			civData.civStub = 'GHub';
			break;

		case 'CalHub':
			civData.galaxy = 'Calypso';
			civData.civilized = 'Galactic Hub Calypso';
			civData.civStub = 'GHub Calypso';
			break;

		case 'EisHub':
			civData.galaxy = 'Eissentam';
			civData.civilized = 'Galactic Hub Eissentam';
			civData.civStub = 'GHub Eissentam';
			break;
	}

	pageData.civShort = input;
	for (const key in civData) {
		pageData[key] = civData[key];
		try {
			wikiCode(pageData[key], key);
		} catch (error) {
			/* do nothing */
		}
	}
	try {
		updateCiv();
	} catch (error) {
		console.warn(error);
	}
}

function updateCiv() {
	researchTeamDropdown();
	glyphRegion(pageData.portalglyphs);
	docBy();
}

function sanitiseString(input) {
	const doubleWikiMarkup = ['{', '}', '[', ']'];
	const tempReplacement = '<><><>';
	const linkStartReplacement = '####';
	const linkEndReplacement = '****';

	let text = input;

	while (text.includes('[http')) {
		const preString = '[http';
		const searchString = ']';
		const preIndex = text.indexOf(preString);
		const searchIndex = text.indexOf(searchString, preIndex);

		const textArr = Array.from(text);
		if (!(searchIndex < 0)) textArr.splice(searchIndex + 1, 0, linkEndReplacement);
		text = textArr.join('').replace('[http', linkStartReplacement);
	}

	for (const markup of doubleWikiMarkup) {
		text = text.replaceAll(`${markup}${markup}`, tempReplacement)
			.replaceAll(markup, '')
			.replaceAll(tempReplacement, `${markup}${markup}`);
	}
	text = text.replaceAll(linkStartReplacement, '[http')
		.replaceAll(linkEndReplacement, ']')
		.trim();
	return text;
}

function image(element) {
	const filename = element.files[0]?.name;
	if (!filename) return;
	// throw error if file is bigger than 10MB (wiki upload limit)
	if (element.files[0].size > 10000000) {
		errorMessage(element, 'This file is too big to be uploaded to the wiki. Maximum filesize is 10MB.');
	} else {
		errorMessage(element);
	}
	const fileInput = element.previousElementSibling;
	const sanitisedName = sanitiseString(filename);
	fileInput.value = sanitisedName;
	wikiCode(fileInput);
	// this section handles an automatic notice about Special:Upload, since this is a big source of confusion for users
	if (uploadShown) return;	// ignore following code if we already alerted user about Special:Upload
	explanation('Upload your picture to the wiki!', `Don't forget to upload your picture to the wiki on <a href="https://nmsgalactichub.miraheze.org/wiki/Special:Upload" target="_blank" rel="noopener noreferrer">Special:Upload</a>.
	The upload button only auto-filled the image name into the code, it is not automatically uploaded to the wiki.
	<div class="mt-3"><span class="has-text-weight-bold">NOTE</span>: You can access this popup at any time by clicking on the "?" next to the main image upload button.</div>`);
	uploadShown = true;
}

function toggleSection(sectionName, button, attributeName = 'section') {
	const elements = document.querySelectorAll(`[data-${attributeName}~="${sectionName}"]`);
	const buttons = document.querySelectorAll('[data-button-id]');
	const childindex = getChildIndex(buttons, 'dataset.buttonId');

	if (arguments.length == 0) {
		const buttonElements = document.querySelectorAll('.sectionToggle button');
		for (let i = 0; i < buttonElements.length; i++) {
			const button = buttonElements[i];
			button.dataset.buttonId ??= childindex + i;
			const id = button.dataset.buttonId;
			button.dataset[`display${id}`] = button.dataset.displayDefault ?? '';
		}
		return;
	}

	button.dataset.buttonId ??= childindex;
	const id = button.dataset.buttonId;
	const displayID = `display${id}`;
	const state = button.dataset[displayID];

	for (const element of elements) {
		const object = element.dataset;
		let hide = false;
		for (const key in object) {
			if (!key.includes('display') || key == displayID) continue;
			if (object[key] == 'none') {
				hide = true;
				break;
			}
		}
		if (hide) continue;

		if (state) {
			element.style.display = '';
			element.dataset[displayID] = '';
		} else {
			element.style.display = 'none';
			element.dataset[displayID] = `none`;
		}
	}
	button.innerText = state ? 'Hide' : 'Show';
	button.dataset[displayID] = state ? '' : 'none';
}

// generates researchteam dropdown
function researchTeamDropdown() {
	const civ = pageData.civShort;
	const inputElement = globalElements.input.researchTeam;
	if (!inputElement) return;
	const prevSelect = inputElement.value;
	const teams = ['', 'GHGS', 'GHEC', 'GHSH', 'GHDF', 'GHBG', 'GHSL', 'GHTD', 'HBS'];

	switch (civ) {
		case "CalHub":
			teams.push('CalHub Archivists');
			break;

		case "EisHub":
			teams.push('EisHub Scribes', 'EPC', 'The Eissentimes Press');
			break;
	}
	setDropdownOptions(inputElement, teams);
	inputElement.value = prevSelect;
	researchTeam();
}

// adds generic civ researchteam if none is given and expands some civ specific teams
function researchTeam() {
	const researchteamInput = globalElements.input.researchTeam;
	const researchteamValue = researchteamInput.value;
	const dest = researchteamInput.dataset.destNoauto;
	pageData[dest] = researchteamValue;
	const civ = pageData.civilized;
	const researchteam = (() => {
		if (researchteamValue.split(' ').length == 2) {
			return civ + ' ' + researchteamValue.split(' ')[1];
		} else if (!researchteamValue && pageData.pageType != 'Base' && pageData.pageType != 'Racetrack') {
			return civ;
		} else {
			return researchteamValue;
		}
	})();
	globalElements.output[dest].innerText = researchteam;
}

// adds documented by information if documenter != discoverer
function docBy() {
	if (typeof docByExternal == 'function') {
		docByExternal();
		return;
	}

	const docByElement = globalElements.input.docbyInput;
	if (!docByElement) return;
	const documenter = sanitiseString(docByElement.value);
	const discoverer = pageData.discovered ?? pageData.builder;
	const discoveredlink = pageData.discoveredlink ?? pageData.builderlink;
	const dest = docByElement.dataset.destNoauto;
	const chapter = displayResearch();
	const formattedDocumenter = formatName(documenter);

	if (documenter && documenter != discoverer && documenter != discoveredlink) {
		globalElements.output[dest].style.display = '';
		globalElements.output[dest].innerText = `Documented by ${chapter} ${formattedDocumenter}`;
	} else {
		globalElements.output[dest].style.display = 'none';
	}
	addInfoBullet();
}

// adjusts the researchteam for display in a sentence
function displayResearch() {
	const chapter = pageData.researchteam;
	if (!chapter) return chapter;

	const teamIDs = globalElements.input.researchTeam.children;
	const teams = new Array;
	for (const team of teamIDs) {
		teams.push(team.value);
	}
	const pos = teams.indexOf(chapter);

	const chapterSentence = (() => {
		// if (pos < 4) {
		// 	return `[[${chapter}]] researcher`;
		if (chapter.includes('GHEC')) {
			return `[[Galactic Hub Exobiology Corps|${chapter}]] Researcher`;
		} else if (chapter.includes('GHGS')) {
			return `[[Galactic Hub Geological Surveyors|${chapter}]] Researcher`;
		} else if (chapter.includes('GHSH')) {
			return `[[Galactic Hub Ship Hunters|${chapter}]] Researcher`;
		} else if (chapter.includes('GHDF')) {
			return `[[Galactic Hub Defense Force|${chapter}]] Member`;
		} else if (chapter.includes('GHBG')) {
			return `[[Galactic Hub Builders Guild|${chapter}]] Member`;
		} else if (chapter.includes('GHSL')) {
			return `[[Galactic Hub Star League|${chapter}]] Member`;
		} else if (chapter.includes('GHTD')) {
			return `[[Galactic Hub Treasury Department|${chapter}]] Member`;
		} else if (chapter.includes('HBS')) {
			return `[[Hublic Broadcasting Service|${chapter}]] Member`;
		} else if (chapter.includes('Scribe')) {
			return 'EisHub [[Galactic Hub Eissentam Scribes|Scribe]]';
		} else if (chapter.includes('Archivist')) {
			return 'CalHub [[Galactic Hub Calypso Archivists|Archivist]]';
		} else {
			return `[[${chapter}]] member`;
		}
	})();
	return chapterSentence;
}

// formats a name to conform to wiki standards. Plain name = italicised, link = no formatting
function formatName(documenter) {
	if (!documenter) return documenter;

	const documented = (() => {
		if (documenter.includes('[') || documenter.includes('{')) {
			return documenter;
		} else {
			return `''${documenter}''`;
		}
	})();
	return documented
}

// hide discoveredlink input if discovered is populated and vice versa
function hideDiscoverer(keepId = null, removeId = null) {
	if (!keepId && !removeId) {			// show everything if no inputs are given
		const elements = document.querySelectorAll('[oninput*="hideDiscoverer"], [onchange*="hideDiscoverer"]')
		for (const element of elements) {
			hideInput(element, '');
		}
		return;
	}

	const keepInput = document.getElementById(keepId);
	const removeInput = document.getElementById(removeId);
	const removeInputCell = removeInput.closest('.data');
	const removeLabelCell = removeInputCell.previousElementSibling;

	const showStatus = (() => {
		if (keepInput.value) {
			return 'none';	// remove
		} else {
			return '';		// keep all
		}
	})();
	removeInputCell.style.display = showStatus;
	removeLabelCell.style.display = showStatus;
	removeInput.value = '';
	wikiCode(removeInput);
}

// enables bulletpoint content if more than one sentence
function addInfoBullet() {
	const elements = document.querySelectorAll('[data-add-info]');
	const lines = new Array;
	for (const element of elements) {
		if (element.nextElementSibling.style.display == '' && element.nextElementSibling.innerText != '') lines.push(element);
		element.innerHTML = '';
	}

	for (const line of lines) {
		if (lines.length > 1) {
			const content = line.dataset.addInfo;
			line.innerHTML = content;
		} else {
			line.innerHTML = '';
		}
	}
}

function errorMessage(element, msg = null) {
	const tableCell = element.closest('.data');
	tableCell?.querySelector('.error')?.remove();
	element.style.backgroundColor = '';
	tableCell.previousElementSibling.style.alignItems = '';
	if (!msg) return;
	element.style.backgroundColor = 'red';
	const div = document.createElement('div');
	div.innerHTML = msg;
	div.className = 'error';
	tableCell.appendChild(div);
	tableCell.previousElementSibling.style.alignItems = 'baseline';
}

function validateCoords(error = true) {
	const element = globalElements.input.axesInput;
	const axes = element.value;
	const axesRegex = new RegExp(/[+-](?:[0-9]{1,3})\.(?:[0-9]{2}), [+-](?:[0-9]{1,3})\.(?:[0-9]{2})/);
	if (!axes || regexMatch(axes, axesRegex)) {
		errorMessage(element);
		return;
	}
	if (error) errorMessage(element, 'Invalid coordinate format');
	return 'error';
}

// hides an input cell and its label cell. Takes a second argument of a CSS display value (for example '' or 'none')
function hideInput(element, displayValue = null) {
	const inputCell = element.closest('.tableCell')
	const labelCell = inputCell.previousElementSibling;
	const inputRow = [labelCell, inputCell];

	for (const cell of inputRow) {
		if (cell.style.display) {
			cell.style.display = displayValue ?? '';
		} else {
			cell.style.display = displayValue ?? 'none';
		}
	}
}

function enPrefix(text, dest = null) {
	const firstLetter = text?.match(/[a-zA-Z]/)?.[0]?.toLowerCase();
	const output = (() => {
		if (vowels.includes(firstLetter)) {
			return 'an';
		} else {
			return 'a';
		}
	})();
	if (dest) wikiCode(output, dest);
	return output;
}

// returns true (bool) if string matches regex
function regexMatch(string, regex) {
	const stringMatches = string.match(regex);
	return stringMatches?.length == 1 && stringMatches[0]?.length == string.length;
}

function docByResearchteam(expected) {
	const researchteam = pageData.researchteam;
	const researchteamData = {
		GHSH: 'Ship Hunters',
		GHEC: 'Exobiology Corps',
	}
	if (researchteam == expected) {
		return ` and documented by the [[Galactic Hub ${researchteamData[expected]}]]`;
	} else {
		return '';
	}
}

function shortenGHub(civ) {
	if (civ == 'GHub' || civ == 'Galactic Hub Project') return 'Galactic Hub';
	return civ;
}

function numberStats(element, decimals = null, outputRaw = false) {
	if (arguments.length == 0) {
		const numbers = document.querySelectorAll('[oninput*="numberStats"]');
		for (const element of numbers) {
			numberStats(element);
		}
		return;
	}

	const dest = element.dataset.destNoauto
	const propertyValue = pageData[dest];
	const propertyData = numberError(element, propertyValue, decimals, outputRaw);

	wikiCode(propertyData, dest);
}

function numberError(element, value = element.value, decimals = null, outputRaw = false) {
	const number = getNumber(value, decimals, outputRaw);
	if (number || !value || value == '+' || value == '-') {
		errorMessage(element);
	} else {
		errorMessage(element, 'Must only contain numbers');
	}
	return number;
}

function getNumber(number, decimals = null, outputRaw = false) {
	const raw = parseFloat(number.replaceAll(',', ''));
	const output = (() => {
		if ((!raw && raw != 0) || isNaN(raw)) return '';
		if (decimals) return parseFloat(raw).toFixed(decimals);
		return raw;
	})();
	if (outputRaw || !output) return output.toString();
	return new Intl.NumberFormat('en-UK').format(output);
}

// expects object in the following format: { datalistId1:['entry1', 'entry2'], datalistId2:['entry1'] }
function datalists(object) {
	for (const Id in object) {
		const datalist = document.createElement('datalist');
		datalist.id = Id;
		for (const option of object[Id]) {
			const optionElement = document.createElement('option');
			optionElement.value = option;
			datalist.appendChild(optionElement);
		}
		document.body.appendChild(datalist);
	}
}

function forceDatalist(element) {
	const option = element.list.querySelector(`[value="${element.value}"]`);
	if (!option && element.value) {
		errorMessage(element, 'Not a valid option. If you believe this is an error, submit a <a href="https://forms.gle/uDABQyPh1AvPAczs9" rel="noreferrer noopener" target="_blank">bug report</a>.');
	} else {
		errorMessage(element);
	}
}

const dataIntegrityObj = { text: '', copy: '' };
function checkDataIntegrity(simple = false) {		// returns false if nothing is wrong
	if (pageData.debug) return false;
	const currentText = JSON.stringify(pageData);
	const savedText = dataIntegrityObj.text;

	const name = pageData.name;
	const glyphs = pageData.portalglyphs;
	const region = pageData.region;

	if (name && glyphs && region && ((currentText == savedText && dataIntegrityObj.copy === true) || simple)) {
		dataIntegrityObj.copy = false;
		return false;
	} else if (!name) {
		return 'Missing name!';
	} else if ((!glyphs || !region)) {
		return 'Wrong glyphs!';
	} else {
		return 'Copy code first!';
	}
}

// removes newlines. Why? Because I needed that twice now.
function removeNewlines(text) {
	const newlineRegex = /\r?\n|\r/g;
	const textString = text.replace(newlineRegex, '');
	return textString;
}

function getSelectedText(section) {
	// this is some stupid BS: Chrome selects the button text, despite it having user-select:none. #chromesucks
	// I have no idea how to fix this, so I will just remove the button text from the string :shrug:
	const buttonText = document.getElementById('switchTheme').innerText;

	const sectionText = removeNewlines(section.closest('.wikiText').innerText).trim();
	const selected = (() => {
		const text = removeNewlines(window.getSelection().toString()).trim();
		if (text.endsWith(buttonText)) return text.replace(buttonText, '').trim();
		return text;
	})();

	dataIntegrityObj.text = JSON.stringify(pageData);
	dataIntegrityObj.copy = (sectionText == selected)
}

function enableTextMarking() {
	if (pageData.debug) {
		document.body.dataset.mark = true;
	} else {
		document.body.dataset.mark = !checkDataIntegrity(true);
	}
}

function preventCopy() {
	const error = checkDataIntegrity(true);
	if (error) {
		explanation('Missing/Incorrect Data', error);
	}
}

function assignDefaultValue(element, value = element.dataset.default) {
	if (element.value.trim()) return;
	const dest = element.dataset.dest ?? element.dataset.destNoauto;
	wikiCode(value, dest);
}

// generic function to remove elements in array
function removeSection(array) {
	for (const section of array) {
		section.remove();
	}
}

// removes specific section
function removeSpecificSection(sectionName, attribute = 'section') {
	const sections = document.querySelectorAll(`[data-${attribute}="${sectionName}"]`);
	removeSection(sections);
}

// hides original name in wikicode if not given
function hideOrgName() {
	const orgName = pageData.oldName;
	const aliascElement = globalElements.output.oldName.parentElement;
	if (orgName) {
		aliascElement.style.display = ''
	} else {
		aliascElement.style.display = 'none'
	}
}

function getChildIndex(array, data) {
	const IDs = [0];	// dummy element to avoid if statement
	for (const element of array) {
		const idNumber = extractNumber(fetchFromObject(element, data));	// get all numbers of the string into an array, then join that array
		IDs.push(parseInt(idNumber));
	}
	function compareNumbers(a, b) {
		return a - b;
	}
	IDs.sort(compareNumbers);
	return IDs[IDs.length - 1] + 1;

	// necessary to access properties of different depths of an element
	// takes an object and a string representing the path to the property in dot notation ('dataset.planet')
	// code from https://stackoverflow.com/questions/4255472/javascript-object-access-variable-property-by-name-as-string
	function fetchFromObject(obj, prop) {
		//property not found
		if (typeof obj === 'undefined') return false;

		//index of next property split
		const index = prop.indexOf('.');

		//property split found; recursive call
		if (index > -1) {
			//get object at property (before split), pass on remainder
			return fetchFromObject(obj[prop.substring(0, index)], prop.substr(index + 1));
		}

		//no split; get property
		return obj[prop];
	}
}

// sorts an object alphabetically by keys. See https://www.w3docs.com/snippets/javascript/how-to-sort-javascript-object-by-key.html for source
// the second parameter expects a boolean, which will determine if it will sort numbers correctly or not
// (all strings are deleted except their numbers, and the remaining numbers are then sorted)
function sortObj(obj, number = false) {
	if (number) {
		const keys = Object.keys(sortObj(obj));
		const numbers = keys.map(key => extractNumber(key)).map(Number).sort((a, b) => {
			return a - b;
		});
		const result = new Object;
		for (const number of numbers) {
			const keyIndex = keys.findIndex(element => extractNumber(element) == number)
			const key = keys[keyIndex];
			keys.splice(keyIndex, 1);
			result[key] = obj[key];
		}
		return result;
	} else {
		return Object.keys(obj).sort().reduce((result, key) => {
			result[key] = obj[key];
			return result;
		}, {});
	}
}

// this only works for integers
function extractNumber(string) {
	return string?.match(/[0-9]/g)?.join('') ?? '';
}

function oddEven(number) {
	if (number % 2 == 0) return 'even';
	return 'odd';
}
