import test from 'node:test';
import assert from 'node:assert/strict';
import { parseAllowedPrices, parseCheckoutItems } from '../src/lib/checkoutValidation.ts';

test('accepts only explicitly configured Stripe prices', () => {
  const allow = parseAllowedPrices('price_Premium1, price_Basic2');
  assert.deepEqual(parseCheckoutItems({itemsData:[{priceId:'price_Basic2'}]},allow), [
    {price:'price_Basic2',quantity:1}
  ]);
});

test('rejects attacker-controlled price IDs even when syntactically valid', () => {
  const allow = parseAllowedPrices('price_Premium1');
  assert.equal(parseCheckoutItems({itemsData:[{priceId:'price_Discounted9'}]},allow),null);
});

test('fails closed with missing configuration', () => {
  assert.equal(parseAllowedPrices(undefined).size,0);
  assert.equal(parseCheckoutItems({itemsData:[{priceId:'price_Basic2'}]},new Set()),null);
});

test('rejects malformed or unbounded checkout requests', () => {
  const allow=parseAllowedPrices('price_Basic2');
  for (const input of [null,{}, {itemsData:[]}, {itemsData:'price_Basic2'},
    {itemsData:[{priceId:123}]},
    {itemsData:[{priceId:'price_Basic2',quantity:0}]},
    {itemsData:Array.from({length:26},()=>({priceId:'price_Basic2'}))}]) {
    assert.equal(parseCheckoutItems(input,allow),null);
  }
});
