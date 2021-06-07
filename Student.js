class Student
{
    constructor()
    {
        this.title = createElement('h2');
        this.name = createInput('').attribute('placeholder','Enter your registered name');
        this.name.attribute('required','true');
        this.class = createInput('').attribute('placeholder', 'Enter your class');
        this.section = createInput('').attribute('placeholder','Enter your section');
        this.roll_no = createInput('').attribute('placeholder','Enter your  roll no.');
        
        this.enter_but = createButton('Submit');
        this.back_but = createButton('Back');
   
    }

    display()
    {
        this.title.html("Enter your details");
        this.title.style('color','cyan');
        this.title.style('font-family','Bernard MT Condensed');
        this.title.style('background','linear-gradient(red, yellow)');
        this.title.position(470,100);
        this.name.position(470,200);
        this.class.position(470,250);
        this.section.position(470,300);       
        this.roll_no.position(470,350);
        this.enter_but.position(530,400);
        this.back_but.position(400,470);
 

        this.enter_but.mousePressed(() =>
        {
            this.title.hide();
            this.name.hide();
            this.class.hide();
            this.section.hide();
            this.roll_no.hide();
            this.enter_but.hide();
            this.back_but.hide();
            

            if(this.name.value() == "")
            {
                textSize(50);
                fill("red");
                alert("Enter Name");
            }

            if(this.class.value() == "")
            {
                textSize(50);
                fill("red");
                alert("Enter Class");
            }

            if(this.section.value() == "")
            {
                textSize(50);
                fill("red");
                alert("Enter Section");
            }

            if(this.roll_no.value() == "")
            {
                textSize(50);
                fill("red");
                alert("Enter Roll No");
            }

            if(this.name.value() == "samriddha2zw" && this.class.value() == "1" && this.section.value() == "A" && this.roll_no.value() == "1")
            {

               var reload = new Reload();
                reload.display();

                strokeWeight(2);
                stroke(51);   

            for (var i = -100; i < 400; i=i+70) 
            {
                strokeWeight(2);
                    stroke(51);
                line(i+30,50, i+100, 50);
                
                line(i+30, 50, i+30, 85);
            
                line(i+30, 70, i+100, 70);
        
                line(i+30, 85, i+100, 85);
            }
    
                fill("red");
                text("Subject",15,65);  
                text("Monday",85,65);
                text("Tuesday",150,65);
                text("Wednesday",213,65);
                text("Thursday",287,65);
                text("Friday",355,65);

                textSize(10);
                
            for (var i = -100; i < 400; i=i+70) 
            {
                strokeWeight(2);
                fill("red");
                text("History",15,82);
                text("Geography",5,97);
                text("English II",5,117);
                text("English I",5,133);
                text("Bengali II",5,153);
                text("Bengali I",5,173);
                text("Chemistry",5,187);
                text("Biology",5,202);
                text("Physics",5,222);
                text("Maths",5,242);

                /////////////////////
                text(historyTime1,285,82);
                text("X",105,82);
                text("X",175,82);
                text("X",245,82);
             //   text("X",315,82);
                text("X",365,82);
                //////////////////////

                /////////////////////
                text(geography_Time1,145,99);
                text(geography_Time2,285,99);
                text("X",105,99);
               // text("X",175,99);
                text("X",245,99);
               // text("X",315,99);
                text("X",365,99);
                ////////////////////

                ///////////////////
                text(englishII_Time1,215,116);
                text("X",105,116);
                text("X",175,116);
              //  text("X",245,116);
                text("X",315,116);
                text("X",365,116);               
                //////////////////

                /////////////////
                text(englishI_Time1,355,133);
                text("X",105,133);
                text("X",175,133);
                text("X",245,133);
                text("X",315,133);
              //  text("X",365,133);  
                ////////////////

                 /////////////////
                 text(bengaliII_Time1,215,150);
                 text("X",105,150);
                 text("X",175,150);
               //  text("X",245,150);
                 text("X",315,150);
                 text("X",365,150);  
                 //////////////// 
                 
                 /////////////////
                 text(bengaliI_Time1,215,167);
                 text("X",105,167);
                 text("X",175,167);
               //  text("X",245,167);
                 text("X",315,167);
                 text("X",365,167);  
                 ////////////////  

                  /////////////////
                  text(chemistry_Time1,75,188);
                 // text("X",105,184);
                  text("X",175,184);
                  text("X",245,184);
                  text("X",315,184);
                  text("X",365,184);  
                  ////////////////  

                 /////////////////
                  text(biology_Time1,75,205);
                 // text("X",105,205);
                  text("X",175,205);
                  text("X",245,205);
                  text("X",315,205);
                  text("X",365,205);  
                  //////////////// 

                  /////////////////
                  text(physics_Time1,145,222);
                  text("X",105,222);
                 // text("X",175,222);
                  text("X",245,222);
                  text("X",315,222);
                  text("X",365,222);  
                  //////////////// 

                  /////////////////////
                  text(maths_Time1,285,239);
                  text(maths_Time2,355,239);
                  text("X",105,239);
                  text("X",175,239);
                  text("X",245,239);
                  //text("X",315,239);
                  //text("X",365,239);
                 ////////////////////

                stroke(51);
                line(i+30,85, i+100, 85);
                
                line(i+30, 85, i+30, 120);
               
                line(i+30, 105, i+100, 105);
        
                line(i+30, 120, i+100, 120);
              }

              for (var i = -100; i < 400; i=i+70) 
              {
                strokeWeight(2);
                fill("red");
                strokeWeight(2);
                stroke(51);
                line(i+30,120, i+100, 120);
                
                line(i+30, 120, i+30, 155);
               
                line(i+30, 140, i+100, 140);
        
                line(i+30, 155, i+100, 155);
              }

              for (var i = -100; i < 400; i=i+70) 
              {
                strokeWeight(2);
                fill("red");
                strokeWeight(2);
                stroke(51);
                line(i+30,155, i+100, 155);
                
                line(i+30, 155, i+30, 190);
               
                line(i+30, 175, i+100, 175);
        
                line(i+30, 190, i+100, 190);
              }

              for (var i = -100; i < 400; i=i+70) 
              {
                strokeWeight(2);
                fill("red");
                strokeWeight(2);
                stroke(51);
                line(i+30,190, i+100, 190);
                
                line(i+30, 190, i+30, 225);
               
                line(i+30, 210, i+100, 210);
        
                line(i+30, 225, i+100, 225);
              }

              for (var i = -100; i < 400; i=i+70) 
              {
                strokeWeight(2);
                fill("red");
                strokeWeight(2);
                stroke(51);
                line(i+30,225, i+100, 225);
                
                line(i+30, 205, i+30, 245);
               
                line(i+30, 245, i+100, 245);
        
              }


                textSize(45);
                fill("red");
            }

            else 
            {
                textSize(45);
                fill("red");
                console.log(this.name.value());
                console.log(this.class.value());
                console.log(this.section.value());
                console.log(this.roll_no.value());

                this.info = createElement('h2');
                this.info.position(480,200);
                this.info.style('color', 'red');
                this.info.style('font-family','Bernard MT Condensed');
                this.info.style('background','linear-gradient(green, blue)');
                this.info.html("Wrong Info Given");

                this.back_wrong = createButton('Re-submit the form');
                this.back_wrong.size(250);
                this.back_wrong.position(430,270);
                this.back_wrong.mousePressed(() =>
                {
                this.title.show();
                this.name.show();
                this.class.show();
                this.section.show();
                this.roll_no.show();
                this.enter_but.show();
                this.back_but.show();
                this.back_wrong.hide();
                this.info.hide();
                });

                alert('Enter Valid Credentials')
            }
        });

        this.back_but.mousePressed(() =>
        {
            this.title.hide();
            this.name.hide();
            this.class.hide();
            this.section.hide();
            this.roll_no.hide();
            this.enter_but.hide();
            this.back_but.hide();

            main = new Main();
            main.display();
        });      
    }


}