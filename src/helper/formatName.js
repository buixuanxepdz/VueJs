export const formatName = (text) => {
    if (text.length > 25) {
        return text.slice(0, 25) + '...';
    }
}