export type CardType = {
  id: number;
  name: string;
  description: string;
  price: number;
  producer: string;
  country: string;
  image: string;
  details: string;
};

export type dataCardsType = CardType[];

const initialState: dataCardsType = [
  {
    id: 1,
    name: "Product1",
    description: "Description 1",
    price: 10,
    producer: "GreenWay",
    country: "Russia",
    image: "images/product1.jpeg",
    details:
      "Incididunt deserunt adipisicing consectetur elit voluptate nisi mollit. Proident anim id ea Lorem quis laboris proident consectetur fugiat aliqua in. Aliqua irure sunt sit tempor nulla aute voluptate. Proident mollit incididunt id culpa anim pariatur sit excepteur laborum. Occaecat amet veniam minim nisi. Dolore Lorem nisi aliquip mollit eiusmod exercitation cillum Lorem fugiat id ullamco irure incididunt est. Id quis sint dolore cupidatat ad reprehenderit do aliquip.",
  },
  {
    id: 2,
    name: "Product2",
    description: "Description 2",
    price: 20,
    producer: "Ikea",
    country: "Belarus",
    image: "images/product2.jpeg",
    details:
      "Ex adipisicing nisi enim magna occaecat dolor tempor. Ad tempor ea eiusmod enim quis velit pariatur nostrud id. Et qui esse voluptate Lorem laborum cillum elit dolore commodo eiusmod. Mollit aliquip aliquip reprehenderit laboris ea veniam est officia sit esse.Consectetur commodo exercitation sint non. Deserunt mollit quis irure est eu nostrud. Laborum cillum nostrud fugiat nisi tempor laboris aute. Minim nulla irure dolore sint nulla elit. Occaecat labore voluptate consequat consequat aliqua est occaecat. Dolore qui sunt aliquip adipisicing excepteur sint proident ut cillum excepteur nostrud consectetur duis. Nulla deserunt reprehenderit Lorem ex et magna Lorem veniam eu sit amet fugiat duis sint.",
  },
  {
    id: 3,
    name: "Product3",
    description: "Description 3",
    price: 3000,
    producer: "Producer 3",
    country: "France",
    image: "images/product3.jpeg",
    details:
      "Incididunt magna veniam in commodo cupidatat proident reprehenderit aliqua laborum irure sunt deserunt dolore. Ea officia nulla consequat labore cupidatat voluptate et nisi est. Id do ea non eiusmod et ut. Nulla ipsum in et deserunt aliqua magna deserunt ullamco laborum voluptate nostrud ipsum nulla. Nostrud consectetur anim dolor labore ullamco. Sit velit exercitation sint non aliqua amet ea aliquip cillum fugiat pariatur. In ipsum ullamco est ullamco.Pariatur nisi dolore cillum cillum tempor proident magna fugiat enim ex. Excepteur deserunt tempor commodo enim nulla ut dolor adipisicing in anim. Do ex sunt adipisicing laboris do voluptate in id qui Lorem. Aliquip ut minim enim et consequat elit reprehenderit excepteur dolor mollit labore id et duis.Nostrud consectetur nisi proident elit id duis do quis. Adipisicing et tempor labore incididunt exercitation in. Deserunt cupidatat ut cillum nisi officia laborum amet. Incididunt voluptate culpa dolor elit proident exercitation mollit eu. Sit tempor id do do. Irure culpa proident consequat duis deserunt ullamco mollit reprehenderit sunt eiusmod.",
  },
  {
    id: 4,
    name: "Product4",
    description: "Description 3",
    price: 30,
    producer: "Mega Mega Mega Producer 4",
    country: "France",
    image: "images/product4.png",
    details:
      "Magna adipisicing pariatur velit consequat et tempor cupidatat sint voluptate ad enim et occaecat. Consequat consectetur eiusmod magna excepteur id qui laboris elit consectetur eiusmod. Ad excepteur duis aliqua aute aliqua mollit pariatur quis excepteur ipsum minim tempor. Ea anim qui sint commodo adipisicing sint ea occaecat ad consectetur.Sit in sunt adipisicing eu ipsum do nostrud. In veniam voluptate nostrud occaecat laborum ea et elit nostrud ex ipsum. Voluptate aliquip sint sunt ad pariatur incididunt anim proident sit.Enim incididunt in aute occaecat sit proident adipisicing eiusmod aliqua. Ipsum do non amet quis exercitation consectetur labore officia consectetur. Cupidatat ea excepteur amet ex incididunt esse reprehenderit nisi elit laboris consectetur.",
  },

  {
    id: 5,
    name: "Product5",
    description: "Description 3",
    price: 99.99,
    producer: "Producer 5",
    country: "France",
    image: "images/product5.png",
    details:
      "Magna velit labore elit Lorem amet consectetur elit sunt laboris anim deserunt anim amet ipsum. Ut cupidatat dolore labore exercitation. Consequat sit velit proident labore Lorem proident culpa anim sunt qui duis dolore.",
  },

  {
    id: 6,
    name: "Product6",
    description: "Description 3",
    price: 30,
    producer: "Producer 6",
    country: "France",
    image: "images/product6.jpeg",
    details:
      "Non reprehenderit labore ut commodo ipsum magna quis ex veniam sit est. Commodo elit ea do et deserunt occaecat aliqua laborum. Ea deserunt aliqua non commodo. Incididunt pariatur anim ut sit nulla do et. Sunt id aliqua fugiat esse mollit. Reprehenderit consectetur ipsum velit minim dolor quis irure cillum magna nisi id veniam.Ad dolor do enim anim ullamco consequat officia in consectetur ea minim ea velit. Aliqua non aliqua officia deserunt aliquip culpa. Culpa laboris esse fugiat non non. Fugiat deserunt incididunt consequat quis ad eu aute consectetur ipsum cupidatat officia occaecat. Exercitation Lorem anim magna in enim incididunt quis non mollit ad. In commodo quis cillum ipsum quis et nostrud labore ipsum qui.",
  },

  {
    id: 7,
    name: "Product7",
    description: "Description 3",
    price: 30,
    producer: "Producer 7",
    country: "France",
    image: "images/product7.png",
    details:
      "Ullamco dolor consectetur pariatur culpa elit laborum nisi. Irure aliqua et aute irure deserunt officia duis ad fugiat incididunt tempor elit. Et fugiat velit exercitation aute ipsum elit in eu magna.",
  },

  {
    id: 8,
    name: "Product8",
    description: "Description 3",
    price: 455,
    producer: "Producer 8",
    country: "US",
    image: "images/product8.png",
    details:
      "Pariatur elit officia deserunt excepteur minim sunt excepteur culpa deserunt pariatur exercitation ex veniam officia. Proident eu excepteur laboris ipsum consectetur excepteur dolor sit voluptate duis. Laborum fugiat fugiat nulla tempor quis enim enim elit Lorem cupidatat magna et. Quis sunt ea ad et. Nisi consequat quis do do ad adipisicing nostrud in adipisicing veniam nostrud eiusmod exercitation aliqua. Aute ad labore non et ea labore sunt cupidatat voluptate nostrud Lorem do ut.",
  },
];

export const cardsReducer = (
  state: dataCardsType = initialState,
  action: any
): dataCardsType => {
  switch (action.type) {
    default:
      return state;
  }
};
