//*********** HW 32/
function intersection(set1: Set<number>, set2: Set<number>): number[] {
    return [...set1].filter(e => set2.has(e));

}
console.log(intersection(new Set([1,2,3,4]), new Set([3,2,6,5])));
console.log(`-----------------------------------------------------------------`);
function subtract(set1: Set<number>, set2: Set<number>): number[] {
    return [...set1].filter(e => !set2.has(e));
}
console.log(subtract(new Set([1,2,3,4]), new Set([3,2,6,5])));
console.log(`-----------------------------------------------------------------`);

type Occurrence = {
    str: string,
    count: number,
}

function getSortedOccurrences(array: string[]): Occurrence[] {

    const map = array.reduce(
        (counter, current) => counter.set(current, (counter.get(current) ?? 0) + 1),
        new Map<string, number>()
    );
    return [...map.entries()].map(
        ([ str, count ]) => ({ str, count })).sort((a, b) => b.count - a.count || a.str.localeCompare(b.str));
}

console.log((getSortedOccurrences(['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn'])))

