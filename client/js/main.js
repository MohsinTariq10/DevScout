/**
 * Created by mohsin on 10/11/15.
 */
Meteor.startup(function() {
    //GoogleMaps.load({ v: '3', key: 'AIzaSyAhsO2T2VDVW3ZAQSK8Le58xDb_Ojoo3MA', libraries: 'geometry,places' });
    GoogleMaps.load();
});

Template.signup.events({
    'submit .signup' : function (event) {
        event.preventDefault();
        var city1 = $('#city').val();
        var country1 = $('#country').val();
        console.log("" + Meteor.user().username);
        Devs.insert({_id: Meteor.userId(), city : city1, country : country1});
        //console.log("" + Meteor.user().username);
    }
});





