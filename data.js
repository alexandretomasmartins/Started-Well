let conversation = {
  question: "Salut, j'ai appris que t'étais mon tuteur 😊",
  reponses: [
    {
      choix: "C'est ça !",
      complete: "Oui, c'est bien moi ! Je m'apelle Max.",
      question: "Enchantée. Moi c'est Mary.",
      reponses: [
        {
          choix: 'Ça va?',
          complete: 'Ça va sinon? Tu te plais ici?',
          question: 'Oui, ça va je me sens un peu seule mais ça ira avec le temps!',
          reponses: [
            {
              choix: 'ba rien',
              complete: 'je fé rien',
              question: ' c cool de rien fair ?',
              reponses: [
                {
                  choix: ''
                }
              ]
            },
          ]
        },
        {
          choix: 'vasy rdv',
          complete: 'sa te  di 1 ciné',
          ending: 'tu la pécho gg',
          dernierMessage: 'jtm'
        }
      ]
    },
    {
      choix: "Heu oui c'est moi ^^",
      complete: "Oui oui, c'est moi. Je suis là si jamais tu as besoin...",
      question: "Yes, je trouve ça cool d'avoir quelqu'un à qui poser des questions quand on veut !",
      reponses: [
        {
          choix: "Ça c'est sûr!",
          complete: "Je suis d'accord! Si un jour t'as envie de parler, je suis là.",
        },
        {
          choix: "Ouais c'est plutôt cool.."
        },
      ]
    },

    {
      choix: 'Heu..',
      complete: "Heu.. je dois pas être au courant.",
      question: "Ah... Je pensais que tu l'étais. Je suis nouvelle du coup le proviseur t'a désigné en tant que tuteur pour moi.",
      reponses: [
        {
          choix: ''
        },
      ]
    }
  ]
};

const conversElement = document.getElementById('conversation');

game(conversation);

function game(option) {
  // ON AFFICHE LA QUESTION
  const message = document.createElement('p');
  message.classList.add('botMessage');
  message.innerText = option.question;
  conversElement.appendChild(message);

  // BOUCLE POUR CHAQUE OPTION POSSIBLE
  for (let i = 0; i < option.reponses.length; i++) {
    const possibilite = option.reponses[i];

    // Crée un bouton pour l'option possible
    const bouton = document.createElement('button');
    bouton.innerText = possibilite.choix;
    bouton.className = 'choix';

    // Gestion du click d'une option
    bouton.addEventListener('click', function(event) {
      // On affiche la réponse complète du mec
      const reponse = document.createElement('p');
      reponse.classList.add('userMessage');
      reponse.innerText = possibilite.complete;
      conversElement.appendChild(reponse);

      if (possibilite.ending) {
        // C FINI
        // On affiche la dernière réponse de la fille
        const messageFin = document.createElement('p');
        messageFin.innerText = possibilite.dernierMessage;
        conversElement.appendChild(messageFin);

        // On affiche le type de fin au joueur
        alert(possibilite.ending);

        // on kill la fonction pour finir le jeu avec return;
        return;
      } else {
        // SUPPRIMER LES BOUTONS
        const boutons = document.querySelectorAll('button.choix');
        boutons.forEach(function(bouton) {
          bouton.remove();
        });

        game(possibilite);
      }
    });

    conversElement.appendChild(bouton);
  }
}
