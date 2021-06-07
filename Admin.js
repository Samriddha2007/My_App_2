class Admin 
{
    constructor()
    {
        this.title = createElement('h2');
        this.school =  createInput().attribute('placeholder','Enter your School name');
        this.name =  createInput().attribute('placeholder','Enter your registered name');
        this.password =  createInput().attribute('placeholder','Enter your Password');
        this.enter_but = createButton('Submit');
        this.create_account = createButton('Create Your Account');
        this.back_but = createButton('Back');
    }

    display()
    {
        this.title.position(470,100);
        this.title.html("Please enter your details");
        this.title.style('color','cyan');
        this.title.style('font-family','Bernard MT Condensed');
        this.title.style('background','linear-gradient(red, yellow)');
        this.back_but.position(350,470);

        this.school.position(470,200);
        this.name.position(470,250);
        this.password.position(470,300);
        this.enter_but.position(530,400);
        this.create_account.position(530,500);

        this.enter_but.mousePressed(() =>
        {
        if(this.password.value() == pass)
        {
            console.log("Working");
            createCanvas(500,500);
            var admin_content = new A_Content();
            admin_content.display();
            this.title.hide();
            this.school.hide();
            this.name.hide();
            this.password.hide();
            this.enter_but.hide();
            this.create_account.hide();
            this.back_but.hide();
        }
        else 
        {
            
        }
        });
        this.back_but.mousePressed(() =>
        {
            this.title.hide();
            this.school.hide();
            this.name.hide();
            this.password.hide();
            this.enter_but.hide();
            this.create_account.hide();
            this.back_but.hide();
            var First_Page = new F_Page();
            First_Page.display();
        });





    }
}