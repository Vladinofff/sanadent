// ====================================================
// RECENZII GOOGLE - SanaDent
// ====================================================
// Cum completezi:
// 1. Mergi pe Google Maps, caută clinica SanaDent
// 2. Copiază datele de mai jos cu cele reale
// 3. Pentru fiecare recenzie nouă, copiază un bloc întreg și modifică

export const googleStats = {
  // Rating-ul general afișat pe Google Maps (ex: 4.9)
  rating: 4.9,

  // Numărul total de recenzii (ex: 247)
  totalReviews: 79,

  // Link-ul către pagina Google Maps a clinicii
  // Cum îl obții: pe Google Maps → click pe clinică → buton "Share" → copiază link
  googleMapsUrl: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x40b1f8cde38a5863:0xd667c363a26c48a3?sa=X&ved=1t:8290&hl=ro-RO&ictx=111',
}

// ====================================================
// LISTA DE RECENZII
// ====================================================
// Pentru fiecare recenzie ai nevoie de:
//   - id: număr unic (1, 2, 3...)
//   - name: numele persoanei (ex: "Maria Popescu")
//   - initials: inițialele (ex: "MP" - apar în avatar dacă nu există poză)
//   - date: când a fost lăsată (ex: "acum 2 săptămâni")
//   - rating: numărul de stele (de obicei 5)
//   - text: textul recenziei

export const reviews = [
  {
    id: 1,
    name: 'Rodica Manole',
    initials: 'RM',
    date: 'acum 2 ani',
    rating: 5,
    text:`
    Subscriu la tot ceea ce s-a scris anterior despre clinică și echipă.
Am ajuns la Sanadent absolut din întâmplare, fără recomandări; pur și simplu aveam nevoie de un ortodont care să mă scape de durerile de fălci și să îmi redea ocluzia (diagnosticul primit a fost de subluxație temporo-mandibulară, nu mai putem închide bine gura). A fost suficient un telefon, iar specialiștii de acolo au discutat cazul meu, mi-au dat sfaturi și m-au îndrumat ce fel de radiografii să fac, mi-au transmis o rețetă pentru un analgezic+antiinflamator, mi-au dat sfaturi despre alimentație...
Asta fără să mă fi văzut, fără să fi plătit măcar o consultație la clinică. Când în sfârșit ne-am cunoscut la sediul clinicii, am fost întâmpinată cu prietenie și căldură.
Și încă ceva important: ora programărilor se respectă. (Plus-minus 5-10 minute, ceea ce e firesc.) Dar la Sanadent nu am fost pusă niciodată în ipostaza de a aștepta 30-60 de minute peste ora programată, așa cum mi s-a întâmplat în alte clinici (la fel de moderne, dar orientate mai degrabă spre business decât către pacienți). ` ,
  },
  {
    id: 2,
    name: 'Dinica Ioana Alexandra',
    initials: 'DA',
    date: 'acum 2 ani',
    rating: 5,
    text: `
    Acum un an eram in cautarea unei clinici de stomatologie pentru a rezolva niste probleme mult amanate. Motivul – frica de dentist, pe care multe persoane o au. Am ajuns la Sanadent, pe baza unei recomandari si am descoperit-o pe doamna doctor Meda Serban, un profesionist empatic, cald si calm. A fost exact ce aveam nevoie – cineva care sa imi inteleaga teama, care sa imi explice pasii tratamentului, care sa imi raspunda intrebarilor, care sa ma incurajeze si care m-a facut sa continui si sa revin, programare dupa programare. Un an mai tarziu, cu mai multe proceduri realizate si in plin tratament ortodontic, am ajuns sa vin la clinica cu pulsul normal, chiar cu zambetul pe buze. Teama s-a diminuat substantial pentru ca stiu ca am alaturi o echipa de profesionisti, care pun pacientii pe primul plan. Multumesc Meda, multumesc intregii echipe Sanadent.`
    ,
  },
  {
    id: 3,
    name: 'Ana Maria Paduretu',
    initials: 'AP',
    date: 'acum 2 ani',
    rating: 5,
    text: `
    Recomand cu incredere Sanadent, in cei ani aproape 8 ani de cand ne cunoastem mi-au demonstrat ca orice problema stomatologica are rezolvare cand ajungi in locul potrivit.
O echipa de profesionisti, de oameni dedicati care gasesc cele mai bune solutii pentru pacient.
De la prima vizita m-au primit cu zambetul pe buze, mi-au oferit siguranta ca isi fac treaba prin modul lor deschis de a dialoga si a prezenta orice procedura si plan de tratament.
Un grup de oameni de 5 stele, care creeaza un mediu cald, linistit, unde am ajuns sa ma simt ca intre prieteni si dupa fiecare vizita plec cu cel mai larg zambet!
Multumiri intregii echipe si in special Dr. Meda Serban, Dr. Andreea Solomon si Dr. Mircea Baldea`
    ,
  },
  {
    id: 4,
    name: 'Ioan Cernescu',
    initials: 'IC',
    date: 'acum 1 an',
    rating: 5,
    text: `
    Bună ziua
Mulțumesc mult dr, MEDA SERBAN pentru profesionalism
să fie măcar un secol cu noi că avem nevoie de oameni ca ea.
Mulțumesc`
    ,
  },
  {
    id: 5,
    name: 'Cristian Dinu',
    initials: 'CD',
    date: 'acum 2 ani ',
    rating: 5,
    text: `
    O echipa profesionista care m-a ajutat rapid sa scap de frica de stomatolog. Am revenit increzator de fiecare data si am plecat cu zambetul pe buze. Bravo voua!`
    ,
  },
  {
    id: 6,
    name: 'Florin Calin',
    initials: 'FC',
    date: 'acum 3 ani',
    rating: 5,
    text: `
    Recomand cu incredere echipa Sanadent: profesionisti, amabili, mereu zambitori! Precum si calitatea serviciilor oferite de clinica.
    `,
  },
]

// ====================================================
// CUM ADAUGI O RECENZIE NOUĂ:
// ====================================================
// Copiază blocul de la id: 6, lipește-l jos, schimbă id-ul la 7
// și completează cu datele reale.
//
// Pentru rating diferit de 5, schimbă "rating: 5" la 4 sau 3.
// Recomand să afișezi doar recenzii de 4-5 stele pe site.