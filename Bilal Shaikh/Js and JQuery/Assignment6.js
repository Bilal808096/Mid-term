var Eng = parseInt( prompt("Enter your English Obt Marks"));
var Eng_T = 100;
var Urdu = parseInt( prompt("Enter your Urdu Obt Marks"));
var Urdu_T = 100;
var Math = parseInt( prompt("Enter your Math Obt Marks"));
var Math_T = 100;
var Obt = Eng+Urdu+Math;
var Total = Eng_T+Urdu_T+Math_T;
var per = Obt*100/Total;
document.write("English Marks = "+Eng+"/100"+"<br>")
document.write("Urdu Marks = "+Urdu+"/100"+"<br>")
document.write("Math Marks = "+Math+"/100"+"<br>")
document.write("Obtained Marks = "+Obt+"<br>")
document.write("Total Makrs = "+Total+"<br>")
document.write("Per = "+per+"%"+"<br>")
 if(per >= 80)
{
    document.write("Grade = A+")
}else if(per >= 70)
{
    document.write("Grade = A")
}else if(per >= 60)
{
    document.write("Grade = B")
}else if(per >= 50)
{
    document.write("Grade = C")
}else if(per >= 40)
{
    document.write("Grade = D")
}else {
    document.write("Your Fail")
}