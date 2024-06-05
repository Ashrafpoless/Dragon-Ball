import state from "../data/state.js";


const renderDisplaySection = () => {
    const displaySection = document.createElement('div');
    displaySection.className = 'display';


    // loop through the data to fill the display section
    state.itemToDisplay.forEach((item)=>{

        const dragonDiv = document.createElement('div')
        dragonDiv.className = 'dragon'

        const img = document.createElement('img');
        img.className = 'img';
        img.src = item.image

        const name = document.createElement('h3');
        name.className= 'name';
        name.innerText = item.name

        const raceGender = document.createElement('h4');
        raceGender.classList.add('raceGender');
        raceGender.innerHTML = `${item.race} ${item.gender}`;

        const baseKi = document.createElement('h5');
        baseKi.innerText = 'Base Ki';

        const baseValue = document.createElement('h4');
        baseValue.innerText = item.ki;


        const totalKi = document.createElement('h5');
        totalKi.innerText = 'Total Ki';

        const totalValue = document.createElement('h4');
        totalValue.innerText = item.maxKi;

        const affiliation = document.createElement('h5');
        affiliation.innerText =  'Affiliation';

        const affiliationValue = document.createElement('h4');
        affiliationValue.innerText = item.affiliation;

        dragonDiv.append(img, name, raceGender, baseKi, baseValue, totalKi, totalValue, affiliation, affiliationValue )
        displaySection.append(dragonDiv )
    })
    
    return displaySection;
}

export default renderDisplaySection;