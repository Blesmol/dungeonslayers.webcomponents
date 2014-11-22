dungeonslayers.webcomponents
============================

HTML-Webkomponenten, um auf einfache Art und Weise Dinge aus dem [Dungenslayers](http://www.dungeonslayers.net/)-Universum auf Webseiten darstellen zu können.

Aktuell wird nur die Erstellung von Monstern und NPCs (oder zusammengefasst: Kreaturen) unterstützt.

Beispielcode:
```
 <ds-kreatur>
   <ds-kreatur-name type="Humanoid">Shekz</ds-kreatur-name>

   <ds-stats stat-koer="3"     stat-agi="5"   stat-gei="7"
             stat-st="0"       stat-be="0"    stat-ve="3+1"
             stat-hae="0+1"    stat-ge="2"    stat-au="3+1"
             stat-hp="7+1"     stat-def="4"   stat-ini="5"
             stat-speed="3,5"  stat-meele="0" stat-ranged="0">
   </ds-stats>

   <ds-bewaffnung>Ast / Messer (WB+0)</ds-bewaffnung>
   <ds-panzerung>Fellflicken (PA+1)</ds-panzerung>

   <ds-gh>2</ds-gh>
   <ds-gk>kl</ds-gk>
   <ds-ep>50</ds-ep>
 </ds-kreatur>
```

English version
===============

Web components to easily create and illustrate various things for the [Dungenslayers RPG system](http://www.dungeonslayers.net/)

A demo can be found [here](https://blesmol.github.io/dungeonslayers.webcomponents/demo.html) (but works only in Chrome at the moment, and the better if you have the WoodStamp font installed locally)
