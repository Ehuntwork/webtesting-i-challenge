const enhancer = require('./enhancer.js');
// test away!
describe('enhnacer',()=>{
    describe('repair()', ()=>{
        it('should return durability to 100', ()=>{
            // Items have name, durability and enhancement.
            // The item's enhancement it's a number from 0 to 20.
            // The item's durability it's a number from 0 to 100.

            const item = {
            name: '',
            durability: 0,
            enchantment: 0
            }

            const result = enhancer.repair(item)
  
            expect(result.durability).toEqual(100)
        })
    })

    describe('successs()', ()=>{
        it('should increase enchantment by one', ()=>{
            // Items have name, durability and enhancement.
            // The item's enhancement it's a number from 0 to 20.
            // The item's durability it's a number from 0 to 100.

            const item = {
            name: '',
            durability: 0,
            enchantment: 3
            }

            const result = enhancer.success(item)
  
            expect(result.enchantment).toEqual(item.enchantment+1)
        })

        it('should not increase when 20', ()=>{
            // Items have name, durability and enhancement.
            // The item's enhancement it's a number from 0 to 20.
            // The item's durability it's a number from 0 to 100.

            const item = {
            name: '',
            durability: 0,
            enchantment: 20
            }

            const result = enhancer.success(item)
  
            expect(result.enchantment).toEqual(item.enchantment)
        })

        it('should recieve error messege when over 20', ()=>{
            // Items have name, durability and enhancement.
            // The item's enhancement it's a number from 0 to 20.
            // The item's durability it's a number from 0 to 100.

            const item = {
            name: '',
            durability: 0,
            enchantment: 25
            }

            const result = enhancer.success(item)
  
            expect(result).toEqual(false)
        })
    })

    describe('fail()', ()=>{
        it('should decrease by 5', ()=>{
            // Items have name, durability and enhancement.
            // The item's enhancement it's a number from 0 to 20.
            // The item's durability it's a number from 0 to 100.

            const item = {
            name: '',
            durability: 0,
            enchantment: 8
            }

            const result = enhancer.fail(item)
  
            expect(result.enchantment).toEqual(item.enchantment - 5)
        })

        it('should not go bellow 0', ()=>{
            // Items have name, durability and enhancement.
            // The item's enhancement it's a number from 0 to 20.
            // The item's durability it's a number from 0 to 100.

            const item = {
            name: '',
            durability: 0,
            enchantment: 5
            }

            const result = enhancer.fail(item)
  
            expect(result.enchantment).toEqual(0)
        })

        it('should decrease by 1', ()=>{
            // Items have name, durability and enhancement.
            // The item's enhancement it's a number from 0 to 20.
            // The item's durability it's a number from 0 to 100.

            const item = {
            name: '',
            durability: 0,
            enchantment: 18
            }

            const result = enhancer.fail(item)
  
            expect(result.enchantment).toEqual(item.enchantment - 1)
        })

    })
})