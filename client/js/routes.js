FlowRouter.route("/", {
    action : function () {
        BlazeLayout.render('main', { top: "login"});
    }
});

FlowRouter.route("/signup",{
    name : 'signup',
    action : function(){
        BlazeLayout.render('signup');
    }
});

FlowRouter.route("/home", {
    action : function(){
        BlazeLayout.render("home");
    }
});

