(() => {
    const webdev = {
        console: { tabs: {} }
    };

    webdev.elem = document.createElement('iframe');
    webdev.elem.style.width = '100%';
    webdev.elem.style.height = '100%';
    webdev.elem.style.boxSizing = 'border-box';
    webdev.elem.style.border = 'none';
    webdev.elem.style.flexShrink = 1;

    for (const e of Array.from(document.querySelectorAll('script'))) {
        if (e.src.match('console.js')) {
            e.remove();
        }
    }

    const body = document.createElement('body');

    webdev.elem.srcdoc = document.body.outerHTML;
    body.appendChild(webdev.elem);
    document.body.innerHTML = body.outerHTML;
    document.head.innerHTML = `<head></head>`;

    document.body.style = 'margin: 0; height: 100%; box-sizing: border-box; overflow: hidden; display: flex;'
    document.querySelector('html').style = 'height: 100%; box-sizing: border-box;'

    for (const e of Array.from(document.body.children)) {
        if (e.tagName == 'div') {
            e.remove();
        }
    }

    const panel = webdev.console.elem = document.createElement('div');
    document.body.append(panel);

    panel.style.width = '500px';
    panel.style.background = '#222';
    panel.style.borderLeft = '1px solid #777';
    panel.style.color = '#eee';
    panel.style.font = '14px sans-serif';

    const consoleTabs = webdev.console.tabs.elem = document.createElement('div');
    panel.append(consoleTabs);

    consoleTabs.style.background = '#333';
    // consoleTabs.style.height = '30px';
    consoleTabs.innerText = 'Console';
    consoleTabs.style.textAlign = 'center';
    consoleTabs.style.padding = '6px';
    consoleTabs.style.fontWeight = '900';

    const inputField = webdev.console.input = document.createElement('div');


    // handling inputs;

    webdev.console.display = (type, ...any) => {
        const div = document.createElement('div');
        div.style.padding = '8px';
        div.style.fontFamily = 'monospace';

        if (type == 1) {
            div.style.background =  'rgba(100, 100, 100, 0.5)';
            div.style.borderLeft = '2px solid rgb(100, 100, 100)';
        } else if (type == 2) {
            div.style.background =  'rgba(255, 120, 20, 0.5)';
            div.style.borderLeft = '2px solid rgb(255, 120, 20)';
        } else if (type == 3) {
            div.style.background =  'rgba(255, 30, 20, 0.5)';
            div.style.borderLeft = '2px solid rgb(255, 30, 20)';
        } else if (type == 4) {
            div.style.background =  'rgba(120, 30, 150, 0.5)';
            div.style.borderLeft = '2px solid rgb(120, 30, 150)';
        }

        let str = '';
        any.map(val => str += String(val) + ' ');
        div.innerText = str;
    }

    onerror = (e, l, c, s, msg) => {
        webdev.console.display(3, e, l, c, s, msg);
    }

    console.log = (...any) => {
        webdev.console.display(1, ...any);
    }
})();