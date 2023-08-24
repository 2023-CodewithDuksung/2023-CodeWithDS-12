import { USER_DATA } from './mockCourseScore';

export function calcProgress(myScore, fullScore) {
  return Math.floor((myScore / fullScore) * 100);
}
