const english_quotes = [
    {"id":1,"quote":"Trying is the first step toward failure.","author":"Homer Simpson"},
    {"id":2,"quote":"I am sure the universe is full of intelligent life. It's just been too intelligent to come here","author":"Arthur C. Clarke"},
    {"id":3,"quote":"Everyone has a purpose in life. Perhaps yours is watching television.","author":"David Letterman"},
    {"id":4,"quote":"Always remember that you are absolutely unique. Just like everyone else.","author":"Margaret Mead"},
    {"id":5,"quote":"Never underestimate the power of stupid people in large groups.","author":"George Carlin"},
    {"id":6,"quote":"I am free of all prejudice. I hate everyone equally.","author":"W.C. Fields"},
    {"id":7,"quote":"I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal.","author":"Jane Austen"},
    {"id":8,"quote":"Light travels faster than sound. This is why some people appear bright until you hear them speak.","author":"Alan Dundes"},
    {"id":9,"quote":"I’ve developed a new philosophy. I only dread one day at a time.","author":"Charles M. Schulz"},
    {"id":10,"quote":"Everything happens for a reason. Sometimes the reason is you're stupid and make bad decisions.","author":"Marion G. Harmon"},
]

const spanish_quotes = [
    {"id":1,"quote":"Intentar es el primer paso hacia el fracaso.","author":"Homer Simpson"},
    {"id":2,"quote":"Estoy seguro de que el universo está lleno de vida inteligente. Ha sido demasiado inteligente para venir aquí","author":"Arthur C. Clarke"},
    {"id":3,"quote":"Todos tienen un propósito en la vida. Quizás el tuyo está viendo televisión.","author":"David Letterman"},
    {"id":4,"quote":"Siempre recuerde que usted es absolutamente único. Cómo todo el mundo.","author":"Margaret Mead"},
    {"id":5,"quote":"Nunca subestimes el poder de las personas estúpidas en grupos grandes.","author":"George Carlin"},
    {"id":6,"quote":"Estoy libre de todos los prejuicios. Odio a todos por igual.","author":"W.C. Fields"},
    {"id":7,"quote":"No quiero que la gente esté muy agradable, ya que me ahorra la molestia de gustarles mucho.","author":"Jane Austen"},
    {"id":8,"quote":"La luz viaja más rápido que el sonido. Es por eso que algunas personas parecen brillantes hasta que las escuchas hablar.","author":"Alan Dundes"},
    {"id":9,"quote":"He desarrollado una nueva filosofía. Solo temo un día a la vez.","author":"Charles M. Schulz"},
    {"id":10,"quote":"Todo sucede por una razón. A veces la razón es que eres estúpido y tomas malas decisiones.","author":"Marion G. Harmon"},
]

const chooseQuote = (quote_list) => quote_list[Math.floor(Math.random() * quote_list.length)] 

export const fetchQuote = (language) => {
        return language === 'EN' ? chooseQuote(english_quotes) : chooseQuote(spanish_quotes);
    };