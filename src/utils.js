export const calcText = (counter) => {
    let text;
    switch (counter) {
        case 0: text = 'Спорим, ты не нажмёшь на кнопку?'; break;
        case 1: text = 'А ты хорош! А давай ещё!'; break;
        case 2: text = 'А ещё?'; break;
        case 3: text = 'Ещё?'; break;
        case 4: text = 'Ещё??'; break;
        case 5: text = 'Ещё не надоело?'; break;
        case 6: text = 'Может хватит?'; break;
        case 7: text = 'Ну, харош, сколько можно?'; break;
        default:
            if (counter > 100) text = 'Иди спать';
            else if (counter > 50) text = 'Даже слишком';
            else if (counter > 10) text = 'А ты упорный!';
            else text = 'Ой, всё...';
            break;
    }
    return text;
};