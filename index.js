((testValue = "default Text") => { //default parameter, arrow function

    console.log(`this is ${testValue}`);

    console.log(testValue);

})("test Text");


(function () {
    const es6Test = {
        arrowFunc: function () {
            return "Test";
        },

        arrowFunc2: () => {
            return "Test";
        }
    };

    console.log("Test Value :", es6Test.arrowFunc(), es6Test.arrowFunc2(), es6Test.arrowFunc() === es6Test.arrowFunc2());
})();