const AFFILIATE = {
  buka: {
    base: 'https://www.buka.ru/search?q=',
    param: 'partner',
    id: ''   // ← ID от Бука (ждём)
  },
  bookvoed: {
    base: 'https://www.bookvoed.ru/search?q=',
    param: 'partner',   // обычно Буквоед использует partner
    id: ''   // ← сюда впишете ID, когда одобрят
  },
  litres: {
    base: 'https://www.litres.ru/search/?q=',
    param: 'lfrom',
    id: ''   // ← на будущее
  },
  defaultStore: 'buka'   // пока используем Бука (можно будет сменить)
};

function getBuyLink(title, store = AFFILIATE.defaultStore) {
  const shop = AFFILIATE[store];
  if (!shop) return '#';
  let url = shop.base + encodeURIComponent(title);
  if (shop.id) {
    url += `&${shop.param}=${shop.id}`;
  }
  return url;
}
