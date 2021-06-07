class F_Page
{
    constructor()
    {
        this.title = createElement('h2');
        this.Admin_but = createButton('<img src="images/admin.jpg" width="130px" height= "130px">');
        this.User_but = createButton('<img src="images/user.jpg" width="130px" height= "130px">');
    }

    display()
    {
        this.title.html("Please choose your role");
        this.title.position(450,150);
        this.title.style('color','cyan');
        this.title.style('font-family','Bernard MT Condensed');
        this.title.style('background','linear-gradient(red, yellow)');
        //this.title.position(370,150);

        this.User_but.position(550,250);
        this.Admin_but.position(400,250);

        this.User_but.mousePressed(() =>
        {
            this.title.hide();
            this.User_but.hide();
            this.Admin_but.hide();
            main = new Main();
            main.display();
        });

        this.Admin_but.mousePressed(() =>
        {
            this.title.hide();
            this.User_but.hide();
            this.Admin_but.hide();
           var admin = new Admin();
            admin.display();
        });

    }
}