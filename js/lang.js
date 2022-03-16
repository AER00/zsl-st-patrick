const LANG_PL = {
    "render-page-title": "Św. Patryk",
    "render-text-title": "Św. Patryk",
    "render-text-header-1": "Święty Patryk",
    "render-text-header-2": "Dzień Św. Patryka",
    "render-text-p-1": "Był irlandzkim biskupem, jak i&nbsp;<strong>świętym patronem</strong> kraju. Data jego święta to 17 marca, <strong>rocznica jego śmierci</strong>, do kt&oacute;rej doszło w&nbsp;V wieku. Najbardziej znana legenda o Św. Patryku opowiada jak wyjaśnił Świętą Tr&oacute;jcę (Ojca, Syna i&nbsp;ucha Świętego) przy pomocy trzech liści irlandzkiej koniczyny.",
    "render-text-p-2": "Święto celebrujące kulturę Irlandzką, najbardziej powszechne w&nbsp;Stanach Zjednoczonych, Kanadzie, Australii i, oczywiście, w&nbsp;Irlandii. Do sposob&oacute;w świętowania należy branie udziału w&nbsp;paradach, noszenie zielonych ubrań udekorowanych symbolem <strong>tr&oacute;jlistnej koniczyny</strong> (narodowej rośliny Irlandii), jak i&nbsp;picie irlandzkiego piwa czy whiskey.",
    "render-text-p-3": "Pierwsza odnotowana parada z okazji dnia Św. Patryka odbyła się w&nbsp;<strong>1601</strong> roku w&nbsp;hiszpańskiej kolonii na terenie dzisiejszego <strong>St. Augustine na Florydzie</strong>. Jednakże tradycja przyjęła się dopiero niecałe dwa wieki p&oacute;źniej, od roku <strong>1772</strong>, począwszy od <strong>Bostonu i&nbsp;Nowego Jorku</strong>, gdzie mieszkała spora ilość irlandzkich imigrant&oacute;w. Ta liczba tylko wzrosła w&nbsp;<strong>1845</strong> roku, kiedy <strong>Wielki Gł&oacute;d w&nbsp;Irlandii</strong> zmusił ponad milion biednych, niewykształconych Irlandczyk&oacute;w do emigracji do Stan&oacute;w Zjednoczonych aby uniknąć śmierci głodowej.\n",
    "render-text-p-4": "Katoliccy Irlandczycy byli mniejszością religijną w&nbsp;USA, gdzie dominował protestantyzm, co&nbsp;prowadziło do ich <strong>dyskryminacji</strong>. Często utrudniało im to znalezienie jakiejkolwiek pracy. Kiedy wychodzili na ulice świętując dzień Św. Patryka, komiksy w&nbsp;gazetach ukazywały ich jako skłonnych do przemocy pijak&oacute;w.\n",
    "render-text-p-5": "Jednakże w&nbsp;następnych latach, irlandcy imigranci w&nbsp;USA uświadomili sobie, że ich duże i wciąż rosnące liczby obdarzyły ich niewykorzystaną siłą polityczną. Zaczęli się organizować, formując blok znany jako <em><strong>\"green machine\"</strong></em> (<em>\"zielona maszyna\"</em>), i&nbsp;niedługo parady w&nbsp;dniu Świętego Patryka stały się symbolem ich siły i&nbsp;kultury, a uczestnictwo w&nbsp;nich stało się niemal obowiązkowe dla wielu kandydat&oacute;w&nbsp;politycznych.\n",
    "render-footer": "Klasa 3GI1T, Wszelkie prawa zastrzeżone 2022"
}

const LANG_EN = {
    "render-page-title": "St. Patrick",
    "render-text-title": "St. Patrick",
    "render-text-header-1": "St. Patrick",
    "render-text-header-2": "St. Patrick's Day",
    "render-text-p-1": "Was an Irish bishop, and is the country's <strong>patron saint</strong> . The holiday's date of March 17<sup>th</sup> marks the <strong>anniversary of his death</strong> in the 5<sup>th</sup> century. The most well-known legend of St. Patrick is that he explained the Holy Trinity of the Father, the Son and the Holy Spirit using the three leaves of the shamrock.\n",
    "render-text-p-2": "Is a celebration of Irish culture, most commonly celebrated in the United States, Canada, Australia and, of course, Ireland. Ways to celebrate it include attending parades, wearing green clothing adorned with three-leaf clovers, or <strong>shamrocks</strong>(Ireland's national symbol), as well as drinking Irish beer and Irish whiskey.\n",
    "render-text-p-3": "The first St. Patrick's day parade in recorded history was held in <strong>1601</strong> , in a Spanish colony in what is now <strong>St. Augustine, Florida</strong>. However, the celebration didn't become widespread until almost two centuries later, in <strong>1772</strong>, starting with <strong>New York City and Boston</strong>, which were home for a number of Irish immigrants. That number only grew when the <strong>Great Potato Famine of 1845</strong> forced over a million of poor and uneducated Irish catholics to emigrate to the United States to avoid starvation.\n",
    "render-text-p-4": "The Irish were a minority in the US, and were <strong>often discriminated against</strong> due to their Catholic faith by the American Protestant majority, meaning they often had trouble finding even menial jobs. Whenever they took to the streets to celebrate St. Patrick's Day, they were portrayed in newspaper cartoons as drunk, violent monkeys.\n",
    "render-text-p-5": "However, in the coming years, they had realized that their large and growing numbers endowed them with a yet untapped political power. They started to organize, forming a bloc known as the <em><strong>\"green machine\"</strong></em>, and soon, St. Patrick's Day parades became a show of strength for Irish Americans, and a must-attend for a slew of political candidates.\n",
    "render-footer": "3GI1T, All rights reserved 2022"
}

function change_lang(data) {
    for (const [key, value] of Object.entries(data)) {
        document.getElementById(key).innerHTML = value;
    }
}

document.getElementById('lang-en').addEventListener('click', () => change_lang(LANG_EN));
document.getElementById('lang-pl').addEventListener('click', () => change_lang(LANG_PL));

change_lang(LANG_PL);
