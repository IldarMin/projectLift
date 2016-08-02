function floor(id) {
  console.log(id);
}


var div = document.getElementById('block');
test(function () {
    assert_true(div.classList.contains('floor1'), "Not exist");
}, "Default state");


var async1 = async_test('Floor #2 passed'),
    async2 = async_test('Floor #3 passed'),
    async3 = async_test('Floor #4 passed'),
    async4 = async_test('Floor #5 passed'),
    async5 = async_test('Floor #1 passed');

var li2 = document.getElementById('floor2'),
    li3 = document.getElementById('floor3'),
    li4 = document.getElementById('floor4'),
    li5 = document.getElementById('floor5'),
    li1 = document.getElementById('floor1'),
    div = document.getElementById('block');


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

      });

      // start the process
      async1.step(_ => {
        async1.next();

      });
