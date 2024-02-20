const seats = document.querySelectorAll('.seat')


for (let index = 0; index < seats.length; index++) {
    const seat = seats[index]
    

    seat.addEventListener('click', function () {


        const seatNo = seat.innerText
        const seatName = document.getElementById('seat-price')
        const div = document.createElement('div')
        const seatTitile =document.createElement('p')
        seatTitile.innerText = seatNo;
        div.appendChild(seatTitile);
        const seatQuality =document.createElement('p')
        seatQuality.innerText ="Economoy" ;
        div.appendChild(seatQuality);
        const pricePerTicket =document.createElement('p')
        pricePerTicket.innerText = 550;
        div.appendChild(pricePerTicket);
        seatName.appendChild(div)

        div.classList.add('flex' , 'justify-between')

       
        

        // seat countsown-------------------------------------------------
        const currentAvailableSeat = document.getElementById('total-seat-available')
        const currentAvailableSeatQuntity = currentAvailableSeat.innerText;
        const seatAvailable = parseInt(currentAvailableSeatQuntity)
        const seatAvailableNow = seatAvailable - 1
        currentAvailableSeat.innerText = seatAvailableNow + ' '
        

         //bg color change-------------------------------------------------

         seat.classList.add('bg-lime-500')


         //ticket booking=---------------------------------------------------------

         const buyTicket =document.getElementById('seat-buy')
         const currentBookingTicket = parseInt(buyTicket.innerText) 
         const bookedTicket = currentBookingTicket +1 ;
         buyTicket.innerText= bookedTicket
         

        //  total price----------------------------------------------------------

        const totalPrice = document.getElementById('total-price')
        const price =  parseInt(totalPrice.innerText)
        const priceSum = price + 550 ;
        totalPrice.innerText =  priceSum;


    })





}

const applyCouponBtn = document.getElementById('apply-coupon')
applyCouponBtn.addEventListener('click', function () {

   const inputCoupon = document.getElementById('input-value').value
   const couponCode = inputCoupon.split(" ").join("").toUpperCase();
   const totalPrice = document.getElementById('total-price').innerText
   if(couponCode==='NEW15') {
    


    const discount= totalPrice * 15 / 100 ;
    const discountAmount = parseFloat(discount).toFixed(3);
    
    const lastPrice = document.getElementById('final-price')
    const lastTotalPrice = totalPrice - discountAmount;
    lastPrice.innerText = lastTotalPrice ;
    console.log(lastTotalPrice)

   }
   else if (couponCode==='Coupon20') {

   }
   else{
    alert('Wrong Coupon')
   }
})
