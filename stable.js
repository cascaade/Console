(() => {
    const scriptOutput = document.createElement('div');
    scriptOutput.style.border = '1px solid #00000077';
    scriptOutput.style.borderRadius = '8px 0 0 0';
    scriptOutput.style.background = '#00000066';
    scriptOutput.style.color = '#eee';
    scriptOutput.style.backdropFilter = 'blur(4px)';
    scriptOutput.style.width = '300px';
    scriptOutput.style.height = '350px';
    scriptOutput.style.position = 'fixed';
    scriptOutput.style.bottom = '0';
    scriptOutput.style.right = '0';
    scriptOutput.style.boxSizing = 'border-box';
    scriptOutput.style.overflow = 'auto';
    scriptOutput.style.display = 'flex';
    scriptOutput.style.flexDirection = 'column';
    scriptOutput.style.gap = '1px';
    document.body.append(scriptOutput);
    
    function prnt(msg, t) {
        const div = document.createElement('span');
        div.style.fontFamily = 'monospace';
        div.style.display = 'block';
        div.style.padding = '8px';

        if (t == 1) {
            div.style.background =  'rgba(100, 100, 100, 0.5)';
            div.style.borderBottom = '4px solid rgb(100, 100, 100)';
        } else if (t == 2) {
            div.style.background =  'rgba(255, 120, 20, 0.5)';
            div.style.borderBottom = '4px solid rgb(255, 120, 20)';
        } else if (t == 3) {
            div.style.background =  'rgba(255, 30, 20, 0.5)';
            div.style.borderBottom = '4px solid rgb(255, 30, 20)';
        } else if (t == 4) {
            div.style.background =  'rgba(120, 30, 150, 0.5)';
            div.style.borderBottom = '4px solid rgb(120, 30, 150)';
        }
        
        div.innerText = String(msg);
        scriptOutput.append(div);
    }
    
    onerror = (e, l, c, s, msg) => {
        prnt(msg + l + ':' + c + ' ' + s, 3)
    }
    
    console.log = (...any) => {
        let str = '';
        any.map(val => str += String(val) + ' ');
        prnt(str, 1)
    }
    
    console.warn = (...any) => {
        let str = '';
        any.map(val => str += String(val) + ' ');
        prnt(str, 2)
    }
    
    console.error = (...any) => {
        let str = '';
        any.map(val => str += String(val) + ' ');
        prnt(str, 3)
    }
    
    console.dir = (...any) => {
        let str = '';
        any.map(val => str += String(val) + ' ');
        prnt(str, 4)
    }
})();