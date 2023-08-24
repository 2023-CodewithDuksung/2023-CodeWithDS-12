import { USER_DATA } from './mockCourseScore';

export function calcProgress(myScore, fullScore) {
  return Math.round((myScore / fullScore) * 100);
}
