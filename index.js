const github = document.getElementById("github")
const instagram = document.getElementById("instagram")
const twitter = document.getElementById("twitter")

const home = document.getElementById("home")
const gallery = document.getElementById("gallery")
const about = document.getElementById("about")
const contact = document.getElementById("contact")

const greetingTitle = document.getElementById("Title")
const context = document.getElementById("context")
const head_about = document.getElementById("head-about")
const intro = document.getElementById("intro")
const home_pic = document.getElementById("home-pic")

const user_mail = document.getElementById("user-mail")
const user_message = document.getElementById("user-message")
const mail_button = document.getElementById("send_mail")

if (window.location.href.endsWith("/home-page.html")) {

   github.append("Github")
   instagram.append("Instagram")
   twitter.append("Twitter")

   gallery.append("Gallery")
   about.append("About")
   contact.append("Contact")

   greetingTitle.append("Welcome to my HOMEPAGE!!")
   context.append("Please feel free to browse any one of my other pages on the left or visit my socials above")

   head_about.append("A little about myself")
   intro.append("I am currently studying the Programming Foundation course at CTU training solutions. ")
   intro.append("I enjoy software development and enjoy making websites, which you can see in the Gallery.")

   home_pic.src = "home-pic.jpg"

}

else if (window.location.href.endsWith("/gallery-page.html")) {
   about.append("About")
   contact.append("Contact")
   home.append("Home Page")

   github.append("Github")
   instagram.append("Instagram")
   twitter.append("Twitter")

}

else if (window.location.href.endsWith("/about-page.html")) {
   gallery.append("Gallery")
   contact.append("Contact")
   home.append("Home Page")

   github.append("Github")
   instagram.append("Instagram")
   twitter.append("Twitter")
}

else {

    const mail_form = () => {  
        const email = user_mail.value
        const msg = user_message.value
        var atposition=email.indexOf("@");  
        var dotposition=email.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length || msg===""){  
            alert("Please enter a valid e-mail address and message");
            return false;
        }
        console.log(email)
        console.log(msg)
        alert("Thankyou for sending your message, will be in touch")
    }
    
    gallery.append("Gallery")
    about.append("About")
    home.append("Home Page")
    
    github.append("Github")
    instagram.append("Instagram")
    twitter.append("Twitter")

    mail_button.onclick = () => {mail_form()}
    
}
