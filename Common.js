class Common 
{
    constructor()
    {

    }
    display()
    {
        for (var i = -100; i < 400; i=i+70) {
            strokeWeight(2);
            stroke(51);
            line(i+30,220, i+100, 220);
            
            line(i+30, 220, i+30, 255);
           
            line(i+30, 240, i+100, 240);

            line(i+30, 255, i+100, 255);
          }
       
     fill("red");
     text("Subject",15,235);  
     text("Monday",85,235);
     text("Tuesday",150,235);
     text("Wednesday",213,235);
     text("Thursday",287,235);
     text("Friday",355,235);
    }
}

class Reload
{
    constructor()
    {

    }
    display()
    {
        this.back = createButton('Back');
        this.back.position(400,470);
        textSize(13);

    this.back.mousePressed(() =>
    {
        window.location.reload();
    });       
    }
}
