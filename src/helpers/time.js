import { DateTime } from "luxon";

const DAY_FORMAT = "dd/MM/yyyy";

export const today = () => DateTime.now().toFormat(DAY_FORMAT);
export const yesterday = () =>
  DateTime.now().minus({ days: 1 }).toFormat(DAY_FORMAT);
export const daysToCome = ({ startingDay, days }) => {
  const inner = (result, current, remaining) => {
    if (remaining === 0) {
      return result;
    } else {
      const next = current.plus({ days: 1 });
      return inner([...result, next.toFormat(DAY_FORMAT)], next, remaining - 1);
    }
  };

  return inner(
    [startingDay],
    DateTime.fromFormat(startingDay, DAY_FORMAT),
    days - 1
  );
};
