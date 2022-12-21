
func(); // Working

function func() {
  console.log('Hello');
  console.log(this);
}

func(); // Working




varFunc(); // NOT working

let varFunc = function () {
  console.log('Its function');
  console.log(this);
}

varFunc(); // Working




let arrowFunc = () => {
  console.log('Arrow func');
  console.log(this);
}

arrowFunc();




let obj = {
  key1: 1,
  key2: 2,
  key3: 3,
  meth1: function () {
    console.log(this);

    let func = () => {
      console.log(this);
    }

    func();
  },
  meth2: () => {
    console.log(this);
  }
}

obj.meth1();
obj.meth2();




function fff(num) {
  console.log(num);
  return num;
}

fff(123);





const firstNumber = 3;
const secondNumber = 44;
const thirdNumber = 100;

function ddd(a, b, c) {
  const first = a;
  const second = b;
  const third = c;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(first + second + third);
}

ddd(firstNumber, secondNumber, thirdNumber);
