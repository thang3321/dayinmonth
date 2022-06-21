const check = () =>{
    let month = +document.getElementById("month").value;
    if(month < 1 || month > 12){
        alert("Tháng không hợp lệ");
    }
    switch(month){
        case 1,3,5,7,9,11:
            alert("Tháng này có 31 ngày");
            break;
        case 2:
            alert("Tháng này có 28 hoặc 29 ngày");
            break;
        case 2,4,6,8,10,12:
            alert("Tháng này có 30 ngày");
            break;
        }
    }
