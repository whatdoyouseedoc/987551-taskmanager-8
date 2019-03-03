import tagMarkup from './tag-markup';

const addClassRepeat = (days) => Object.values(days).some((item) => item) ? ` card--repeat` : ``;
const addClassBtnDisabled = (item) => item ? ` card__btn--disabled` : ``;

export default ({title, dueDate, tags, picture, color, repeatingDays, isFavorite}) => {
  const dateFromTimestamp = new Date(dueDate);
  const localeDate = dateFromTimestamp.toLocaleDateString(`en-us`, {day: `numeric`, month: `long`});
  const localeTime = dateFromTimestamp.toLocaleTimeString(`en-us`, {hour: `numeric`, minute: `numeric`});
  const hashTags = [...tags].reduce((acc, item) => acc + tagMarkup(item), ``);

  return `
    <article class="card card--${color} ${addClassRepeat(repeatingDays)}">
        <form class="card__form" method="get">
        <div class="card__inner">
            <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
                edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
                archive
            </button>
            <button
                type="button"
                class="card__btn card__btn--favorites ${addClassBtnDisabled(isFavorite)}"
            >
                favorites
            </button>
            </div>
            <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
            </svg>
            </div>
            <div class="card__textarea-wrap">
            <label>
                <textarea
                  class="card__text"
                  placeholder="Start typing your text here..."
                  name="text"
                >${title}</textarea>
            </label>
            </div>
            <div class="card__settings">
            <div class="card__details">
                <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                    date: <span class="card__date-status">no</span>
                </button>
                <fieldset class="card__date-deadline">
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__date"
                            type="text"
                            placeholder="${localeDate}"
                            name="date"
                            value="${localeDate}"
                          />
                        </label>
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__time"
                            type="text"
                            placeholder="${localeTime}"
                            name="time"
                            value="${localeTime}"
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
                        id="repeat-mo-2"
                        name="repeat"
                        value="mo"
                    />
                    <label class="card__repeat-day" for="repeat-mo-2"
                        >mo</label
                    >
                    <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-tu-2"
                        name="repeat"
                        value="tu"
                        checked
                    />
                    <label class="card__repeat-day" for="repeat-tu-2"
                        >tu</label
                    >
                    <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-we-2"
                        name="repeat"
                        value="we"
                    />
                    <label class="card__repeat-day" for="repeat-we-2"
                        >we</label
                    >
                    <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-th-2"
                        name="repeat"
                        value="th"
                    />
                    <label class="card__repeat-day" for="repeat-th-2"
                        >th</label
                    >
                    <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-fr-2"
                        name="repeat"
                        value="fr"
                        checked
                    />
                    <label class="card__repeat-day" for="repeat-fr-2"
                        >fr</label
                    >
                    <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        name="repeat"
                        value="sa"
                        id="repeat-sa-2"
                    />
                    <label class="card__repeat-day" for="repeat-sa-2"
                        >sa</label
                    >
                    <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-su-2"
                        name="repeat"
                        value="su"
                        checked
                    />
                    <label class="card__repeat-day" for="repeat-su-2"
                        >su</label
                    >
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
            <label class="card__img-wrap">
                <input
                type="file"
                class="card__img-input visually-hidden"
                name="img"
                />
                <img
                  src="${picture}"
                  alt="task picture"
                  class="card__img"
                />
            </label>
            <div class="card__colors-inner">
                <h3 class="card__colors-title">Color</h3>
                <div class="card__colors-wrap">
                <input
                    type="radio"
                    id="color-black-2"
                    class="card__color-input card__color-input--black visually-hidden"
                    name="color"
                    value="black"
                />
                <label
                    for="color-black-2"
                    class="card__color card__color--black"
                    >black</label
                >
                <input
                    type="radio"
                    id="color-yellow-2"
                    class="card__color-input card__color-input--yellow visually-hidden"
                    name="color"
                    value="yellow"
                />
                <label
                    for="color-yellow-2"
                    class="card__color card__color--yellow"
                    >yellow</label
                >
                <input
                    type="radio"
                    id="color-blue-2"
                    class="card__color-input card__color-input--blue visually-hidden"
                    name="color"
                    value="blue"
                />
                <label
                    for="color-blue-2"
                    class="card__color card__color--blue"
                    >blue</label
                >
                <input
                    type="radio"
                    id="color-green-2"
                    class="card__color-input card__color-input--green visually-hidden"
                    name="color"
                    value="green"
                />
                <label
                    for="color-green-2"
                    class="card__color card__color--green"
                    >green</label
                >
                <input
                    type="radio"
                    id="color-pink-2"
                    class="card__color-input card__color-input--pink visually-hidden"
                    name="color"
                    value="pink"
                    checked
                />
                <label
                    for="color-pink-2"
                    class="card__color card__color--pink"
                    >pink</label
                >
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
