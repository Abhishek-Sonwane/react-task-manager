export function getInitials(fullName = "Abhishek Kamlakar Sonwane") {
  const names = fullName.split(" ");
  const initials = names.splice(0, 2).map((name) => name[0].toUpperCase());
  const initialsStr = initials.join("");

  return initialsStr;
}
