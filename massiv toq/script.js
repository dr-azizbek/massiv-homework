let numbers = [23, 56, 4, 78, 5, 63, 45, 210, 56]
        let resultNumbers=[];
        function oddEven(e) {
            if (e % 2 == 1) {
                
                resultNumbers.push(e)
            }
           
        }
        for(let i=0;i<numbers.length;i++){
            oddEven(numbers[i])
        }
        console.log(resultNumbers)