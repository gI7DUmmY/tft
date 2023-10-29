import Accordeon from '@/components/Accordeon'
import Image from 'next/image'
import { MdLink } from 'react-icons/md'

const page = () => {
  return (
    <main className='w-full min-h-screen font-sans  text-black'>
      <h1 className='text-center font-mono text-xl'>INFO LICENCE</h1>
      <h2 className='text-lg text-center'>Rejoignez nous !</h2>
      <div className='px-3 pt-3 text-justify page-content md:px-9'>
        <h3 className='text-left font-bold text-purple-500 my-6'>
          Pourquoi jouer en club ?
        </h3>
        <p>
          Tout simplement parce que c’est mieux ! Un club c&apos;est le lieu de
          rendez-vous privilégié des gens qui partagent votre passion et qui ne
          demandent qu’à vous rencontrer. Un club met à votre disposition des
          locaux et du matériel de qualité et vous permet également de consacrer
          du temps à votre loisir. Dans un club vous trouverez toujours des
          personnes pour répondre à vos questions et pour vous aider à
          progresser. N&apos;attendez plus, rejoignez-nous !
        </p>
        <p>
          Pour vous faire découvrir notre club, nous offrons aux personnes
          intéressées les deux premières séances d’entraînement, afin de vous
          faire une idée sur le fonctionnement du club.
        </p>
        <p>
          Pour les membres d&apos;autres clubs que le TFT, nous vous demanderons
          une participation annuelle de 60€ vous donnant droit à un accès aux
          entraînements.
        </p>
        <p>
          Les membres de l’équipe de France sur la saison en cours peuvent
          accéder aux entraînements librement.
        </p>

        <h3 className='text-left font-bold text-purple-500 my-6'>
          Prendre sa licence au TFT
        </h3>
        <Accordeon header='1️⃣- choisissez votre licence'>
          <p>
            Choisissez votre licence, il y en a pour tous les goûts ! Votre
            décision ne doit pas dépendre de votre niveau de jeu &#40;qui
            augmentera avec le temps&#41;, mais plutôt du type de pratique et de
            &quot;l’esprit&quot; que vous recherchez :
          </p>
          <ul>
            <li>Est-ce-que vous aimez la comp&eacute;tition ?</li>
            <li>
              Est-ce que vous voulez devenir un &quot;pro&quot; du Football de
              Table ou, simplement, prendre du plaisir sur un baby ?
            </li>
          </ul>
          <p>
            Il est bien sûr possible de passer en cours d’année de la licence
            amateur à la licence compétition.
          </p>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/Licences-Tournois.jpg?alt=media&token=83280c2f-0f59-4403-98b4-a0457f931d73'
            alt='tableau des licences'
            width={723}
            height={606}
            className='mx-auto max-w-[85vw] h-auto'
          />
          <ul>
            <li className='block my-1'>
              <span className='underline'>
                La licence comp&eacute;tition : 100€ &#40;40€ pour les moins de
                18ans&#41;
              </span>
              <br />
              La licence compétition donne accès aux mêmes avantages que la
              licence loisir, et également la possibilité de participer à la
              totalité des tournois de football de table, y compris nationaux et
              internationaux.
            </li>
            <li className='block my-1'>
              <span className='underline'>
                La licence loisirs : 50€ &#40;30€ pour les moins de 18ans&#41;
                <br />
              </span>
              La façon la plus simple et la plus économique que nous vous
              proposons pour découvrir le football de table est la licence
              &quot;loisir&quot;.
            </li>
            <li className='block my-1'>
              <span className='underline'>
                La licence d&eacute;couverte : 2€
              </span>
              <br />
              Cette licence vous permettra de participer aux tournois &quot;Open
              Decouverte&quot; &#40;c’est à dire locaux&#41; et aux tournois non
              officiels &#40;DYP&#41;.
            </li>
          </ul>
          <p className='font-semibold'>
            Si vous n’arrivez pas à vous décider pas de panique, un responsable
            de club sera ravi de vous conseiller.
          </p>
        </Accordeon>

        <Accordeon header='2️⃣- inscrivez vous au club'>
          <ol className='list-decimal list-inside'>
            <li className='my-1'>
              Rendez vous sur la plateforme officielle de la Fédération
              Française de Football de Table CORAL :<br />
              <a
                href='https://www.ffft.fr/coral-guide-dutilisation-pour-les-joueurs'
                className='text-blue-600'
              >
                <MdLink className='mr-1 inline align-middle' /> Mode
                d&apos;Emploi
              </a>
            </li>
            <li className='my-1'>
              R&eacute;glez le montant de votre licence par virement bancaire au
              RIB :<br />
              FR76 1005 7192 1300 0207 5500 111
            </li>
          </ol>
        </Accordeon>

        <Accordeon header='3️⃣- la licence'>
          <p>
            Le TFT s&apos;occupe de toutes les démarches administratives. <br />{' '}
            Nous tenons à préciser, qu’au sein du club les parties sont
            gratuites cependant il est nécessaire de se procurer ses propres
            poignées &#40;en vente au sein du club&#41;. <br /> Il ne vous reste
            plus qu’à jouer !
          </p>
        </Accordeon>
      </div>
    </main>
  )
}

export default page
