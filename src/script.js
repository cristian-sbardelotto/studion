$(document).ready(() => {
  const slickOptions = {
    dots: false,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
    nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>'
  };
  $('.slider').slick(slickOptions);

  $('.footer__form-button').on('click', () => {
    const email = $('#email').val();
    email.send({
      Host: "smtp.yourisp.com",
      Username: "username",
      Password: "password",
      To: 'them@website.com',
      From: "you@isp.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then(
      message => alert(message)
    );
  });
});