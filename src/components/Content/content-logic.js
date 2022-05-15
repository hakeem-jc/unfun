// TODO Fetch quotes from server
const quotes = [
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

export const fetchQuote = () => quotes[Math.floor(Math.random() * quotes.length)];