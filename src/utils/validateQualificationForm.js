export function isNonEmpty(value="", fieldName="") {
    value = value.trim();
    if(!value) {
        return `${fieldName.trim()} is required.`
    }
    return "";
}