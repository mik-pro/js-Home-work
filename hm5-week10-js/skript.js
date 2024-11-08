

let num1=+prompt("бырыншы сан:")
let num2=+prompt("екыншы сан")
let num3=+prompt("ушыншы сан")
let big;
switch (true) {
    case (num1>=num2&&num1>=num3):
        big=num1;
        break;
    case(num2>=num1&&num2>=num3):
        big=num2;
        break;
    case(num2>=num1&&num3>=num2):
        big= num3;
        break;
}
alert("ен улкен сан:"+big);