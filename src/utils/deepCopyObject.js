export function deepCopyObject(objArr) {
    let result;
    if (Array.isArray(objArr)) {
        result = [];

        for (let i = 0; i < objArr.length; i = i + 1) {
            if (typeof objArr[i] !== 'object') {
                result.push(objArr[i]);
            } else {
                result.push(deepCopyObject(objArr[i]));
            }
        }
    } else {
        result = {};
        const keys = Object.keys(objArr);
        for (let j = 0; j < keys.length; j = j + 1) {
            const key = keys[j];

            if (typeof objArr[key] !== 'object') {
                result[key] = objArr[key];
            } else {
                result[key] = deepCopyObject(objArr[key]);
            }
        }
    }

    return result;
}
