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
        },
        i: (p1, p2, p3) => console.log("Test Value :", p1, p2, p3),
    };

    es6Test.i(es6Test.arrowFunc(), es6Test.arrowFunc2(), es6Test.arrowFunc() === es6Test.arrowFunc2());


    /* addEventListener 콜백 함수에서 사용하면 this가 상위 context 를 가리킴  */
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        console.log(this === window); // => true
        try {
            this.innerHTML = 'Clicked button';
        } catch (e) {
            console.error(e);
        }
    });

    const button2 = document.getElementById('myButton');
    button2.addEventListener('click', function () {
        console.log(this === button); // => true
        this.innerHTML = 'Clicked button';
    });


})();