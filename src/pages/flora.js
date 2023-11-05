function startupFunctions() {
    resourceHarvest()
	albumDropdown();
	hideOrgName();
	pageName();
	bundlePropFunctions();
	planetMoonSentence();
	hideAlbumEntry();
	albumFunctions();
	noLineBreak();
}

const floraElementFunctions = {
    planetInput: ['planetMoonSentence()'],
	moonInput: ['planetMoonSentence()'],
	element_primary_input: ['resourceHarvest()'],
    element_secondary_input: ['resourceHarvest()'],
}

assignElementFunctions(floraElementFunctions);

function resourceHarvest() {

    const primaryElement = pageData.element_primary;
    const secondaryElement = pageData.element_secondary;

    if (secondaryElement) {
        output = `This flora provides the resources of [[${primaryElement}]] and [[${secondaryElement}]] when harvested.`;
    } else {
        output = `This flora provides the resource [[${primaryElement}]] when harvested.`;
    }

    globalElements.output.usage.innerText = output;
}
