/* ==========================================================================
   Sumitra Software & Automation — site script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- init scroll animations ---- */
  if (window.AOS) {
    AOS.init({
      duration: 650,
      easing: 'ease-out-quart',
      once: true,
      offset: 60
    });
  }

  /* ---- mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.innerHTML = open
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  /* ---- footer year ---- */
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- contact form ---- */
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        showStatus('err', 'Please fill in your name, email and message before sending.');
        return;
      }
      if (!emailPattern.test(email)) {
        showStatus('err', 'That email address doesn\'t look right — please double-check it.');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      /* --------------------------------------------------------------------
         This site has no backend. To connect this form to real email
         delivery, wire up EmailJS (https://www.emailjs.com) here:

         emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
           from_name: name,
           from_email: email,
           phone: form.phone.value.trim(),
           subject: form.subject.value.trim(),
           message: message
         }, 'YOUR_PUBLIC_KEY').then(...);

         Until that's configured, the form confirms receipt locally and
         opens a pre-filled email as a reliable fallback.
      -------------------------------------------------------------------- */

      setTimeout(function () {
        var subject = encodeURIComponent(form.subject.value.trim() || 'Website enquiry — ' + name);
        var bodyLines = [
          'Name: ' + name,
          'Email: ' + email,
          'Phone: ' + (form.phone.value.trim() || '—'),
          '',
          message
        ];
        var body = encodeURIComponent(bodyLines.join('\n'));
        var mailtoLink = 'mailto:info@sumitrasoftware.com.np?subject=' + subject + '&body=' + body;

        showStatus('ok', 'Thanks, ' + name.split(' ')[0] + ' — your message is ready to send. Your email client should now be opening; if it doesn\'t, email us directly at info@sumitrasoftware.com.np.');

        var mailWindow = document.createElement('a');
        mailWindow.href = mailtoLink;
        mailWindow.click();

        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        form.reset();
      }, 600);
    });

    function showStatus(type, text) {
      status.textContent = text;
      status.className = 'form-status show ' + type;
    }
  }

});
