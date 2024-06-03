var myWrapper;

//  גילוי התמונה הגדולה 

function ShowBig(Obj) {
    //אובייקט התמונה שנלחצה - Obj
    myWrapper = document.querySelector('#Wrapper');   // X שמכיל את התמונה ואת ה div ה 
    var myBigImg = document.querySelector('#BigImg');
    myBigImg.src = Obj.getAttribute('src');  /*העתקת קובץ המקור מהתמונה שנלחצה*/
    myWrapper.style.display = "flex"; /* X + הצגת האלמנט שמכיל תמונה */
    //  לא לאפשר לחיצה על הגלריה
    //  גילוי אלמנט כהה המונח מעל כולם
    document.querySelector("#divBig").style.display = "block";
}

//  הסתרת התמונה הגדולה

function HideBig() {
    myWrapper.style.display = "none";  /* X + הסתרת האלמנט שמכיל תמונה */
    //  לאפשר חזרה לחיצה על הגלריה
    // הסתרת האלמנט הכהה
    document.querySelector("#divBig").style.display = "none";
}

function clickDivBig() {
    myWrapper.style.display = "none";  /* X + הסתרת האלמנט שמכיל תמונה */
    //  לאפשר חזרה לחיצה על הגלריה
    // הסתרת האלמנט הכהה
    document.querySelector("#divBig").style.display = "none";
}