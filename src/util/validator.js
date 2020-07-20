export const requiredField = value => {
    if(value) return undefined;

    return 'Field is required'; 
}


export const maxLenCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length should be ${maxLength} characters`;

    return undefined
}


