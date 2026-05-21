import express from 'express';

const app = express();

const posts = [
    {
        titolo: 'Benvenuti nel blog dei cani',
        contenuto: 'In questo spazio parleremo di razze, cure e curiosita sul mondo canino.',
        immagine: 'https://www.b2x.it/rest/images/2023/11/15/1488336.jpg?minImageFormat=@1x',
        tags: ['cani', 'blog', 'intro']
    },
    {
        titolo: 'Le 5 razze piu affettuose',
        contenuto: 'Una selezione di cani noti per il loro carattere dolce e socievole.',
        immagine: 'https://exclusion.it/wp-content/uploads/2024/02/cani-da-lavoro.jpeg',
        tags: ['razze', 'famiglia', 'consigli']
    },
    {
        titolo: 'Passeggiate quotidiane: quanto durano?',
        contenuto: 'Scopri come adattare durata e intensita delle uscite in base all eta del cane.',
        immagine: 'https://media-assets.vanityfair.it/photos/662a2ee6aeb0b5f1d1d755b3/16:9/w_2560%2Cc_limit/Parso.jpg',
        tags: ['passeggiate', 'attivita', 'salute']
    },
    {
        titolo: 'Alimentazione corretta per il tuo cane',
        contenuto: 'Linee guida base su porzioni, frequenza dei pasti e ingredienti da evitare.',
        immagine: 'https://www.naturepetshop.it/wp-content/uploads/cibo-secco-per-cani-300x215.jpg',
        tags: ['alimentazione', 'benessere', 'veterinario']
    },
    {
        titolo: 'Giochi intelligenti per cani energici',
        contenuto: 'Idee semplici per stimolare mente e corpo del tuo cane anche in casa.',
        immagine: 'https://www.lucafamilydogs.it/wp-content/uploads/2018/11/giochi-cane.jpg',
        tags: ['giochi', 'addestramento', 'energia']
    }
];

app.get('/', (request, response) => {
    response
        .json('server del mio blog');
})



app.listen(3000, (error) => {
    if (error) {
        console.error('server error');
    } else {
        console.log("server live");
    }
})