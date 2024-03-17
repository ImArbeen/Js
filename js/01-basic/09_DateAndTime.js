
// Dates 
{
      // const myDate = new Date ()
      // console.log(myDate)
      // console.log(myDate.toString())
      // console.log(myDate.toLocaleString())
      // console.log(myDate.toDateString())
      // console.log(typeof myDate)
}

{

      // to toDateString

      let myDate = new Date ( 2024, 2,5)
      let convertingDate = myDate.toDateString()
      // console.log(convertingDate)
}

{

      // Converting toLocaleString


      let myDate = new Date ("2024-03-28")
      let convertingDate = myDate.toLocaleString()
      // console.log(convertingDate)

}

{
      // TimeStamp Time stamp convert the time into mile seconds  
      let myCreateDate = new Date ("01-14-2023") 

      // today date means now
      let myTimeStamp = Date.now()

      // console.log(myTimeStamp)
      // console.log(myCreateDate.getTime())

      // converting into the second 

      // console.log(Math.floor(Date.now()/1000))

}
{

      // Here we have getMonth and many more from the get()

      let newDate = new Date ()
      // console.log(newDate.getMonth() +1)
}{

      // Slef practice for looking today date and now time 

      let myDate = new Date ()
      // console.log(myDate.toLocaleString())      
      myDate.toLocaleString()

      myDate.toLocaleString(`default`,{
            weekday: "long"
      })
      console.log(myDate)
}
