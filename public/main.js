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