/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
    var indexNum = 21 ; 
                    
        
        document.getElementById("playBtn").addEventListener("click",myFunction);    
        
    
    
    
    function myFunction() {
        
        
        var audio_files = [
    "/android_asset/www/audio/PikaMp3.mp3",
    "/android_asset/www/audio/BulbasaurMp3.mp3",
    "/android_asset/www/audio/SquirtleMp3.mp3" ]
        
        
     indexNum = Math.floor(Math.random() * audio_files.length);
    var my_media = new Media(audio_files[indexNum]);
    my_media.play({ numberOfLoops: 1 });
        

    //document.getElementById("demo").innerHTML = indexNum ; 
       

  
   }
        
               document.getElementById("bulbaBtn").addEventListener("click", myFunction1);

function myFunction1() {
 var my_win = new Media("/android_asset/www/audio/win.mp3");
             var my_lost = new Media("/android_asset/www/audio/fail.mp3");

    if ( indexNum == 1 ) {
    my_win.play({ numberOfLoops: 1 });
    alert("Great ! you found the right POKEMON ! Play Again ");

   } 
    else 
   {
            my_lost.play({ numberOfLoops: 1 });

   }
}
  
                     document.getElementById("pikaBtn").addEventListener("click", myFunction2);

function myFunction2() {
 var my_win = new Media("/android_asset/www/audio/win.mp3");
             var my_lost = new Media("/android_asset/www/audio/fail.mp3");

    if ( indexNum == 0 ) {
    my_win.play({ numberOfLoops: 1 });
                    alert("Great ! you found the right POKEMON ! Play Again ");

   } 
    else 
   {
            my_lost.play({ numberOfLoops: 1 });

   }
}
        
                             document.getElementById("squareBtn").addEventListener("click", myFunction3);

function myFunction3() {
 var my_win = new Media("/android_asset/www/audio/win.mp3");
             var my_lost = new Media("/android_asset/www/audio/fail.mp3");

    if ( indexNum == 2 ) {
    my_win.play({ numberOfLoops: 1 });
            alert("Great ! you found the right POKEMON ! Play Again ");

   } 
    else 
   {
            my_lost.play({ numberOfLoops: 1 });

   }
}
        
        
        
        
        
        
        
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {   
        
           document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        app.receivedEvent('deviceready');
    },
        
     
        
        
        
        
        
        
        
        
        
        
        
        
        
      
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


app.initialize();