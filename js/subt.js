const say = [
    "Go to hell",
    "best unblocked games tbh",
    "imagine using this during class",
    "coolmath games can only WISH to be me",
    "hell lowk better",
    "why u looking here go play smt",
    "f;dalkjf;lakhg;lshjtlsjhdf",
    "i <3 typing rando things in javascript",
    "the comma key looks like a comma",
    "xd xd xd xd",
    "you look like a CHAIR",
    "walking my way downtown walking fast pace is fast",
    "reminder to stay hydrated",
    "the best unblocked games",
    "as;ldkfjsdflkjasdflkjhhhhhh",
    "subscribe to dachxd",
    "check my git -> github.com/d3ch",
    "alloy proxy doesn't have safesearch 🤯",
    "this sites sponser is (i dont have a sponser :c)",
    "github carrying this site",
    "shoutout to those who created html",
    "336 dimples are on a single golf ball i think",
    "i may or may not have stolen this from https://lioxryt.github.io/",
  ];
  /*
  hi skidder or person looking at my code
  
  I STOLE THIS CODE FROM https://lioxryt.github.io/

  plez dont sue
  
  
    they're site cool u shd check them out
  */
  var seCode = ['KeyA', 'KeyX', 'KeyE', 'KeyL'];
  var seCodePosition = 0;
  var vid = 'video/content.mp4';
  
  document.addEventListener('keydown', function(event) {
    if (event.code === seCode[seCodePosition]) {
      seCodePosition++;
      if (seCodePosition === seCode.length) {
        document.getElementById('subtitle').innerHTML = '<video  src="' + vid + '" width="77" height="43" autoplay loop></video>';
        seCodePosition = 0;
      }
    } else {
      seCodePosition = 0;
    }
  });
  
  
  
  const changeSub = (num) => {
    document.getElementById("subtitle").innerHTML = say[num];
  };
  
  const newSub = () => {
    const howmany = say.length;
    const bRand = Math.floor(Math.random() * howmany);
    const sayWhat = say[bRand];
    document.getElementById("subtitle").innerHTML = sayWhat;
  };
  
  newSub();
  
  const changeSplash = (num) => {
    const subtitle = say[num];
    document.getElementById("subtitle").innerHTML = subtitle;
    const ret = `Set current splash to splash ${num}, ${subtitle}`;
    return ret;
  };