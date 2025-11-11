# Trabajo Práctico Grupal 2
### Desarrollo de sistemas web (front End)
### Instituto de Formación Técnica Superior N° 29
---

### Estructura del proyecto: 
<details>
  <summary>Click para expandir/colapsar estructura</summary>
  
    src/
    ├── App.css
    ├── App.jsx
    ├── assets
    │   └── img
    │       ├── carlina.png
    │       ├── chikis.jpg
    │       ├── cropped-Designer.jpeg
    │       ├── gonzalo-profile.jpg
    │       ├── kity.jpeg
    │       ├── lean_bg.jpg
    │       ├── logo_ba__buenos_aires_ciudad.png
    │       ├── pexels-bibekghosh-14553705.jpg
    │       ├── pexels-markusspiske-2764993.jpg
    │       └── test.jpg
    ├── Bitacora
    │   ├── Article.jsx
    │   ├── bitacora.css
    │   └── reuniones.json
    ├── components
    │   ├── ClimaPreview.jsx
    │   ├── Footer.jsx
    │   ├── Ifts.jsx
    │   ├── Img.jsx
    │   ├── MovieCard.jsx
    │   ├── Navbar.jsx
    │   ├── NoticiasPreview.jsx
    │   ├── Sidebar.jsx
    │   └── ToggleButton.jsx
    ├── erika
    │   ├── About.jsx
    │   ├── Actions.jsx
    │   ├── Contact.jsx
    │   ├── data.js
    │   ├── erika.css
    │   ├── Favorites.jsx
    │   ├── Music.jsx
    │   ├── Nav.jsx
    │   └── Skills.jsx
    ├── gonza
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── data.js
    │   ├── gonza.css
    │   ├── Hero.jsx
    │   ├── Movies.jsx
    │   ├── Music.jsx
    │   ├── Nav.jsx
    │   └── Skills.jsx
    ├── index.css
    ├── lean
    │   ├── About.jsx
    │   ├── Card.jsx
    │   ├── habilidades.json
    │   ├── Info.jsx
    │   ├── lean.css
    │   ├── Musica.jsx
    │   ├── Peliculas.jsx
    │   └── resources
    │       └── songs
    │           ├── coldplay.webm
    │           ├── ghost.webm
    │           └── linkinpark.webm
    ├── main.jsx
    ├── mariano
    │   ├── Curiosity.jsx
    │   ├── data.js
    │   ├── Hero.jsx
    │   ├── Interests.jsx
    │   ├── mariano.css
    │   ├── Nav.jsx
    │   ├── Philosophy.jsx
    │   ├── Quote.jsx
    │   └── Skills.jsx
    ├── pages
    │   ├── apiSections.css
    │   ├── Bitacora.jsx
    │   ├── Clima.jsx
    │   ├── Diagrama.jsx
    │   ├── Diagram.drawio.svg
    │   ├── Erika.jsx
    │   ├── Gonza.jsx
    │   ├── Home.jsx
    │   ├── Layout.jsx
    │   ├── Lean.jsx
    │   ├── Mariano.jsx
    │   ├── Noticias.jsx
    │   ├── Peliculas.jsx
    │   ├── RenderDiagram.drawio.html
    ├── portada
    │   ├── Card.jsx
    │   ├── Integrantes.jsx
    │   ├── portada.css
    │   └── Welcome.jsx
    └── seccionPeliculas
        ├── data.json
        └── peliculas.css
    
</details>

---

### Flujo de componentes: 

<details>

<summary>Click para expandir/colapsar flujo</summary>

![Flujo de componentes](./src/pages/Diagram.drawio.svg)


[Link al diagrama](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%221xXQZYzDkBPVSXY3quA3%22%3E7V1bc9q4Hv80zJzzkIwl3x9TWtrOJi07PTM9fdpxwAFvHMQaQ5J%2B%2BpXBcrDkGDnIuhDy0GJjG%2FhffvrfNbCHD0%2Bfs2g5v0HTOB1Aa%2Fo0sD8OIASeY%2BH%2FijPPuzOOB3YnZlkyLS96OfEj%2BR2XJ8v7ZutkGq9qF%2BYIpXmyrJ%2BcoMUinuS1c1GWocf6ZXcorX%2FqMprFzIkfkyhlz%2F5Mpvl8dzaA%2Fsv5L3Eym5NPBl64e%2Bc2mtzPMrRelJ83gPbd9m%2F39kNEnlX%2B0NU8mqLHvVP2p4E9zBDKd68enoZxWtCWkG133%2BiVd6vvncWLnOcGx81%2Ff%2F%2Fnz19fv32%2BWI9%2B3v7zfTy7sMvvlj8TesRTTJ7yEGX5HM3QIko%2FvZz9sP3NcfFUCx%2B9XHON0BKfBPjk33GeP5e8jtY5wqfm%2BUNavou%2FcPb8%2F%2BL%2BS5cc%2Fioftz34%2BFQ7eq6OplcFx%2FHhAi3i3ZlRkqbl%2ByxFSiKt0DqbxC1kIIIXZbM4b7kO7q4raLT3ASW9P8foIcbfF1%2BQxWmUJ5u6iEWlpM6q6164hV%2BUDOvAPPLgTZSuy4%2FCP30aZ6tGrl5Ht1h3a5yI0mS2wK8nmGJxhk9s4ixPsHJclW88JNPpjunxKvkd3W6fV9B6iZJFvv1B7oeB%2B7GR%2Bm0SV3xQ%2FDRo0PDyQ2paUiNuedeFdWm5RBlL8CEM4qZ%2F%2BfRx8Wv2LkF3dyssCDSDqi%2Fxdp6xLBtAL8UE%2BzBNNvjlrHh5tVxe%2Fr16Iu%2FgD9p7k%2BHtiz4WLH2cJ3n8Yxlt5f0RY3ad46%2FqCMOQVwlve1aN6IAg3OMefpan5nvQSVYK4XrgnkFsD5wOgpgjGsS2t%2BIfFT3vXVACBKtjT0Qa6lIEPWr5oq4HrZfjF7svIFZZAwMB1hUJsAG0TQPYUA0aqNZqz0it9tuv70etyXpllFoTuT5er61LvIR7dbLrrtWQx2y6jp7ROjfIcoKWYsuJLKrv3XRyOEE21AJkKVPIdtox9gK039CT7eSZCLJkZRABsj4ANbID3UGWfN9TMZ14tToQrdXHYTI0CZP7545vIuYCWwXk%2BiZCLjHtBEAu8D3KXdUecx2GZT%2BSaXwbZTszVrHBekGJcWWdqjJYbUUGa%2FsSNY1W84orxcE4yrH%2BFAqD1xYrOAonPU6cJJEaxUDpBd2QEvoKkNLW0tLRQ4z0CA93FSOn%2FfqexEiRqWaCGLlGipGrRIwUZeFNECM9wtpdxSj0VIiRo0aM%2Bgnm6SF%2BejifXcUPOI4K%2BVOUhzdBjoSHmOTY5paKyLHtn3Gsm%2FwJFit2OaPlxg0vw%2F2%2F%2BgN36lA%2B40VaFC%2B6h6%2BXkXv2FZUnmCvch8FVj6xcZ3B13X7B9ebXdfAAN9H32XK8AH%2BM%2F%2FLTDSGqXPHjEBO%2BLBDFYmFy1UgqM6TICxVI0ftcoaVKHzRC%2BgKowEBkKwu%2Br%2FO0zM%2BoTJd4lNulPF3CJgS%2FRRtdkks0cHmKicUW%2B%2F4PzWZp%2FGGd52ihBckuaL%2B%2BgWbAkkm0kCHa17t8pQexAG1gqZYwR8tA79vXMpJyPGii28JN9OP4cFKRUgn8Ixqh2MWic8UO3fJIJwVB6%2FX92MaAdLhpVIXDXVzDUbCzU57XURdLN6AqHw0owzn3kHVEdD0i2l0RAdr9IkKzcJlYCu0I6yOzLmEQQKGAUFl4TlC%2Fp0eEMLG4UhwTC1i3Q6fGRSiGiSHsgYfNS7Oisq8%2BUV5IUKoJ9hspGJoA8sBRYfbB9yhbwlONkErKVQ2l5BE7WWaSiw2dqPXn0E69oCQlI5tWt3LXgy6MAnsFsh5MQ7flF%2Fw5ffVarvIM3cdDlCK8Tn5Mi9DMxTTK7v8zwAbc9m8A8W%2BzR6MAv%2F6vmHgRbRsqDxe5pxYu4m35cWEj%2FqgKF7lKkqZ70O7r4h3yMlCTeBFdFH4QbFV4h66JjgVRCSGOBQTArdH9SMdCwjgCtm2rYYX8kOTRBGWR6lUysEYjYaskU1qqepX0FAXzewNZl3eV1Ktv2dOy%2FFcGH%2FRKbnmKrBXlfPD0aICkW4gOGR2%2B5bZd31MZ6jnf0U24fD3aIjsLV%2Fv1PQmXifkOX2ioPLDrA7b0n5vnm%2BiGCGWa5YTa56l9EydSiuNSkYTytWcSWVQOTKuLo4Vqz9DCnuFoJMgzdHXzDEnS%2BWQsYd6OmECP8BvdYHXIWAlcBZZwcGrhA24hEe4uHaes5yB7RwZq4pJ01nJLgUtSFcUbZTgFIqPslkvuNcYnIfb4u8PmUPgCflyTx7s1pPRoLe4KscBqv6EfjA1PLQHALSV6TInpLCW2isgzsNjcqf4rcSgwhOFRxdD6L8OqTXPTLPPQTMscQKgEEDRsmDoMCMJM8yJbYFj5S3hS8x9kWAh6dEt1BgS6g1oSIJDQs1GAQPJnInx1G9D5Q%2B2THsCC75pr29RUWGOa9jyDbKK%2BIVH1KUvuldcwFnkqYTWMIT21RnWmqiqAPRnf2edcGYElfIbhkbuvmGiNVvIjJlIMCRH0hS4Azk5pV00THqY6EvPOXkRXDupV8Q3I%2FrhnDvJyEAhP7LzJEWQGhB%2F0BN32vtWePEFVm%2FmaK2CWHhmr7gJGz06UI2AVB84Cxotg0FAB80MVwW0IzwLWUcD0SJ50F7BARa8FgCbW7VdqISSfGpJFT193tYFLDZG2z2jxW3mkzbI8bzgUFGkDjqVbqO20thc5ApEDXkQWv8HCkRw8u50dOUj2u9SGg2e%2FrisH9QgcMDtCHRy4CcJjb5CydTZZb84SyS2Reuzw2V0iYXtRA8cNciTy7Dl2lUg9BkB0l0hHSSGua2IvcaUWIjxH33PqLTHaV2yA89YFnVFBj3hSd1SwVUyjA66JwzsqtRBS%2F%2BB5vmEFucDIIYICuWZdQjcMakwzoGTSUeQGqwdl8RsiHxeQIBNnz93n3CzUJE%2FTeV0FoZIGdJcdCmMAQhO9EIHQjkcaJY1pQIesi3QTZUm0QMfvcMebjxkOLXEzzkFI1fGoz8e458jbTtZCXuR1NCuZJgNQDYM2MhFEALQBj4xIMCaQ4J4rn7qqnW426zkU1JGDriYBYrdrBoLel1uOyUpMA8NwXWRQwQL1oIL%2BFiu7FjcUGo3jNJms02jVV7GRAFMVukAzU9VmvYGfcTpBZB8kGd6A0B2PXku1q9sgW0lA7O1Lj8279GhmO7gmIjsRDjEd9jakwsXaQ7vNQvtXTPxZFuF%2FV4ZCEKQtG%2BUQxKrGCCEs4zIJLHAqs003biknMLuKDqNseiLy60LF5K0itq0G4FUB1qny%2FRvF7kxFT7dRLekNBTYNrPj6MFPNBrFj4F%2BplttngyuTDd652HgnjrzGqie8WvxNYRK6I9Q9sLWu67Ve30%2BQxGfhVn9L2hNpSQOfTutpH%2FwmJtGp1F3wazY0UrP99ut70mwTBwERyRYR%2FLR8skWEOYp9Tmp1BAThbUXHWcxc0eurW7TOT8pm9ugapgab2ZNqM7NRkJv1CmOXPDe9VwIrd9OJja0sCiLW54O6kZc1y6mcl3E09i3daMwaSE3hjcUdOi2s5ohYS41vkH2gTiViTVv7yuN4AbsYfos2cqkrLEoa0F1FqsU34IIRLWw%2BsYzgSL5LtfkCrhk1V5M8QYveCkeUsAJAjiSZL5UXXKmDrUl%2BWpwAUDet4HJJR9EGZUmVhj8Vblgci4XUpThkl%2BIf90maSi1%2FEDmJniNnKVXcQ9aYbBD3IVrk0eS01mPAUw0ndRGoZuOrMjzFjoKzdUsMVxPR9%2Bj7Jc4k9nYJnrXHEUWUTGAuM0YL214wKzgMSqm4Xg2GNsCiFMsK7WLr1RB4hUaMWBK7HBEbySRmw%2BtN0o42iXqTXbC4c4Qn5VoxZGK4ESalWGb4HOa9ZGacWLAYBLpFi6sIhrIiBMcOB%2FtlCJdYqAeHShHw0TjOEkyDolRFn2nwetQivmG7AfLN5U6DN3Fz7UpjhNQjFsn%2BGuX17%2BwBDRsxviu2WZeeTQKtBnGN9W6lhmcET4bRLTFYzZ1XFp4RTGCO%2BKJcAhOOK3REhZIYMvtVK3dEbdYRHc%2BTFK3Qcv5sKpktDjKHcsnMFhEM11mCVkluLJV5OjflOo82a13%2BucbOo7EUpicBqocLdkpg0eONbbbcWFCGHCl9uXLssOb2NhQouw9ZYBwE%2F1LdMLmh0dvoUBNXZ6vk2Ynssmc2iZldQCWS%2BObXdfAAN9H32XK8AH%2BM%2F%2FLTzQVrvg3T5EFAG8QrpGkgYAu1KIGUOSGpkVqqJ9L1MUWZijweDHg2EqYMZvCOqJMd3oQBvUYfmkjnd93NgLlB8CY6jWTXcIcT7mBZXdBeV7e2WCjZV0aLIFqbYrTnBr8hTPOk72l1x2GxH2iGxa4aLJYGqULyQA2jNl%2BL0pFn7DC8vE28QrAxTyL94yzGPsqjukFJRykIRzCjKoyRY9mxwc%2BtaWc2mS84DGhgiaEzPsywt7Ev%2F5gI8xs0LZbRT%2F8C%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

</details>

---

## Integrantes Grupo 14:

* Leandro Ezequiel Aballone
* Erika Johana Cruz Vallejo
* Mariano Fabian Gonzalez
* Gonzalo Villafañe
