import React from 'react'
import MainBox from '../components/Main.js'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button.js'
import styled from 'styled-components'

const MyDiv = styled.div`
float: left;
margin-top: -4vh;
`

const TermsScreen = () => {
  return (
      <MainBox>
        <MyDiv>
          <Link to='/'>
            <Button>Gå tillbaka</Button>
          </Link>
        </MyDiv>
  
          <h5>
            Priser
          </h5>
          <p>
            Samtliga priser anges i SEK, inklusive moms. Vi har inget minsta ordervärde! Vid procenterbjudanden så utgår rabatten från ordinariepriset. Om ett annat kampanjpris finns för artikeln, utöver procentrabatten, används alltid det lägsta priset. 
          </p>

          <h5>
          Färgskillnader/Att tänka på innan köp
          </h5>
          <p>
            Vi kan inte garantera att färgerna du som kund upplever på din bildskärm stämmer helt överens med de färgerna som blir på trycket, detta pga att varje bildskärm är unik och har bättre eller sämre möjligheter att återge färger korrekt. Tänk även på att kontrollera att din ifyllda information är korrekt, dubbelkolla stavning/årtal/motivval och färgval noggrant samt kontrollera storleken/storlekarna på din/dina poster/s innan du bekräftar köpet. Detta gäller speciellt ifall du har valt personliga motiv eftersom de ej omfattas av öppet köp eller bytesrätt. 
          </p>

          <h5>
            Orderbekräftelse  
          </h5>
          
          <p>
          När du har genomfört din betalning så skickas det samtidigt ut en automatisk orderbekräftelse till den e-postadress som uppges vid beställningen. Är det något som inte stämmer? Har du inte fått den? Kontakta oss direkt.
          </p>


          <h5>
            Leveranstid
          </h5>
          <p>
            Vi har en leveranstid på upp till 7 arbetsdagar och då speciellt ifall din order innefattar personliga motiv, om inte så går det i regel snabbare! Vi har ingen "expressfrakt" att erbjuda i dagsläget men däremot så hjälper vi gärna till så långt det är möjligt, tveka därför inte att maila oss om du har frågor eller funderingar kring detta. Våra försändelser skickas skrymmande ospårbart 1:a klassbrev så brevbäraren lämnar i de allra flesta fall en brevet eller aviseringen i brevlådan. Vi kan inte ta ansvar för eventuella förseningar upp till fem dagar som kan uppstå hos Postnord. Fråga gärna oss vid oklarheter så hjälper vi dig. Skulle vi upptäcka att din beställning innehåller felaktigheter/frågetecken så räknas leveranstiden på 7 arbetsdagar från det att vi har erhållit korrekta uppgifter.
          </p>

          <h5>
            Leveranssätt
          </h5>

          <p>
            Våra mindre posters upp till 30x40 cm skickas som frankostämplat brev direkt till din brevlåda, är försändelsen för stor för att delas ut så lämnar brevbäraren en avisering i mottagarens brevlåda varvid försändelsen sedan kan hämtas ut hos angivet ombud. Större posters från 50x70 cm skickas spårbart och du som kund blir aviserad antingen via e-mail och/eller via sms.

            Samtliga leveransvillkor gäller inom Sverige. Observera att brev och paket ligger hos ditt lokala serviceställe endast 14 dagar varefter det returneras till oss. Vi behandlar då brevet/paketet som ett ej uthämtat paket – se nedan under rubriken EJ UTHÄMTAT PAKET.

            OBS! Vi levererar enbart inom Sverige 
          </p>


          <h5>
            Fraktkostnad
          </h5>
          <p>
            Vi har en fast frakkostnad på 39 SEK. Överstiger din order 500 SEK bjuder vi på frakten.
          </p>


          <h5>
            Betalning
          </h5>

          <p>
            För att kunna beställa från oss måste du som kund ha fyllt 18 år. Vi accepterar, enligt svensk lag, inte kreditköp till personer under 18 år. Vi som säljare förbehåller sig rätten att i enskilda fall neka eller ändra en Kunds beställning exempelvis om Kunden uppgivit felaktiga personuppgifter och/eller har betalningsanmärkningar.

            Vi använder oss av betallösningen Klarna AB organisationsnummer 556737-0431 och deras betallösen Klarna Checkout. Klarna Checkout gör det enkelt, flexibelt och tryggt för dig att handla på nätet. Genom att besvara ett par frågor identifierar du dig enkelt och du kan välja den betalmetod som passar dig bäst.

            En finess med Klarna Checkout är att vi skiljer på köp och betalning. Först bekräftar du ditt köp och sedan väljer du hur du vill betala. Antingen med Klarna faktura, Klarna konto, kort eller banköverföring. Allt är lika säkert. Om du vill kan du koppla en PIN-kod till Klarna Checkout. Fullständiga villkor för Klarna Checkout kan läsas här.

            Har du handlat mot faktura? Din faktura aktiveras ungefär 10-15 dagar efter erlagd beställning och skickas i samband med detta ut till den mailadress som uppgavs vid beställningen. Du kan även snabbt och smidigt logga in på dina sidor på Klarna.se för att få information om din aktiva faktura.
          </p>

          <h5>
            Öppet köp / Ångerrätt / Retur
          </h5>

          <p>
            Vi tillämpar 30 dagars öppet köp/ångerrätt förutsatt att varan är oanvänd/utan skador. Ångerrätten ger kunden rätt att undersöka varorna och återsända produkten/produkterna i det fall kunden ångrar sitt köp. När kunden ångrat sitt köp har denne rätt att återfå vad denne har betalt under förutsättning att kunden inte har använt produkterna i en större omfattning än vad som krävs för att kunna undersöka dem. Vid skador på produkten/produkterna har vi som säljare rätt att göra ett så kallat värdeminskningsavdrag. Avdragets storlek avgörs från fall till fall. Vill du avbeställa ordern innan försändelsen har skickats från oss så går det givetvis bra, däremot så har vi som säljare rätt till ersättning för nedlagt arbete, särskilda kostnader för avbeställningen samt förlust i övrigt. Summan av detta varierar beroende på vilka produkter du har valt. Kontakta oss för mer information.

            Vid en retur så kontakta oss först på info@kokosbutiken.se  . Varan som sedan ska skickas tillbaka ska vara väl förpackad tillsammans med kopia på följesedel och när vi sedan har erhållit din retur så kommer vi/Klarna att betala tillbaka värdet på varan inklusive frakten á 39:-, ej att förväxla med kostnaden för returfrakten. Klarna kan komma att kontakta er för att erhålla kompletterande uppgifter för att slutföra krediteringen.
            • Doptavlor och personliga posters har ej öppet köp.
            • Vi tillämpar ej fria returer utan du som köpare står för returfrakten. 
            • Vi löser ej ut paket som returnerats mot postförskott, efterkrav.

            Ej uthämtat paket

            Om du inte hämtar ut leveransen debiteras du expeditionsavgift, returfrakt och hanteringskostnader, f.n. totalt 150 kr.
          </p>

          <h5>
            Reklamation
          </h5>

          <p>
            Om en produkt är defekt så kontakta oss via info@kokosbutiken.se senast 14 dagar efter leverans, gärna med en så detaljerad beskrivning/bild som möjlig. Glöm ej att lämna ditt namn samt ordernummer. 
          </p>


          <h5>
            Vart är min försändelse?
          </h5>

          <p>
            I de fall då din försändelse inte får plats i din brevlåda så lämnar brevbäraren istället en avi. Avin används sedan för att hämta ut ditt paket hos Postnords närmaste ombud. Om du varken har fått avin eller försändelsen i din brevlåda, börja med att höra av dig till ditt ombud och se efter så att inte brevbäraren har missat att dela ut din avisering. Om du inte vet vilket/vilka postombud du har så kan du söka upp det via ditt postnummer på www.postnord.se

          </p>

          <h5>
            Integritetspolicy/GDPR
          </h5>

          <p>
            I samband med din beställning godkänner du att vi lagrar och använder dina uppgifter i vår verksamhet för att fullfölja och tillhandahålla den service som du kan förvänta dig av oss. All personuppgiftsbehandling sker i enlighet med dataskyddsförordningen GDPR. Kokosbutiken.se/Kokosdetails HB's kundregister innehåller personuppgifter såsom namn, personnummer, postadress, telefonnummer och e-postadress. Ändamålet med vår behandling av insamlade personuppgifter är att använda dessa för att

            Kunna fullgöra köp hos Kokosbutiken.se
            Möjliggöra riktad marknadsföring per e-post, sms och andra kanaler baserad på dina tidigare inköp.

            Kokosbutiken.se kommer dela med sig av de personuppgifter till fraktbolagen som krävs för att kunna fullfölja och leverera en beställning. När du som kund väljer och e-posta till Kokosbutiken.se så kommer din e-postadress samt e-posthistoriken att sparas för att göra det möjligt och lättare kunna följa upp och svara på ett ärende. Vi sparar mail i upp till två år. Inga uppgifter kommer att säljas vidare till tredje part eller skickas vidare till tredje land.

            Klarna kommer att samla personuppgifter om dig i samband med betalning. Klarna är således personuppgiftsansvarig för sådana personuppgifter enligt Klarnas villkor

            Vi sparar bara personuppgifter så länge som det är nödvändigt, därefter raderas de. Om uppgifter skulle vara ofullständiga, felaktiga eller irrelevanta har du rätt att begära att de rättas eller raderas. Du har också rätt att begära skadestånd om behandlingen av dina personuppgifter inte har följt lagen. Du kan begära ett utdrag på vilka uppgifter som vi har registrerade om dig. För att begära registerutdrag eller rättelse av uppgifter skickar du mail till info@kokosbutiken.se så hjälper vi dig med detta.
          </p>

          Kokosdetails HB • Org Nr: 969746-0757 • Innehar F-skatt • Etabl. 2009 

      </MainBox>
  )
}

export default TermsScreen