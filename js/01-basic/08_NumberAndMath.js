// =================================   NUMBERS ===========================
{
      const score = 600;
      console.log(score)
}

{
      const score = new Number(400);

      

      // converting number into string 
      console.log(score.toString()); 
      // console.log(score)
      // console.log(typeof ConvertedValue)
      // console.log(ConvertedValue)

      // Here toFixed is used to make the value after the number for example if i have 200.3456, Then if i used toFixed(3) then it only provide me the number upto 3 from the points 

      // To fixed 

      console.log(score.toFixed(2))
}

{

      // To Precision

      const number = 45.40677788
      console.log(number.toPrecision(4))
}
{

      // to toLocaleString

      const hundreds = 100000000000
      console.log(hundreds.toLocaleString(`en-UK`))
}



// ======================================= Maths ======================================

console.log(Math)
{
      // absolute value (only negative value became the positives ) (abs)

      console.log(Math.abs(-455555))
}

{

      // round value ( It basically rounded the value) for example if i enter the value 4.6 then it will provide me 5,if i do 4.5 also it gives me 5, but i i include the value 4.4 then its only gonaaa give me the value => 4 


      console.log(Math.round(4.4)); 

      // Floor Value ( It basically gonaa give me the small one ) example if i enter 4.9 also it will provide me the 4 because floor only gives the small value

      console.log(Math.floor(4.9))

      // ceiling refer as ceiling ( It basically gonaa give me the toper value => higher value ) for example if i give the value 4.1 also it gonna give me output 5.

      console.log(Math.ceil(4.5))


      // conclusion: We uese more round vaue 

}

{
      // min (finding the minimum value )

     console.log(Math.min(9,4,8,9,3,1,0))

}
{
      // min (finding the maximum value )

     console.log(Math.max(9,4,8,9,3,1,0))

}

{

      // Math.Random 

      console.log(Math.floor(Math.random()* 10) +1)
}

{

      // Here min and max value are being random ( we have done * max-min because we need the value between the min and max values i.e 10 and 20  which also means we may get again 0 to 20 value so to avoid it we have added 1 , now again we will only get the value from 1 to 20 so to avoid it agin we will add the min value now we can get valuye from the min value )

      const min = 10;
      const max = 20;
      console.log(Math.floor(Math.random()*(max-min)+1)+min)
      
}