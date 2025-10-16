let arr=[1,2,3]

function sub(arr){
    function subArr(index,arrSub){
        if(index===arr.length){
            if(arrSub.length!=0){
                console.log(arrSub)
            }
            return
        }
        arrSub.push(arr[index])
        subArr(index+1,arrSub)
        arrSub.pop()
        subArr(index+1,arrSub)
    }
    subArr(0,[])
}

sub(arr)