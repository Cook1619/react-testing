

export const emailRegex = /^(?:[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:+)\])$/;

export const zipRegex = new RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/);

export const phoneRegex = new RegExp(
    /^[(]?\d{3}[)]?[(\s)?.-]\d{3}[\s.-]\d{4}$/,
);

export const dateRegex = new RegExp(
    /(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.]\d\d\d\d/,
);

export const mustBe18 = new Date(
    new Date().getFullYear() - 18,
    new Date().getMonth(),
    new Date().getDate() + 1,
  )
    .toISOString()
    .slice(0, 10);
  
export const lowDateRange = new Date(
    new Date().getFullYear() - 121,
    new Date().getMonth(),
    new Date().getDate() - 27,
  )
    .toISOString()
    .slice(0, 10);