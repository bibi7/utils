/**
 *
 * @param time 时间戳
 * @param gap 间隔符
 */
export const dateFormatter = (time, gap = "/") => {
  if (!time) throw "not a validate time format";
  if (typeof gap !== 'string') throw "not a validate gap format";

  const timeFormat = typeof time === 'number'
    ? time.toString().length === 13 ? time : time * 1000
    : null;

  if (timeFormat) {
    const date = new Date(timeFormat);
    return `${date.getFullYear()}${gap}${date.getMonth() + 1}${gap}${date.getDate()}`
  }
};