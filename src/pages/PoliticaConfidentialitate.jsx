import React, { useEffect } from 'react';

export default function PoliticaConfidentialitate() {
  // Asigură scroll-ul automat în partea de sus a paginii la deschidere
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        
        {/* Header-ul Paginii */}
        <div className="border-b border-gray-100 pb-8 mb-8">
          <span className="text-[#A3B83B] text-xs font-bold tracking-widest uppercase block mb-3">
            Informații Legale
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-[#1F2421] leading-tight font-light">
            Politică de Confidențialitate
          </h1>
          <p className="text-xs text-gray-400 mt-2">
            Ultima actualizare: {new Date().getFullYear()}
          </p>
        </div>

        {/* Conținutul Documentului */}
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-8 text-sm md:text-base font-light">
          
          {/* SECȚIUNEA 1 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-serif text-[#1F2421] font-normal border-l-4 border-[#A3B83B] pl-3">
              1. Confidențialitate pe scurt
            </h2>
            
            <h3 className="text-lg font-medium text-gray-800">Informații generale</h3>
            <p>
              Următoarele note oferă o prezentare generală a ceea ce se întâmplă cu informațiile dvs. personale când vizitați site-ul nostru web. Datele personale reprezintă toate datele care vă identifică personal. Informații detaliate referitoare la protecția datelor pot fi găsite în politica noastră de confidențialitate enumerată în acest text.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4">Colectarea datelor pe site-ul nostru</h3>
            <p className="font-medium text-gray-700">Cine este responsabil pentru colectarea datelor de pe acest site?</p>
            <p>
              Prelucrarea datelor pe acest site web este efectuată de către operatorul de site web. Detaliile sale de contact pot fi găsite în amprenta acestui site web și în secțiunile de mai jos.
            </p>

            <p className="font-medium text-gray-700 mt-2">Cum colectăm datele dvs.?</p>
            <p>
              Datele dvs. vor fi colectate, pe de o parte, din ceea ce ne comunicați dvs. – de exemplu datele pe care le introduceți într-un formular de contact.
              Alte date sunt colectate automat la vizitarea site-ului prin intermediul sistemelor IT. Acestea sunt în special datele tehnice (de exemplu: browserul de internet, sistemul de operare sau ora solicitării paginii). Colectarea acestor date este automată de îndată ce intrați pe site-ul nostru.
            </p>

            <p className="font-medium text-gray-700 mt-2 font-serif">Pentru ce folosim datele dvs.?</p>
            <p>
              O parte din date sunt colectate pentru a asigura o furnizare impecabilă a site-ului web. Alte date pot fi folosite pentru a analiza comportamentul utilizatorilor.
            </p>

            <p className="font-medium text-gray-700 mt-2">Ce drepturi aveți asupra datelor dvs.?</p>
            <p>
              În orice moment aveți dreptul să obțineți informații gratuite cu vigore la originea, destinatarul și scopul datelor dvs. personale stocate. De asemenea, aveți dreptul de a solicita corectarea, blocarea sau ștergerea acestor date. În acest scop și pentru alte întrebări legate de protecția datelor, ne puteți contacta în orice moment la adresa indicată la Politica de confidențialitate. În plus, aveți dreptul de a vă adresa autorității de supraveghere competente.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4">Instrumente de analiză și instrumente terță parte</h3>
            <p>
              Când vizitați site-ul nostru, comportamentul dvs. de navigare poate fi evaluat statistic. Acest lucru se întâmplă în principal cu cookie-uri și cu așa-numitele programe de analiză. Analiza comportamentului dvs. de navigare este de obicei anonimă; comportamentul de navigare nu poate fi urmărit înapoi la dvs. Puteți obiecta la această analiză sau puteți împiedica utilizarea unor instrumente prin nefolosire.
            </p>
          </section>

          {/* SECȚIUNEA 2 */}
          <section className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-xl md:text-2xl font-serif text-[#1F2421] font-normal border-l-4 border-[#A3B83B] pl-3">
              2. Informații generale și informații obligatorii
            </h2>
            
            <h3 className="text-lg font-medium text-gray-800">Politica de confidențialitate</h3>
            <p>
              Operatorii acestor pagini iau foarte în serios protecția datelor dvs. personale. Noi tratam datele dvs. personale în mod confidențial și în conformitate cu reglementările legale privind protecția datelor și cu această politică de confidențialitate.
            </p>
            <p>
              Dacă utilizați acest site web, vor fi colectate diverse date personale. Datele personale sunt informații care vă identifică personal. Această politică de confidențialitate explică ce informații colectăm și la ce le folosim. De asemenea, explică cum și în ce scop se întâmplă acest lucru.
            </p>
            <p className="bg-yellow-50/50 border-l-2 border-yellow-400 p-3 rounded-r-lg text-xs md:text-sm text-gray-600">
              Rețineți că transmiterea de date prin Internet (de exemplu, atunci când comunicați prin e-mail) poate avea vulnerabilități de securitate. Nu este posibilă protecția completă a datelor împotriva accesului terților.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4">Notă adresată organismului responsabil</h3>
            <div className="bg-gray-50 p-4 rounded-2xl text-sm space-y-1 text-gray-700">
              <p className="font-semibold text-gray-900">Sanadent Solution SRL</p>
              <p>Str. Avrig, Nr. 8, Sector 2, București, România</p>
              <p>Telefon: +40786511919</p>
              <p>E-mail: office@sanadent.ro</p>
            </div>
            <p className="text-xs text-gray-500">
              Entitatea responsabilă este persoana fizică sau juridică care, singură sau împreună cu ceilalți, decide cu privire la scopurile și mijloacele de prelucrare a datelor cu caracter personal (cum ar fi numele, adresele de e-mail etc.).
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4">Revocarea consimțământului dvs. pentru prelucrarea datelor</h3>
            <p>
              Multe operațiuni de prelucrare a datelor sunt posibile numai cu consimțământul dvs. expres. Puteți revoca oricând un consimțământ existent. Este suficient un mesaj informal prin e-mail. Legalitatea procesării datelor efectuate până la revocare nu este afectată de revocare.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4">Dreptul la recurs la autoritatea de supraveghere competentă</h3>
            <p>
              În cazul încălcării legislației privind protecția datelor, persoana în cauză are dreptul de a se adresa autorității de supraveghere competente (ANSPDCP - Autoritatea Naţională de Supraveghere a Prelucrării Datelor cu Caracter Personal).
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4">Dreptul la portabilitatea datelor</h3>
            <p>
              Aveți dreptul să aveți datele pe care le procesăm pe baza consimțământului dvs. sau în îndeplinirea unui contract, trimise dvs. înșivă sau unei terțe părți, într-un format standard, care poate fi citit de calculator. Dacă solicitați transferul direct al datelor către o altă persoană responsabilă, acest lucru se va face numai în măsura în care este posibil din punct de vedere tehnic.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4">Criptare SSL sau TLS</h3>
            <p>
              Acest site utilizează, din motive de securitate și pentru a proteja transmiterea de conținut confidențial, cum ar fi comenzi sau solicitări pe care ni le trimiteți ca operator de site, o conexiune securizată SSL sau TLS. Puteți recunoaște o conexiune criptată prin schimbarea liniei de adrese a browserului de la „http://” la „https://” și prin simbolul de lacăt în linia browserului.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4">Informații, blocare, ștergere</h3>
            <p>
              Aveți, în conformitate cu dispozițiile aplicabile ale legii, dreptul la informare gratuită cu privire la datele stocate cu caracter personal, originea, destinația și scopul prelucrării datelor și, eventual, dreptul la rectificarea, blocarea sau ștergerea acestor date. Pentru informații suplimentare, ne puteți contacta în orice moment la datele menționate mai sus.
            </p>
          </section>

          {/* SECȚIUNEA 3 */}
          <section className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-xl md:text-2xl font-serif text-[#1F2421] font-normal border-l-4 border-[#A3B83B] pl-3">
              3. Responsabilul pentru protecția datelor (DPO)
            </h2>
            <p>
              Am desemnat un ofițer de protecție a datelor pentru compania noastră Sanadent Solution SRL.
            </p>
            <div className="bg-[#FAF9F5] p-4 rounded-2xl text-sm text-gray-700">
              <p className="font-semibold text-[#1F2421]">Contact DPO:</p>
              <p>Telefon: +40786511919</p>
              <p>E-mail: office@sanadent.ro</p>
            </div>
          </section>

          {/* SECȚIUNEA 4 */}
          <section className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-xl md:text-2xl font-serif text-[#1F2421] font-normal border-l-4 border-[#A3B83B] pl-3">
              4. Colectarea datelor pe site-ul nostru
            </h2>
            <h3 className="text-lg font-medium text-gray-800">Cookies</h3>
            <p>
              Paginile de internet folosesc parțial așa-numitele cookie-uri. Cookie-urile nu dăunează computerului și nu conțin viruși. Ele servesc pentru a face oferta noastră mai prietenoasă, eficientă și sigură. Fișierele cookie sunt fișiere text mici stocate pe computer și stocate de browserul dvs.
            </p>
            <p>
              Majoritatea cookie-urilor pe care le folosim sunt „cookie-uri de sesiune”. Acestea vor fi șterse automat la sfârșitul vizitei. Alte cookie-uri rămân stocate pe dispozitiv până când le ștergeți. Aceste module cookie ne permit să recunoaștem browserul dvs. data viitoare când vizitați.
            </p>
            <p>
              Dezactivarea modulelor cookie poate limita funcționalitatea acestui site web. Cookie-urile care sunt necesare pentru efectuarea procesului de comunicare electronică sau pentru a furniza anumite funcții pe care doriți să le utilizați sunt stocate în baza art. 6 alin. 1 lit. f GDPR. Operatorul are un interes legitim în stocarea acestora pentru o funcționare impecabilă tehnic.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4">Fișierele server-log</h3>
            <p>
              Furnizorul paginilor colectează și stochează automat informațiile din așa-numitele fișiere log de server, pe care browserul dvs. le transmite automat:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
              <li>Tipul browserului și versiunea sa</li>
              <li>Sistemul de operare utilizat</li>
              <li>URL-ul referitorului (sursa de unde ați sosit pe site)</li>
              <li>Numele gazdei calculatorului de acces</li>
              <li>Ora solicitării serverului</li>
              <li>Adresa IP</li>
            </ul>
          </section>

          {/* SECȚIUNEA 5 */}
          <section className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-xl md:text-2xl font-serif text-[#1F2421] font-normal border-l-4 border-[#A3B83B] pl-3">
              5. Instrumente de analiză și publicitate
            </h2>
            <h3 className="text-lg font-medium text-gray-800">Google Analytics</h3>
            <p>
              Acest site utilizează serviciul de analiză web Google Analytics furnizat de Google Inc., USA. Google Analytics folosește cookie-uri care permit evaluarea comportamentului dvs. de navigare pe site, informațiile fiind de regulă transmise și stocate pe serverele Google din SUA.
            </p>
            <p>
              Puteți bloca complet înregistrarea datelor descărcând și instalând plugin-ul oficial de browser pus la dispoziție de Google:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout?hl=ro" target="_blank" rel="noopener noreferrer" className="text-[#A3B83B] hover:underline font-medium">
                Google Opt-Out Link
              </a>.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4">Google Maps</h3>
            <p>
              Acest site utilizează serviciul de cartografiere Google Maps prin intermediul unui API pentru a vă ajuta să localizați mult mai rapid clinica noastră. Pentru utilizare este necesară salvarea adresei IP a dispozitivului dumneavoastră pe serverele Google.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}