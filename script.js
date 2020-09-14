// var ProgressBar = require('progressbar.js');
$(document).ready(function(){
    //Progress bar
    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA, { 
        color: '#353D41',
        strokeWidth: 7,
        duration: 1400,
        from: {color:'#444'},
        to: {color:'#daa520'},

        step: function(state,circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value()*17);
            
            circle.setText(value);
      
        }
    });
    
    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB, { 
        color: '#353D41',
        strokeWidth: 7,
        duration: 1600,
        from: {color:'#444'},
        to: {color:'#daa520'},

        step: function(state,circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value()*23);
            
            circle.setText(value);
      
        }
    });
    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC, { 
        color: '#353D41',
        strokeWidth: 7,
        duration: 2000,
        from: {color:'#444'},
        to: {color:'#daa520'},

        step: function(state,circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value()*5);
            
            circle.setText(value);
      
        }
    });

    circleA.animate(1.0);
    circleB.animate(1.0);
    circleC.animate(1.0);

});

