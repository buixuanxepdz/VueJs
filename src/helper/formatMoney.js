export const formatMoney = (money) => {
     return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(money)
}