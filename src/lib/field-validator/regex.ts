/* eslint-disable no-useless-escape */
export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const urlRegex =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
export const alphaRegex = /^[A-Z]*$/i;
export const alphaNumRegex = /^[A-Z0-9]*$/i;
export const alphaSpaceRegex = /^[A-Z\s]*$/i;

export const snakeCaseRegex = /^[a-z0-9-]+$/g;
export const kebabCaseRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/g;
export const objectIdHexRegexp = /^[0-9A-Fa-f]{24}$/;
