const DIV1 = `<div class="insert ins3000">
              Вставка
            </div>`;
const DIV2 = `<div class="insert ins5000">
              Вставка
            </div>`;
const DIV3 = `<div class="insert ins7000">
              Вставка
            </div>`;
const DIV4 = `<div class="insert ins10000">
              Вставка
            </div>`;

function addBlocks() {
  let html = document.getElementsByClassName('entry-content')[0].innerHTML;
  let html0 = html.slice(0, 3001);
  let html1 = html.slice(3001, 5001);
  let html2 = html.slice(5001, 7001);
  let html3 = html.slice(7001, 10001);
  let html4 = html.slice(10001);

  html1 = insert(html1, DIV1, html1.indexOf('<br>') + 4);
  html2 = insert(html2, DIV2, html1.indexOf('<br>') + 4);
  html3 = insert(html3, DIV3, html1.indexOf('<br>') + 4);
  html4 = insert(html4, DIV4, html1.indexOf('<br>') + 4);

  html = html0 + html1 + html2 + html3 + html4;

  document.getElementsByClassName('entry-content')[0].innerHTML = html;
}

function insert(str, substr, pos) {
  let array = str.split('');
  array.splice(pos, 0, substr);
  return array.join('');
}

document.getElementById('btn').addEventListener('click', addBlocks);
