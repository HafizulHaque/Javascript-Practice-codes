//Specification

describe(`test`, () => {

  // before(() => alert('running before all test starting.'));
  // after(() => alert('running all all test finished.'));

  // beforeEach(() => alert('before a test entering.'));
  // afterEach(() => alert('after a test finished'));

  describe(`pow`, () => {
    //cube test
    describe(`X raised to power 3`, () => {
      for(let i = 0; i < 5; i++){
        makeTest(i);
      }
      function makeTest(x){
        let expected = x*x*x;
        it(`${x} raised to 3 is ${expected}`, () => {
          assert.equal(pow(x, 3), expected);
        });
      }
    });
  
    //quadruple test
    describe(`X raised to power 4`, () => {
      for(let i = 0; i < 10; i++){
        makeTest(i);
      }
      function makeTest(x){
        let expected = x*x*x*x;
        it(`${x} raised to 4 is ${expected}`, () => {
          assert.equal(pow(x, 4), expected);
        });
      }
    });
  
    // more test here
    it(`for non integer the output is NaN`, () => {
      assert.isNaN(pow(3, 1.5));
    });
    it.only(`for negetive integer the output is NaN`, () => {
      assert.isNaN(pow(3, -1));
    });

  });
  
})