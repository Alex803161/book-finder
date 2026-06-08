// Партнёрские настройки BookVista
// Замените на свои ID, когда одобрят заявки
const AFFILIATE = {
  litres: {
    base: 'https://www.litres.ru/search/?q=',
    param: 'lfrom',       // например, lfrom=123456
    id: ''                // ваш ID (пока пусто)
  },
  bukvoed: {
    base: 'https://www.bukvoed.ru/search?q=',
    param: 'partner',     // или другой параметр
    id: ''                // ваш ID
  },
  // Можно добавить MyBook, Строки и т.д.
  defaultStore: 'litres'  // какой магазин по умолчанию
};

/**
 * Получить партнёрскую ссылку на покупку книги
 * @param {string} title - название книги для поиска
 * @param {string} store - 'litres' или 'bukvoed' (по умолчанию из defaultStore)
 * @returns {string} ссылка
 */
function getBuyLink(title, store = AFFILIATE.defaultStore) {
  const shop = AFFILIATE[store];
  if (!shop) return '#';
  let url = shop.base + encodeURIComponent(title);
  if (shop.id) {
    url += `&${shop.param}=${shop.id}`;
  }
  return url;
}
