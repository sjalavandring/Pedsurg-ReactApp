import dir1 from "../img/DirectionsCardsList/dir1.jpg";
import dir2 from "../img/DirectionsCardsList/dir2.jpg";
import dir3 from "../img/DirectionsCardsList/dir3.jpg";

import pylorostenoz_1 from "../img/DirectionsCardsList/Pylorostenoz/Pylorostenoz_1.jpg"
import pylorostenoz_2 from "../img/DirectionsCardsList/Pylorostenoz/Pylorostenoz_2.jpg"
import pylorostenoz_3 from "../img/DirectionsCardsList/Pylorostenoz/Pylorostenoz_3.jpg"

let directionsDB =   [
				{
					"id": 1,
					"name": "Name 1",
					"links": [pylorostenoz_1, pylorostenoz_2, pylorostenoz_3],
					"text": `Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Nostrum sit consequatur vitae ipsa dignissimos, tempora dolores magnam magni. Totam suscipit itaque maxime mollitia ducimus, pariatur nostrum dolores vero qui in.`	
				},

				{
					"id": 2,
					"name": "Name 2",
					"links": dir2,
					"text": "2Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Temporibus incidunt ipsam quo harum fugit expedita, rem id, autem error tempora minus repellat obcaecati asperiores ipsum rerum dolore aspernatur cum minima?Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Temporibus incidunt ipsam quo harum fugit expedita, rem id, autem error tempora minus repellat obcaecati asperiores ipsum rerum dolore aspernatur cum minima? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Temporibus incidunt ipsam quo harum fugit expedita, rem id, autem error tempora minus repellat obcaecati asperiores ipsum rerum dolore aspernatur cum minima?"	
				},
				{
					"id": 3,
					"name": "Name 3",
					"links": dir3,
					"text": "3Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Temporibus incidunt ipsam quo harum fugit expedita, rem id, autem error tempora minus repellat obcaecati asperiores ipsum rerum dolore aspernatur cum minima?Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Temporibus incidunt ipsam quo harum fugit expedita, rem id, autem error tempora minus repellat obcaecati asperiores ipsum rerum dolore aspernatur cum minima?"
				}
			]

export default directionsDB;
