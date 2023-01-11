const cardObjectDefinitions = [
  { id: 1, imagePath: "/hunt_the_ace/images/card-KingHearts.png" },
  { id: 2, imagePath: "/hunt_the_ace/images/card-JackClubs.png" },
  { id: 3, imagePath: "/hunt_the_ace/images/card-QueenDiamonds.png" },
  { id: 4, imagePath: "/hunt_the_ace/images/card-AceSpades.png" },
];

{
  /* <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img
                src="/hunt_the_ace/images/card-JackClubs.png"
                alt=""
                class="card-img"
              />
            </div>
            <div class="card-back">
              <img
                src="/hunt_the_ace/images/card-back-Blue.png"
                alt=""
                class="card-img"
              />
            </div>
          </div>
        </div> */
}

function createCard(cardItem) {
  //create div elements that make up a card
  const cardElem = createElement("div");
  const cardInnerElem = createElement("div");
  const cardFrontElem = createElement("div");
  const cardBackElem = createElement("div");

  //create front and back image elements for a card
  const cardFrontImg = createElement("img");
  const cardBackImg = createElement("img");
}

function createElement(elemType) {
  return document.createElement(elemType);
}
