import { getDefaultClassNames } from "./getDefaultClassNames";

test("should return the default classnames", () => {
  expect(getDefaultClassNames()).toStrictEqual({
    button_next: "rdp-button_next",
    button_previous: "rdp-button_previous",
    calendar: "rdp-calendar",
    caption_label: "rdp-caption_label",
    chevron: "rdp-chevron",
    chevron_disabled: "rdp-chevron_disabled",
    day: "rdp-day",
    day_date: "rdp-day_date",
    disabled: "rdp-disabled",
    dropdown_nav: "rdp-dropdown_nav",
    dropdown_root: "rdp-dropdown_root",
    dropdown: "rdp-dropdown",
    focusable: "rdp-focusable",
    focused: "rdp-focused",
    footer: "rdp-footer",
    has_multiple_months: "rdp-has_multiple_months",
    has_week_numbers: "rdp-has_week_numbers",
    hidden: "rdp-hidden",
    month_caption: "rdp-month_caption",
    month_wrapper: "rdp-month_wrapper",
    month: "rdp-month",
    weeks: "rdp-weeks",
    months_dropdown: "rdp-months_dropdown",
    months: "rdp-months",
    nav: "rdp-nav",
    no_weekdays: "rdp-no_weekdays",
    outside: "rdp-outside",
    range_end: "rdp-range_end",
    range_middle: "rdp-range_middle",
    range_start: "rdp-range_start",
    selected: "rdp-selected",
    today: "rdp-today",
    week_number: "rdp-week_number",
    week: "rdp-week",
    weekday: "rdp-weekday",
    weekdays: "rdp-weekdays",
    years_dropdown: "rdp-years_dropdown"
  });
});
