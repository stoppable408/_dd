<template>
  <div class="home">
    <header>
      <nav class="navbar fixed-top navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">Detroit LFG</a>
          <button class="navbar-toggler menu-btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link left-nav-item" href="#summary">Summary</a>
              </li>
              <li class="nav-item">
                <a class="nav-link left-nav-item" href="#dungeon-masters">Dungeon Masters</a>
              </li>
              <li class="nav-item">
                <a class="nav-link left-nav-item" href="#gallery">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link left-nav-item" href="#faqs">FAQs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link left-nav-item" href="#contact ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="header container">
        <h1 class="title">Detroit LFG</h1>
        <h3 class="subtitle mt-5">A community dedicated to providing the adventurers of Southwest Michigan with all their Dungeons & Dragons needs!</h3>
        <a href="#contact" class="btn action-btn mt-5">Get In Touch!</a>
      </section>
    </header>


    <main>
      <section class="summary text-center" id="summary">
        <div class="container">
          <div class="summary-title mb-5">
            <h2>Who We Are</h2>
          </div>

          <div class="summary-subtitle">
            <p>Our Mission at Detroit LFG is to bring together a community of diverse players who share the love of Dungeons and Dragons through exploration, community involvement, and cooperative gaming play.  It is our mission to bring a large Gaming Community together with multiple Dungeon Masters who bring different styles of play for players to immerse themselves in a communal world.   Furthermore, we want to encourage a cooperative gaming environment where everyone has a voice and is free to play their character however they choose.</p>
          </div>
        </div>
      </section>

      <section class="dd-masters" id="dungeon-masters">
        <div class="container">
          <div class="dd-title text-center mb-5">
            <h2>Meet Your Dungeon Masters</h2>
          </div>

          <div class="masters">
            <div class="row">
              <div class="shadow card col-lg master-card">
                <div class="card-body">
                  <div class="master">
                    <img src="../assets/Jim Weaver.jpg" alt="Profile Pic" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Jim Weaver</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Sanctus</h6>
                    </div>
                  </div>
                  <p class="card-text">Over a great many years, the people of Sanctus have been safe from the evils of the world, and the ones that knew why died with that knowledge...</p>
                  <div class="more text-center">
                    <button class="btn more-btn" data-toggle="modal" data-target="#modal">More</button>
                  </div>
                </div>
              </div>

              <div class="shadow card col-lg master-card">
                <div class="card-body">
                  <div class="master">
                    <img src="../assets/Beau Photo.jpg" alt="" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Beau Woehrle</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Far Reach</h6>
                    </div>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod.</p>
                  <div class="more text-center">
                    <button class="btn more-btn" data-toggle="modal" data-target="#modal-2">More</button>
                  </div>
                </div>
              </div>

              <div class="shadow card col-lg master-card">
                <div class="card-body">
                  <div class="master">
                    <img src="../assets/Adam L F.jpg" alt="" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Adam Fuqua</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Caldera</h6>
                    </div>
                  </div>
                  <p class="card-text">The Caldera is a huge volcano at the northern end of a massive continent that is partially collapsed into the sea, leaving...</p>
                  <div class="more text-center">
                    <button class="btn more-btn" data-toggle="modal" data-target="#modal-3">More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modal-title">Dungeon Master</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="master">
                    <img src="../assets/Jim Weaver.jpg" alt="" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Jim Weaver</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Sanctus</h6>
                    </div>
                  </div>
                  <p class="card-text">Over a great many years, the people of Sanctus have been safe from the evils of the world, and the ones that knew why died with that knowledge. As time passed, the people lost the art of warfare and only know how to fight as a sport.  With the concerns about sustainability, the Council asked for brave souls to venture out into the world to seek out new places to settle. <br><br> Since these adventurers have been leaving the safety of the island, reports of strange creatures being spotted have increased from various areas. At first, the stories were not believed, but they have grown to warrant investigation.  <br><br> Thankfully, the city remains safe for now, but political forces have been stirred since the arrival of races, thought lost to the world, have been coming to Sanctus from the lands of Caldera, and The Wayward. <br><br> Would you like to help solve some of these troubling issues or, perhaps, learn the ancient secrets of the island of Sanctus?</p>
                </div>
                <div class="modal-footer">
                  <a href="#" class="wiki-link">Link to Wiki</a>
                  <button type="button" class="btn modal-close" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="modal-2" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modal-title">Dungeon Master</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="master">
                    <img src="../assets/Beau Photo.jpg" alt="" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Beau Woehrle</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Far Reach</h6>
                    </div>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error incidunt sunt ipsam porro, itaque necessitatibus repellat eum quis beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis dolore officia repellat minus quam reiciendis blanditiis, vero beatae architecto?</p>
                </div>
                <div class="modal-footer">
                  <a href="#" class="wiki-link">Link to Wiki</a>
                  <button type="button" class="btn modal-close" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="modal-3" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modal-title">Dungeon Master</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="master">
                    <img src="../assets/Adam L F.jpg" alt="" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Adam Fuqua</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Caldera</h6>
                    </div>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur assumenda doloremque, at quas doloribus aut veritatis nulla ut illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.</p>
                </div>
                <div class="modal-footer">
                  <a href="#" class="wiki-link">Link to Wiki</a>
                  <button type="button" class="btn modal-close" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery" id="gallery">
        <div class="galler-title">
          <h2 class="text-center mb-5">Gallery</h2>
        </div>
        <div class="container">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100 gallery-img" src="../assets/gallery-1.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 gallery-img" src="../assets/gallery-2.jpg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 gallery-img" src="../assets/gallery-5.jpg" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      <section class="join-us container">
        <div class="join-content">
          <h2 class="join-text">Dont wait untill tomorrow</h2>
        </div>

      </section>
      
      <div class="join-action">
        <a href="#contact" class="join-btn btn">Join Today</a>
      </div>


      <section class="faqs" id="faqs">
        <div class="container">
          <div class="faqs-title text-center mb-5">
            <h2>FAQs</h2>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="faq-header card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <h5 class="mb-0">
                  <p class="question">
                    I don’t have time to play every week and am worried this will be too much of a commitment.  What’s the time commitment like?
                  </p>
                </h5>
              </div>

              <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body answer">
                  Here’s the thing - all of us are busy with tons of stuff in life, between jobs, loved ones, school, etc.  That’s why this model of community was created - to work perfectly with busy adults.  The amount of time that you put into DetroitLFG all depends on your schedule.  We have people who will play 2, 3, 4 times a week, and we have people that will get a game in once a month.  We will have open missions for anyone to join, and you decide if you’re free.  No one will judge you if you’re a busy person.  Actually, if we see someone join a game after a month-long break or so, we celebrate!  So, in terms of time commitment, don’t stress.  We understand and have your back.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="faq-header card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h5 class="mb-0">
                  <p class="question">
                    I have a character from another campaign.  Can I bring them over to this one?
                  </p>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body answer">
                  Unfortunately, with our model, bringing characters over from other campaigns isn’t an option unless you have them start at level 1 with all of the basics again.  Our structure creates a fair playing field for everyone, and bringing in a character that you’ve leveled up to level 5 in another campaign and keeping them at level 5 would create too many openings for unfairness.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="faq-header card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h5 class="mb-0">
                  <p class="question">
                    I’m new to this campaign!  Can I create any type of character I want?
                  </p>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body answer">
                  Yes and no.  Your character design is all up to you.  You can choose male or female or neither, racial characteristics within the race you choose, any spells that may be relevant, any of the basic starting equipment, etc.  However, we do have some restrictions that are there to ensure our group maintains order, and also gives incentives and goals to keep players hooked.  First of all, we are keeping the options limited to the PHB at the onset of the campaign, and for each new player’s introduction (no matter how long the campaign has been running). Extended character options will be available as ‘unlocks’ through the play of the game. The details below note how you can access non-PHB options through the course of play.  When you join, you’ll be given a handbook-like document that will go further in detail about character creation.  Further, because of the nature of our group, we do not allow characters with Evil or Chaotic Neutral alignments, as these can be disruptive to the campaign.
            </div>
             </div>
            <div class="card">
              <div class="faq-header card-header" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                <h5 class="mb-0">
                  <p class="question">
                    I’ve never played before.  Am I still able to join?
                  </p>
                </h5>
              </div>
              <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                <div class="card-body answer">
                  Yes and yes!  Please!  The way our campaign is structured makes it a good entry for new players.  Anyone who joins will first start off with a Session Zero, where they will learn the ins and outs of our campaign, get introduced to the regions, have our guidelines explained and be given the room to ask any questions and have experienced players and Dungeon Masters give advice and guidance at that session.  Further, our community of players are all willing to help out and answers questions and give guidance.
                </div>
                </div>
                
          </div>
            <div class="card">
              <div class="faq-header card-header" id="headingFive" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                <h5 class="mb-0">
                  <p class="question">
                    How will I know when games are available?  What if nothing matches my schedule?
                  </p>
                </h5>
              </div>
              <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                <div class="card-body answer">
                  Every new player will be added to the Detroit LFG google calendar, and will be added to the Discord channel.  Through these, every player will be able to see when upcoming missions are and if there are any open seats.  If there isn’t anything that matches your schedule, then just request your own!  All DMs have their availability posted on the calendar, and you are able to request to have a mission yourself!  As long as the specific DM you want is available, you’re all good!
                </div>
                </div>
              </div>
              
              </div>
            <div class="card">
              <div class="faq-header card-header" id="headingSix" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                <h5 class="mb-0">
                  <p class="question">
                   I’m one of “those people” who like to run multiple characters at once.  Do you have a limit on the number of characters you can have?
                  </p>
                </h5>
              </div>
              <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                <div class="card-body answer">
                  There is no maximum number of characters you can create. The only negative to having multiple “alts” is that your split focus may slow down the individual advancement of each character (less play time per character).  Our advice?  If you haven’t ever played this type of way before, start with 1 or 2 and get used to the flow of things before making more.
                </div>
              </div>
             </div>
            
          </div>
            <div class="card">
              <div class="faq-header card-header" id="headingSeven" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                <h5 class="mb-0">
                  <p class="question">
                  Which version do you run?                  
                  </p>
                </h5>
              </div>
              <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                <div class="card-body answer">
                  We run 5e and any officially published books within the spectrum of 5e.  However, as stated before, most things beyond the PHB are considered “Unlockables.”  More is explained in our handbook.
                </div>
              </div>
             
                </div>
            <div class="card">
              <div class="faq-header card-header" id="headingEight" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseThree">
                <h5 class="mb-0">
                  <p class="question">
                    Can I bring snacks to share?
                  </p>
                </h5>
              </div>
              <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                <div class="card-body answer">
                  YES PLEASE.  ALWAYS.  (Ask about allergies though just in case.)
                </div>
              </div>
            
          </div>
        </div>
      </section>
    </main>

    <footer class="footer" id="contact">
      <div class="container">
        <div class="row footer-container">
          <div class="footer-content col-md">
            <h3 class="contact-title">Contact Us</h3>
            <p class="motto">Ready to start your journey?  Want more information?  Have any unanswered, lingering questions?  Want to compliment us on our attractive DMs and inflate their egos?  Fill out this contact form and we will get back to you within the week.</p>
            <div class="social">
              <a href="#" class="social-item"><i class="fab fa-facebook"></i></a>
              <a href="#" class="social-item"><i class="fab fa-twitter-square"></i></a>
              <a href="#" class="social-item"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-item"><i class="fas fa-envelope"></i></a>
            </div>
          </div>

          <form action="https://submit-form.com/1e0630ef-0742-461f-bb95-21331b8abfa9" class="footer-form col-md">
            <input type="hidden" name="_redirect" value="https://detroitlfg.com/thanks" />
            <input type="checkbox" name="_honeypot" style="display:none" tabindex="-1" autocomplete="off">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control form-input" id="name" name="name" placeholder="Enter name" required>
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control form-input" id="email" name="email" placeholder="Enter email" required>
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea type="text" class="form-control form-input" id="message" name="message" placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn submit-btn">Submit</button>
          </form>
        </div>

        <div class="copywrite">
          <p>Detroit LFG<span>&copy;</span> 2018</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  $primary: #9D0A0E;
  $secondary: #E6E6DB;
  $white: #fff;
  $black: #000;
  $grey: #CACACA;

  nav {
    padding: 20px;
    background: $secondary;
  }

  .navbar-brand {
    color: $primary;
    
  }

  .left-nav-item {
    color: $black;
  }

  .menu-btn {
    outline-color: $primary;
    font-size: 1.5rem;  
  }

  header {
    height: 100vh;
  }
  
  .header {
    text-align: center; 
    padding-top: 150px;
  }

  .title {
    font-size: 5rem;
  }

  .subtitle {
    font-weight: 300;
  }

  .action-btn {
    background: #9D0A0E;
    color: $white;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1.5rem;
  }

  .summary {
    background: $primary;
    color: $white;
    padding: 150px 0;
  }

  .summary-title h2 {
    font-size: 2.4rem;
  }

  .summary-subtitle p {
    font-size: 1.2rem;
  }

  .dd-masters {
    padding-top: 170px;
    margin-bottom: 170px;
  }

  .master {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }

  img.master-img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .master-card {
    margin: 10px;
    background: $secondary;
    border: none;
    border-radius: 5px;
  }

  .more-btn {
    background: transparent;
    color: $primary;
    border-radius: 50px;
    padding: 10px 25px;
    border: 1px solid $primary;
    
    &:hover {
      color: $white;
      background: $primary;
      border: 1px solid $primary;
    }
  }

  .modal-header {
    background: $secondary;
    color: $primary;
  }

  .modal-footer {
    background: $secondary;
  }

  .wiki-link {
    color: $black;
  }

  .modal-close {
    outline: none;
    border: 1px solid $primary;
    background: transparent;
    padding: 10px 20px;
    border-radius: 50px;
    color: $primary;

    &:hover {
      color: $white;
      background: $primary;
    }
  }

  .gallery {
    z-index: 1px;
    max-width: 700px;
    max-height: 500px;
    margin: 0 auto;
  }

  .photo {
    width: 400px;
    height: 300px;
  }

  .gallery-img {
    max-width: 700px;
    max-height: 500px;
  }

  .join-us {
    height: 350px;
    background: $primary; 
    position: relative;
    bottom: 170px;
    z-index: -1;
    border-radius: 5px;
    margin: 0 auto;
  }

  .join-content {
    padding-top: 200px;
    padding-bottom: -200px;
    text-align: center;
    margin-top: 20px;
  }

  .join-text {
    color: $white;
  }

  .join-action {
    position: relative;
    bottom: 270px;
    text-align: center;
  }

  .join-btn {
    margin: 10px 0;
    border: 1px solid $white;
    color: $white;
    text-decoration: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1.2rem;

    &:hover {
      background: $black;
      border: 1px solid $black;
    }
  }

  .faqs {
    margin-top: -80px;
    padding-bottom: 30px;
  }

  .faq-header {
    cursor: pointer;
    background: $secondary;
  }

  .question {
    color: $primary;
  }

  .answer {
    font-size: 1.2rem;
  }

  .footer {
    background: $primary;
    padding-top: 70px;
    padding-bottom: 10px;
    margin-top: 100px;
  }

  .footer-form {
    display: flex;
    flex-direction: column;
  }

  .contact-title {
    color: $white;
    margin-bottom: 20px;
  }

  .form-label {
    color: $white;
  }

  .form-input {
    border-radius: 0;
    outline: 0;
    border: none;
  }

  .submit-btn {
    border-radius: 50px;
    color: $white;
    background: transparent;
    border: 1px solid $white;
    outline: none;
    width: 50%;
    margin: 0 auto;
    font-size: 1.2rem;

    &:hover {
      background: $black;
      border: 1px solid $black;
    }
  }

  .footer-container {
    margin: 0 auto;
  }

  .footer-content {
    margin-bottom: 50px;  
  }

  .social {
    margin-top: 20px;
  }

  .social-item {
    color: $white;
    font-size: 2rem;
    margin-right: 15px;
  }

  .motto {
    color: $white;
    font-size: 1.3rem;
    font-weight: 300; 
  }

  .copywrite {
    margin-top: 50px;
    text-align: center;

    & p {
      color: $grey;
    }
  }

  @media only screen and (max-width: 1000px) {
    .photo {
      width: 100%;
      height: 400px;
      margin: 0 auto;
    }
  }
</style>
