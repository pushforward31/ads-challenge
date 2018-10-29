
//Selects xml file
    var fileChooser = document.getElementById('fileChooser');

    //Functionality for Table

    //Parses xml file
    function parseTextAsXml1(text) {
      var parser = new DOMParser(),
        xmlDom = parser.parseFromString(text, "text/xml");

      //Extract items from xmlDom and assign to appropriate text input fields

      var x, i, xmlDoc, table;
      // xmlDoc = text.responseXML;

      //Places items in Table
      console.log("xmlDoc " + xmlDom);
      table =
        "<tr><th>Company Name</th><th>Contact Name</th><th>Title</th><th>Email</th><th>Phone</th><th>City</th></tr>";
      x = xmlDom.getElementsByTagName("Contact")
      for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
          x[i].getElementsByTagName("CompanyName")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("ContactName")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("ContactTitle")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("Phone")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("City")[0].childNodes[0].nodeValue +
          "</td></tr>";
      }
      document.getElementById("tables").innerHTML = table;


    }

    function waitForTextReadComplete1(reader) {
      reader.onloadend = function (event) {
        var text = event.target.result;

        parseTextAsXml1(text);
        // console.log(text);
      }

    }
    //Handles the file that is selected
    function handleFileSelection1() {
      $("#table").click(function () {
        var file = fileChooser.files[0],
          reader = new FileReader();

        //Delivers validated content
        waitForTextReadComplete1(reader);
        reader.readAsText(file);
        console.log(reader + file);
        // $("#card").hide();
      });
    }

    fileChooser.addEventListener('change', handleFileSelection1, false);




    //------------------------------------------------------------------------------------------------------------------
    //Functionality for Cards

    //Parses out the xml
    function parseTextAsXml(text) {
      var parser = new DOMParser(),
        xmlDom = parser.parseFromString(text, "text/xml");

      //Extracts items from xmlDom and assign to appropriate text input fields
      var x, i, xmlDoc, card;
      // xmlDoc = text.responseXML;
      console.log("xmlDoc " + xmlDom);
      card = "<div></div>";

      //Sets up the data for the cards
      x = xmlDom.getElementsByTagName("Contact")
      for (i = 0; i < x.length; i++) {
        card += "<div class = 'group'>" +

          x[i].getElementsByTagName("ContactTitle")[0].childNodes[0].nodeValue + "\n" +
          x[i].getElementsByTagName("ContactName")[0].childNodes[0].nodeValue + "\n" +
          "Company: " + x[i].getElementsByTagName("CompanyName")[0].childNodes[0].nodeValue + "\n " +
          x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue + '\n' +
          "Phone: " + x[i].getElementsByTagName("Phone")[0].childNodes[0].nodeValue + "\n" +
          x[i].getElementsByTagName("City")[0].childNodes[0].nodeValue +
          "</div>";
      }
      document.getElementById("card").innerHTML = card;


    }

    function waitForTextReadComplete(reader) {
      reader.onloadend = function (event) {
        var text = event.target.result;

        parseTextAsXml(text);
        // console.log(text);
      }

    }
    //Handles the file that is selected
    function handleFileSelection() {
      $("#cards").click(function () {
        var file = fileChooser.files[0],
          reader = new FileReader();

        //Delivers validated content
        waitForTextReadComplete(reader);
        reader.readAsText(file);
        console.log(reader + file);
        // $("#tables").hide();
      });
    }


    fileChooser.addEventListener('change', handleFileSelection, false);


    // //------------------------------------------------------------------------------------------------------------------
    // //Functionality for angular

    // //Trying to incorporate Angular
    // // function parseTextAsXml(text) {
    // //     var parser = new DOMParser(),
    // //       xmlDom = parser.parseFromString(text, "text/xml");



    // //       var x, i, xmlDoc, table;
    // //       // xmlDoc = text.responseXML;
    // //       console.log("xmlDoc " + xmlDom);

    // // var app = angular.module('myApp', []);
    // // // app.controller('myCtrl', function($scope) {
    // // //     $scope.contact = xmlDom.getElementsByTagName("Contact");
    // // //});

    // // // var todoApp = angular.module('todosApp',[]);
    // // app.controller('myCtrl', function($scope, xmlDom){

    // //           $scope.todos = [];
    // //           loadTodos();

    // //           function loadTodos(){
    // //             var x2js = new X2JS();
    // //             xmlDom.getTodos().success(function(data){
    // //                 courses  = x2js.xml_str2json(data);
    // //                 console.log(courses.Contact.City);
    // //                 $scope.todos =courses.Contact.City;
    // //             });
    // //             }
    // //         });

    // // app.directive('prettyprint', function() {
    // //   return {
    // //     restrict: 'C',
    // //     link: function postLink(scope, element, attrs) {
    // //         var xmlDoc = scope.dom;
    // //         var table="<tr><th>Company Name</th><th>Contact Name</th><th>Title</th><th>Email</th><th>Phone</th><th>City</th></tr>";
    // //         var x = xmlDoc.getElementsByTagName("Contact");

    // //         //here you will get form the xml node all the data that will build each row and append it to the table
    // //         for (var i = 0; i <x.length; i++) {
    // //           table += "<tr><td>" +
    // //           x[i].getElementsByTagName("CompanyName")[0].childNodes[0].nodeValue +
    // //           "</td><td>" +
    // //           x[i].getElementsByTagName("ContactName")[0].childNodes[0].nodeValue +
    // //           "</td><td>" +
    // //           x[i].getElementsByTagName("ContactTitle")[0].childNodes[0].nodeValue +
    // //           "</td><td>" +
    // //           x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue +
    // //           "</td><td>" +
    // //           x[i].getElementsByTagName("Phone")[0].childNodes[0].nodeValue +
    // //           "</td><td>" + 
    // //           x[i].getElementsByTagName("City")[0].childNodes[0].nodeValue +
    // //           "</td></tr>";
    // //         }

    // //         //return the table 
    // //         element.text(table);
    // //     }
    // //   };
    // // });

    // //   }

    // //   function waitForTextReadComplete(reader) {
    // //     reader.onloadend = function (event) {
    // //       var text = event.target.result;

    // //       parseTextAsXml(text);
    // //       // console.log(text);
    // //     }
    // //   }

    // //   function handleFileSelection() {
    // //     var file = fileChooser.files[0],
    // //       reader = new FileReader();

    // //     waitForTextReadComplete(reader);
    // //     reader.readAsText(file);
    // //     console.log(reader + file);
    // //   }

    // //   fileChooser.addEventListener('change', handleFileSelection, false);