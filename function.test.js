const functions = require ('./function')

//toBe
it('adds 2 + 2 to equals 4', ()=>{
    expect(functions.add( 2 , 2 )).toBe(4)
});

//not.toBe
it('adds 2 + 2 to equals 5', ()=>{
    expect(functions.add(2,2)).not.toBe(5)
})

//toBeNull
it('return null', ()=>{
    expect(functions.isNull()).toBeNull()
})

//toBeFalsy
it('check to be falsy return value', ()=>{
    expect(functions.checkValue(undefined)).toBeFalsy()
})

//toEqual
it('user should return first name and last name',()=>{
    expect(functions.createUser()).toEqual({
        firstName:'Brad',
        lastName:'Trav'
    })
})

//Less than and greater than
it('should be less than',()=>{
    const num1 = 800;
    const num2 = 700;
    expect(num1 +  num2).toBeLessThan(1600)
})

//toMatch Regex
it('there is no I in ramy', ()=>{
    expect('Ramy').not.toMatch(/I/);
})

//toContain array
it('admin should be in this array', ()=>{
    userNames = ['john', 'dear', 'admin']
    expect(userNames).toContain('admin')
})

//async data
