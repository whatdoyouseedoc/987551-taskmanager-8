export default ({name, count = 0, checked = false, disabled = false}) => `
  <input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      data-count="${count}"
      ${checked ? `checked` : ``}
      ${disabled ? `disabled` : ``}
  />
  <label for="filter__${name}" class="filter__label">
      ${name.toUpperCase()} <span class="filter__${name}-count">${count}</span>
  </label>
`;
