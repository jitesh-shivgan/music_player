import song1 from './assets/in-the-forest-2-21402.mp3'
import { v4 as uuidv4 } from 'uuid';


function chillHop(){
    return [
        {
            name: 'Beaver Creek',
            cover: 'https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg',
            artist: 'cocabona, Emperose',
            audio: song1,
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true
        },
        {
            name: 'Beaver Creek',
            cover: 'https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg',
            artist: 'cocabona, Emperose',
            audio: song1,
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Beaver Creek',
            cover: 'https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg',
            artist: 'cocabona, Emperose',
            audio: song1,
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false
        }
    ]
}

export default chillHop;