(function($) {
    console.log('sanity check');

    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    /* create a scene */
    $('section').each(function() {

        var name = $('section').attr('id');


        new ScrollMagic.Scene({
            triggerElement: this
        })
            .setPin(this)
            .addIndicators({
                colorStart: "rgba(255,255,255,0.5)",
                colorEnd: "rgba(255,255,255,0.5)",
                colorTrigger : "rgba(255,255,255,1)",
                name:name
            })
            //.loglevel(3)
            .addTo(ctrl);
    });
    // get window height ***** This means that
    // section four will have a class of .is-active
    //once the first three sections are done scrolling
    var wh = window.innerHeight;

    new ScrollMagic.Scene({
        offset: wh*3
    })
        .setClassToggle("section#four", "is-active")
        .addTo(ctrl);
})(jQuery); // end of script
