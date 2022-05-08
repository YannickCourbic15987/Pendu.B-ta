const Life = document.querySelector("#Life");
const spanMask = document.querySelector("#spanMask");
const keyboard = document.querySelector("#keyboard");
const Gen = document.querySelector(".Gen");
const result = document.querySelector("#result");
const WordToFind = document.querySelector("#WordToFind");
const Score = document.querySelector('#score');
const barOfLife = document.querySelector('#barOfLife');
const barFail = document.querySelector('#barFail');
const barFail1 = document.querySelector('#barFail1');
const barFail2 = document.querySelector('#barFail2');
const imgPenduOf = document.querySelector("#imgPenduOf");
const lose = document.querySelector('#lose');
const imgPendu = document.querySelector("#imgPendu");
const btnLose = document.querySelector("#btnLose");
const Word = [
    "pomme",
    "oignon",
    "luffy",
    "dragon",
    "dark",
    "cetose",
    "automobile",
    "livres",
    "exorcisme",
    "pretre",
    "crucifix",
    "belzebuth",
    "incantation",
    "pentagramme",
    "satan",
    "possession",
    "666",
    "lilith",
    "reagan",
    "sel",
    "sacrifice",
    "succube",
    "incube",
    "albaz",
    "pazuzu",
    "marionette",
    "poupee",
    "blueexorciste",
    "lucifer",
    "dgrayman",
    "exodia",
    "sardoche",
    "roidusel",
    "santamuerte",
    "halloween",
    "macron",
    "tu-as-perdu",
    "anticonstitutionnellement",
    "association",
    "eunuque",
    "fumee",
    "alarme",
    "dormir",
    "jeune",
    "cave",
    "pyrorca",
    "maxestla",
    "polux",
    "rythme",
    "coeur",
    "sieste",
    "epectase",
    "uxoricide",
    "hexacadecanal",
    "pectine",



];
let k = 0;
let random = Math.ceil(Math.random() * Word.length - 1);
let WordRandom = Word[random];
let $fail = 7;
const letters = 'azertyuiopqsdfghjklmwxcvbn';
let tabletters = letters.split('');
let tabbtn = [];
Life.textContent = 'life : ' + $fail
let error = 7
const audioDarkSoul = new Audio('asset/audio/X2Download.com - DARK SOULS (128 kbps).mp3')
const BtnMusic = document.querySelector('#Music');
audioDarkSoul.play().loop = true;
BtnMusic.onclick = () => {
    k++;
    if (k % 2 === 0) {
        audioDarkSoul.pause()
    }
    else {
        audioDarkSoul.play().loop = true;
    }
}



let MewMaskedWord = ($spanMask) => {
    for (let i = 0; i < WordRandom.length; i++) {
        $spanMask.textContent += '_';
    }
    return $spanMask
}
MewMaskedWord(spanMask);
let Mask = spanMask.textContent;
const TabMask = Mask.split('')
//!test
console.log(WordRandom)
console.log(Mask)
console.log(TabMask)


let btnletter = ($tabbtn, $TabMask) => {

    for (let i = 0; i < tabletters.length; i++) {
        const btn = document.createElement('button');
        keyboard.appendChild(btn);
        btn.id = 'btn' + i;
        btn.textContent = tabletters[i];
        let initPos = -1;
        let indexOfPos = []
        btn.onclick = () => {
            btn.disabled = true
            while (initPos < WordRandom.length) {
                initPos++
                console.log(initPos);

                if (WordRandom[initPos] === tabletters[i]) {
                    indexOfPos.push(initPos)

                }
            }
            console.log('fail : ' + $fail)
            for (let i = 0; i < indexOfPos.length; i++) {

                $TabMask[indexOfPos[i]] = btn.textContent

            }
            spanMask.textContent = TabMask.join('')
            let Winner = TabMask.join('')
            console.log('index pos : ' + indexOfPos)
            console.log(TabMask)
            console.log(Winner)
            if (WordRandom.indexOf(btn.textContent) === - 1) {
                console.log(WordRandom.indexOf(btn.textContent))
                $fail--
                error--
                console.log('fail : ' + $fail)
                Life.textContent = 'life : ' + $fail
                BarFail()

            }
            if (Winner === WordRandom && $fail > 0) {
                winner()
            }
            else if (Winner !== WordRandom && $fail <= 0) {
                loose()
            }
        }
    }
    return $tabbtn, $TabMask
}

btnletter(tabbtn, TabMask,)

let winner = () => {
    barOfLife.remove()
    Life.remove();
    imgPendu.remove();
    lose.classList.add("visWin");
    result.textContent = 'Vous avez gagné'
    keyboard.remove()
    const AudioWin = new Audio("asset/audio/mixkit-animated-small-group-applause-523.wav")
    AudioWin.play()
    switch ($fail) {
        case 7: Score.textContent = 'Score : ' + ScoreRandom(8000, 10000);

            break;

        case 6: Score.textContent = 'Score : ' + ScoreRandom(7000, 8000);
            break;

        case 5: Score.textContent = 'Score : ' + ScoreRandom(6000, 7000);
            break;
        case 4: Score.textContent = 'Score : ' + ScoreRandom(3000, 4000);
            break;
        case 3: Score.textContent = 'Score : ' + ScoreRandom(2000, 3000);
            break;
        case 2: Score.textContent = 'Score : ' + ScoreRandom(1000, 2000);
            break;
        case 1: Score.textContent = 'Score : ' + ScoreRandom(500, 1000);
            break;
        case 0: Score.textContent = 'Score : ' + ScoreRandom(0, 500);

        default: Score.textContent = 'erreur 404'
            break;
    }

    Gen.classList.remove('Gen')
    Gen.classList.add('visGen');
    Gen.onclick = () => {
        location.reload();
    }
}

let loose = () => {
    result.textContent = 'vous avez perdu'
    keyboard.remove()
    WordToFind.textContent = 'le mot à trouver était : ' + WordRandom;
    switch ($fail) {
        case 0: Score.textContent = 'Score : ' + ScoreRandom(0, 500);
            break;
        default: Score.textContent = 'erreur 404'
            break;
    }
    barOfLife.remove()
    Life.remove();
    imgPendu.remove();
    lose.classList.add("vis");
    const AudioSard = new Audio("asset/audio/X2Download.com - Sardoche - MAIS VOILA MAIS C'ÉTAIT SÛR EN FAIT (128 kbps).mp3");
    AudioSard.play();
    Gen.classList.remove('Gen')
    Gen.classList.add('visGen');
    Gen.onclick = () => {
        location.reload();
    }
}
let ScoreRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

const AudioGamesDescends = new Audio('asset/audio/mixkit-retro-arcade-game-over-470.wav')

barOfLife.classList.add('fail7')

let BarFail = () => {
    switch (error) {


        case 6: barFail1.classList.add('barFail1-6')
            barFail2.classList.add('barFail2-6')
            barOfLife.classList.add('barOfLife')
            imgPenduOf.classList.add("imgFail2")
            AudioGamesDescends.play()
            break;

        case 5: barFail1.classList.add('barFail1-5')
            barFail2.classList.add('barFail2-5')
            imgPenduOf.classList.add("imgFail3")
            AudioGamesDescends.play()
            break;
        case 4: barFail1.classList.add('barFail1-4')
            barFail2.classList.add('barFail2-4')
            imgPenduOf.classList.add("imgFail4")
            AudioGamesDescends.play()
            break;
        case 3: barFail1.classList.add('barFail1-3')
            barFail2.classList.add('barFail2-3')
            imgPenduOf.classList.add("imgFail5")
            AudioGamesDescends.play()
            break;
        case 2: barFail1.classList.add('barFail1-2')
            barFail2.classList.add('barFail2-2')
            imgPenduOf.classList.add("imgFail6")
            AudioGamesDescends.play()
            break;
        case 1: barFail1.classList.add('barFail1-1')
            barFail2.classList.add('barFail2-1')
            imgPenduOf.classList.add("imgFail7")
            AudioGamesDescends.play()
            break;
        case 0: barFail1.classList.add('barFail1-0')
            barFail2.classList.add('barFail2-0')
            imgPenduOf.classList.add("imgFail")
            AudioGamesDescends.play()
            break;
        default: Score.textContent = 'erreur 404'
            break;
    }

}
console.log(ScoreRandom(9000, 10000))


// rien a voir boucle de tri ; 
// dans l'ordre croissant :
tab = [15, 12, 64, 8, 7, 12, 19, 7, 6, 1];

for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length; j++) {
        if (tab[j] > tab[j + 1]) {
            inf = tab[j];
            tab[j] = tab[j + 1];
            tab[j + 1] = inf;

        }
    }
}


console.log(tab)