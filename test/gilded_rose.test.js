const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  test.each([
    {name: 'foo', sellIn: 0, quality: 0,expectedName: 'foo', expectedSellIn: -1, expectedQuality: 0},
    {name: 'foo', sellIn: 0, quality: 1,expectedName: 'foo', expectedSellIn: -1, expectedQuality: 0},
    {name: 'foo', sellIn: 0, quality: 2,expectedName: 'foo', expectedSellIn: -1, expectedQuality: 0},
    {name: 'foo', sellIn: 0, quality: 55,expectedName: 'foo', expectedSellIn: -1, expectedQuality:53},
    {name: 'Aged Brie', sellIn: 0, quality: 1,expectedName: 'Aged Brie', expectedSellIn: -1, expectedQuality: 3},
    {name: 'Aged Brie', sellIn: -1, quality: 55,expectedName: 'Aged Brie', expectedSellIn: -2, expectedQuality:55},
    {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 0, quality: 1,expectedName: 'Backstage passes to a TAFKAL80ETC concert', expectedSellIn: -1, expectedQuality: 0},
    {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 0, quality: 51,expectedName: 'Backstage passes to a TAFKAL80ETC concert', expectedSellIn: -1, expectedQuality: 0},
    {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 0, quality: 50,expectedName: 'Backstage passes to a TAFKAL80ETC concert', expectedSellIn: -1, expectedQuality: 0},
    {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 12, quality: 48,expectedName: 'Backstage passes to a TAFKAL80ETC concert', expectedSellIn: 11, expectedQuality: 49},
    {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 8, quality: 49,expectedName: 'Backstage passes to a TAFKAL80ETC concert', expectedSellIn: 7, expectedQuality: 50},
    {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 49,expectedName: 'Backstage passes to a TAFKAL80ETC concert', expectedSellIn: 4, expectedQuality: 50},
    {name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 1,expectedName: 'Sulfuras, Hand of Ragnaros', expectedSellIn: -1, expectedQuality:1},
    {name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 1,expectedName: 'Sulfuras, Hand of Ragnaros', expectedSellIn: 0, expectedQuality:1},
    
  ])('when updateQuality and input = $name, $sellIn, $quality then output= $expectedName, $expectedSellIn, $expectedQuality',({name, sellIn, quality,expectedName, expectedSellIn, expectedQuality}) => {
    const gildedRose = new Shop([new Item(name  , sellIn  , quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(expectedName)
    expect(items[0].sellIn).toBe(expectedSellIn)
    expect(items[0].quality).toBe(expectedQuality)
  })
  it('when updateQuality and input = empty array then should do nothing', () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items).toHaveLength(0)
  })
});
