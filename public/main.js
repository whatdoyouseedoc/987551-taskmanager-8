const filters = [
    {
        name: 'ALL',
        tasksAmount: 32
    },
    {
        name: 'OVERDUE',
        tasksAmount: 1
    },
    {
        name: 'TODAY',
        tasksAmount: 2
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
 */
const renderFilter = (name, tasksAmount = 0) => {
    const markup = `
        <input
            type="radio"
            id="filter__${name}"
            class="filter__input visually-hidden"
            name="filter"
            checked
        />
        <label for="filter__${name}" class="filter__label">
            ${name.toUpperCase()} <span class="filter__${name}-count">${tasksAmount}</span>
        </label>
    `;

    document.querySelector('.main__filter').innerHTML += markup;
};

const drawFilters = () => {
    filters.forEach(item => {
        renderFilter(item.name, item.tasksAmount);
    });
};

drawFilters();