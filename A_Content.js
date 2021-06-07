class A_Content
{
    constructor()
    {
        this.title = createElement('h2');
        this.class_main = createButton('Class');
        this.teacher_main = createButton('Teacher');
        this.enter_but = createButton('Submit');
        this.back_but = createButton('Back');
    }

    display()
    {
        const options = selectAll('option');

        function disable(selectId,option)
        {
            let options = select(`#${selectId}`);
            for(let i=0;i<options.elt.length;i++){
                
              if(options.elt[i].value === option){

                options.elt[i].disabled = true;
              }
              }
            }
            this.back_but.mousePressed(() =>
            {
                this.title.hide();
                this.class_main.hide();
                this.teacher_main.hide();
                this.enter_but.hide();
                this.back_but.hide();
                var admin = new Admin();
                admin.display();
            });
        this.class_main.mousePressed(() =>
        {
        this.class = createSelect().id('class');

        
        this.class.size(120);
        this.class.option('Select Class');
        this.class.option('Class1')
        this.class.option('Class2');
        this.class.option('Class3');
        this.class.option('Class4');
        this.class.option('Class5');
        this.class.option('Class6');
        this.class.option('Class7');
        this.class.option('Class8');
        this.class.option('Class9');
        this.class.option('Class10');
        this.class.option('Class11');
        this.class.option('Class12');
        this.class.selected('Select Class');
        disable('class','Select Class');

        this.title.hide();
        this.enter_but.hide();
        this.back_but.hide();
        this.class_main.hide();
        this.teacher_main.hide();

        
        this.heading = createElement('h2');
        this.heading.style('color','cyan');
        this.heading.style('font-family','Bernard MT Condensed');
        this.heading.style('background','linear-gradient(red, yellow)');
        this.heading.html('Choose your Class');
        this.heading.position(470,100);

        this.submit = createButton('Submit');
        this.submit.position(530,400);

        this.class.position(500,300);

        this.back_but_class = createButton('Back');
        this.back_but_class.mousePressed(() =>
        {
            this.heading.hide();
            this.submit.hide();
            this.back_but.hide();

            this.title.show();
            this.enter_but.show();
            this.back_but.show();
            this.class_main.show();
            this.teacher_main.show();
        });

        this.submit.mousePressed(() =>
        {
            var classValue = this.class.value();
            console.log(classValue);

            this.heading.hide();
            this.submit.hide();
            this.class.hide();

            if(classValue == "Class1")
            {
                console.log("Working");
            }

            
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

            this.edit_but = createButton('Edit');
            this.edit_but.position(550,470);
            //this.back_but.position(350,470);

            this.edit_but.mousePressed(()=>
            {
                this.save_but = createButton('Save');
                this.save_but.position(600,400);
            });
        });
        

        });

        this.teacher_main.mousePressed(() =>
        {
        this.teacher = createSelect().id('teacher');
        
        this.teacher.option('Select Teacher');
        this.teacher.option('Teacher 1');
        this.teacher.option('Teacher 2');
        this.teacher.option('Teacher 3');
        this.teacher.option('Teacher 4');
        this.teacher.option('Teacher 5');
        this.teacher.option('Teacher 6');
        this.teacher.option('Teacher 7');
        this.teacher.option('Teacher 8');
        this.teacher.option('Teacher 9');
        this.teacher.option('Teacher 10');
        this.teacher.selected('Select Teacher');
        disable('teacher','Select Teacher');
        this.teacher.position(500,300);

        this.title.hide();
        this.enter_but.hide();
        this.back_but.hide();
        this.class_main.hide();
        this.teacher_main.hide();

        this.heading = createElement('h2');
        this.heading.style('color','cyan');
        this.heading.style('font-family','Bernard MT Condensed');
        this.heading.style('background','linear-gradient(red, yellow)');
        this.heading.html('Choose your Teacher');
        this.heading.position(470,100);

        this.submit = createButton('Submit');
        this.submit.position(530,400);
        });

            

        this.title.style('color','cyan');
        this.title.style('font-family','Bernard MT Condensed');
        this.title.style('background','linear-gradient(red, yellow)');
        this.title.html("Choose Section to Add or Edit");
        this.title.position(470,100);
        this.class_main.position(500,250);
        this.teacher_main.position(500,300);
        this.enter_but.position(530,400);
        this.back_but.position(400,470);;

    }

}