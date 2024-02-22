
const seats = document.querySelectorAll('.seat')


for (let index = 0; index < seats.length; index++) {
    const seat = seats[index]


    seat.addEventListener('click', function (event) {

        setTimeout(function () {

            event.target.disabled = true;
            
            

        }, 0)

        

        seat.classList.add('bg-lime-500')


        const seatNo = seat.innerText
        const seatName = document.getElementById('seat-price')
        const div = document.createElement('div')
        const seatTitile = document.createElement('p')
        seatTitile.innerText = seatNo;
        div.appendChild(seatTitile);
        const seatQuality = document.createElement('p')
        seatQuality.innerText = "Economoy";
        div.appendChild(seatQuality);
        const pricePerTicket = document.createElement('p')
        pricePerTicket.innerText = 550;
        div.appendChild(pricePerTicket);
        seatName.appendChild(div)

        div.classList.add('flex', 'justify-between')




        // seat countdown-------------------------------------------------
        const currentAvailableSeat = document.getElementById('total-seat-available')
        const currentAvailableSeatQuntity = currentAvailableSeat.innerText;
        const seatAvailable = parseInt(currentAvailableSeatQuntity)
        const seatAvailableNow = seatAvailable - 1
        currentAvailableSeat.innerText = seatAvailableNow + ' '




        //bg color change-------------------------------------------------




        //ticket booking=---------------------------------------------------------

        const buyTicket = document.getElementById('seat-buy')
        const currentBookingTicket = parseInt(buyTicket.innerText)
        const bookedTicket = currentBookingTicket + 1;
        buyTicket.innerText = bookedTicket



        //  total price----------------------------------------------------------

        const totalPrice = document.getElementById('total-price')
        const price = parseInt(totalPrice.innerText)
        const priceSum = price + 550;
        totalPrice.innerText = priceSum;

        const lastPrice = document.getElementById('final-price')
        lastPrice.innerText = priceSum;


    })

   

}



const applyCouponBtn = document.getElementById('apply-coupon')
const couponApply = document.getElementById('coupon')
applyCouponBtn.addEventListener('click', function () {

    const inputCoupon = document.getElementById('input-value').value
    const couponCode1 = inputCoupon.split(" ").join("").toUpperCase();
    const totalPrice = document.getElementById('total-price').innerText
    const coupleCoupon = inputCoupon.split(' ').join("");
    const couponCode2 = coupleCoupon[0].toUpperCase() + coupleCoupon.slice(1).toLowerCase()

    if (couponCode1 === 'NEW15') {

        const discount = totalPrice * 15 / 100;
        const discountAmount = parseFloat(discount).toFixed(3);

        const lastPrice = document.getElementById('final-price')
        const lastTotalPrice = totalPrice - discountAmount;
        lastPrice.innerText = lastTotalPrice;
        couponApply.classList.add('hidden')


    }

    else if (couponCode2 === 'Couple20') {

        const discount = totalPrice * 20 / 100;
        const discountAmount = parseFloat(discount).toFixed(3);

        const lastPrice = document.getElementById('final-price')
        const lastTotalPrice = totalPrice - discountAmount;
        lastPrice.innerText = lastTotalPrice;

        couponApply.classList.add('hidden')

    }
    else {
        alert('Wrong Coupon')

    }






})

const nextBtn = document.getElementById('next-button')
nextBtn.addEventListener('click', function () {

    const successfulMassage = document.getElementById('success-msg')
    successfulMassage.classList.remove('hidden')


    // hidden header section=============================

    const headerSection = document.getElementById('header-section')
    headerSection.classList.add('hidden')

    // offer section hide--------------------------------

    const offerSection = document.getElementById('offer-section')
    offerSection.classList.add('hidden')


    // hidden ticket Time Section---------------------------
    const ticketTimeSection = document.getElementById('ticket-time-section')
    ticketTimeSection.classList.add('hidden')


    // hidden footer section---------------------
    const footerSection = document.getElementById('footer-section')
    footerSection.classList.add('hidden')

})
