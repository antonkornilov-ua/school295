import teachersList from "./teachersList";

let sortedTeacherList = [ ...teachersList ].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    const ukrAlphabet = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';
    for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
        const charIndexA = ukrAlphabet.indexOf(nameA[i]);
        const charIndexB = ukrAlphabet.indexOf(nameB[i]);
        if (charIndexA !== charIndexB) {
            return charIndexA - charIndexB;
        }
    }
    return nameA.length - nameB.length;
});

export default sortedTeacherList;
