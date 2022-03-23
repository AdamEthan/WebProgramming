function display()
{
    var Result = new Array("This is a Holiday :)","Sorry, not a Holiday");
    var holidayArray = new Array("It is Labor Day!","It is Fall Break!","Happy Thanksgiving Holiday!!","Merry Christmas!","Winter Recess","Happy New Year's Day!!","Happy President's Day!","Enjoy Spring Break!"," It is Memorial Day.","Juneteenth Holiday","Happy 4th of July!");
    var ImgArray = new Array("LaborDay.jpg","Indigenous.png","Thanksgiving.jpg","Christmas.png","winter.jpg","newyear.jpg","presidents.jpg","spring.jpeg","memorial.jpg","juneteenth.jpg","4th.jpg","noHoliday.png");
    // 9/6/2021, 10/11/2021, 11/25/2021, 11/26/,2021, 12/25/2021, 12/23/2021-1/3/2022, 2/21/2022, 3/14-3/20/2022,5/30/2022, 6/19/2022,6/20/2022,7/4/2022,
    let userv = document.getElementById("idate").value;
    
    var selected = new Date(userv);
    let date = selected.getUTCDate();
    let month = selected.getUTCMonth()+ 1;
    let year = selected.getUTCFullYear();


    let text1 = document.getElementById('Output');
    let text2 = document.getElementById('Title1');
    let art=document.getElementById("img1")

    if(month == 9 && date ==6 && year == 2021){
    text1.textContent=Result[0];
    text2.textContent=holidayArray[0];
    art.src=ImgArray[0]
    art.style.border="2vh solid black"

    //citation: http://www.aascd.org/event/labor-day/
    }
    else if(month == 10 && date ==11 && year == 2021){
        text1.textContent=Result[0];
        text2.textContent=holidayArray[1];
        art.src=ImgArray[1]
        art.style.border="2vh solid black"
    //citation: https://news.ucdenver.edu/second-monday-in-october-is-it-columbus-day-or-indigenous-peoples-day/
    }
    else if(month == 11 && (date ==25 || date == 26) && year == 2021){
        text1.textContent=Result[0];
        text2.textContent=holidayArray[2];
        art.src=ImgArray[2]
        art.style.border="2vh solid black"
    //citation: https://www.makeitgrateful.com/living/celebrate/thanksgiving/how-thanksgiving-has-changed-100-years/
    }
    else if(month == 12 && (date>22) && year == 2021){
        if(date==25){
            text1.textContent=Result[0];
            text2.textContent=holidayArray[3];
            art.src=ImgArray[3]
            art.style.border="2vh solid black"
        //citation: https://timesofindia.indiatimes.com/life-style/events/merry-christmas-2020-top-50-wishes-messages-quotes-images-to-share-with-your-loved-ones/articleshow/79925173.cms
        }
        else{
            text1.textContent=Result[0];
            text2.textContent=holidayArray[4];
            art.src=ImgArray[4]
            art.style.border="2vh solid black"
        //citation: https://www.istockphoto.com/illustrations/winter-holiday-home
        }
    }
    else if(month == 1 && (date<4) && year == 2022){
        if(date==1){
            text1.textContent=Result[0];
            text2.textContent=holidayArray[5];
            art.src=ImgArray[5]
            art.style.border="2vh solid black"
        //citation: https://www.history.com/topics/holidays/new-years
        }
        else{
        text1.textContent=Result[0];
        text2.textContent=holidayArray[4];
        art.src=ImgArray[4]
        art.style.border="2vh solid black"
        //citation: https://www.istockphoto.com/illustrations/winter-holiday-home
        }
    }
    else if(month == 2 && date ==21 && year == 2022){
        text1.textContent=Result[0];
        text2.textContent=holidayArray[6];
        art.src=ImgArray[6]
        art.style.border="2vh solid black"
        //citation: https://papyrus.greenville.edu/2020/02/presidents-day-washingtons-birthday/
    }
    else if(month == 3 && (13<date) && (date<21) && year == 2022){
            text1.textContent=Result[0];
            text2.textContent=holidayArray[7];
            art.src=ImgArray[7]
            art.style.border="2vh solid black"
            //citation:https://www.villapalmarcancun.com/blog/destination/best-destinations-in-mexico-for-spring-break-2021
    }
    else if(month == 5 && date==30 && year == 2022){
        text1.textContent=Result[0];
        text2.textContent=holidayArray[8];
        art.src=ImgArray[8]
        art.style.border="2vh solid black"
        //citation:https://www.orlandosentinel.com/entertainment/events/os-et-memorial-day-weekend-roundup-events-orlando-20190524-hddqftt34ngbbel5bjvjsl6q2y-story.html
    }
    else if(month == 6 && (date==19 || date==20) && year == 2022){
        text1.textContent=Result[0];
        text2.textContent=holidayArray[9];
        art.src=ImgArray[9]
        art.style.border="2vh solid black"
        //citation: https://www.cnet.com/how-to/new-national-us-holiday-juneteenth-is-today-what-to-know-how-its-observed/
    }
    else if(month == 7 && date==4 && year == 2022){
        text1.textContent=Result[0];
        text2.textContent=holidayArray[10];
        art.src=ImgArray[10]
        art.style.border="2vh solid black"
        //ciation: https://www.indiatvnews.com/fyi/fourth-of-july-importance-united-states-of-america-independence-day-631459
    }
    else{
        text1.textContent=Result[1];
        text2.textContent=":(";
        art.src=ImgArray[11]
        art.style.border="2vh solid black"
        //citation: https://www.pngitem.com/middle/hwwwbwx_falling-on-emoticon-svg-sad-clipart-black-and/
    }
}