import countriesData from './countries.js';

document.addEventListener('DOMContentLoaded', function () {
    const userlist = document.getElementById('countries-list');
    const searchInput = document.getElementById('search');
    const sortByNameBtn = document.getElementById('name');
    const sortByCapitalBtn = document.getElementById('Capital');
    const sortByPopulationBtn = document.getElementById('Population');
    const scrollToDownBtn = document.getElementById('down');
    const scrollToUpBtn = document.getElementById('up');
    const searchByCapitalBtn = document.getElementById('search-capital');

    let sortOrders = {
        name: true,
        capital: true,
        population: true
    };

    function findCountries() {
        const searchInputValue = searchInput.value.trim().toLowerCase();
        const countryElements = document.querySelectorAll('.country');
        const worldPopulationList = document.getElementById('world-population');
        worldPopulationList.innerHTML = '';

        const worldPopulation = 7340608831;
        const worldBarWidth = 50;

        let matchedCountries = [];

        countryElements.forEach(country => {
            const countryName = country.querySelector('#NAME').textContent.toLowerCase();
            const countryPopulation = parseInt(country.querySelector('span').textContent.replace(/\D/g, ''));
            const countryCapital = country.querySelector('#CAPITAL').textContent.toLowerCase();
            const countryLanguages = country.querySelector('#LANGUAGES').textContent.toLowerCase();
            const isMatch = countryName.includes(searchInputValue) || countryCapital.includes(searchInputValue) || countryLanguages.includes(searchInputValue);

            country.style.display = isMatch ? 'block' : 'none';

            if (isMatch) {
                matchedCountries.push({ name: countryName, population: countryPopulation });
            }
        });

        matchedCountries.sort((a, b) => b.population - a.population);
        const worldDiv = document.createElement('div');
        const worldPop = document.createElement('p');
        worldPop.textContent = '7,340,608,831';
        const world = document.createElement('p');
        world.textContent = 'world';
        const bars = document.createElement('p');
        bars.textContent = '';
        bars.setAttribute('id', 'lastBar');
        worldDiv.setAttribute('id', 'worldDiv');
        world.setAttribute('id', 'World');
        worldDiv.appendChild(world);
        worldDiv.appendChild(bars);
        worldDiv.appendChild(worldPop);
        const worldBar = document.createElement('div');
        worldBar.setAttribute('id', 'bar');
        worldBar.style.width = `${worldBarWidth}%`;
        worldDiv.appendChild(worldBar);
        worldPopulationList.appendChild(worldDiv);

        matchedCountries.forEach(country => {
            const listItem = document.createElement('div');
            listItem.setAttribute('id', 'items');
            const populationName = document.createElement('span');
            const populationBar = document.createElement('span');
            populationBar.setAttribute('id', 'BARS');
            const populationNumber = document.createElement('span');
            populationNumber.setAttribute('id', 'NUMBERS');
            populationName.setAttribute('id', 'NAMES');
            populationName.textContent = `${country.name}`;
            populationBar.textContent = ``;
            populationNumber.textContent = `${country.population.toLocaleString()}`;
            const countryBarWidth = (country.population / worldPopulation) * worldBarWidth;
            populationBar.style.width = `${countryBarWidth}%`;
            listItem.appendChild(populationName);
            listItem.appendChild(populationBar);
            listItem.appendChild(populationNumber);
            worldPopulationList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', findCountries);

    sortByNameBtn.addEventListener('click', function () {
        sortCountriesByName();
        toggleSortOrder('name');
    });

    sortByCapitalBtn.addEventListener('click', function () {
        sortCountriesByCapital();
        toggleSortOrder('capital');
    });

    sortByPopulationBtn.addEventListener('click', function () {
        sortCountriesByPopulation();
        toggleSortOrder('population');
    });

    scrollToDownBtn.addEventListener('click', function () {
        scrollToBottom();
    });

    scrollToUpBtn.addEventListener('click', function () {
        scrollToTop();
    });

    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function sortCountriesByName() {
        const countryElements = document.querySelectorAll('.country');
        const sortedCountries = Array.from(countryElements).sort((a, b) => {
            const nameA = a.querySelector('#NAME').textContent.toLowerCase();
            const nameB = b.querySelector('#NAME').textContent.toLowerCase();
            return sortOrders.name ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });


        userlist.innerHTML = '';
        sortedCountries.forEach(country => {
            userlist.appendChild(country);
        });
    }

    function sortCountriesByCapital() {
        const countryElements = document.querySelectorAll('.country');
        const sortedCountries = Array.from(countryElements).sort((a, b) => {
            const capitalA = a.querySelector('#CAPITAL').textContent.toLowerCase();
            const capitalB = b.querySelector('#CAPITAL').textContent.toLowerCase();
            return sortOrders.capital ? capitalA.localeCompare(capitalB) : capitalB.localeCompare(capitalA);
        });

        userlist.innerHTML = '';
        sortedCountries.forEach(country => {
            userlist.appendChild(country);
        });
    }

    function sortCountriesByPopulation() {
        const countryElements = document.querySelectorAll('.country');
        const sortedCountries = Array.from(countryElements).sort((a, b) => {
            const populationA = parseInt(a.querySelector('span').textContent.replace(/\D/g, ''));
            const populationB = parseInt(b.querySelector('span').textContent.replace(/\D/g, ''));
            return sortOrders.population ? populationB - populationA : populationA - populationB;
        });

        userlist.innerHTML = '';
        sortedCountries.forEach(country => {
            userlist.appendChild(country);
        });
    }

    countriesData.forEach(country => {
        const listItem = document.createElement('div');
        listItem.classList.add('country');
        const worldItem = document.getElementById('world-population');
        worldItem.classList.add('pop');

        const flagImg = document.createElement('img');
        flagImg.src = country.flag;
        flagImg.style.display = 'flex';
        flagImg.style.justifyContent = 'center';
        flagImg.style.width = '150px';
        flagImg.style.marginLeft = '70px';

        const name = document.createElement('p');
        name.innerHTML = `${country.name}`;
        name.setAttribute('id', 'NAME');
        name.style.display = 'flex';
        name.style.justifyContent = 'center';
        name.style.color = 'orange';
        name.style.fontSize = '25px';

        const capital = document.createElement('p');
        capital.innerHTML = ` Capital : ${country.capital}`;
        capital.setAttribute('id', 'CAPITAL');

        const languages = document.createElement('p');
        languages.textContent = ` Languages : ${country.languages.join(', ')}`;
        languages.setAttribute('id', 'LANGUAGES');
        languages.style.display = 'flex';
        languages.style.width = '100%';

        const populations = document.createElement('span');
        populations.textContent = ` Population: ${country.population.toLocaleString()}`;
        populations.setAttribute('id', 'POPULATIONS');

        listItem.appendChild(flagImg);
        listItem.appendChild(name);
        listItem.appendChild(capital);
        listItem.appendChild(languages);
        listItem.appendChild(populations);

        userlist.appendChild(listItem);
    });

    function showPopulation() {
        let pop = document.getElementById('population');
        let lan = document.getElementById('languages');
        pop.style.backgroundColor = '#8bcecc';
        lan.style.backgroundColor = 'orange';
        var sortedCountries = countriesData.sort(function (a, b) {
            return b.population - a.population;
        });
        var top10Countries = sortedCountries.slice(0, 10);

        var resultDiv1 = document.getElementById("result2");
        var resultDiv2 = document.getElementById("result5");

        resultDiv1.innerHTML = "";
        resultDiv2.innerHTML = "";

        var worldPopulation = 0;
        for (var i = 0; i < countriesData.length; i++) {
            worldPopulation += countriesData[i].population;
        }

        var worldResult1 = document.createElement("li");
        worldResult1.textContent = worldPopulation.toLocaleString();
        resultDiv2.appendChild(worldResult1);
        worldResult1.style.display = "block"
        var res1 = document.createElement("li")
        res1.textContent = "world";
        resultDiv1.appendChild(res1);
        res1.style.display = 'block'
        res1.style.width = '4px'

        top10Countries.forEach(function (country, index) {
            var countryElement1 = document.createElement("li");
            countryElement1.textContent = country.name
            document.createElement('div')
            var res = document.createElement("li")
            res.textContent = country.population.toLocaleString();
            resultDiv1.appendChild(countryElement1);
            resultDiv2.appendChild(res);
            res.setAttribute("id", "p2")
            countryElement1.setAttribute("id", "p1")

            var resultDiv3 = document.getElementById("result1");
            var resultDiv4 = document.getElementById("result6");
            resultDiv2.style.display = "block";
            resultDiv1.style.display = 'block'

            resultDiv3.style.display = "none";
            resultDiv4.style.display = "none";

            let bar = document.getElementById("result4");
            bar.style.display = "block";
            bar.style.marginLeft = '23px';

            customBar("result4",   "center", "100%", "10px", "45px", "10px solid", 'orange', 'orange')
            customBar("result4.1", "center", "18.8%", "10px", "40px", "10px solid", 'orange', 'orange')
            customBar("result4.2", "center", "17.6%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.3", "center", "4.4%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.4", "center", "3.5%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.5", "center", "2.7%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.6", "center", "2.6%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.7", "center", "2.5%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.8", "center", "2.1%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar( "result4.9", "center", "1.9%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar( "result4.10", "center", "1.6%", "10px", "18px", "10px solid", 'orange', 'orange')
            let bar10 = document.getElementById("result4.10");
            bar10.style.display = 'block'  
        });
    }
    document.getElementById("population").addEventListener("click", showPopulation);

    function showLanguages() {
        let lan = document.getElementById('languages');
        let pop = document.getElementById('population');
        lan.style.backgroundColor = '#8bcecc';
        pop.style.backgroundColor = 'orange';
        var allLanguages = [];
        countriesData.forEach(function (country) {
            allLanguages = allLanguages.concat(country.languages);
        });

        var languageCounts = {};
        allLanguages.forEach(function (language) {
            if (languageCounts[language]) {
                languageCounts[language]++;
            } else {
                languageCounts[language] = 1;
            }
        });

        var sortedLanguages = Object.keys(languageCounts).sort(function (a, b) {
            return languageCounts[b] - languageCounts[a];
        });

        var top10Languages = sortedLanguages.slice(0, 10);

        var resultDiv4 = document.getElementById("result2");
        var resultDiv5 = document.getElementById("result6");

        resultDiv4.innerHTML = "";
        resultDiv5.innerHTML = "";

        top10Languages.forEach(function (language, index) {
            var languageElement1 = document.createElement("li");
            languageElement1.textContent = language;
            var languageElement2 = document.createElement("li");
            languageElement2.textContent = languageCounts[language];
            resultDiv4.appendChild(languageElement1);
            resultDiv5.appendChild(languageElement2);
            languageElement1.setAttribute("id", "p3")
            languageElement2.setAttribute("id", "p4")
            var resultDiv2 = document.getElementById("result5")
            var resultDiv3 = document.getElementById("result1");

            resultDiv2.style.display = "none";
            resultDiv3.style.display = 'none'

            resultDiv4.style.display = "block";
            resultDiv5.style.display = "block";

            let bar = document.getElementById("result4");
            bar.style.display = "block";

            customBar("result4",   "center", "91%", "10px", "45px", "10px solid", 'orange', 'orange')
            customBar("result4.1", "center", "49.5%", "10px", "40px", "10px solid", 'orange', 'orange')
            customBar("result4.2", "center", "27.5%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.3", "center", "26.3%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.4", "center", "9.8%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.5", "center", "9.8%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.6", "center", "8.7%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.7", "center", "7.6%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar("result4.8", "center", "5.4%", "10px", "18px", "10px solid", 'orange', 'orange')
            customBar( "result4.9", "center", "4.3%", "10px", "18px", "10px solid", 'orange', 'orange')
            let bar10 = document.getElementById('result4.10')
            bar10.style.display = 'none'
        });
    }

    document.getElementById("languages").addEventListener("click", showLanguages);

    /**
     * @param {string} id  
     * @param {string} justify
     * @param {string} width
     * @param {string} height
     * @param {string} marginTop
     * @param {string} border
     * @param {string} background
     */
    const customBar = (id, justify, width, height, marginTop, border, borderColor, background) => {
        let bar = document.getElementById(id);
        bar.style.justifyContent = justify;
        bar.style.width = width;
        bar.style.height = height;
        bar.style.marginTop = marginTop;
        bar.style.border = border;
        bar.style.borderColor = borderColor;
        bar.style.backgroundColor = background;
    };
});
