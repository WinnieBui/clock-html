//arrow function ra sau  này để tránh biij hosting
const generateTime = () => {
    //gán biến vô một obj => biến này gọi là obj lun, 
    let toDay = new Date()
    //method .getDay() log ra index
    const day = toDay.getDay(); //getDay là lấy ngày trong tuần (thứ) trả về index, còn getDate là lấy ngày trong tháng (vd: 17th)
    //tạo mảng các thứ trong tuần 
    const dayOfWeek = ["sun", "mon", "tues","wed", "thu", "fri", "sat"]
    //cho vô mảng day để trả về thứ
    
    
    //gọi obj ra và sử dụng method của nó
    
    const getDay = dayOfWeek[day];
    const getHours = toDay.getHours();
    const getMinutes = toDay.getMinutes();
    const getSecond = toDay.getSeconds();
    
    //get id/class từ HTML qua JS
    const dayHTML = document.getElementById("day");
    const hoursHTML = document.getElementById("hours");
    const minutesHTML = document.getElementById("minutes");
    const secondHTML = document.getElementById("second");
    
    //lấy obj cần để sd method innerText của nó, rồi gán obj constructor thì nó sẽ appear ngay trên web
    
    dayHTML.innerText = getDay;
    hoursHTML.innerText = getHours;
    minutesHTML.innerText = getMinutes;
    secondHTML.innerText = getSecond;

}
//setInterval(funtion,thoi gian chay)
setInterval(generateTime,1000)