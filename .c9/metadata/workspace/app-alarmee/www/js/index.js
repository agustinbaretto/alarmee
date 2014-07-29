{"filter":false,"title":"index.js","tooltip":"/app-alarmee/www/js/index.js","undoManager":{"mark":89,"position":89,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":3}},"text":" */"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":17,"column":0}},"nl":"\n","lines":["/*"," * Licensed to the Apache Software Foundation (ASF) under one"," * or more contributor license agreements.  See the NOTICE file"," * distributed with this work for additional information"," * regarding copyright ownership.  The ASF licenses this file"," * to you under the Apache License, Version 2.0 (the"," * \"License\"); you may not use this file except in compliance"," * with the License.  You may obtain a copy of the License at"," *"," * http://www.apache.org/licenses/LICENSE-2.0"," *"," * Unless required by applicable law or agreed to in writing,"," * software distributed under the License is distributed on an"," * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY"," * KIND, either express or implied.  See the License for the"," * specific language governing permissions and limitations"," * under the License."]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":8},"end":{"row":17,"column":41}},"text":"app.receivedEvent('deviceready');"},{"action":"insertText","range":{"start":{"row":17,"column":8},"end":{"row":17,"column":9}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":9},"end":{"row":17,"column":10}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":10},"end":{"row":17,"column":11}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":11},"end":{"row":17,"column":12}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":12},"end":{"row":17,"column":13}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":13},"end":{"row":17,"column":15}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":16}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":15},"end":{"row":17,"column":16}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":16},"end":{"row":17,"column":17}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":17},"end":{"row":17,"column":18}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":18},"end":{"row":17,"column":19}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":19},"end":{"row":17,"column":20}},"text":"#"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":20},"end":{"row":17,"column":21}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":21},"end":{"row":17,"column":22}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":21},"end":{"row":17,"column":22}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":21},"end":{"row":17,"column":22}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":19},"end":{"row":17,"column":20}},"text":"#"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":19},"end":{"row":17,"column":20}},"text":"@"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":19},"end":{"row":17,"column":20}},"text":"@"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":19},"end":{"row":17,"column":20}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":5},"end":{"row":30,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":30,"column":0},"end":{"row":30,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":30,"column":4},"end":{"row":31,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":4},"end":{"row":31,"column":40}},"text":"var onSuccess = function(position) {"},{"action":"insertText","range":{"start":{"row":31,"column":40},"end":{"row":32,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":32,"column":0},"end":{"row":49,"column":0}},"lines":["    alert('Latitude: '          + position.coords.latitude          + '\\n' +","          'Longitude: '         + position.coords.longitude         + '\\n' +","          'Altitude: '          + position.coords.altitude          + '\\n' +","          'Accuracy: '          + position.coords.accuracy          + '\\n' +","          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\\n' +","          'Heading: '           + position.coords.heading           + '\\n' +","          'Speed: '             + position.coords.speed             + '\\n' +","          'Timestamp: '         + position.timestamp                + '\\n');","};","","// onError Callback receives a PositionError object","//","function onError(error) {","    alert('code: '    + error.code    + '\\n' +","          'message: ' + error.message + '\\n');","}",""]},{"action":"insertText","range":{"start":{"row":49,"column":0},"end":{"row":49,"column":61}},"text":"navigator.geolocation.getCurrentPosition(onSuccess, onError);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":0},"end":{"row":29,"column":5}},"text":"    }"},{"action":"removeLines","range":{"start":{"row":20,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["    receivedEvent: function(id) {","        var parentElement = document.getElementById(id);","        var listeningElement = parentElement.querySelector('.listening');","        var receivedElement = parentElement.querySelector('.received');","","        listeningElement.setAttribute('style', 'display:none;');","        receivedElement.setAttribute('style', 'display:block;');","","        console.log('Received Event: ' + id);"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":4}},"text":"    "},{"action":"removeLines","range":{"start":{"row":20,"column":0},"end":{"row":21,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":20,"column":0},"end":{"row":21,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":4},"end":{"row":20,"column":7}},"text":"var"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":4},"end":{"row":20,"column":5}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":13},"end":{"row":20,"column":14}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":14},"end":{"row":20,"column":15}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":14},"end":{"row":20,"column":15}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":0},"end":{"row":29,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":5},"end":{"row":29,"column":6}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":8}},"text":"function"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":1}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":11},"end":{"row":33,"column":12}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":12},"end":{"row":33,"column":13}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":13},"end":{"row":33,"column":21}},"text":"function"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":32,"column":0},"end":{"row":32,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":36,"column":0},"end":{"row":36,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":5},"end":{"row":29,"column":6}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":6},"end":{"row":30,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":6},"end":{"row":20,"column":7}},"text":"G"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":7},"end":{"row":20,"column":8}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":8},"end":{"row":20,"column":9}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":6},"end":{"row":32,"column":7}},"text":"G"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":7},"end":{"row":32,"column":8}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":8},"end":{"row":32,"column":9}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":61}},"text":"navigator.geolocation.getCurrentPosition(onSuccess, onError);"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":36,"column":0},"end":{"row":37,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":35,"column":5},"end":{"row":36,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":31},"end":{"row":17,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":8},"end":{"row":17,"column":69}},"text":"navigator.geolocation.getCurrentPosition(onSuccess, onError);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":49},"end":{"row":17,"column":58}},"text":"onSuccess"},{"action":"insertText","range":{"start":{"row":17,"column":49},"end":{"row":17,"column":50}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":50},"end":{"row":17,"column":51}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":51},"end":{"row":17,"column":52}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":52},"end":{"row":17,"column":53}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":53},"end":{"row":17,"column":54}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":54},"end":{"row":17,"column":55}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":55},"end":{"row":17,"column":56}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":54},"end":{"row":17,"column":56}},"text":"on"},{"action":"insertText","range":{"start":{"row":17,"column":54},"end":{"row":17,"column":69}},"text":"onDeviceReady()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":67},"end":{"row":17,"column":69}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":66},"end":{"row":17,"column":67}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":65},"end":{"row":17,"column":66}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":64},"end":{"row":17,"column":65}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":63},"end":{"row":17,"column":64}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":62},"end":{"row":17,"column":63}},"text":"R"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":61},"end":{"row":17,"column":62}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":60},"end":{"row":17,"column":61}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":59},"end":{"row":17,"column":60}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":58},"end":{"row":17,"column":59}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":57},"end":{"row":17,"column":58}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":56},"end":{"row":17,"column":57}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":54},"end":{"row":17,"column":56}},"text":"on"},{"action":"insertText","range":{"start":{"row":17,"column":54},"end":{"row":17,"column":68}},"text":"onGeoSuccess()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":70},"end":{"row":17,"column":77}},"text":"onError"},{"action":"insertText","range":{"start":{"row":17,"column":70},"end":{"row":17,"column":71}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":71},"end":{"row":17,"column":72}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":72},"end":{"row":17,"column":73}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":73},"end":{"row":17,"column":74}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":74},"end":{"row":17,"column":75}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":75},"end":{"row":17,"column":76}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":75},"end":{"row":17,"column":76}},"text":"o"},{"action":"insertText","range":{"start":{"row":17,"column":75},"end":{"row":17,"column":87}},"text":"onGeoError()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":86},"end":{"row":17,"column":87}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":85},"end":{"row":17,"column":87}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":67},"end":{"row":17,"column":68}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":66},"end":{"row":17,"column":67}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":83},"end":{"row":17,"column":84}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":0},"end":{"row":29,"column":68}},"text":"          'Timestamp: '         + position.timestamp                "},{"action":"removeLines","range":{"start":{"row":23,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["          'Longitude: '         + position.coords.longitude         + '\\n' +","          'Altitude: '          + position.coords.altitude          + '\\n' +","          'Accuracy: '          + position.coords.accuracy          + '\\n' +","          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\\n' +","          'Heading: '           + position.coords.heading           + '\\n' +","          'Speed: '             + position.coords.speed             + '\\n' +"]},{"action":"removeText","range":{"start":{"row":22,"column":68},"end":{"row":22,"column":76}},"text":"+ '\\n' +"},{"action":"removeText","range":{"start":{"row":22,"column":68},"end":{"row":23,"column":0}},"text":"\n"}]}]]},"ace":{"folds":[],"scrolltop":60,"scrollleft":0,"selection":{"start":{"row":18,"column":22},"end":{"row":18,"column":22},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1406672831902,"hash":"c404e66eac3d8e5c6b453a6e296c6252edc237c4"}