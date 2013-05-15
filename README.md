Jaeh.at
======

the page i !HAD! running on [my page](http://jaeh.at) using [Stellar](https://github.com/jonathankingston/stellar/) and [Meteor](http://meteor.com/).
Current version: 0.0.1


How to use
----------

To use the app, you need to install Meteor:

    curl install.meteor.com | sh

Then you can clone the code onto your system:

    git clone https://github.com/manarius/jaeh.at.git

Add packages jaeh.at needs:

    //You need to add in Stellar which isn't an official package yet
    //My meteor package dir was here: /usr/lib/meteor/packages/  or  /usr/local/meteor/packages. You should just be able to run the following command there.
    git clone git://github.com/jonathanKingston/stellar.git
    
    //In the app direcory now:
    meteor add stellar

    //i used stylus for my css (see clients/css/stellarskeleton.styl)
    meteor add stylus

Move to that directory and deploy to your own location:

    cd jaeh.at
    meteor deploy [yourlocation].meteor.com
    
    or just
    cd jaeh.at
    meteor
    
    to run meteor locally.
    
    needs to be run from a meteor version that uses auth (or may not need auth, idk, will check later)

