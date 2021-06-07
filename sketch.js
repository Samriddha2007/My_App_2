var database;
var student;
var teacher;
var main;
var historyTime1;
var geography_Time1,geography_Time2;
var englishII_Time1;
var englishI_Time1;
var bengaliII_Time1;
var bengaliI_Time1;
var chemistry_Time1;
var biology_Time1;
var physics_Time1;
var maths_Time1,maths_Time2;
var HistorySub,GeographySub,EnglishII_Sub,EnglishI_Sub,BengaliII_Sub,BengaliI_Sub,Chemistry_Sub,Biology_Sub,Physics_Sub,Maths_Sub;
var teacher_img, student_img;
var pass;
function setup()
{

    
    database = firebase.database();

    pass = "1234";
    
    f_page = new F_Page();

    HistorySub = new History();
    GeographySub = new Geography();
    EnglishII_Sub = new EnglishII();
    EnglishI_Sub = new EnglishI();
    BengaliII_Sub = new BengaliII();
    BengaliI_Sub = new BengaliI();
    Chemistry_Sub = new Chemistry();
    Biology_Sub = new Biology();
    Physics_Sub = new Physics();
    Maths_Sub = new Maths();

}

function draw()
{

    HistorySub.display();
    GeographySub.display();
    EnglishII_Sub.display();
    EnglishI_Sub.display();
    BengaliII_Sub.display();
    BengaliI_Sub.display();
    Chemistry_Sub.display();
    Biology_Sub.display();
    Physics_Sub.display();
    Maths_Sub.display();
    f_page.display();
}