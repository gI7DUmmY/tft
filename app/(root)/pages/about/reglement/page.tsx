import Accordeon from '@/components/Accordeon'

const pages = () => {
  return (
    <main className='w-full min-h-screen font-sans  text-black'>
      <h1 className='text-center font-mono text-xl uppercase'>
        r&egrave;glement int&eacute;rieur de l&apos;association
      </h1>
      <div className='px-2 pt-3 text-justify page-content'>
        <Accordeon header='article 1: principes g&eacute;n&eacute;raux'>
          <p>
            Le pr&eacute;sent r&egrave;glement int&eacute;rieur a pour but de
            pr&eacute;ciser le fonctionnement de l&apos;association Toulouse
            Football de Table (TFT), sis &agrave; &laquo; Centre
            d&apos;Animation de Lalande &raquo;, dans le cadre de ses statuts.{' '}
            <br />
            Il a &eacute;t&eacute; adopt&eacute; en assembl&eacute;e
            g&eacute;n&eacute;rale le 22/06/16. Il est remis &agrave;
            l&apos;ensemble des membres ainsi qu&apos;&agrave; chaque nouveau
            membre. <br /> Il s&apos;applique &agrave; tous les membres au
            m&ecirc;me titre que les statuts. L&apos;adh&eacute;sion en tant que
            membre du TFT vaut acceptation du pr&eacute;sent r&egrave;glement,
            totale sans restriction, par le membre ou son repr&eacute;sentant
            l&eacute;gal.
          </p>
        </Accordeon>
        <Accordeon header='ARTICLE 2: COTISATION'>
          <p>
            Le montant de la cotisation est fix&eacute; annuellement par
            l&apos;Assembl&eacute;e G&eacute;n&eacute;rale sur proposition du
            Comit&eacute; Directeur. Les tarifs de la cotisation sont variables
            selon la tranche d&apos;&acirc;ge et le type de licence prise
            (&quot;loisir&quot; ou &quot;comp&eacute;tition&quot;). La
            cotisation annuelle doit &ecirc;tre vers&eacute;e lors de
            l&apos;adh&eacute;sion du membre. Toute cotisation vers&eacute;e au
            TFT est d&eacute;finitivement acquise. Il ne saurait &ecirc;tre
            exig&eacute; un remboursement de cotisation en cours
            d&apos;ann&eacute;e en cas de d&eacute;mission, d&apos;exclusion ou
            de d&eacute;c&egrave;s d&apos;un membre. Chaque membre doit
            &ecirc;tre &agrave; jour de sa cotisation pour &ecirc;tre
            autoris&eacute; &agrave; participer aux comp&eacute;titions
            organis&eacute;es par le TFT.
          </p>
        </Accordeon>
        <Accordeon header="ARTICLE 3: ORGANISATION DE L'ASSOCIATION DU TFT">
          <p>
            Le TFT se compose d&apos;un Comit&eacute; Directeur et d&apos;un
            Bureau dont les r&ocirc;les et les responsabilit&eacute;s sont
            indiqu&eacute;es dans les statuts. Sauf cas de force majeure
            d&ucirc;ment justifi&eacute;e dans la lettre de d&eacute;mission,
            tout membre d&eacute;missionnaire du Comit&eacute; Directeur
            n&apos;est plus &eacute;ligible au Comit&eacute; Directeur
            jusqu&apos;&agrave; la fin du mandat en cours de ce dernier. La
            saison sportive du TFT est la m&ecirc;me que celle de la
            F&eacute;d&eacute;ration Fran&ccedil;aise de Football de Table. Les
            Commissions de l&apos;association sont compos&eacute;es d&apos;un
            membre du Comit&eacute; Directeur qui devient le Pr&eacute;sident de
            la Commission et de tout autre membre. Le TFT se compose des
            commissions suivantes :
          </p>
          <ul className='list-disc list-inside'>
            <li>
              commission &quot;Technique&quot;: encadrement technique des
              membres, formation progressive des membres, information
              p&eacute;dagogique sur l&apos;arbitrage et les r&egrave;gles de
              jeu aupr&egrave;s des membres
            </li>
            <li>
              commission &quot;Communication&quot;: mise &agrave; jour du site
              internet et autres sites des r&eacute;seaux sociaux, communication
              interne, relai avec la presse locale et la municipalit&eacute;,
              promotion du TFT
            </li>
            <li>
              commission &quot;Sponsoring&quot;: mise en place de partenariats
              avec les entreprises, les artisans et les commerces, suivi et
              relance de partenariats, promotion du TFT
            </li>
            <li>
              commission &quot;Mat&eacute;riel et &eacute;quipement&quot;:
              inventaire des mat&eacute;riels (tables, maillots...), entretien
              des &eacute;quipements
            </li>
            <li>
              commission &quot;Restauration&quot;: organisation et planification
              des &eacute;quipes restauration durant la saison lors des tournois
              organis&eacute;s par le TFT, pr&eacute;vision de
              l&apos;approvisionnement
            </li>
          </ul>
        </Accordeon>
        <Accordeon header="ARTICLE 4 : MODALITES D'ADHESION">
          <p>
            Les personnes d&eacute;sirant devenir membre du TFT ou renouveler
            leur adh&eacute;sion doivent remplir un dossier
            d&apos;adh&eacute;sion comprenant:
          </p>
          <ul className='list-disc list-inside'>
            <li>
              un bulletin d&#39;inscription. Pour les mineurs de moins de 16
              ans, ce bulletin est rempli par le repr&eacute;sentant
              l&eacute;gal;
            </li>
            <li>une photo d&#39;identit&eacute; (si non encore fournie);</li>
            <li>
              un certificat m&eacute;dical d&#39;aptitude &agrave; la pratique
              du football de table;
            </li>
            <li>le r&egrave;glement du montant de l&#39;adh&eacute;sion.</li>
          </ul>
          <p>
            La demande d&#39;adh&eacute;sion doit &ecirc;tre accept&eacute;e par
            le Pr&eacute;sident dans les 15 jours du d&eacute;p&ocirc;t du
            dossier d&#39;inscription. &Agrave; d&eacute;faut de r&eacute;ponse
            &agrave; l&#39;expiration de ce d&eacute;lai, la demande est
            r&eacute;put&eacute;e avoir &eacute;t&eacute; accept&eacute;e. Le
            r&egrave;glement int&eacute;rieur est remis &agrave; chaque nouveau
            membre.
          </p>
        </Accordeon>
        <Accordeon header='ARTICLE 5 : DEMISSION &ndash; EXCLUSION - DECES D&#39;UN MEMBRE'>
          <p className='uppercase'>demission</p>
          <p>
            La d&eacute;mission d&#39;un membre doit &ecirc;tre adress&eacute;e
            au Pr&eacute;sident par courrier. Elle n&#39;a pas &agrave;
            &ecirc;tre motiv&eacute;e par le membre d&eacute;missionnaire. Une
            fois la d&eacute;mission intervenue, elle ne peut faire l&#39;objet
            de r&eacute;tractation. La d&eacute;mission d&#39;un membre du
            Comit&eacute; Directeur doit &ecirc;tre adress&eacute;e au
            Pr&eacute;sident par courrier remis en main propre contre
            d&eacute;charge ou par lettre recommand&eacute;e avec accus&eacute;
            de r&eacute;ception. Elle n&#39;a pas &agrave; &ecirc;tre
            motiv&eacute;e par le membre d&eacute;missionnaire sauf cas de force
            majeure &agrave; indiquer dans la lettre de d&eacute;mission sous
            peine d&#39;in&eacute;ligibilit&eacute; au Comit&eacute; Directeur
            jusqu&#39;&agrave; la fin du mandat en cours de ce dernier. Aucune
            cotisation n&#39;est due au membre d&eacute;missionnaire.
          </p>
          <p className='uppercase'>exclusion</p>
          <p>
            L&#39;exclusion d&#39;un membre est prononc&eacute;e par le
            Comit&eacute; Directeur pour non-paiement de cotisation ou pour tout
            autre motif grave. Sont notamment r&eacute;put&eacute;s constituer
            des motifs graves:
          </p>
          <ul className='list-disc list-inside'>
            <li>
              une d&eacute;t&eacute;rioration volontaire de mat&eacute;riel
            </li>
            <li>
              des propos d&eacute;sobligeants envers les membres ou
              d&eacute;nigrants envers le TFT
            </li>
            <li>le harc&egrave;lement moral ou sexuel</li>
            <li>
              comportement non conforme avec l&#39;&eacute;thique et les valeurs
              du TFT
            </li>
            <li>
              le non respect des statuts et du r&egrave;glement int&eacute;rieur
            </li>
            <li>
              un comportement antisportif (non respect de l&#39;adversaire, de
              l&#39;arbitre...)
            </li>
          </ul>
          <p>
            Tout t&eacute;moin de tels agissements doit agir pour arr&ecirc;ter
            ou faire arr&ecirc;ter de tel(s) comportement(s) et en
            r&eacute;f&eacute;rer un membre du Comit&eacute; Directeur qui devra
            agir. L&#39;exclusion doit &ecirc;tre prononc&eacute;e par le
            Comit&eacute; Directeur apr&egrave;s avoir entendu les explications
            du membre contre lequel une proc&eacute;dure d&#39;exclusion est
            engag&eacute;e, &agrave; la majorit&eacute; absolue des membres du
            Comit&eacute; Directeur pr&eacute;sents. Le membre sera
            convoqu&eacute; par lettre recommand&eacute;e avec accus&eacute; de
            r&eacute;ception 15 jours au moins avant cette r&eacute;union.
            &Agrave; titre de mesure conservatoire, durant ce d&eacute;lai de 15
            jours, le membre faisant l&#39;objet d&#39;une proc&eacute;dure
            d&#39;exclusion est suspendu et il n&#39;est plus autoris&eacute;
            &agrave; participer aux activit&eacute;s du TFT
            (entra&icirc;nements, animations, tournois...). La lettre de
            convocation comportera les motifs de la proc&eacute;dure
            d&#39;exclusion engag&eacute;e envers le membre. L&#39;exclusion
            sera prononc&eacute;e d&#39;office pour tout membre faisant
            l&#39;objet d&#39;une proc&eacute;dure d&#39;exclusion et ne se
            pr&eacute;sentant pas &agrave; cette r&eacute;union sans excuse ou
            raison valable accept&eacute;es par le Comit&eacute; Directeur. En
            cas d&#39;impossibilit&eacute; de pr&eacute;sence &agrave; la
            r&eacute;union, d&ucirc;ment notifi&eacute;e au Comit&eacute;
            Directeur par le membre faisant l&#39;objet de la proc&eacute;dure
            d&#39;exclusion, il conviendra proc&eacute;der &agrave; une nouvelle
            convocation du membre par lettre recommand&eacute;e avec
            accus&eacute; de r&eacute;ception 15 jours au moins avant la
            r&eacute;union nouvellement programm&eacute;e. Lors de la
            r&eacute;union, le membre pourra se faire assister d&#39;une
            personne de son choix. La d&eacute;cision de l&#39;exclusion sera
            notifi&eacute;e par lettre recommand&eacute;e dans les 15 jours
            suivant la r&eacute;union. L&#39;absence de r&eacute;ponse &agrave;
            l&#39;expiration de ce d&eacute;lai vaut annulation de la
            proc&eacute;dure d&#39;exclusion et d&eacute;cision de non exclusion
            du membre.
          </p>
          <p className='uppercase'>exclusions automatiques</p>
          <p>
            L&#39;exclusion est prononc&eacute;e d&#39;office par le
            Comit&eacute; Directeur dans le cas o&ugrave; le membre faisant
            l&#39;objet de la proc&eacute;dure d&#39;exclusion ne se
            pr&eacute;sente pas &agrave; la r&eacute;union sans excuse ou raison
            valable accept&eacute;es par le Comit&eacute; Directeur. En cas de
            comportement dangereux d&#39;un membre, et notamment mise en danger
            de la vie d&#39;autrui, l&#39;exclusion du membre est automatique et
            aussit&ocirc;t notifi&eacute;e au membre par lettre
            recommand&eacute;e avec accus&eacute; de r&eacute;ception
          </p>
          <p className='uppercase'>deces</p>
          <p>
            En cas de d&eacute;c&egrave;s, la qualit&eacute; de membre
            s&#39;&eacute;teint avec la personne. Les h&eacute;ritiers ou les
            l&eacute;gataires ne peuvent pr&eacute;tendre &agrave; un quelconque
            maintien dans l&#39;association et/ou une restitution de tout ou
            partie de la cotisation.
          </p>
        </Accordeon>
        <Accordeon header='ARTICLE 6 : DISCIPLINE GENERALE'>
          <p className='uppercase'>Engagements</p>
          <p>
            Tout membre du TFT adh&egrave;re obligatoirement aux engagements
            d&eacute;crits ci-apr&egrave;s. Tout membre qui ne respecte pas ces
            engagements peut faire l&#39;objet de sanctions disciplinaires
            allant de l&#39;avertissement &agrave; l&#39;exclusion:
          </p>
          <ul className='list-inside list-disc'>
            <li>engagement sportif et associatif</li>
            <li>
              respect des dirigeants, des membres et des tiers (public,
              arbitres, adversaires...)
            </li>
            <li>
              chaque membre est responsable des dommages qu&#39;il peut
              occasionner aux personnes ou aux biens d&#39;autrui
            </li>
            <li>
              respect des &eacute;quipements et du mat&eacute;riel. Chaque
              membre est responsable des dommages qu&#39;il peut occasionner au
              mobilier et aux &eacute;quipements sportifs. En cas de
              d&eacute;gradation de mat&eacute;riel, le responsable des faits
              prendra en charge les frais de r&eacute;paration, soit &agrave;
              ses frais, soit en faisant participer sa
              &quot;responsabilit&eacute; civile&quot;
            </li>
            <li>
              valorisation de l&#39;image du TFT aux entra&icirc;nements, lors
              des tournois, lors d&#39;animations et &agrave; tout moment du
              port de la tenue vestimentaire du TFT
            </li>
            <li>
              respect du r&egrave;glement int&eacute;rieur des locaux mis
              &agrave; disposition du TFT
            </li>
          </ul>
          <p>
            L&#39;avertissement est adress&eacute; au membre par lettre
            recommand&eacute;e avec accus&eacute; de r&eacute;ception ou par
            remise en main propre contre d&eacute;charge. Deux avertissements
            prononc&eacute;s envers un m&ecirc;me membre donnent lieu &agrave;
            l&#39;engagement d&#39;une proc&eacute;dure d&#39;exclusion &agrave;
            son encontre.
          </p>
          <p className='uppercase'>entrainements</p>
          <p>
            Les horaires d&#39;entra&icirc;nement, et, le cas
            &eacute;ch&eacute;ant, leurs changements impr&eacute;vus, sont
            port&eacute;s &agrave; la connaissance des membres par voie
            d&#39;affichage sur le site internet du club et par les
            diff&eacute;rents moyens de communication dont dispose le TFT. Des
            modifications d&#39;horaires peuvent &ecirc;tre adopt&eacute;es en
            p&eacute;riode estivale, en lien avec la direction des locaux mis
            &agrave; la disposition du TFT, ces changements donnant lieu
            &agrave; une information sp&eacute;cifique sur le site internet du
            TFT. Tous les membres ont libre acc&egrave;s aux
            entra&icirc;nements, l&#39;acc&egrave;s &agrave; la salle
            d&#39;entra&icirc;nement se faisant par l&#39;entr&eacute;e
            principale, les issues de secours &eacute;tant exclusivement
            destin&eacute;es &agrave; l&#39;&eacute;vacuation en cas de
            sinistre. Chaque membre se doit de participer &agrave;
            l&#39;installation et au rangement du mat&eacute;riel
          </p>
        </Accordeon>

        <Accordeon header='ARTICLE 7 : MODIFICATION DU REGLEMENT INTERIEUR'>
          <p>
            Le r&egrave;glement int&eacute;rieur est &eacute;tabli par le
            Comit&eacute; Directeur et adopt&eacute; par l&#39;Assembl&eacute;e
            G&eacute;n&eacute;rale conform&eacute;ment &agrave; l&#39;article 30
            du Titre V des statuts. Le r&egrave;glement int&eacute;rieur ne peut
            &ecirc;tre modifi&eacute; que sur la proposition du Comit&eacute;
            Directeur ou du 1/10e des membres dont se compose
            l&#39;Assembl&eacute;e g&eacute;n&eacute;rale, cette proposition
            ayant &eacute;t&eacute; soumise au Bureau au moins un mois avant la
            s&eacute;ance. Le r&egrave;glement int&eacute;rieur ne peut
            &ecirc;tre modifi&eacute; qu&#39;&agrave; la majorit&eacute; des 2/3
            des voix des membres pr&eacute;sents ou repr&eacute;sent&eacute;s
            &agrave; l&#39;Assembl&eacute;e G&eacute;n&eacute;rale. Le nouveau
            r&egrave;glement int&eacute;rieur est adress&eacute; &agrave; tous
            les membres de l&#39;association TFT par voie &eacute;lectronique et
            est affich&eacute; sur le site internet du TFT sous un d&eacute;lai
            de un mois suivant la date de la modification.
          </p>
        </Accordeon>
        <Accordeon header='ARTICLE 8: DISPOSITIONS FINALES'>
          <p>
            Le pr&eacute;sent r&egrave;glement int&eacute;rieur a
            &eacute;t&eacute; soumis &agrave; l&#39;Assembl&eacute;e
            G&eacute;n&eacute;rale du Vendredi 22 Juin 2016.
          </p>
        </Accordeon>
      </div>
    </main>
  )
}

export default pages
