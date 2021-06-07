class Main 
{
    constructor()
    {
        this.title = createElement('h2');
        this.teacher_but = createButton('<img src="images/teacher.jpg" width="130px" height= "130px">');
        this.student_but = createButton('<img src="images/student.png" width="130px" height= "130px">');
        this.student_but.size(153,153);
        this.student_but.style('background',' transparent');       
        this.teacher_but.style('background',' transparent');
        this.teacher_but.size(153,153);
        this.t_title = createElement('h2');
        this.t_title.html("Teacher");
        
        this.s_title = createElement('h2');
        this.s_title.html("Student");

        this.back_but = createButton('Back');
    }

    display()
    {      
        this.title.html("Click on your respective role");
        this.title.style('color','cyan');
        this.title.style('font-family','Bernard MT Condensed');
        this.title.style('background','linear-gradient(red, yellow)');
        this.title.position(370,150);
        this.teacher_but.position(343,250);
        this.student_but.position(513,250);
        this.back_but.position(350,470);
        
        this.t_title.position(380,395);
        this.t_title.style('font-family','Bernard MT Condensed');
        this.t_title.style('color','violet');
        this.t_title.style('background','linear-gradient(green, red)');

        this.s_title.position(550,395);
        this.s_title.style('font-family','Bernard MT Condensed');
        this.s_title.style('color','violet');
        this.s_title.style('background','linear-gradient(green, red)');

        this.student_but.mousePressed(() =>
        {
            this.title.hide();
            this.teacher_but.hide();
            this.student_but.hide();
            this.t_title.hide();
            this.s_title.hide();
            this.back_but.hide();
            student = new Student();            
            student.display();
        });

        this.teacher_but.mousePressed(() =>
        {
            this.title.hide();
            this.teacher_but.hide();
            this.student_but.hide();
            this.t_title.hide();
            this.s_title.hide();
            this.back_but.hide();
            teacher = new Teacher();
            teacher.display();
        });

        this.back_but.mousePressed(() =>
        {
            this.title.hide();
            this.teacher_but.hide();
            this.student_but.hide();
            this.t_title.hide();
            this.s_title.hide();
            this.back_but.hide();
         var   First_Page = new F_Page();
            First_Page.display();
        });
    }
}

