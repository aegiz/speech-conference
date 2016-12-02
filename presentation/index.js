// Import React
import React from "react";

// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Cite,
	CodePane,
	Deck,
	Fill,
	Heading,
	Image,
	Layout,
	Link,
	ListItem,
	List,
	Markdown,
	Quote,
	Slide,
	Spectacle,
	Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
	"summary": require("../assets/summary.jpg"),
	"bde": require("../assets/bde.jpg"),
	"eseo": require("../assets/eseo.png"),
	"umaine": require("../assets/umaine.png"),
	"learning": require("../assets/learning.jpg"),
	"freedom": require("../assets/freedom.jpg"),
	"tiger": require("../assets/tiger.png"),
	"freee": require("../assets/freee.png"),
	"mirror": require("../assets/mirror.png"),
	"conclusion": require("../assets/conclusion.png"),
	"friday": require("../assets/friday.jpg"),
	"beach": require("../assets/beach.jpg"),
	"casquette": require("../assets/casquette.jpg"),
	"possible": require("../assets/possible.png"),
	"freelance_presentation": require("../assets/freelance_presentation.png"),
	"marathon": require("../assets/marathon.jpg"),
	"rsi": require("../assets/rsi.png"),
	"revolution": require("../assets/revolution.jpg"),
	"lucky": require("../assets/lucky.png"),
	"hippie": require("../assets/hippie.png"),
	"tech": require("../assets/tech.png"),
	"backpack": require("../assets/backpack.png"),
	"eseo2": require("../assets/eseo_2.png"),
	"workshop": require("../assets/workshop.png"),
	"mangrove": require("../assets/mangrove.png"),
	contact: require("../assets/contact.png"),
	logo: require("../assets/formidable-logo.svg")
};

preloader(images);

const theme = createTheme({
	primary: "#ff2f2f",
	yellow: "#f8c81a"
});

export default class Presentation extends React.Component {
	render() {
		return (
			<Spectacle theme={theme}>
				<Deck transition={["zoom", "slide"]} transitionDuration={700}>
					<Slide transition={["zoom"]} bgImage={images.summary.replace("/", "")} bgDarken={0.5} notes="<ul><li>Dernières conférences : des gens protestait sur l'orientation vers des SSII</li></ul>">
						<Heading size={1} fit caps lineHeight={1} textColor="yellow">
							Freelance
						</Heading>
						<Heading textSize="4.4em" size={2} caps textColor="white">
							A new hope?
						</Heading>
						<Text textSize="1.5em" margin="20px 0px 0px" bold textColor="yellow">Adrien Rahier - 1 Dec 2016</Text>
					</Slide>
					<Slide transition={["zoom", "fade"]}>
						<Heading size={1} caps textColor="white">
							Au sommaire
						</Heading>
						<List>
							<Appear fid="1">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Background
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="2">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Le freelance, présentation
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="3">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										De l'autre côté du miroir
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="4">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										La liberté
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="5">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Des conseils / Free
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="6">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Des conseils / ESEO
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="7">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Des questions?
									</Heading>
								</ListItem>
							</Appear>
						</List>
					</Slide>
					<Slide transition={["slide"]} bgImage={images.eseo.replace("/", "")} bgDarken={0.5}>
						<Heading size={4} caps fit textColor="white">
							Background
						</Heading>
					</Slide>
					<Slide transition={["slide"]} bgColor="black" notes="<ul><li>ESEO => Pas hyper brillant, Activité asso</li><li>D'ailleurs c'était globalement le maximum que j'aurais pu faire</li><li>Pur produit de la machine ESEO</li></ul>">
						<Heading size={4} caps textColor="white" margin="0 0 20px 0">
								Quelques mots d'introduction ...
						</Heading>
						<Image src={images.eseo2.replace("/", "")} margin={5} height="293px"/>
						<Appear fid="1">
							<Image src={images.bde.replace("/", "")} margin={5} height="293px"/>
						</Appear>
						<Appear fid="2">
							<Image src={images.backpack.replace("/", "")} margin={5} height="293px"/>
						</Appear>
						<Appear fid="3">
							<Image src={images.workshop.replace("/", "")} margin={5} height="293px"/>
						</Appear>
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<Heading size={4} caps textColor="white">
							Mon parcours
						</Heading>
						<Appear fid="1">
							<Image src={images.umaine.replace("/", "")} margin={5} height="293px"/>
						</Appear>
						<Appear fid="2">
							<Image src={images.learning.replace("/", "")} margin={5} height="293px"/>
						</Appear>
						<Appear fid="3">
							<Image src={images.tiger.replace("/", "")} margin={5} height="293px"/>
						</Appear>
						<Appear fid="4">
							<Image src={images.freee.replace("/", "")} margin={5} height="293px"/>
						</Appear>
					</Slide>
					<Slide transition={["slide"]} bgImage={images.freelance_presentation.replace("/", "")} bgDarken={0.5}>
						<Heading size={4} caps fit textColor="white">
							Le freelance, présentation
						</Heading>
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<Heading size={4} caps textColor="white">
							What my friend think I do
						</Heading>
						<Image src={images.beach.replace("/", "")} margin={10}/>
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<Heading size={4} caps textColor="white">
							What my mom thinks I do
						</Heading>
						<Image src={images.hippie.replace("/", "")} margin={10} />
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<Heading size={4} caps textColor="white">
							What society think I do
						</Heading>
						<Image src={images.revolution.replace("/", "")} margin={10} />
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<Heading size={4} caps textColor="white">
							What I think I do
						</Heading>
						<Image src={images.lucky.replace("/", "")} margin={10} />
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<Heading size={4} caps textColor="white">
							What I really do (sans costard)
						</Heading>
						<Image src={images.casquette.replace("/", "")} margin={10} />
					</Slide>
					<Slide transition={["slide"]} bgColor="primary">
						<Heading size={4} caps textColor="white">
							Une journée de boulot typique
						</Heading>
						<List>
							<Appear fid="1">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										8h: Wake up
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="2">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										8h30: Code
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="3">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										12h: Break
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="4">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										13h: Call & Prospection
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="5">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										16h: Code
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="6">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Repeat
									</Heading>
								</ListItem>
							</Appear>
						</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<Heading size={4} caps textColor="white">
							... En vrai il n'y a pas vraiment de journées typiques
						</Heading>
						<Appear fid="1">
							<Heading size={5} textColor="white" margin="20px 0 0 0">
								Une constant cependant: se battre avec le RSI
							</Heading>
						</Appear>
						<Appear fid="2">
							<Image src={images.rsi.replace("/", "")} margin="20px 0 0 0" />
						</Appear>
					</Slide>
					<Slide transition={["slide"]} bgImage={images.mirror.replace("/", "")} bgDarken={0.5}>
						<Heading size={4} caps fit textColor="white">
							De l'autre côté du miroir
						</Heading>
						<Appear fid="1">
							<Image src={images.friday.replace("/", "")} margin={5} height="545px"/>
						</Appear>
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<BlockQuote>
							<Quote>A l'ESEO on aime tellement les 35H qu'on les fait deux fois.</Quote>
							<Cite>Un illustre anonyme</Cite>
						</BlockQuote>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" notes="<ul><li>Bail refusé au motif que le logo était trop funky</li></ul>">
						<Heading size={4} caps fit textColor="white">
							D'autres inconvénients
						</Heading>
						<List>
							<Appear fid="1">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin="15px 0 0 0">
										Pression financière
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="2">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin="15px 0 0 0">
										Manque de reconnaissance
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="3">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin="15px 0 0 0">
										Isolement, épuisement
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="4">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin="15px 0 0 0">
										... (Oui oui on dirait une campagne de prévention contre le tabagisme)
									</Heading>
								</ListItem>
							</Appear>
						</List>
					</Slide>
					<Slide transition={["slide"]} bgImage={images.freedom.replace("/", "")} bgDarken={0.5}>
						<Heading size={4} caps fit textColor="white">
							La liberté
						</Heading>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" notes="<ul><li>Anecdote voiture</li><li>Anecdote Adrien J</li><li>Pas beaucoup de temps pour les side project</li><li>S'installer en Hollande</li></ul>">
						<Heading size={4} caps fit textColor="white">
							Des avantages
						</Heading>
						<List>
							<Appear fid="1">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin="15px 0 0 0">
										Si la vie de James bond vous fait rêver...
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="2">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin="15px 0 0 0">
										Une expérience incroyable (résilience, expérimentation, vous êtes manager de vous même et de vos projets).
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="3">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin="15px 0 0 0">
										... Des side project
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="4">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin="15px 0 0 0">
										... De la souplesse aussi
									</Heading>
								</ListItem>
							</Appear>
						</List>
					</Slide>
					<Slide transition={["slide"]} bgImage={images.possible.replace("/", "")} bgDarken={0.5}>
						<Heading size={4} caps fit textColor="white">
							Quelques conseils / Free
						</Heading>
					</Slide>
					<Slide transition={["slide"]} bgColor="black" notes="<ul><li>Bien choisir ses clients</li><li>Faire une période d'essai</li><li>Faire des specs et des devis</li><li>Anecdote mauvaise expérience Dutch</li></ul>">
						<BlockQuote>
							<Quote>If you are good at something never do it for free</Quote>
							<Cite>The joker</Cite>
						</BlockQuote>
					</Slide>
					<Slide transition={["slide"]} bgColor="black" notes="<ul><li>Avoir de l'argent de côté</li><li>Interroger vos pairs</li></ul>">
						<Heading size={4} caps fit textColor="white">
							Ne vous laissez pas avoir par le bullshit marketing
						</Heading>
						<Image src={images.tech.replace("/", "")} margin="30px 0 0 0" />
					</Slide>
					<Slide transition={["slide"]} bgColor="black" notes="<ul><li>Un marathon qui se court à la vitesse d'un sprint</li><li>Vous avancer sans filet</li><li>Heureusement que Kirsten est là</li></ul>">
						<Heading size={4} caps fit textColor="white">
							Connaissez-vous, vos méthodes, vos limites
						</Heading>
						<Image src={images.marathon.replace("/", "")} margin="30px 0 0 0" />
					</Slide>
					<Slide transition={["slide"]} bgColor="primary">
						<Heading size={4} caps fit textColor="white">
							D'autres feedback
						</Heading>
						<List>
							<Appear fid="1">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Pour réussir il faut en vouloir (Règle des 95%-5%)
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="2">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Il faut savoir dire non, être select...
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="3">
								<ListItem>
									<Heading size={4} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										...Etre agile, resister à la pression, être fin négociateur
									</Heading>
								</ListItem>
							</Appear>
						</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="black" notes="<ul><li>Il vont faire un bootcamp dans pas très longtemps...</li></ul>">
						<Heading size={4} caps fit textColor="white">
							Trouver votre tribue
						</Heading>
						<Image src={images.mangrove.replace("/", "")} margin="30px 0 0 0" />
					</Slide>
					<Slide transition={["slide"]} bgImage={images.eseo.replace("/", "")} bgDarken={0.5}>
						<Heading size={4} caps fit textColor="white">
							Quelques conseils / ESEO
						</Heading>
					</Slide>
					<Slide transition={["slide"]} notes="<ul><li>J'ai des amis ingés qui disent qu'ils auraient pu se passer de l'ESEO=> faux</li><li>Efficacité, multi-tâche, organisation, rage de vaincre (quand l'on veut l'on peut), bosser sur des trucs sur lesquels l'on a pas envie de bosser, connaître ses limites</li><li>Bridge, langue</li></ul>">
						<Heading size={4} caps fit textColor="white">
							Feedback / ESEO
						</Heading>
						<List>
							<Appear fid="1">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
									Votre réseau, votre force
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="2">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Ce ne sont pas plus talentueux à l'ESEO qui réussissent
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="3">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										L'ESEO vous apporte en réalité plein de chose
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="4">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Anticiper le prochain coup, sortez de votre zone de confort
									</Heading>
								</ListItem>
							</Appear>
							<Appear fid="5">
								<ListItem>
									<Heading size={5} textColor="rgba(0, 0, 0, 0.57)" margin={5}>
										Si vous voulez faire des side projects c'est maintenant 
									</Heading>
								</ListItem>
							</Appear>
						</List>						
					</Slide>
					<Slide transition={["slide"]} bgImage={images.conclusion.replace("/", "")} bgDarken={0.5}>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary">
						<Heading size={4} caps fit textColor="white">
							Questions, contact
						</Heading>
						<Image src={images.contact.replace("/", "")} margin="40px 0 0 0" />
					</Slide>
				</Deck>
			</Spectacle>
		);
	}
}
