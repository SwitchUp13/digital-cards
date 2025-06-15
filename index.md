---
layout: layout.njk
title: Jack Gibbs
---

# Welcome to my Digital Card!

[Go to my full card →](./site-john/)

<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <!-- Honeypot field to prevent spam -->
  <input type="hidden" name="form-name" value="contact" />
  <p style="display:none;">
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>

  <p>
    <label>Your Name: <input type="text" name="name" required /></label>
  </p>

  <p>
    <label>Your Email: <input type="email" name="email" required /></label>
  </p>

  <p>
    <label>Message: <textarea name="message" required></textarea></label>
  </p>

  <p>
    <button type="submit">Send</button>
  </p>
</form>
