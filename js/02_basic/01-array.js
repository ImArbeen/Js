    // {const friendsName = [0,1,3,6,7]
    // const myHeroes = [" Loki","Dr. Strange","Batman"]

    // const myArr2 = new Array(4,2,3,4)
    // console.log(myArr2[0])}

    // Method in array 

    // 1. Push (add the value ) 

    {
        const array = [1,2,3,4,5,6]
        array.push(6)
        console.log(array)

    }
    {
        // pop() Remove the last value from the array 

        const array = [1,2,3,4,5,6] // here last value that is 6 gonan be removed 
        array.pop()
        console.log(array)
    }

    {

        // unshift ( Unshift shift insert the value in the first so it gonna shift the whole value of the arry .for example: ) 


        const array = [1,2,3,4,5,6] 
        array.unshift(78) // here value 78 is gonaa be placed in the front so ,it shift the other array value. 
        console.log(array)
        
    }

    {
        // shift () delete the first value of the array

        const array = [1,2,3,4,5,6] 
        array.shift() // here the first value is gonna be removed  
        console.log(array) 
    }

    {
        // Include () include ask if there is the value or not so the ans wil come in boolean true or false only : For example ;

        const array = [1,2,8,4,5,6] 
        console.log(array.includes(7)) // there is no 7 in the my array list so the output is false 
        console.log(array.includes(1)) // yes in my array value 1 did exist so the output will be true 
        /* basically we can use here index also */ console.log(array.indexOf(8))
        
    }

    {
        // join () it basically convert the value of the arry into the string and even its dataType aslo.Let seee here an example :

        const array = [6,7,8,9,"6"]
        const joinedArray = array.join() 
        console.log(joinedArray) // here the output will come the value of the array to string 

    }

    {

        // slice and splice 

        // slice ( slice give the target from where to whwre print the value ) suppose if i have an array of [ 1,2,3,4,5] then if i do splice (1,5) then here value from 1 to 4 only  will be printed not to 5 because 5 means giving range from where to where; Ecample :

        const myNewArray = [3,5,8,90,34]
        console.log(myNewArray)
        console.log(myNewArray.slice(1,4))

        // Splice ( splice change the original array ) for example :

        const myNewArray2 = [3,5,8,90,34]
        console.log(myNewArray2)
        const splicedArray = myNewArray2.splice(1,4) //bascially it is changing the original value not the heap stack

        console.log(`The spliced array is ${splicedArray}`)
        console.log(myNewArray2)





    }





