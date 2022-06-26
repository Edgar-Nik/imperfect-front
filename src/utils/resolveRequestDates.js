export const resolveRequestDates = (data) => {
  const clone = { ...data };
  if (clone.age?.length) {
    let dateOfBirth = [];
    clone.age.forEach((item) => {
      dateOfBirth.push(`${new Date().getFullYear() - +item}`);
    });
    clone.age = dateOfBirth.reverse();
  }
  if (clone.experience_date?.length) {
    let experienceDate = [];
    clone.experience_date.forEach((item) => {
      experienceDate.push(`${new Date().getFullYear() - +item}`);
    });
    clone.experience_date = experienceDate.reverse();
  }
  return clone;
};
