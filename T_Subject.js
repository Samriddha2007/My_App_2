class History 
{
    constructor()
    {

    }
    display()
    {
    var historyTime1Ref = database.ref('Class_1/History');
    historyTime1Ref.on("value", (data) => {
        historyTime1 = data.val();
    })
    }
}

class Geography 
{
    constructor()
    {

    }
    display()
    {
    var geography_Time1Ref = database.ref('Class_1/Geography/Time_1');
    geography_Time1Ref.on("value", (data) => {
        geography_Time1 = data.val();
    })

    var geography_Time2Ref = database.ref('Class_1/Geography/Time_2');
    geography_Time2Ref.on("value", (data) => {
        geography_Time2 = data.val();
    })


    }
}

class EnglishII 
{
    constructor()
    {

    }
    display()
    {
    var englishII_Time1Ref = database.ref('Class_1/English_2');
    englishII_Time1Ref.on("value", (data) => {
        englishII_Time1 = data.val();
    })
    }
}

class EnglishI 
{
    constructor()
    {

    }
    display()
    {
    var englishI_Time1Ref = database.ref('Class_1/English_1');
    englishI_Time1Ref.on("value", (data) => {
        englishI_Time1 = data.val();
    })
    }
}

class BengaliII 
{
    constructor()
    {

    }
    display()
    {
    var bengaliII_Time1Ref = database.ref('Class_1/Bengali_2');
    bengaliII_Time1Ref.on("value", (data) => {
        bengaliII_Time1 = data.val();
    })
    }
}

class BengaliI 
{
    constructor()
    {

    }
    display()
    {
    var bengaliI_Time1Ref = database.ref('Class_1/Bengali_1');
    bengaliI_Time1Ref.on("value", (data) => {
        bengaliI_Time1 = data.val();
    })
    }
}

class Chemistry 
{
    constructor()
    {

    }
    display()
    {
    var chemistry_Time1Ref = database.ref('Class_1/Chemistry');
    chemistry_Time1Ref.on("value", (data) => {
        chemistry_Time1 = data.val();
    })
    }
}

class Biology 
{
    constructor()
    {

    }
    display()
    {
    var biology_Time1Ref = database.ref('Class_1/Biology');
    biology_Time1Ref.on("value", (data) => {
        biology_Time1 = data.val();
    })
    }
}

class Physics 
{
    constructor()
    {

    }
    display()
    {
    var physics_Time1Ref = database.ref('Class_1/Physics');
    physics_Time1Ref.on("value", (data) => {
        physics_Time1 = data.val();
    })
    }
}

class Maths 
{
    constructor()
    {

    }
    display()
    {
    var maths_Time1Ref = database.ref('Class_1/Maths/Time_1');
    maths_Time1Ref.on("value", (data) => {
        maths_Time1 = data.val();
    })

    var maths_Time2Ref = database.ref('Class_1/Maths/Time_2');
    maths_Time2Ref.on("value", (data) => {
        maths_Time2 = data.val();
    })


    }
}