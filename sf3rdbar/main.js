var i = 0;
var level = 0;
var DisplayCount = 0;

let params = (new URL(document.location)).searchParams;
let streamer = params.get('streamName'); // your twitch username
let command = params.get('commandName'); // name of the in chat command 
let timer = params.get('coolDown'); // timer in seconds 


ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( (flags.broadcaster || flags.mod)  && command === command ) {
    if(DisplayCount==0 || extra.sinceLastCommand.any > timer*1000 ) {
      up();
      console.log("lol")
      }
}}
  

  ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    console.log( 
       ` ${user}: ${message}`);
  }

  ComfyJS.Init(streamer);

  var bar = new ProgressBar.Line(progress, {
    strokeWidth: 20,
    easing: 'easeInOut',
    duration: 1400,
    color: '#04d7fc',
    svgStyle: {width: '100%', height: '100%'},
    
  });
  function up(){
    if(i<10){
    i++;
    DisplayCount++;
    bar.animate(-i/10);
    }
    else{
      i=1;
      level++;
      DisplayCount++;
      bar.animate(0);
    }
    document.getElementById("count").innerHTML = level;
    document.getElementById("totalcount").innerHTML = DisplayCount;

  }
