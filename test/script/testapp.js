function floor(id) {
  console.log(id);
}


var div = document.getElementById('block1'),
    div2 = document.getElementById('block2');
test(function () {
    assert_true(div.classList.contains('floor1'), "Not exist");
    assert_true(div2.classList.contains('floor1'), "Not exist");
}, "Default state");


var async1 = async_test('Floor #2 passed'),
    async2 = async_test('Floor #3 passed'),
    async3 = async_test('Floor #4 passed'),
    async4 = async_test('Floor #5 passed'),
    async5 = async_test('Floor #1 passed'),
    async6 = async_test('Floor #2 passed, Lift 2'),
    async7 = async_test('Floor #3 passed, Lift 2'),
    async8 = async_test('Floor #4 passed, Lift 2'),
    async9 = async_test('Floor #5 passed, Lift 2'),
    async10 = async_test('Floor #1 passed, Lift 2'),
    async11 = async_test('Lift arrived');

var li2 = document.getElementById('floor2'),
    li3 = document.getElementById('floor3'),
    li4 = document.getElementById('floor4'),
    li5 = document.getElementById('floor5'),
    li1 = document.getElementById('floor1'),
    lift2 = document.getElementById('flooor2'),
    lift3 = document.getElementById('flooor3'),
    lift4 = document.getElementById('flooor4'),
    lift5 = document.getElementById('flooor5'),
    lift1 = document.getElementById('flooor1'),
    div = document.getElementById('block1'),
    div2 = document.getElementById('block2'),
    btn = document.getElementById('main_button');


    async1.next = async1.step_func(_ => {
          // li2.addEventListener('click', function() {
          //   div.className = 'floor2'
          // })
          li2.dispatchEvent(new Event('click'));
          assert_true(div.classList.contains('floor2'), "Not contain");
          console.log('async 1 done');
          async1.done();

          async2.next();
      });

      async2.next = async2.step_func(_ => {
          // li3.addEventListener('click', function() {
          //   div.className = 'floor3'
          // })
          li3.dispatchEvent(new Event('click'));
          assert_true(div.classList.contains('floor3'), "Not contain");
          console.log('async 2 done');
          async2.done();

          async3.next();
      });

      async3.next = async3.step_func(_ => {
          // li4.addEventListener('click', function() {
          //   div.className = 'floor4'
          // })
          li4.dispatchEvent(new Event('click'));
          assert_true(div.classList.contains('floor4'), "Not contain");
          console.log('async 3 done');
          async3.done();

          async4.next();
      });

      async4.next = async4.step_func(_ => {
          // li5.addEventListener('click', function() {
          //   div.className = 'floor5'
          // })
          li5.dispatchEvent(new Event('click'));
          assert_true(div.classList.contains('floor5'), "Not contain");
          console.log('async 4 done');
          async4.done();
          async5.next();

      });
      async5.next = async5.step_func(_ => {
          // li1.addEventListener('click', function() {
          //   div.className = 'floor1'
          // })
          li1.dispatchEvent(new Event('click'));
          assert_true(div.classList.contains('floor1'), "Not contain");
          console.log('async 5 done');
          async5.done();
          async6.next();

      });
      async6.next = async6.step_func(function(){
        // lift2.addEventListener('click', function() {
        //   div2.className = 'floor2'
        // })
        lift2.dispatchEvent(new Event('click'));
        assert_true(div2.classList.contains('floor2'), "Not contain");
        console.log('async 6 done');
        async6.done();
        async7.next();
      });
      async7.next = async7.step_func(function(){
        // lift3.addEventListener('click', function() {
        //   div2.className = 'floor3'
        // })
        lift3.dispatchEvent(new Event('click'));
        assert_true(div2.classList.contains('floor3'), "Not contain");
        console.log('async 7 done');
        async7.done();
        async8.next();
      });
      async8.next = async8.step_func(function(){
        // lift4.addEventListener('click', function() {
        //   div2.className = 'floor4'
        // })
        lift4.dispatchEvent(new Event('click'));
        assert_true(div2.classList.contains('floor4'), "Not contain");
        console.log('async 8 done');
        async8.done();
        async9.next();
      });
      async9.next = async9.step_func(function(){
        // lift5.addEventListener('click', function() {
        //   div2.className = 'floor5'
        // })
        lift5.dispatchEvent(new Event('click'));
        assert_true(div2.classList.contains('floor5'), "Not contain");
        console.log('async 9 done');
        async9.done();
        async10.next();
      });
      async10.next = async10.step_func(function(){
        // lift1.addEventListener('click', function() {
        //   div2.className = 'floor1'
        // })
        lift1.dispatchEvent(new Event('click'));
        assert_true(div2.classList.contains('floor1'), "Not contain");
        console.log('async 10 done');
        async10.done();
        async11.next();
      });
      async11.next = async11.step_func(function(){
        // btn.addEventListener('click', () => {
        //   var elevator1 = getlastNumber(div.className),
        //       elevator2 = getlastNumber(div2.className);
        //   // console.log(elevator1, elevator2);
        //   if (elevator1 > elevator2) {
        //     div2.className = 'floor1';
        //   }else{
        //     div.className = 'floor1';
        //   }
        // })
        btn.dispatchEvent(new Event('click'));
        console.log('async 11 done');
        async11.done();
      });

      // start the process
      async1.step(_ => {
        async1.next();

      });

function getlastNumber(el) {
  return +el.replace("floor", "");;
};
