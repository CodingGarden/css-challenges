const state = {
  currentNum: 0,
  lastNum: 0,
};

const elements = {
  title: document.querySelector('#title'),
  img: document.querySelector('#img'),
  num: document.querySelector('#num'),
  img_url: document.querySelector('#img_url'),
};

async function getComic(number = 'latest') {
  elements.title.textContent = 'Loading...';
  elements.img.src = 'https://i.giphy.com/media/sSgvbe1m3n93G/source.gif';
  elements.img.setAttribute('alt', 'loading');
  elements.num.textContent = '...';
  elements.img_url.textContent = 'Loading...';
  const response = await fetch(`https://xkcd.now.sh/?comic=${number}`);
  const json = await response.json();
  if (number === 'latest') {
    state.lastNum = json.num;
  }
  elements.title.textContent = json.title;
  elements.img.src = json.img;
  elements.img.setAttribute('alt', json.alt);
  elements.img.setAttribute('title', json.alt);
  elements.num.textContent = json.num;
  elements.img_url.textContent = json.img;
  state.currentNum = json.num;
}

function enableButtons() {
  document
    .querySelectorAll('.button.first')
    .forEach((button) => {
      button.addEventListener('click', () => {
        getComic(1);
      });
    });

  document
    .querySelectorAll('.button.prev')
    .forEach((button) => {
      button.addEventListener('click', () => {
        if (state.currentNum > 1) {
          getComic(state.currentNum - 1);
        }
      });
    });

  document
    .querySelectorAll('.button.next')
    .forEach((button) => {
      button.addEventListener('click', () => {
        if (state.currentNum < state.lastNum) {
          getComic(state.currentNum + 1);
        }
      });
    });

  document
    .querySelectorAll('.button.random')
    .forEach((button) => {
      button.addEventListener('click', () => {
        getComic(221);
      });
    });

  document
    .querySelectorAll('.button.last')
    .forEach((button) => {
      button.addEventListener('click', () => {
        getComic();
      });
    });
}

getComic()
  .then(enableButtons);
