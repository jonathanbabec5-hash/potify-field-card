import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
const html=readFileSync('public/field/01/index.html','utf8');
test('check the published edition and its primary assets',()=>{
assert.ok(html.includes('card.html'));
assert.ok(readFileSync('public/field/01/card.html','utf8').includes('assets/Field_Card_01.pdf'));
assert.equal(readFileSync('public/field/01/assets/Field_Card_01.pdf').subarray(0,5).toString(),'%PDF-');

});
