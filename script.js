// Method 1

// window.addEventListener('keydown', (e)=> {
//     const insert = document.getElementById('insert');

//     insert.innerHTML = `
//     <div class="key">
//         ${e.key === ' ' ? 'Space': e.key }
//         <small>e.key</small>
//     </div>

//     <div class="key">
//         ${e.keyCode}
//         <small>e.keyCode</small>
//     </div>

//     <div class="key">
//         ${e.code}
//         <small>e.code</small>
//     </div>`
// });

// Method 2
let typedText = '';

function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    
    if (e.key === 'Backspace') {
    typedText = typedText.slice(0, -1);
    } else if (e.key.length === 1 || e.key === ' ') {
    
    typedText += e.key === ' ' ? ' ' : e.key;
    }

    insert.innerHTML = '';

    
    const heading = document.createElement('h1');
    heading.textContent = typedText.trim() === '' ? 'Press any key to get the keycode' : typedText;
    insert.appendChild(heading);

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space': e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    }
    
    for (let key in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');
        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);

        insert.appendChild(div);
    }
    
}

window.addEventListener('keydown', showKeyCodes);