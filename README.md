# Lekker Anders

Deze website is ontwikkeld als een startup-website voor een nieuwe onderneming. De website is op gebouwd in een raster (een zogenaamd grid).
Om de grid te ondersteunen bij het soepel bewegen van het ene pagina-onderdeel naar het andere worden een aantal
libraries (Jquery) aangesproken. Dit is gedaan om de pagina makkelijker in te delen en de illusie te creëeren dat de pagina, 
een enorme pagina is. Een pagina die aan de hand van de navigatiebalk speels beweegt om naar het deel dat de gebruiker wil bekijken te gaan.
Om lettertypes te ondersteunen worden enkele  libraries (Google-fonts & Fontawesome) aangesproken.


---
### Navigatiebalk

De website bevat aan de linkerkant een navigatiebalk. De iconen hierin zijn wit wanneer ze ongebruikt zijn. Zodra de cursor van de muis erover wordt bewogen veranderd de kleur van de iconen naar pastelgroen. De kleur van een icoon veranderd in flessengroen wanneer de gebruiker zich bevindt op de desbetreffende pagina. Deze navigatiebalk bevindt zich altijd aan de linkerkant op de webpagina. De iconen zijn van boven naar beneden geplaatst. Er is een kleine stukje Javascript met de naam: navbar highlight.js. Hierin staat, zoals de titel al wel aangeeft een highlight instelling.

---
### Social Media buttons

Knoppen voor Social Media zijn bovenin aan de rechterzijde van de webpagina geplaatst. Deze zijn eveneens van boven naar 
beneden neergezet. Welke vormen van social media er door de ondernemening ook worden gebruikt, hier kan worden gelinkt naar Social Media pagina's. De knoppen zullen op elke pagina zichtbaar zijn. 

---
### Sublogo animatie

Gekoppeld aan het logo op de homepage (en mogelijke meerdere pagina's) is een geanimeerd sublogo. Deze start links op de 
pagina (ter hoogte van het tweede icon van de navigatiebalk) en beweegt zich horizontaal en draaiend naar de rechterkant van het bedrijfslogo en komt daar tot stilstand.
De animatie heeft een eigen javascript file genaamd sublogo.js. In dit bestand staat onder andere:
- Translate - (Regelt de afstand die het sublogo aflegt. Dit gebeurt in percentages zodat op ieder scherm de verhouding responsive blijft.) 
- Degrees - (Regelt het aantal rotaties dat het sublogo maakt om de afstand naar de rechterkant van het logo af te leggen.)

Momenteel is het sublogo aanpasbaar om per week extra aandacht voor de kok van dienst te genereren. Mogelijk passen we het sublogo ook toe op de overige pagina's. Het is mogelijk, in de toekomst, om het sublogo te koppelen aan de agenda.

---
### Fotocarousel (Slideshow)

De fotocarrousel (slideshow) die op de startpagina wordt getoond, is gevuld met klikbare foto's die, wanneer er op een foto wordt geklikt naar de juiste pagina's gaan.
De fotocarrousel heeft zijn eigen JavaScript-bestand genaamd: carousel.js en ook zijn eigen CSS-bestand genaamd carousel.css. In het JavaScript-bestand staat op regel 506 de autoplay beschreven met het genoemde getal 3000. Dit staat voor 3 seconden voor een wisseling van foto. Wanneer een langzamere autoplay of snellere autoplay gewenst is past men het getal aan.

---  
### Events
Om eigen facebook events te gebruiken op de site zal in facebookevents.php de file_get_contents moeten worden gewijzigd.

```
Dit kan door naar facebook te gaan en dan naar de facebook pagina
(bijvoorbeeld https://www.facebook.com/Lekker-andersss-160487437900700/)
en de code achter Lekker-andersss- te kopiëren en in file_get_contents te wijzigen
https://graph.facebook.com/160487437900700/events?access_token=1633445220011171|4b55bd7e097dfb8b1523f3c50c3ef13e");
```
---
### Home-page (Startpagina)

Wanneer je de website bezoekt start je  allereerst op de Home-page. Dit gebeurt door middel van een heel klein stukje JavaScript met de naam first page.js. De fotocarousel bevindt zich in het midden, de navigatie-balk aan de linkerkant en de Social Media knoppen aan de rechterkant van de webpagina. De evenementenkalender bevindt zich rechtsonder in de Home-page.
De sub-logo animatie speelt direct en eenmalig.

---
### Barista

Op deze pagina vind je een lokkertje voor de onderdelen barista, de high tea en de lunch. De  navigatie-balk en knoppen voor de Social Media bevinden zich ook op deze pagina.

---
### Koks

Alle koks en cateraars die gaan koken in het restaurant van deze ondernemer staan op deze pagina zodat alle geïnteresseerde bezoekers kunnen kijken wat het aanbod van desbetreffende ondernemer/kok is. Het overzichtje is grafisch gemaakt door de foto's van de kok's over de pagina te verspreiden. Een korte samenvatting over de desbetreffende persoon komt met een pop-up omhoog op het moment dat je er met de cursor van de muis overheen bewogen wordt. De foto's met potretten of logo's van de koks of cateraars zijn klikbaar zodat je door gestuurd word naar de webpagina of facebook van de persoon of het bedrijf in kwestie.

---
### Ons aanbod

Hier vindt de bezoeker van de Lekker Anders webpagina informatie over wat Lekker Anders te bieden heeft, een teaser om bezoekers te verleiden meer te willen weten en bij het restaurant te willen reseveren.

---
### Over ons

Over ons is een informatieve pagina waar men het verhaal achter de onderneming komt te weten.

---
### Reserveren en Contact
Om te reserveren en het contactformulier te gebruiken heeft deze site een database nodig. 
In Mysql staat de database van de site, deze zal moeten worden geïmporteerd.

---
### Agenda

Wanneer de bezoeker deze pagina bezoekt kan hij of zij informatie krijgen over wat er gaande is en/of gaat komen bij Lekker Anders door middel van facebook.
(Het sub-logo zal, indien goed gekopeld, door deze informatie ook moeten veranderen.)
