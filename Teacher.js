class Teacher
{
    constructor()
    {
        this.title = createElement('h2');
        this.name =  createInput().attribute('placeholder','Enter your registered name');
        this.class = createSelect().id('class');
        this.subject = createSelect().id('subject');
        this.enter_but = createButton('Submit');
        this.back_but = createButton('Back');
    }

    display()
    {
        this.class.position(500,250);
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

        this.subject.position(500,300);
        this.subject.option('Select Subject');
        this.subject.option('History');
        this.subject.option('Geography');
        this.subject.option('English Literature');
        this.subject.option('English Grammar');
        this.subject.option('Bengali Literature');
        this.subject.option('Bengali Grammar');
        this.subject.option('Chemistry');
        this.subject.option('Biology');
        this.subject.option('Physics');
        this.subject.option('Maths');
        this.subject.selected('Select Subject');

        const options = selectAll('option');
        disable('class','Select Class');
        disable('subject','Select Subject');

        function disable(selectId,option)
        {
            let options = select(`#${selectId}`);
            for(let i=0;i<options.elt.length;i++){
                
              if(options.elt[i].value === option){

                options.elt[i].disabled = true;
              }
              }
            }
            

        this.title.html("Enter your details");
        this.title.style('color','cyan');
        this.title.style('font-family','Bernard MT Condensed');
        this.title.style('background','linear-gradient(red, yellow)');
        this.title.position(470,100);
        this.name.position(470,200);
        this.class.position(500,250);
        this.enter_but.position(530,400);
        this.back_but.position(400,470);;


        this.enter_but.mousePressed(() =>
        {
            this.title.hide();
            this.name.hide();
            this.class.hide();
            this.subject.hide();
            this.enter_but.hide();
            this.back_but.hide();

            if(this.name.value() == "")
            {
                textSize(50);
                fill("red");
                alert("Enter Name");
            }
         
            var classValue = this.class.value();
            var subjectValue = this.subject.value();

            var common = new Common();
            var reload = new Reload();


            if(classValue !=="Select Class" && subjectValue !== "Select Subject")
            {
                if(this.name.value() == "susmita9sz")
                {
                    reload.display();
                if(this.name.value() == "susmita9sz" && classValue == "Class1")
                {

                    if(subjectValue == "History")
                    {
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);

                    }
                }

                if(this.name.value() == "susmita9sz" && classValue == "Class2")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }

                if(this.name.value() == "susmita9sz" && classValue == "Class3")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }

                if(this.name.value() == "susmita9sz" && classValue == "Class4")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }


                if(this.name.value() == "susmita9sz" && classValue == "Class5")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }

                if(this.name.value() == "susmita9sz" && classValue == "Class6")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }

                if(this.name.value() == "susmita9sz" && classValue == "Class7")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }


                if(this.name.value() == "susmita9sz" && classValue == "Class8")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }

                if(this.name.value() == "susmita9sz" && classValue == "Class9")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }

                if(this.name.value() == "susmita9sz" && classValue == "Class10")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }


                if(this.name.value() == "susmita9sz" && classValue == "Class11")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }

                if(this.name.value() == "susmita9sz" && classValue == "Class12")
                {
                    if(subjectValue == "History")
                    {
                    reload.display();
                     common.display();
                     fill(rgb(252, 3, 244));
                     text("History",15,251);  
                    
                     if(historyTime1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(historyTime1,285,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "Geography")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Geography",5,251);  

                    if(geography_Time1 !== undefined && geography_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(geography_Time1,145,251);
                     text(geography_Time2,285,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                    // text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                     text("X",375,251);

                    }

                    if(subjectValue == "English Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English II",5,251);

                    if(englishII_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text(englishII_Time1,215,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                   //   text("X",245,251);
                     text("X",315,251);
                     text("X",375,251);
                    }

                    if(subjectValue == "English Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("English I",15,251);
                        if(englishI_Time1 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                   
                     text(englishI_Time1,353,251);
                     }   
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                     text("X",315,251);
                 //    text("X",375,251);
                    }

                    if(subjectValue == "Bengali Literature")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali II",10,251);

                        if(bengaliII_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliII_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                       
                    }

                    if(subjectValue == "Bengali Grammar")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Bengali I",10,251);

                        if(bengaliI_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(bengaliI_Time1,215,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                        text("X",175,251);
                       // text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Chemistry")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Chemistry",10,251);

                        
                        if(chemistry_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(chemistry_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Biology")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Biology",10,251);
                        if(biology_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(biology_Time1,75,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                       // text("X",105,251);
                        text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Physics")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Physics",10,251);

                        if(physics_Time1 !== undefined)
                        {                
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text(physics_Time1,145,251);
                        }   
                        
                        fill(rgb(3, 211, 252));
                        textSize(10);                    
                        text("X",105,251);
                      //  text("X",175,251);
                        text("X",245,251);
                        text("X",315,251);
                        text("X",375,251);
                    }

                    if(subjectValue == "Maths")
                    {
                        common.display();
                        fill(rgb(252, 3, 244));
                        text("Maths",10,251);

                    if(maths_Time1 !== undefined && maths_Time2 !== undefined)
                     {                
                     fill(rgb(3, 211, 252));
                     textSize(8);                    
                     text(maths_Time1,295,251);
                     text(maths_Time2,352,251);
                     } 
                     
                     fill(rgb(3, 211, 252));
                     textSize(10);                    
                     text("X",105,251);
                     text("X",175,251);
                     text("X",245,251);
                   //  text("X",315,251);
                    // text("X",375,251);
                    }
                }

            }
            else 
            {

                this.info = createElement('h2');
                this.info.position(420,250);
                this.info.style('color', 'red');
                this.info.style('font-family','Bernard MT Condensed');
                this.info.style('background','linear-gradient(green, blue)');
                this.info.html("Enter Valid Credentials");
                this.back_wrong = createButton('Re-submit the form');
                this.back_wrong.size(250);
                this.back_wrong.position(400,330);
                this.back_wrong.mousePressed(() =>
                {
                this.title.show();
                this.name.show();
                this.class.show();
             //   this.section.show();
                this.subject.show();
                this.enter_but.show();
                this.back_but.show();
                this.back_wrong.hide();
                this.info.hide();
                });
            }
            }
            else if(classValue == "Select Class" || subjectValue == "Select Subject")
            {
                this.info = createElement('h2');
                this.info.position(420,250);
                this.info.style('color', 'red');
                this.info.style('font-family','Bernard MT Condensed');
                this.info.style('background','linear-gradient(green, blue)');
                this.info.html("Enter Valid Credentials");
                this.back_wrong = createButton('Re-submit the form');
                this.back_wrong.size(250);
                this.back_wrong.position(400,330);
                this.back_wrong.mousePressed(() =>
                {
                this.title.show();
                this.name.show();
                this.class.show();
             //   this.section.show();
                this.subject.show();
                this.enter_but.show();
                this.back_but.show();
                this.back_wrong.hide();
                this.info.hide();
                });
            }

            else 
            {
                this.info = createElement('h2');
                this.info.position(420,250);
                this.info.style('color', 'red');
                this.info.style('font-family','Bernard MT Condensed');
                this.info.style('background','linear-gradient(green, blue)');
                this.info.html("Enter Valid Credentials");               

                this.back_wrong = createButton('Re-submit the form');
                this.back_wrong.size(250);
                this.back_wrong.position(400,330);
                this.back_wrong.mousePressed(() =>
                {
                this.title.show();
                this.name.show();
                this.class.show();
             //   this.section.show();
                this.subject.show();
                this.enter_but.show();
                this.back_but.show();
                this.back_wrong.hide();
                this.info.hide();
                });

            }


        });

        this.back_but.mousePressed(() =>
        {
            this.title.hide();
            this.name.hide();
            this.class.hide();
          //  this.section.hide();
            this.subject.hide();
            this.enter_but.hide();
            this.back_but.hide();

            main = new Main();
            main.display();
        });
        
    }
       

  
       
    
}