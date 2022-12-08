// 1 + 2 + 3 => 6

// 1 + "2" + 3 => 123

// 1 + 2 + "3" = 33

// "1" + "2" + "3" => "123"

console.log((1 + 2 + 3) , ( 1 + "2" + 3) , 1 + 2 + "3" , "1" + "2" + "3")


//* //////////////////////////////////////////////////////////////

let str = "string";

let n = str.length;
let i = 0;
let s = str.split('');

for (i = 0; i < Math.floor(n / 2); i++){
    // console.log(str[i]);

    swap(str[n--] , str[i]);
    s.join('');
    
    console.log("ANS" ,s);
}

function swap(a , b){
    let temp = a;
    a = b;
    b = temp;
    // console.log(a , b);
    return (a , b);
}
// console.log(str);

console.log(reverse(str));

function reverse(s) {
    s = s.split('');
    var len = s.length,
        halfIndex = Math.floor(len / 2) - 1;

       for (var i = 0; i <= halfIndex; i++) {
        swap(s[len - i - 1] , s[i]);
        }

        return s.join('');
      }
let str1 = "dhimanman";      
let mainStr = "man"; 
// findOccurrences(mainStr , str1)
function findOccurrences(mainStr , str1){

    let M = mainStr.length;      
    let N = str1.length;      
    let res = 0;

    for(let i = 0; i <= N - M; i++)
    {
        let j;          
        for(j = 0; j < M; j++)
        {
            if (str1[i + j] != mainStr[j])
            {
                break;
            }
        }
         if (j == M)
        {              
            res++;              
            j = 0;              
        }          
    }  
    
    console.log("res" , res);
}