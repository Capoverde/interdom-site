const rodoLink = document.querySelector('.rodo-link')
const popup = document.createElement('div')
popup.className ="rodo-popup"

const rodoText = `
<h2>Klauzula informacyjna RODO w zakresie przetwarzania danych osobowych</h2>
<ol>
 Administratorem danych osobowych jest 

 Administrator wyznaczył inspektora ochrony danych osobowych. Dane kontaktowe inspektora: 

 Przekazane dane osobowe przetwarzane będą w celu realizacji usług, obsługi zgłoszeń i udzielania odpowiedzi na zgłoszenia;

 Kategorie danych osobowych obejmują m.in. imię i nazwisko, numer telefonu, adres e-mail, adres, dane dedykowane do procesu/usługi/projektu;

 Pani / Pana dane osobowe mogą być przekazywane podmiotom przetwarzającym dane osobowe na zlecenie administratora: dostawcy usług IT;

 Państwa dane osobowe będą przechowywane przez okres istnienia prawnie uzasadnionego interesu administratora, chyba że Pani / Pan wyrazi sprzeciw wobec przetwarzania danych;

 Państwa dane nie będą przekazywane do państwa trzeciego ani organizacji międzynarodowej;

 Posiadają Państwo prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu, prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem;

 Mają Państwo prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych, którym jest Prezes Urzędu Ochrony Danych Osobowych, gdy uznają Państwo, iż przetwarzanie Państwa danych osobowych narusza przepisy ustawy z dnia 10 maja 2018 r. o ochronie danych osobowych (tekst jednolity Dz. U. z 2018 r., poz. 1000) lub przepisy Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) z dnia 27 kwietnia 2016 r. (Dz.Urz.UE.L Nr 119, str. 1);

 Dane udostępnione przez Panią/Pana nie będą podlegały zautomatyzowanemu podejmowaniu decyzji oraz profilowaniu;

 Dane pochodzą od osób, których dane dotyczą;

Podanie przez Państwa danych osobowych jest dobrowolne;
</ol>

<a class="btn">OK</a>
`
popup.innerHTML = rodoText;

const contactSec = document.querySelector('.contact-wrapper')
console.log(contactSec)

rodoLink.addEventListener('click', function(){
    console.log('klik w rodo-link')
    document.body.append(popup)
})


