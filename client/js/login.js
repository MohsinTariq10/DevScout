/**
 * Created by mohsin on 10/12/15.
 */

Template.login.events({
    'click .btn-github' : function (event) {
        event.preventDefault();
        Meteor.loginWithGithub(function(err){
            if(!err){
                if(Devs.find({_id: Meteor.userId()}).count() ==0){
                    FlowRouter.go("/signup");
                }else{
                    FlowRouter.go("/home")
                }
            }
        });

    }
});