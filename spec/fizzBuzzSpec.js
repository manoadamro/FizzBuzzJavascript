
describe ('FizzBuzz', function () {

  describe ('Return Value', function () {

    three = [3, 6, 9, 33, 36, 69]
    five = [5, 10, 20, 25, 55, 80]
    threeFive = [15, 30, 45, 60, 75, 90]

    it ('Returns Fizz when divisible by 3 and not 5', function () {
      for (var i = 0; i < three.length; i++) {
        expect(fizzBuzz.process(three[i])).toEqual('Fizz')
      }
    });

    it ('Returns Buzz when divisible by 5 and not 3', function () {
      for (var i = 0; i < five.length; i++) {
        expect(fizzBuzz.process(five[i])).toEqual('Buzz')
      }
    });

    it ('Returns FizzBuzz when divisible by 3 and 5', function () {
      for (var i = 0; i < threeFive.length; i++) {
        expect(fizzBuzz.process(threeFive[i])).toEqual('FizzBuzz')
      }
    });

  });

});
