import {API} from './api.js';
import * as UI from './ui.js';

UI.searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    // Read the form data
    const artistName = UI.artistInput.value,
          songName = UI.songInput.value;

    if(songName === '' || artistName === ''){
        UI.messageDiv.innerHTML = 'Error..... Both Fields are mandatory';
        UI.messageDiv.classList.add('.error');

        setTimeout(() => {
            UI.messageDiv.innerHTML='';
            UI.messageDiv.remove('.error');
        },3000);
    }else{
        // Query the RestAPI 
        const lyric = new API(artistName,songName);
        lyric.queryAPI()
            .then(data => {
                if(data.lyric.lyrics){
                let result = data.lyric.lyrics;
                UI.resultDiv.textContent = result;
                }else{
                    UI.messageDiv.innerHTML = 'Error..... Both Fields are mandatory';
                    UI.messageDiv.classList.add('.error');
            
                    setTimeout(() => {
                        UI.messageDiv.innerHTML='';
                        UI.messageDiv.remove('.error');
                        UI.searchForm.reset();
                    },3000); 
                }
            })
    }

})