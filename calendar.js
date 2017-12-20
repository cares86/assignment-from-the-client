//this function will find today's date
function calendar(){
    var day=['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
    var month=['January','February','March','April','May','June','July','Augustus','September','October','November','December'];
    var d=new Date();
    setText('calendar-dag', day[d.getDay()]);
    setText('calendar-datum', d.getDate());
    setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
};

//this function will set the text value of <p> tags
function setText(id, val){
    if(val < 10){
        val = '0' + val;    //add leading 0 if val < 10
    }
    document.getElementById(id).innerHTML = val;
};


//call calendar() when page load
window.onload = calendar;
