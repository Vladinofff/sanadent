// Categoriile pentru lista interactivă de doctori de pe homepage
// Trebuie să corespundă cu specializările (tratamentele) clinicii

export const categories = [
  { id: 'fondatori', label: 'Fondatori' },
  { id: 'implantologie', label: 'Implantologie' },
  { id: 'chirurgie', label: 'Chirurgie' },
  { id: 'profilaxie', label: 'Profilaxie' },
  { id: 'restaurare-coronara', label: 'Restaurare Coronară' },
  { id: 'endodontie', label: 'Endodonție' },
  { id: 'parodontologie', label: 'Parodontologie' },
  { id: 'estetica-dentara', label: 'Estetică Dentară' },
  { id: 'protetica', label: 'Protetică' },
  { id: 'ortodontie', label: 'Ortodonție' },
  { id: 'pedodontie', label: 'Pedodonție' },
]

// Pentru fiecare categorie poți adăuga câți doctori vrei.
// Câmpuri:
//   id: identificator unic
//   name: numele complet
//   role: titulatura (ex: "Medic Primar", "Specialist Implantologie")
//   photo: calea către poză (pune poza în public/doctors/ și referă cu /doctors/numefisier.jpg)
//   shortDesc: descriere scurtă pentru cardul din homepage
//   fullDesc: descriere extinsă pentru pagina dedicată

export const doctors = {
  fondatori: [
    {
      id: 'dr-meda-serban',
      name: 'Dr. Meda Serban',
      role: 'Fondator · Medic Dentist · Specialist Parodontologie ',
      photo: '/meda.jpg',
      shortDesc: '',
      fullDesc: `
2003 – 2009 Facultatea de Medicina Dentara UMF Carol Davila / Bucuresti

2010 – 2013 Rezidentiat Medic Specialist Parodontologie UMF Carol Davila / Bucuresti

Cursuri și specializări:

Master Course In Regenerative and Esthetic Periodontal Therapy - Prof Dr hc Anton Sculean (Elveția)

Congres International EuroPerio – Prof Dr hc Anton Sculean, Prof Dr Giovanni Zucchelli, Dr Otto Zuhr

Congresul international UNAS – Prof Dr Alexandru Petre

Conferinta Nationala de Parodontologie – Prof Dr Alexandru Petre

Principii de baza in chirurgia gingivo-osoasa – Prof Dr Andre Saadoun

Curriculum Stiintific de Parodontologie – Prof Dr hc Anton Sculean

Repere moderne in tratamentul chirurgical – Prof Dr Mosche Goldstein

Aspecte Contemporane in Stomatologia Restaurativa – Dr Domenico Ricucci

Simpozion Perio-Transylvania – Prof Dr hc Anton Sculean, Stavropoulos, Kantarci

Curs de Reabilitare Estetica Complexa – Massironi, Conti

Curs de Ocluzologie – Prof Dr Meyer

Curs de Endodontie Clinica – Castellucci

Curs Chirurgie Estetica Muco-Gingivala – Zucchelli

Conceptul MI – Prof Dr John Marton

Principiile Protezarii pe Implanturi – Prof Dr Alexandru Petre

Curs Restaurari Estetice – Dr Alessandro Conti
`
    },
  ],
  implantologie: [
    {
      id: 'dr-mircea-baldea',
      name: 'Dr. Mircea Baldea',
      role: 'Medic Dentist · Specialist Chirurgie Orala si maxilo-faciala, Implantologie',
      photo: '/mircea.jpg',
      shortDesc: 'Descrierea celui de-al doilea fondator — câteva fraze despre carieră și pasiunea pentru stomatologie.',
      fullDesc: `
2008-2014  Facultatea de Medicina UMF Carol Davila /Bucuresti

2011-2016 Rezidentiat Chirurgie Orala si Maxilo-Faciala, Spitalul de Chirurgie OMF "Prof Dr Dan Theodorescu" Bucuresti

„Variante anatomice ale reperelor chirurgicale endoscopice rino-sinusale", publicata  Ed. Junimea 2013, ISBN 978-973-37-1697-6 – (Coautor)

„The anatomo-radiological study of unusual extrasinusal pneumatizations : superior and supreme turbinate, crista galli process, uncinate process." – Rom J Morphol Embryol. 2014;55(3 Suppl):1099-104. – PMID: 25607391 – (Coautor)

Membru activ al MegaGen International Network of Education & Clinical Research Romania

Membru al Comisiei de Disciplina a Colegiului Medicilor Dentisti Buzau

Membru al ICOI (International Congress of Oral Implantologist)

Membru al EAO (International Association for Osseointegration)

congerese ,cursuri, workshopuri

„Ortognatic surgery course – from planning to optimal outcome" Dr Giuseppe Salvato  (2016)

„Chirurgie endoscopica ORL" Centru de Excelenta in chirurgie endoscopica ORL , Sp Clinic Sf Maria ,Bucuresti , Prof Dr Codrut Sarafoleanu

„International Symposium balkanian bone & tissue days"

„The use of Allograft bone struts for ideal GBR Results" Dr Howard Gluckman"

„Soft Tissue Plastic Surgery in the Aestetic Areas of the Mouth: management of Gingivat Defects Around Teeth and Implants" Prof Dr Giovanni Zucchelli

„New Approach in Implant Dentistry"

„Sinus Lifting – indicatii si tratament" dr. Lucian Chirila

„Orthognatic Surgery with dr Johan Reyneke",

„Balkan Congress of OtoRhinoLaringology and Head and Neck Surgery" Targu-Mures,

„Legislatie romaneasca a CMDR in concordanta cu cea europeana"

„Al X lea congres al Societatii Romane de Chirurgie Orala si Maxilo-Faciala"

„Surgery of the midface, Congenital Malformations and Facial Deformities"

„Trauma of the middle third of the face & complications and failures in dental implants"

„Up to date in parodontologie" – Prof Dr Anton Sculean 
`
    },
    {
      id: 'dr-iulian-filipov',
      name: 'Dr. Iulian Filipov',
      role: 'Medic Specialist Chirurgie Oro-Maxilo-Faciala · Implantologie',
      photo: '/iulian.jpg',
      shortDesc: 'Specialist în chirurgie oro-maxilo-faciala, implantologie și estetică dentară.',
      fullDesc: `
Absolvent al Facultatii de Medicina Dentara din cadrul UMF Carol Davila Bucuresti

Absolvent al Facultatii de Medicina Generala din cadrul UMF Carol Davila Bucuresti

Membru activ MINEC (MegaGen International Network for Education and Clinical research)

Membru DGOI (Deutsche Gesellshaft für Orale Implantologie)

Activitatea desfasurata cuprinde notiuni de actualitate legate de chirurgie OMF, implantologie si estetica dentara, insotite de aplicare practica a tehnicilor moderne din aceste domenii.

Distincții și participări:

Diploma for participation at poster competition – The International Young researchers congress (Timisoara, Romania, 2005)

1st prize award – The International Congress for Young dentists (Timisoara, Romania, 2006)

Congresul international de estetica dentara — Mai 2011

MegaGen European Scientific meeting participation (Bucharest, Romania 2012)

Diploma for participation at Poster competition — 9th Annual MegaGen International Symposium (JeJu island, Korea 2012)

New approach in implant dentistry — Decembrie 2013, Bucuresti

The 10'th Annual Megagen International Symposium — Noiembrie 2013, Bangkok
`
    },
  ],
  chirurgie: [
    {
      id: 'dr-mircea-baldea',
      name: 'Dr. Mircea Baldea',
      role: 'Medic Dentist · Specialist Chirurgie Orala si maxilo-faciala, Implantologie',
      photo: '/mircea.jpg',
      shortDesc: 'Descrierea celui de-al doilea fondator — câteva fraze despre carieră și pasiunea pentru stomatologie.',
      fullDesc: `
2008-2014  Facultatea de Medicina UMF Carol Davila /Bucuresti

2011-2016 Rezidentiat Chirurgie Orala si Maxilo-Faciala, Spitalul de Chirurgie OMF "Prof Dr Dan Theodorescu" Bucuresti

„Variante anatomice ale reperelor chirurgicale endoscopice rino-sinusale", publicata  Ed. Junimea 2013, ISBN 978-973-37-1697-6 – (Coautor)

„The anatomo-radiological study of unusual extrasinusal pneumatizations : superior and supreme turbinate, crista galli process, uncinate process." – Rom J Morphol Embryol. 2014;55(3 Suppl):1099-104. – PMID: 25607391 – (Coautor)

Membru activ al MegaGen International Network of Education & Clinical Research Romania

Membru al Comisiei de Disciplina a Colegiului Medicilor Dentisti Buzau

Membru al ICOI (International Congress of Oral Implantologist)

Membru al EAO (International Association for Osseointegration)

congerese ,cursuri, workshopuri

„Ortognatic surgery course – from planning to optimal outcome" Dr Giuseppe Salvato  (2016)

„Chirurgie endoscopica ORL" Centru de Excelenta in chirurgie endoscopica ORL , Sp Clinic Sf Maria ,Bucuresti , Prof Dr Codrut Sarafoleanu

„International Symposium balkanian bone & tissue days"

„The use of Allograft bone struts for ideal GBR Results" Dr Howard Gluckman"

„Soft Tissue Plastic Surgery in the Aestetic Areas of the Mouth: management of Gingivat Defects Around Teeth and Implants" Prof Dr Giovanni Zucchelli

„New Approach in Implant Dentistry"

„Sinus Lifting – indicatii si tratament" dr. Lucian Chirila

„Orthognatic Surgery with dr Johan Reyneke",

„Balkan Congress of OtoRhinoLaringology and Head and Neck Surgery" Targu-Mures,

„Legislatie romaneasca a CMDR in concordanta cu cea europeana"

„Al X lea congres al Societatii Romane de Chirurgie Orala si Maxilo-Faciala"

„Surgery of the midface, Congenital Malformations and Facial Deformities"

„Trauma of the middle third of the face & complications and failures in dental implants"

„Up to date in parodontologie" – Prof Dr Anton Sculean 
`
    },
    {
      id: 'dr-iulian-filipov',
      name: 'Dr. Iulian Filipov',
      role: 'Medic Specialist Chirurgie Oro-Maxilo-Faciala · Implantologie',
      photo: '/iulian.jpg',
      shortDesc: 'Specialist în chirurgie oro-maxilo-faciala, implantologie și estetică dentară.',
      fullDesc: `
Absolvent al Facultatii de Medicina Dentara din cadrul UMF Carol Davila Bucuresti

Absolvent al Facultatii de Medicina Generala din cadrul UMF Carol Davila Bucuresti

Membru activ MINEC (MegaGen International Network for Education and Clinical research)

Membru DGOI (Deutsche Gesellshaft für Orale Implantologie)

Activitatea desfasurata cuprinde notiuni de actualitate legate de chirurgie OMF, implantologie si estetica dentara, insotite de aplicare practica a tehnicilor moderne din aceste domenii.

Distincții și participări:

Diploma for participation at poster competition – The International Young researchers congress (Timisoara, Romania, 2005)

1st prize award – The International Congress for Young dentists (Timisoara, Romania, 2006)

Congresul international de estetica dentara — Mai 2011

MegaGen European Scientific meeting participation (Bucharest, Romania 2012)

Diploma for participation at Poster competition — 9th Annual MegaGen International Symposium (JeJu island, Korea 2012)

New approach in implant dentistry — Decembrie 2013, Bucuresti

The 10'th Annual Megagen International Symposium — Noiembrie 2013, Bangkok
`
    },
  ],
  profilaxie: [
    {
      id: 'dr-meda-serban',
      name: 'Dr. Meda Serban',
      role: 'Fondator · Medic Dentist · Specialist Parodontologie ',
      photo: '/meda.jpg',
      shortDesc: '',
      fullDesc: `
2003 – 2009 Facultatea de Medicina Dentara UMF Carol Davila / Bucuresti

2010 – 2013 Rezidentiat Medic Specialist Parodontologie UMF Carol Davila / Bucuresti

Cursuri și specializări:

Master Course In Regenerative and Esthetic Periodontal Therapy - Prof Dr hc Anton Sculean (Elveția)

Congres International EuroPerio – Prof Dr hc Anton Sculean, Prof Dr Giovanni Zucchelli, Dr Otto Zuhr

Congresul international UNAS – Prof Dr Alexandru Petre

Conferinta Nationala de Parodontologie – Prof Dr Alexandru Petre

Principii de baza in chirurgia gingivo-osoasa – Prof Dr Andre Saadoun

Curriculum Stiintific de Parodontologie – Prof Dr hc Anton Sculean

Repere moderne in tratamentul chirurgical – Prof Dr Mosche Goldstein

Aspecte Contemporane in Stomatologia Restaurativa – Dr Domenico Ricucci

Simpozion Perio-Transylvania – Prof Dr hc Anton Sculean, Stavropoulos, Kantarci

Curs de Reabilitare Estetica Complexa – Massironi, Conti

Curs de Ocluzologie – Prof Dr Meyer

Curs de Endodontie Clinica – Castellucci

Curs Chirurgie Estetica Muco-Gingivala – Zucchelli

Conceptul MI – Prof Dr John Marton

Principiile Protezarii pe Implanturi – Prof Dr Alexandru Petre

Curs Restaurari Estetice – Dr Alessandro Conti
`
    },
    {
      id: 'dr-bianca-burghel',
      name: 'Dr. Bianca Burghel',
      role: 'Medic Dentist · Stomatologie Generală',
      photo: '/bianca.jpeg',
      shortDesc: 'Stomatologie generală cu accent pe reabilitare orală și tratamente conservative.',
      fullDesc: `
2015-2022 Facultatea de Medicina Dentara UMF Carol Davila/Bucuresti

Cursuri-atestate-supraspecializari:

Cursul "Compozit anterior direct de la A la Z" (teorie si hands-on) – Lector Dr. Cristian Ghita

Simpozionul Asociatiei Medicilor Stomatologi – Actualitati in sfera dento-maxilara

Acordul Pacientului Informat – Comunicarea Medic – Pacient intre inteligenta emotionala si reglementare legala – Prof. Dr. Silviu Mirel Pituru

Curs intensiv de reabilitare orala – Lect. Univ. Dr. Dan Buhatel

Managementul situatiilor clinice ce necesita reabilitarea orala complexa – Prof. Univ. Dr. Norina Forna

Congresul Universitatii de Medicina si Farmacie "Carol Davila" — editia a XI-a – Prof. Dr. Viorel Jinga

Congresul Societatii Romane de Stomatologie – Clasic si modern in stomatologia contemporana
`
    },

  ],
  'restaurare-coronara': [
 {
      id: 'dr-meda-serban',
      name: 'Dr. Meda Serban',
      role: 'Fondator · Medic Dentist · Specialist Parodontologie ',
      photo: '/meda.jpg',
      shortDesc: '',
      fullDesc: `
2003 – 2009 Facultatea de Medicina Dentara UMF Carol Davila / Bucuresti

2010 – 2013 Rezidentiat Medic Specialist Parodontologie UMF Carol Davila / Bucuresti

Cursuri și specializări:

Master Course In Regenerative and Esthetic Periodontal Therapy - Prof Dr hc Anton Sculean (Elveția)

Congres International EuroPerio – Prof Dr hc Anton Sculean, Prof Dr Giovanni Zucchelli, Dr Otto Zuhr

Congresul international UNAS – Prof Dr Alexandru Petre

Conferinta Nationala de Parodontologie – Prof Dr Alexandru Petre

Principii de baza in chirurgia gingivo-osoasa – Prof Dr Andre Saadoun

Curriculum Stiintific de Parodontologie – Prof Dr hc Anton Sculean

Repere moderne in tratamentul chirurgical – Prof Dr Mosche Goldstein

Aspecte Contemporane in Stomatologia Restaurativa – Dr Domenico Ricucci

Simpozion Perio-Transylvania – Prof Dr hc Anton Sculean, Stavropoulos, Kantarci

Curs de Reabilitare Estetica Complexa – Massironi, Conti

Curs de Ocluzologie – Prof Dr Meyer

Curs de Endodontie Clinica – Castellucci

Curs Chirurgie Estetica Muco-Gingivala – Zucchelli

Conceptul MI – Prof Dr John Marton

Principiile Protezarii pe Implanturi – Prof Dr Alexandru Petre

Curs Restaurari Estetice – Dr Alessandro Conti
`
    },

    {
      id: 'dr-bianca-burghel',
      name: 'Dr. Bianca Burghel',
      role: 'Medic Dentist · Stomatologie Generală',
      photo: '/bianca.jpeg',
      shortDesc: 'Stomatologie generală cu accent pe reabilitare orală și tratamente conservative.',
      fullDesc: `
2015-2022 Facultatea de Medicina Dentara UMF Carol Davila/Bucuresti

Cursuri-atestate-supraspecializari:

Cursul "Compozit anterior direct de la A la Z" (teorie si hands-on) – Lector Dr. Cristian Ghita

Simpozionul Asociatiei Medicilor Stomatologi – Actualitati in sfera dento-maxilara

Acordul Pacientului Informat – Comunicarea Medic – Pacient intre inteligenta emotionala si reglementare legala – Prof. Dr. Silviu Mirel Pituru

Curs intensiv de reabilitare orala – Lect. Univ. Dr. Dan Buhatel

Managementul situatiilor clinice ce necesita reabilitarea orala complexa – Prof. Univ. Dr. Norina Forna

Congresul Universitatii de Medicina si Farmacie "Carol Davila" — editia a XI-a – Prof. Dr. Viorel Jinga

Congresul Societatii Romane de Stomatologie – Clasic si modern in stomatologia contemporana
`
    },
  ],
  endodontie: [
    {
      id: 'dr-irina-eftimescu',
      name: 'Dr. Irina Eftimescu',
      role: 'Medic Dentist · Specialist Endodonție',
      photo: '/irina.jpeg',
      shortDesc: 'Specialist în endodonție, cu practică orientată spre tratamente de canal moderne și microscopie dentară.',
      fullDesc: `
STUDII

1998 – 2004: Universitatea Titu Maiorescu, Facultatea de Stomatologie

1993 – 1997: Colegiul Național Ienăchiță Văcărescu, Târgoviște

EXPERIENȚĂ

2013 – prezent: Medic stomatolog cu practică orientată spre endodonție

2004 – 2012: Medic stomatolog stomatologie generală, București

CURSURI ȘI SPECIALIZĂRI

2008 – Endodonția non-chirurgicală și chirurgicală: noi standarde terapeutice — Prof. Arnaldo Castellucci

2013 – Arta și precizia în endodonția modernă, curs modular Cluj-Napoca

2013 – Curs teoretic și practic „The Biological approach of Root canal treatment" — lector: Prof. dr. Philippe Sleiman

2013 – Curs teoretic și practic „Progrese curente în tehnica de condensare verticală la cald" — lector: Dr. L. Stephen Buchanan

2014 – New Technology in Endodontics — curs Arnaldo Castellucci, București

2015 – Curs de endodonție și microscopie dentară — Dr. Domenico Ricucci & Dr. Gabriel Tulus, București

2017 – Diagnosticarea și tratarea perforațiilor rădăcinilor dentare — Leandro Pereira, București

Participare la Endodontic Master Series, București (2015, 2017, 2024)

Congresul Endo Art (2023, Timișoara)

Aspecte biologice în prevenirea și tratamentul afecțiunilor pulpare și periapicale — Domenico Ricucci, 2023
`
    },
  ],
  parodontologie: [
     {
      id: 'dr-meda-serban',
      name: 'Dr. Meda Serban',
      role: 'Fondator · Medic Dentist · Specialist Parodontologie ',
      photo: '/meda.jpg',
      shortDesc: '',
      fullDesc: `
2003 – 2009 Facultatea de Medicina Dentara UMF Carol Davila / Bucuresti

2010 – 2013 Rezidentiat Medic Specialist Parodontologie UMF Carol Davila / Bucuresti

Cursuri și specializări:

Master Course In Regenerative and Esthetic Periodontal Therapy - Prof Dr hc Anton Sculean (Elveția)

Congres International EuroPerio – Prof Dr hc Anton Sculean, Prof Dr Giovanni Zucchelli, Dr Otto Zuhr

Congresul international UNAS – Prof Dr Alexandru Petre

Conferinta Nationala de Parodontologie – Prof Dr Alexandru Petre

Principii de baza in chirurgia gingivo-osoasa – Prof Dr Andre Saadoun

Curriculum Stiintific de Parodontologie – Prof Dr hc Anton Sculean

Repere moderne in tratamentul chirurgical – Prof Dr Mosche Goldstein

Aspecte Contemporane in Stomatologia Restaurativa – Dr Domenico Ricucci

Simpozion Perio-Transylvania – Prof Dr hc Anton Sculean, Stavropoulos, Kantarci

Curs de Reabilitare Estetica Complexa – Massironi, Conti

Curs de Ocluzologie – Prof Dr Meyer

Curs de Endodontie Clinica – Castellucci

Curs Chirurgie Estetica Muco-Gingivala – Zucchelli

Conceptul MI – Prof Dr John Marton

Principiile Protezarii pe Implanturi – Prof Dr Alexandru Petre

Curs Restaurari Estetice – Dr Alessandro Conti
`
    },
  ],
  'estetica-dentara': [
     {
      id: 'dr-meda-serban',
      name: 'Dr. Meda Serban',
      role: 'Fondator · Medic Dentist · Specialist Parodontologie ',
      photo: '/meda.jpg',
      shortDesc: '',
      fullDesc: `
2003 – 2009 Facultatea de Medicina Dentara UMF Carol Davila / Bucuresti

2010 – 2013 Rezidentiat Medic Specialist Parodontologie UMF Carol Davila / Bucuresti

Cursuri și specializări:

Master Course In Regenerative and Esthetic Periodontal Therapy - Prof Dr hc Anton Sculean (Elveția)

Congres International EuroPerio – Prof Dr hc Anton Sculean, Prof Dr Giovanni Zucchelli, Dr Otto Zuhr

Congresul international UNAS – Prof Dr Alexandru Petre

Conferinta Nationala de Parodontologie – Prof Dr Alexandru Petre

Principii de baza in chirurgia gingivo-osoasa – Prof Dr Andre Saadoun

Curriculum Stiintific de Parodontologie – Prof Dr hc Anton Sculean

Repere moderne in tratamentul chirurgical – Prof Dr Mosche Goldstein

Aspecte Contemporane in Stomatologia Restaurativa – Dr Domenico Ricucci

Simpozion Perio-Transylvania – Prof Dr hc Anton Sculean, Stavropoulos, Kantarci

Curs de Reabilitare Estetica Complexa – Massironi, Conti

Curs de Ocluzologie – Prof Dr Meyer

Curs de Endodontie Clinica – Castellucci

Curs Chirurgie Estetica Muco-Gingivala – Zucchelli

Conceptul MI – Prof Dr John Marton

Principiile Protezarii pe Implanturi – Prof Dr Alexandru Petre

Curs Restaurari Estetice – Dr Alessandro Conti
`
    },

    {
      id: 'dr-bianca-burghel',
      name: 'Dr. Bianca Burghel',
      role: 'Medic Dentist · Stomatologie Generală',
      photo: '/bianca.jpeg',
      shortDesc: 'Stomatologie generală cu accent pe reabilitare orală și tratamente conservative.',
      fullDesc: `
2015-2022 Facultatea de Medicina Dentara UMF Carol Davila/Bucuresti

Cursuri-atestate-supraspecializari:

Cursul "Compozit anterior direct de la A la Z" (teorie si hands-on) – Lector Dr. Cristian Ghita

Simpozionul Asociatiei Medicilor Stomatologi – Actualitati in sfera dento-maxilara

Acordul Pacientului Informat – Comunicarea Medic – Pacient intre inteligenta emotionala si reglementare legala – Prof. Dr. Silviu Mirel Pituru

Curs intensiv de reabilitare orala – Lect. Univ. Dr. Dan Buhatel

Managementul situatiilor clinice ce necesita reabilitarea orala complexa – Prof. Univ. Dr. Norina Forna

Congresul Universitatii de Medicina si Farmacie "Carol Davila" — editia a XI-a – Prof. Dr. Viorel Jinga

Congresul Societatii Romane de Stomatologie – Clasic si modern in stomatologia contemporana
`
    },
  ],
  protetica: [
     {
      id: 'dr-meda-serban',
      name: 'Dr. Meda Serban',
      role: 'Fondator · Medic Dentist · Specialist Parodontologie ',
      photo: '/meda.jpg',
      shortDesc: '',
      fullDesc: `
2003 – 2009 Facultatea de Medicina Dentara UMF Carol Davila / Bucuresti

2010 – 2013 Rezidentiat Medic Specialist Parodontologie UMF Carol Davila / Bucuresti

Cursuri și specializări:

Master Course In Regenerative and Esthetic Periodontal Therapy - Prof Dr hc Anton Sculean (Elveția)

Congres International EuroPerio – Prof Dr hc Anton Sculean, Prof Dr Giovanni Zucchelli, Dr Otto Zuhr

Congresul international UNAS – Prof Dr Alexandru Petre

Conferinta Nationala de Parodontologie – Prof Dr Alexandru Petre

Principii de baza in chirurgia gingivo-osoasa – Prof Dr Andre Saadoun

Curriculum Stiintific de Parodontologie – Prof Dr hc Anton Sculean

Repere moderne in tratamentul chirurgical – Prof Dr Mosche Goldstein

Aspecte Contemporane in Stomatologia Restaurativa – Dr Domenico Ricucci

Simpozion Perio-Transylvania – Prof Dr hc Anton Sculean, Stavropoulos, Kantarci

Curs de Reabilitare Estetica Complexa – Massironi, Conti

Curs de Ocluzologie – Prof Dr Meyer

Curs de Endodontie Clinica – Castellucci

Curs Chirurgie Estetica Muco-Gingivala – Zucchelli

Conceptul MI – Prof Dr John Marton

Principiile Protezarii pe Implanturi – Prof Dr Alexandru Petre

Curs Restaurari Estetice – Dr Alessandro Conti
`
    },

    {
      id: 'dr-bianca-burghel',
      name: 'Dr. Bianca Burghel',
      role: 'Medic Dentist · Stomatologie Generală',
      photo: '/bianca.jpeg',
      shortDesc: 'Stomatologie generală cu accent pe reabilitare orală și tratamente conservative.',
      fullDesc: `
2015-2022 Facultatea de Medicina Dentara UMF Carol Davila/Bucuresti

Cursuri-atestate-supraspecializari:

Cursul "Compozit anterior direct de la A la Z" (teorie si hands-on) – Lector Dr. Cristian Ghita

Simpozionul Asociatiei Medicilor Stomatologi – Actualitati in sfera dento-maxilara

Acordul Pacientului Informat – Comunicarea Medic – Pacient intre inteligenta emotionala si reglementare legala – Prof. Dr. Silviu Mirel Pituru

Curs intensiv de reabilitare orala – Lect. Univ. Dr. Dan Buhatel

Managementul situatiilor clinice ce necesita reabilitarea orala complexa – Prof. Univ. Dr. Norina Forna

Congresul Universitatii de Medicina si Farmacie "Carol Davila" — editia a XI-a – Prof. Dr. Viorel Jinga

Congresul Societatii Romane de Stomatologie – Clasic si modern in stomatologia contemporana
`
    },
  ],
  ortodontie: [
    {
      id: 'dr-Andreea-Solomon',
      name: 'Dr. Andreea Solomon',
      role: 'Medic Dentist · Specialist Ortodontie si Ortopedie Dento-Faciala ',
      photo: '/andreea.jpg',
      shortDesc: 'Aparate dentare clasice și invizibile (Invisalign) pentru toate vârstele.',
      fullDesc: `
1993 – 1999: Facultatea de Medicina Dentara UMF Carol Davila /Bucuresti

2000 – 2003: Rezidentiat – Stomatologie Generala UMF Carol Davila/Bucuresti

2008 – 2011: Rezidentiat – Medic Specialist Ortodontie si Ortopedie Dento-Faciala

UMF Carol Davila/Bucuresti

cursuri-atestate/supraspecializari

Treatment of Malocclusions-Class II – Pablo Echarri (Spain)

Introductory Course to face Philosophy of Treatment – Dr. Domingo Martin (Spain)

Congresul National al Asociatiei Romane de Straight-Wire – Dr. Constantin Radauceanu (Iasi, Romania)

Curs Practic MBT –Dr. Lars Christensen (United Kingdom)

Tratamentul ortodontic lingual – Prof. Dr. Mariana Pacurar (Romania)

Ortodontia Adultului – Beneficii, Riscuri – Dr. Colin Melrose, Dr. John Scholey (United Kingdom)

Workshop International de Ortodontie Fixa Edgewise Modern- Prof. Dr. Andre Horn,

Prof. Univ. Dr. Dragos Stanciu

Orthodontic Seminars of California, Dr. Larry Brown (U.S.A)

Cocepte ortodontice si metode de tratament – John Burford, Prof Univ. Dr. Dragos Stanciu

Congresul National de Ortodontie Editia a XV-a – Prof Univ. Dr. Dragos Stanciu,

Prof. Univ Dr. Victor Boboc

Coputer Aided Orthodontics – Dr. Alberto Canabez (Spain)

Disjunctia. Managementul cazurilor chirurgicale si a celor de la granita Chirurgical/Pertodontica, utilizand tehnicile MBT, autoligaturanta si microimplantele. Hands-On.- Dr. Colin Melrose, Dr. John Scholey (United Kingdom)

Typodont Course III – special cases within the non-extraction therapy among others: alignment of impacted cuspids – Dr. Wolfgang Bruner (Austria)

Controlul unui singur dinte, unuei arcade si al tesuturilor moi utilizand mini implanturi – Prof. Dr. Kee Joon Lee (Coreea), Conf. Univ. Dr. Irina Zetu

Straight Arch Wire Technique I – Angle Cl II 4PM extraction tipodont case – Dr. Wolfgang Bruner (Austria)

Management of The Sagittal Dimension Space Closure and Canine Retraction Treatment Planning Colloquium

8th Interim Seminar and Workshop of the European Academy of Paediatric Dentistry – (Cyprus)

Space Management and Interception of Malocclusion in the Developing Dentition, Prof. Monty Duggal (Cyprus)

Chirurgia Ortognatica-Ocluzie si mai mult decat atat, Prof Dr. Johan Reyneke (Rep. of South Africa)

Incognito Certification Course -Dr. J.S.Simon (Franta)

Imbunatatirea tratamentului ortodontic – (U.S.A.)

Invisalign Certification Course – Gil J. Laks,

Face – Functional and Cosmetic Excellence 2 years advanced orhhodontics program – Dr. Domingo Martin (Spain)

Protocoale terapeutice in medicina dentara pediatrica – Conf. Univ. Dr. Cristina Bica

Rolul aparatelor mobile in ortodontie – Dr. Horvath Janos (Hungary)
`
    },
  ],
  pedodontie: [
    {
      id: 'dr-pedodont-1',
      name: 'Dr. [Nume]',
      role: 'Stomatolog Pediatru',
      photo: '',
      shortDesc: 'Stomatologie pentru copii într-un mediu prietenos, cu răbdare și empatie.',
      fullDesc: '',
    },
  ],
}
