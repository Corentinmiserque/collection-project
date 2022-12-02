const collectionSerie = [
    {
        name: "Elite",
        director:"Darío Madrona",
        years:"2018",
        picture: "https://static.wikia.nocookie.net/elite/images/b/b2/Ff76WxLUYAAFH0V.jpg/revision/latest/scale-to-width-down/700?cb=20221028132857&path-prefix=fr",
        genre: "Suspense",
        summary:"Las Encinas est une école privée huppée d’Espagne réservée aux enfants de l’élite. Mais quand leur lycée est détruit, trois adolescents issus de la classe populaire (Samuel, Nadia et Christian) y sont intégrés. Cependant, ils vont vite regretter cette opportunité... La confrontation entre les privilégiés et la classe ouvrière conduira à un meurtre. Qui est le véritable coupable ? Un des nouveaux venus ou quelqu'un d'autre ?",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Netflix_logo.png/800px-Netflix_logo.png",
        link:"https://www.netflix.com/watch/81572773?trackId=14170035",
    },
    {
        name: "Warior Run",
        director:"Simon Barry",
        years:"2020",
        picture: "https://fr.web.img3.acsta.net/pictures/20/06/18/09/35/0755176.jpg",
        genre: "Action",
        summary:"Une jeune femme d'une vingtaine d'années se réveille à la morgue, vivante, avec un artefact implanté dans le dos. Elle découvre qu'elle est maintenant membre d'un ordre ancien qui s'est donné pour mission de combattre les démons sur Terre.",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Netflix_logo.png/800px-Netflix_logo.png",
        link:"https://www.netflix.com/watch/81017338?trackId=14170035",
    },
    {
        name: "Blood and water",
        director:"	Gambit Films",
        years:"2020",
        picture: "https://www.bellanaija.com/wp-content/uploads/2020/05/Blood-and-Water-2-750x600.jpeg",
        genre: "Suspense",
        summary:"Une adolescente obtient son transfert dans le même lycée qu'une jeune fille qu'elle soupçonne d'être sa soeur, enlevée à la naissance 17 ans auparavant.",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Netflix_logo.png/800px-Netflix_logo.png",
        link:"https://www.netflix.com/watch/81256379?trackId=14292320&tctx=1%2C5%2Ca82f484b-a1c3-4c3d-a320-7522000b414e-48877482%2CNES_86FD435FD02AD6E928D430D8EF7363-1D364BE54DB1AF-BB3149E049_p_1669898948224%2CNES_86FD435FD02AD6E928D430D8EF7363_p_1669898948224%2C%2C%2C%2C",
    },
    {
        name: "Blood and water",
        director:"	Gambit Films",
        years:"2020",
        picture: "https://www.bellanaija.com/wp-content/uploads/2020/05/Blood-and-Water-2-750x600.jpeg",
        genre: "Suspense",
        summary:"Une adolescente obtient son transfert dans le même lycée qu'une jeune fille qu'elle soupçonne d'être sa soeur, enlevée à la naissance 17 ans auparavant.",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Netflix_logo.png/800px-Netflix_logo.png",
        link:"https://www.netflix.com/watch/81256379?trackId=14292320&tctx=1%2C5%2Ca82f484b-a1c3-4c3d-a320-7522000b414e-48877482%2CNES_86FD435FD02AD6E928D430D8EF7363-1D364BE54DB1AF-BB3149E049_p_1669898948224%2CNES_86FD435FD02AD6E928D430D8EF7363_p_1669898948224%2C%2C%2C%2C",
    },
]

/*function collectionElement (){
    for (let element of collectionSerie) {
  }
  }
  collectionElement()*/

 
function onload (){

//correction bug body 

let newbody = document.getElementsByTagName("body")[0];

 //creation h1

 let h1 = document.createElement("h1");
 h1.classList.add("h1");
 newbody.appendChild(h1);
 h1.textContent= "Series les plus populaires:"

//création div parent

let parent = document.createElement("div");
parent.classList.add("parent") ;
newbody.appendChild(parent);
   
//création div enfants

    let divNumber

    for( i = 1; i<=9;i++){
        divNumber = document.createElement("div");
        divNumber.classList.add("div","div"+i);
        parent.appendChild(divNumber);

//insertion logo netflix 

        let logoimg = document.createElement("img");
        logoimg.classList.add("logo");
        divNumber.appendChild(logoimg);
        logoimg.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Netflix_logo.png/800px-Netflix_logo.png");
        

//creation div invisible

        let invisible = document.createElement("div");
        invisible.classList.add("invisible");
        divNumber.appendChild(invisible);

//creation h3

        let h3 = document.createElement("h3");
        h3.classList.add("genre");
        invisible.appendChild(h3);

// creation h2

        let h2 = document.createElement("h2");
        h2.classList.add("name");
        invisible.appendChild(h2);

//insertion span h2
        let span = document.createElement("span");
        span.classList.add("years");
        h2.appendChild(span);

// creation h4

        let h4 = document.createElement("h4");
        h4.classList.add("director");
        invisible.appendChild(h4);

// creation p

        let para = document.createElement("p");
        para.classList.add("summary");
      
        invisible.appendChild(para);
        

// creation button
        let button = document.createElement("a");
        button.classList.add("link");
        invisible.appendChild(button);
        button.setAttribute("href","https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Netflix_logo.png/800px-Netflix_logo.png");
        button.textContent= "visionner";
    }

}





  



  
