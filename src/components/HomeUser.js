import React, { Component } from 'react';
// import Picture from './Picture';
import Header from './Header';
import PictureList from './PictureList';


class HomeUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			etat: true,
		}
	}

	render() {

		const pictures = [
			{
				title: "King Kong",
				image: "http://img.actucine.com/wp-content/uploads/2017/04/King-Kong.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
				casting: "Tom Cruise, Will Smith & Jean Réno",
				director: "Stanley Kubrick",
				category: "Comedy"
			},
			{
				title: "Godzilla",
				image: "http://star24.tv/wp-content/uploads/2017/05/7b4278828847b86755289d94afce71e6-godzilla-1468643934.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
				casting: "Tom Cruise, Will Smith & Jean Réno",
				director: "Stanley Kubrick",
				category: "Comedy"
			},
			{
				title: "Fourmiz",
				image: "http://aws.vdkimg.com/film/1/0/8/5/108569_backdrop_scale_1280xauto.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
				casting: "Tom Cruise, Will Smith & Jean Réno",
				director: "Stanley Kubrick",
				category: "Comedy"
			},
			{
				title: "Planet of the Apes",
				image: "http://cdn.collider.com/wp-content/uploads/planet-of-the-apes-ending.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
				casting: "Tom Cruise, Will Smith & Jean Réno",
				director: "Stanley Kubrick",
				category: "Comedy"
			},
			{
				title: "Alien",
				image: "http://www.saga-alien-galaxie.com/medias/images/alien-awakening-diapo.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
				casting: "Tom Cruise, Will Smith & Jean Réno",
				director: "Stanley Kubrick",
				category: "Comedy"
			},
			{
				title: "Okja",
				image: "http://www.lepoint.fr/images/2017/05/19/8739991lpw-8740288-article-jpg_4385573.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
				casting: "Tom Cruise, Will Smith & Jean Réno",
				director: "Stanley Kubrick",
				category: "Comedy"
			},
			{
				title: "Jason Bourne",
				image: "https://lasueur.com/wp-content/uploads/2016/08/jason-Bourne.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
				casting: "Tom Cruise, Will Smith & Jean Réno",
				director: "Stanley Kubrick",
				category: "Comedy"
			},
			{
				title: "The Godfather",
				image: "http://ourgoldenage.com.au/wp-content/uploads/2014/04/GAC_GodfatherI.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
				casting: "Tom Cruise, Will Smith & Jean Réno",
				director: "Stanley Kubrick",
				category: "Comedy"
			},
			{
				title: "Tetro",
				image: "http://fr.web.img6.acsta.net/medias/nmedia/18/69/83/73/19187500.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
				casting: "Tom Cruise, Will Smith & Jean Réno",
				director: "Stanley Kubrick",
				category: "Comedy"
			},
			{
				title: "Terminator",
				image: "http://www.blastr.com/sites/blastr/files/3-31%20Lead.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
				casting: "Tom Cruise, Will Smith & Jean Réno",
				director: "Stanley Kubrick",
				category: "Comedy"
			},
		];

		return (
			<div className="HomeUser">
				<Header />
				<div className="-container">
					<PictureList title="My list" pictures={pictures} />
					<PictureList title="Action" pictures={pictures} />
				</div>
			</div>
		)
	}
}

export default HomeUser;