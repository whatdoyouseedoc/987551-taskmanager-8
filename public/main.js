const filters = [
    {
        name: 'ALL',
        tasksAmount: 32,
        checked: true
    },
    {
        name: 'OVERDUE',
        tasksAmount: 1,
        disabled: true
    },
    {
        name: 'TODAY',
        tasksAmount: 2,
        disabled: true
    },
    {
        name: 'FAVORITES',
        tasksAmount: 3
    },
    {
        name: 'Repeating',
        tasksAmount: 5
    },
    {
        name: 'Tags',
        tasksAmount: 8
    },
    {
        name: 'ARCHIVE',
        tasksAmount: 13
    }
];

/**
 * Render filter markup
 * @param {string} name Filter name
 * @param {number} tasksAmount Amount of tasks
 * @param {boolean} checked Checked state
 * @param {boolean} disabled Disabled state
 */
const renderFilter = (name, tasksAmount = 0, checked = false, disabled = false) => {
    const markup = `
        <input
            type="radio"
            id="filter__${name}"
            class="filter__input visually-hidden"
            name="filter"
            ${checked ? 'checked' : ''}
            ${disabled ? 'disabled' : ''}
        />
        <label for="filter__${name}" class="filter__label">
            ${name.toUpperCase()} <span class="filter__${name}-count">${tasksAmount}</span>
        </label>
    `;

    document.querySelector('.main__filter').innerHTML += markup;
};

const drawFilters = () => {
    filters.forEach(item => {
        renderFilter(item.name, item.tasksAmount, item.checked, item.disabled);
    });
};

drawFilters();

const getCardMarkup = (color = 'black', repeat, text = '', hashTags, deadline = false) => {
    return `
        <article class="card card--${color} ${repeat ? 'card--repeat' : ''} ${deadline ? 'card--deadline' : ''}">
            <form class="card__form" method="get">
                <div class="card__inner">
                    <div class="card__control">
                        <button type="button" class="card__btn card__btn--edit">edit</button>
                        <button type="button" class="card__btn card__btn--archive">archive</button>
                        <button type="button" class="card__btn card__btn--favorites card__btn--disabled">favorites</button>
                    </div>

                    <div class="card__color-bar">
                        <svg width="100%" height="10">
                        <use xlink:href="#wave"></use>
                        </svg>
                    </div>

                    <div class="card__textarea-wrap">
                        <label>
                            <textarea
                                class="card__text"
                                placeholder="Start typing your text here..."
                                name="text"
                            >${text}</textarea>
                        </label>
                    </div>

                    <div class="card__settings">
                        <div class="card__details">
                            <div class="card__dates">
                                <button class="card__date-deadline-toggle" type="button">
                                    date: <span class="card__date-status">no</span>
                                </button>

                                <fieldset class="card__date-deadline" disabled>
                                    <label class="card__input-deadline-wrap">
                                        <input
                                        class="card__date"
                                        type="text"
                                        placeholder="23 September"
                                        name="date"
                                        />
                                    </label>
                                    <label class="card__input-deadline-wrap">
                                        <input
                                        class="card__time"
                                        type="text"
                                        placeholder="11:15 PM"
                                        name="time"
                                        />
                                    </label>
                                </fieldset>

                                <button class="card__repeat-toggle" type="button">
                                    repeat:<span class="card__repeat-status">no</span>
                                </button>

                                <fieldset class="card__repeat-days" disabled>
                                    <div class="card__repeat-days-inner">
                                        <input
                                            class="visually-hidden card__repeat-day-input"
                                            type="checkbox"
                                            id="repeat-mo-1"
                                            name="repeat"
                                            value="mo"
                                        />
                                        <label class="card__repeat-day" for="repeat-mo-1">mo</label>
                                        <input
                                            class="visually-hidden card__repeat-day-input"
                                            type="checkbox"
                                            id="repeat-tu-1"
                                            name="repeat"
                                            value="tu"
                                            checked
                                        />
                                        <label class="card__repeat-day" for="repeat-tu-1">tu</label>
                                        <input
                                            class="visually-hidden card__repeat-day-input"
                                            type="checkbox"
                                            id="repeat-we-1"
                                            name="repeat"
                                            value="we"
                                        />
                                        <label class="card__repeat-day" for="repeat-we-1">we</label>
                                        <input
                                            class="visually-hidden card__repeat-day-input"
                                            type="checkbox"
                                            id="repeat-th-1"
                                            name="repeat"
                                            value="th"
                                        />
                                        <label class="card__repeat-day" for="repeat-th-1">th</label>
                                        <input
                                            class="visually-hidden card__repeat-day-input"
                                            type="checkbox"
                                            id="repeat-fr-1"
                                            name="repeat"
                                            value="fr"
                                            checked
                                        />
                                        <label class="card__repeat-day" for="repeat-fr-1">fr</label>
                                        <input
                                            class="visually-hidden card__repeat-day-input"
                                            type="checkbox"
                                            name="repeat"
                                            value="sa"
                                            id="repeat-sa-1"
                                        />
                                        <label class="card__repeat-day" for="repeat-sa-1">sa</label>
                                        <input
                                            class="visually-hidden card__repeat-day-input"
                                            type="checkbox"
                                            id="repeat-su-1"
                                            name="repeat"
                                            value="su"
                                            checked
                                        />
                                        <label class="card__repeat-day" for="repeat-su-1">su</label>
                                    </div>
                                </fieldset>
                            </div>

                            <div class="card__hashtag">
                                <div class="card__hashtag-list">
                                    ${hashTags}
                                </div>

                                <label>
                                    <input
                                        type="text"
                                        class="card__hashtag-input"
                                        name="hashtag-input"
                                        placeholder="Type new hashtag here"
                                    />
                                </label>
                            </div>
                        </div>

                        <label class="card__img-wrap card__img-wrap--empty">
                            <input
                                type="file"
                                class="card__img-input visually-hidden"
                                name="img"
                            />
                            <img
                                src="img/add-photo.svg"
                                alt="task picture"
                                class="card__img"
                            />
                        </label>

                        <div class="card__colors-inner">
                            <h3 class="card__colors-title">Color</h3>
                            <div class="card__colors-wrap">
                                <input
                                    type="radio"
                                    id="color-black-1"
                                    class="card__color-input card__color-input--black visually-hidden"
                                    name="color"
                                    value="black"
                                    checked
                                />
                                <label for="color-black-1" class="card__color card__color--black">black</label>
                                <input
                                    type="radio"
                                    id="color-yellow-1"
                                    class="card__color-input card__color-input--yellow visually-hidden"
                                    name="color"
                                    value="yellow"
                                />
                                <label for="color-yellow-1" class="card__color card__color--yellow">yellow</label>
                                <input
                                    type="radio"
                                    id="color-blue-1"
                                    class="card__color-input card__color-input--blue visually-hidden"
                                    name="color"
                                    value="blue"
                                />
                                <label for="color-blue-1" class="card__color card__color--blue">blue</label>
                                <input
                                    type="radio"
                                    id="color-green-1"
                                    class="card__color-input card__color-input--green visually-hidden"
                                    name="color"
                                    value="green"
                                />
                                <label for="color-green-1" class="card__color card__color--green">green</label>
                                <input
                                    type="radio"
                                    id="color-pink-1"
                                    class="card__color-input card__color-input--pink visually-hidden"
                                    name="color"
                                    value="pink"
                                />
                                <label for="color-pink-1" class="card__color card__color--pink">pink</label>
                            </div>
                        </div>
                    </div>

                    <div class="card__status-btns">
                        <button class="card__save" type="submit">save</button>
                        <button class="card__delete" type="button">delete</button>
                    </div>
                </div>
            </form>
        </article>
    `;
};

const renderCard = (markup) => {
    document.querySelector('.board__tasks').innerHTML += markup;
};

const cards = [];
const cardsAmount = 7;

const colors = ['pink', 'yellow', 'blue'];
const repeats = [true, false];
const deadlines = [true, false];
const texts = ['Sample text 1', 'Sample text 2', 'Sample text 3', 'Sample text 4', 'Sample text 5'];
const hashTagsMock = ['#one', '#one #two', ''];

for (let i = 0; i < cardsAmount; i++) {
    const color = colors[rand(0, 4)];
    const repeat = repeats[rand(0, 1)];
    const text = texts[rand(0, 4)];
    const hashTags = hashTagsMock[rand(0, 2)];
    const deadline = deadlines[rand(0, 1)];

    cards.push(getCardMarkup(
        color,
        repeat,
        text,
        hashTags,
        deadline
    ));
}

cards.forEach(item => {
    renderCard(item);
});

function rand(min, max) {
    return Math.floor(min - 0.5 + Math.random() * (max - min + 1));
}