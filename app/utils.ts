export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'narrowSymbol',
        maximumFractionDigits: 0
    }).format(price);
}

export const formatTitle = (title: string) => {
    const words = title.toLowerCase().replace(/[-_]/, ' ').split(' ');
    const formattedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
    return formattedWords.join(' ');
}