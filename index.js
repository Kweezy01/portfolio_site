if (window.location.href.endsWith("/home-page.html")) {

   const github = document.getElementById("github")
   const instagram = document.getElementById("instagram")
   const twitter = document.getElementById("twitter")

   const gallery = document.getElementById("gallery")
   const about = document.getElementById("about")
   const contact = document.getElementById("contact")

   const greetingTitle = document.getElementById("Title")
   const context = document.getElementById("context")
   const head_about = document.getElementById("head-about")
   const intro = document.getElementById("intro")

   github.append("Github")
   instagram.append("Instagram")
   twitter.append("Twitter")

   gallery.append("Gallery")
   about.append("About")
   contact.append("Contact")

   greetingTitle.append("Welcome to my HOMEPAGE!!")
   context.append("Please feel free to browse any one of my other pages on the left or visit my socials above")

   head_about.append("A little about myself")
   intro.append("I am currently studying Python and Javascript at CTU training solutions")
} 

else if (window.location.href.endsWith("/gallery-page.html")) {

   console.log("I am him");
}

else if (window.location.href.endsWith("/about-page.html")) {

   console.log("I am him");
}

else {

   console.log("I am him");
}
