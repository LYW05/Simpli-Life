//Clock-showing date plus time
setInterval(showTime, 1000);
function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var timeElapsed = Date.now();
    var today = new Date(timeElapsed);
    am_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    var currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
    var currentDate = today.toDateString();
    document.getElementById("clock")
            .innerHTML = currentDate + " " + currentTime;
}
showTime();

// A function for toggling between dark and light theme
function toggleTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  localStorage.setItem(
      "colorTheme",
      document.body.classList.contains("dark") ? "dark" : "light"
  );
}
// Initialize the theme
if (localStorage.getItem("colorTheme") === "dark") {
  toggleTheme();
} else if (
  localStorage.getItem("colorTheme") !== "light" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  toggleTheme();
};

//To Do List Functions
function addTask(){
  var taskArea=document.getElementById('taskArea');
  var input=document.getElementById('input');

  if(input.value!='')
  {
      var title=document.getElementById('title');
      if(title){
          title.remove();
      }
      var divs=document.createElement('div');
      divs.setAttribute('id','item');

      //checkbox
      var btnd=document.createElement('button');
      btnd.setAttribute('id','done');
      divs.appendChild(btnd);

      var parent=document.createElement('div');
      parent.setAttribute('id','parent');
      parent.setAttribute('onclick','done(this)');
      var todo=document.createElement('p');
      todo.setAttribute('id','todoList');

      var content=document.createTextNode(input.value);
      todo.appendChild(content);
      parent.appendChild(todo);
      divs.appendChild(parent);

      var btn=document.createElement('button');
      btn.setAttribute('id','del');
      var cancel=document.createElement('i');
      cancel.classList.add('fa','fa-minus-circle');
      btn.appendChild(cancel);
      btn.setAttribute('onclick','remove(this)');
      divs.appendChild(btn);

      //adding to taskArea
      taskArea.appendChild(divs);
      input.value='';
  }
  else{
      alert("Please enter a task you want to complete!");
  }

}

//remove function
function remove(event){
  event.parentNode.parentNode.removeChild(event.parentNode);

}

//refresh function//clears the whole list
function refresh(){
  location.reload();
}

//done
function done(e){
  if(e.classList!='line')
  {
      e.classList.add('line');
      e.parentNode.style.background='lightgrey';
      var child=e.previousSibling;
      var node=document.createElement('i');
      node.classList.add('fa','fa-check','check');
      child.appendChild(node);
  }
  else{
      e.classList.remove('line');
      var rem=e.previousSibling;
      rem.removeChild(rem.firstChild);
      e.parentNode.style.background='rgba(255,255,255,0.85)';
  }
}