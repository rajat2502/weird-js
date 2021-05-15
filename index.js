// logic to get data and add cards
fetch('./data.json')
  .then((res) => res.json())
  .then((res) => {
    const content = document.getElementById('content');
    let data = '';

    res.forEach((el) => {
      data += `
        <div class="flex flex-col items-center p-2">
          <h1 class="text-blue-600 pt-4 pb-2 font-medium text-2xl">${el.title}</h1>
          <iframe
            src="https://carbon.now.sh/embed/${el.iframeURL}"
            height=${el.height}
            width=680
            style="max-width: 100%; border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
        </div>
      `;
    });

    content.innerHTML = data;
  });
