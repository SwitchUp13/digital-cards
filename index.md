---
layout: layout.njk
title: Home
---

<h1>Clients</h1>
<ul>
  {% for client in collections.clients %}
    <li>
      <a href="/clients/{{ client.fileSlug }}/">{{ client.data.businessName }}</a>
    </li>
  {% endfor %}
</ul>


