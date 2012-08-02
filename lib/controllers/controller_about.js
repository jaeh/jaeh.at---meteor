"use strict";

var AboutController = new Stellar.Controller("about");

function about_body() {
  var body = '<div class="me"></div><div><p>i am a web and street artist currently based in vienna, austria.</p>'+
    '<p>i juggle with code since ten,</p>'+
    '<p>with cones, balls and rings since twenty</p>'+
    '<p>and life juggles with me since about thirty years</p>'+
    '<p>i somehow manage to enjoy <span class="greyed">(almost)</span> every minute of it though.</p>'+
    '</div>';
  return body;
}

AboutController.index = function() {
  var body = about_body();
  var page = {
    title: 'about',
    body: body,
    current_projects: [
      {body: '<a target="utopia" href="http://britto-manarius.meteor.com">britto</a> is a cms/blogging system. it will slowly progress to become fully featured, but has a pretty impressive collection of functions already. this is my <a target="utopia" href="https://github.com/manarius/britto">fork<a> of <a target="utopia" href="https://github.com/jonathanKingston">jonathan kingston\'s</a> <a target="utopia" href="http://britto.co">britto</a> with some new features i added.'},
      {body: '<a target="utopia" href="http://deportationcounter.meteor.com">deportationcounter.eu</a> will be the first project that tries to collect deportation data from all across europe and make it visible. i will work with some big ngos that will supply the data and will try to create a visual experience that displays the crimes against humanity that happen everyday, almost every minute. This also will be the first page worldwide that aims to supply statistics from all across europe in one place.'},
      {body: '<a target="utopia" href="http://greenandsocial.meteor.com">greenandsocial.net</a>, a worldwide social network for green and social people. it will be a try to combine likeminded people and their skillsets. lots of wasted potential there still.'},
      {body: '<a target="utopia" href="http://steamflow.meteor.com">steamflow admin</a>, the admin interface for a future browsergame. about 20% done, which is almost all of the work, what remains is repeating and permutating the steps for all databases. slow progress though, the other projects are of bigger importance to me.'}
    ],
    bio: [
      {date: '1982', body: 'august, friday 13th, took my first independent breath'},
      {date: '1989', body: 'started school in vienna'},
      {date: '2002', body: 'finished school, achieved to learn how to learn, started to learn programming through self-education.'},
      {date: '2003 - present', body: 'making a living as a freelance web developer, creating pages for non profit organizations whenever i can afford, creating web projects i am personally fond of, playing around with new languages and programs, juggling whenever using public transportation systems and walking the streets'}
    ],
    profbio: [
      {date: '2002 - 2003', body: 'first game: <a target="utopia" href="http://ayris.jaeh.at">ayris</a>, made in flash engine version 8, the performance you see was unique back then. unfortunately the idea of advertisement in games was pretty new too...)'},
      {date: '2002 - 2004', body: 'created my first (php & javascript) content management system. professional and feature complete enough for multiple customers back then. <a href="http://combineart.at/">combineart.at</a>, the page of a company we founded back then, is the only page i know of that still uses my cms.'},
      {date: '2005', body: '<a target="utopia" href="http://djangoproject.org">django</a> <a target="utopia" href="http://python.org">(python)</a> content management system, after 3 month of work a forgotten backup destroyed my achievements, like so many others i learned to backup the hard way.'},
      {date: '2008 - 2009', body: ' worked on "the last chariot of the gods", which would have been a point and click adventure, unfortunately the project never came past alpha. creating game scripts, homepage and everything else that we needed and i could do.'},
      {date: '2011', body: 'started looking into <a target="utopia" href="http://nodejs.org">nodejs</a>'},
      {date: '2012', body: 'beginning to fully embracing the powers of nodejs, creating some quite interesting projects (see <a href="#current-projects">current projects</a> above)'}
    ],
    toolset: [
      {name: 'javascript', body: 'i use javascript since i started programing and enjoy the language a lot. if its possible i prefer to use no other language for webprojects, which simplifies development enormously. i use <a href="http://nodejs.org">nodejs</a> and <a href="http://meteor.com">meteor</a> as a framework. on top of meteor we built <a href="https://github.com/jonathanKingston/stellar">stellar</a> to further simplify the development process.'},
      {name: 'php', body: 'i used php a lot, i <span class="italic">can</span> use it and tend to write pretty good code, but i always have to think about the fact that the implementation of this language turned out to be pretty imperfect once i understood it.'},
      {name: 'python', body: 'python is a very nice language, i used it for webdevelopment (<a target="utopia" href="http://djangoproject.com">django</a>) and game development (<a href="http://blender.org">blender</a>) and i like it a lot.'},
      {name: 'c#', body: 'i used c# when programing games in <a target="utopia" href="http://unity3d.com">unity3d</a>, a marvellous 3d engine that soon will have linux browser and standalone app support, which will make it the "next best thing" for browsergames.'},
      {name: 'actionscript', body: 'i learned actionscript 2 & 3, i enjoy programing in flash a lot, but i only use it if i absolutely have to. javascript can do most animations nowadays and unity3d is a way better gameengine, so i dont need to start the flash ide a lot anymore. i still consider myself to be quite professional when using it though.'}
    ],
    footer: '<p>i hope this few lines of text were able to give you a picture of my projects and my goals,</p><p> thanks for reading :)</p>'
  };
  Stellar.render('about_page', {page: page});
}

AboutController.show = function() {
  Stellar.redirect('/about');
}

