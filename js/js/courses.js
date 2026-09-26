import { shopifyCourse } from "./courses/shopify.js";
import { pianoCourse } from "./courses/piano.js";
import { wordpressCourse } from "./courses/wordpress.js";
import { googleWorkspaceCourse } from "./courses/google-workspace.js";
import { officeCourse } from "./courses/office.js";
import { systemesCourse } from "./courses/systemes.js";

export const courses = [
  shopifyCourse,
  pianoCourse,
  wordpressCourse,
  googleWorkspaceCourse,
  officeCourse,
  systemesCourse
];

export function getCourseById(id) {
  return courses.find(course => course.id === id);
}
