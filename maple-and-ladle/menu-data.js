/* ============================================================================
   ML_DATA — меню и настройки Maple & Ladle
   ----------------------------------------------------------------------------
   Этот файл редактируется через admin.html (визуальный редактор) или вручную.
   menu.html читает отсюда всё: блюда, цены, настройки доставки и оплаты.
   photo: data-URL картинки (делается в admin.html) или null — тогда рисуется иконка.
   available: false = «Sold out» (карточка гасится, кнопку Add скрыть).
   ============================================================================ */

window.ML_DATA = {
  config: {
    interacEmail: 'pay@mapleandladle.ca',
    taxRate: 0.15,
    taxLabel: 'HST (15%)',
    deliveryFee: 5,
    freeOver: 60,
    days: ['Tuesday', 'Thursday', 'Saturday'],
    windows: ['11:00 – 13:00', '17:00 – 19:00'],
    stripeLinks: {},
    sheetUrl: ''   // CSV-ссылка опубликованной Google-таблицы (меню правится в таблице)
  },
  dishes: [
    {
      id: 'cod', cat: 'Mains', name: 'Cod au Gratin', price: 16,
      allergens: ['fish', 'dairy', 'gluten'], icon: 'i-cod', photo: null, available: true,
      composition: 'Atlantic cod, cheddar-cream sauce, herbed breadcrumbs',
      desc: 'Flaky baked cod under a cheddar-cream crust with herbed breadcrumbs. A Newfoundland classic, done properly.'
    },
    {
      id: 'jiggs', cat: 'Mains', name: 'Jiggs Dinner Plate', price: 17,
      allergens: [], icon: 'i-jiggs', photo: null, available: true,
      composition: 'Salt beef, cabbage, turnip, carrot, potato, pease pudding',
      desc: 'Salt beef, cabbage, turnip, carrot and potato, slow-simmered the traditional way. Served with pease pudding.'
    },
    {
      id: 'chicken', cat: 'Mains', name: 'Maple-Glazed Chicken', price: 15,
      allergens: ['mustard'], icon: 'i-chicken', photo: null, available: true,
      composition: 'Chicken thighs, maple-Dijon glaze, roasted root vegetables',
      desc: 'Oven-roasted chicken thighs with a maple-Dijon glaze, roasted root vegetables on the side.'
    },
    {
      id: 'stew', cat: 'Mains', name: 'Beef & Root Vegetable Stew', price: 15,
      allergens: [], icon: 'i-stew', photo: null, available: true,
      composition: 'Beef, potato, carrot, parsnip, onion, herbs',
      desc: 'Slow-simmered beef with potato, carrot and parsnip. Thick, rich and built for a cold evening.'
    },
    {
      id: 'mac', cat: 'Mains', name: 'Baked Mac & Cheese', price: 13,
      allergens: ['dairy', 'gluten'], icon: 'i-mac', photo: null, available: true,
      composition: 'Macaroni, old cheddar cream sauce, golden crumb top',
      desc: "Old-cheddar macaroni bake with a golden top. The kids' universal favourite."
    },
    {
      id: 'chowder', cat: 'Mains', name: 'Haddock Chowder', price: 14,
      allergens: ['fish', 'dairy'], icon: 'i-chowder', photo: null, available: true,
      composition: 'Haddock, potato, onion, cream, smoked flavour, bread & butter',
      desc: 'Creamy haddock chowder with potato, onion and a little smoked flavour. Served with bread and butter.'
    },
    {
      id: 'soup', cat: 'Soups & Sides', name: 'Pea Soup with a Doughboy', price: 8,
      allergens: ['gluten'], icon: 'i-soup', photo: null, available: true,
      composition: 'Split peas, vegetables, steamed doughboy',
      desc: 'Split-pea soup with a fresh steamed doughboy. Simple, warming, exactly right.'
    },
    {
      id: 'toutons', cat: 'Soups & Sides', name: 'Toutons with Molasses (2 pcs)', price: 6,
      allergens: ['gluten'], icon: 'i-toutons', photo: null, available: true,
      composition: 'White dough, molasses',
      desc: 'Pan-fried dough, golden on both sides. Traditional breakfast, welcome at any hour.'
    },
    {
      id: 'salad', cat: 'Soups & Sides', name: 'Garden Side Salad', price: 6,
      allergens: [], icon: 'i-salad', photo: null, available: true,
      composition: 'Greens, cucumber, tomato, house maple vinaigrette',
      desc: 'Crisp greens, cucumber and tomato with our house maple vinaigrette. Vegan.'
    },
    {
      id: 'crisp', cat: 'Desserts', name: 'Baked Apple & Maple Crisp', price: 6,
      allergens: ['dairy', 'gluten'], icon: 'i-crisp', photo: null, available: true,
      composition: 'Spiced apples, oat crumble, Newfoundland maple',
      desc: 'Warm spiced apples under an oat-crumble top, sweetened with Newfoundland maple.'
    },
    {
      id: 'berry', cat: 'Desserts', name: 'Partridgeberry Squares (2 pcs)', price: 5,
      allergens: ['gluten'], icon: 'i-berry', photo: null, available: true,
      composition: 'Butter shortbread, partridgeberry filling',
      desc: 'Buttery squares with tart partridgeberry filling — a local berry we wait all year for.'
    },
    {
      id: 'tray', cat: 'Family Trays', name: 'Family Roast Tray (serves 4)', price: 32,
      allergens: ['dairy', 'gluten'], icon: 'i-tray', photo: null, available: true,
      composition: "The week's roast, sides and gravy, boxed family-style",
      desc: "The week's roast with sides and gravy, boxed family-style. Ask us what's in the oven this week."
    }
  ]
};
