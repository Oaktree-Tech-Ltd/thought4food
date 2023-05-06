import { DateTime } from "luxon";

export const today = () => DateTime.now().toFormat("dd/MM/yyyy");
export const yesterday = () => DateTime.now().minus({ days: 1 }).toFormat("dd/MM/yyyy");
